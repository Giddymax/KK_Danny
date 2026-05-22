create extension if not exists "pgcrypto";

create type public.app_role as enum ('admin', 'staff');
create type public.sale_status as enum ('draft', 'paid', 'part_paid', 'overpaid', 'cancelled');
create type public.quote_status as enum ('new', 'reviewed', 'quoted', 'completed', 'cancelled');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role public.app_role not null default 'staff',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.suppliers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  contact_person text,
  address text,
  notes text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sku text unique,
  category_id uuid references public.categories(id),
  supplier_id uuid references public.suppliers(id),
  image_path text,
  unit text not null default 'item',
  price numeric(12,2) not null default 0,
  stock numeric(12,2) not null default 0,
  threshold numeric(12,2) not null default 0,
  is_service boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.customers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  address text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.sales (
  id uuid primary key default gen_random_uuid(),
  sale_ref text not null unique,
  customer_id uuid references public.customers(id),
  customer_name text not null default 'Walk-in',
  customer_phone text,
  subtotal numeric(12,2) not null default 0,
  discount numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  amount_paid numeric(12,2) not null default 0,
  payment_method text not null default 'Cash',
  status public.sale_status not null default 'paid',
  notes text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.sale_items (
  id uuid primary key default gen_random_uuid(),
  sale_id uuid not null references public.sales(id) on delete cascade,
  product_id uuid references public.products(id),
  item_name text not null,
  quantity numeric(12,2) not null default 1,
  unit_price numeric(12,2) not null default 0,
  line_total numeric(12,2) not null default 0,
  created_at timestamptz not null default now()
);

create table public.purchases (
  id uuid primary key default gen_random_uuid(),
  supplier_id uuid references public.suppliers(id),
  product_id uuid references public.products(id),
  quantity numeric(12,2) not null default 0,
  unit_cost numeric(12,2) not null default 0,
  total_cost numeric(12,2) not null default 0,
  purchase_date date not null default current_date,
  notes text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.expenses (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  amount numeric(12,2) not null default 0,
  expense_date date not null default current_date,
  payment_method text not null default 'Cash',
  notes text,
  receipt_path text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  phone text not null,
  requested_items text not null,
  quantity text,
  deadline date,
  details text,
  status public.quote_status not null default 'new',
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.payment_methods (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  active boolean not null default true,
  sort_order integer not null default 0
);

create table public.business_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by uuid references public.profiles(id)
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id),
  action text not null,
  table_name text,
  record_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce((new.raw_app_meta_data->>'role')::public.app_role, 'staff')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid()
      and role = 'admin'
      and is_active = true
  );
$$;

create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid()
      and role in ('admin', 'staff')
      and is_active = true
  );
$$;

do $$
declare
  tbl text;
begin
  foreach tbl in array array[
    'profiles','categories','suppliers','products','customers','sales','sale_items',
    'purchases','expenses','quote_requests','payment_methods','business_settings','audit_logs'
  ]
  loop
    execute format('alter table public.%I enable row level security', tbl);
  end loop;
end $$;

create policy "profiles read own or admin" on public.profiles
for select using (id = auth.uid() or public.is_admin());
create policy "admins manage profiles" on public.profiles
for all using (public.is_admin()) with check (public.is_admin());

create policy "staff read categories" on public.categories
for select using (public.is_staff());
create policy "admins manage categories" on public.categories
for all using (public.is_admin()) with check (public.is_admin());

create policy "staff read suppliers" on public.suppliers
for select using (public.is_staff());
create policy "admins manage suppliers" on public.suppliers
for all using (public.is_admin()) with check (public.is_admin());

create policy "staff manage products" on public.products
for all using (public.is_staff()) with check (public.is_staff());

create policy "staff manage customers" on public.customers
for all using (public.is_staff()) with check (public.is_staff());

create policy "staff manage sales" on public.sales
for all using (public.is_staff()) with check (public.is_staff());

create policy "staff manage sale items" on public.sale_items
for all using (public.is_staff()) with check (public.is_staff());

create policy "staff manage purchases" on public.purchases
for all using (public.is_staff()) with check (public.is_staff());

create policy "staff manage expenses" on public.expenses
for all using (public.is_staff()) with check (public.is_staff());

create policy "staff manage quotes" on public.quote_requests
for all using (public.is_staff()) with check (public.is_staff());

create policy "staff read payment methods" on public.payment_methods
for select using (public.is_staff());
create policy "admins manage payment methods" on public.payment_methods
for all using (public.is_admin()) with check (public.is_admin());

create policy "staff read settings" on public.business_settings
for select using (public.is_staff());
create policy "admins manage settings" on public.business_settings
for all using (public.is_admin()) with check (public.is_admin());

create policy "admins read audit logs" on public.audit_logs
for select using (public.is_admin());
create policy "staff insert audit logs" on public.audit_logs
for insert with check (public.is_staff());

create trigger profiles_updated_at before update on public.profiles
for each row execute function public.set_updated_at();
create trigger categories_updated_at before update on public.categories
for each row execute function public.set_updated_at();
create trigger suppliers_updated_at before update on public.suppliers
for each row execute function public.set_updated_at();
create trigger products_updated_at before update on public.products
for each row execute function public.set_updated_at();
create trigger customers_updated_at before update on public.customers
for each row execute function public.set_updated_at();
create trigger sales_updated_at before update on public.sales
for each row execute function public.set_updated_at();
create trigger purchases_updated_at before update on public.purchases
for each row execute function public.set_updated_at();
create trigger expenses_updated_at before update on public.expenses
for each row execute function public.set_updated_at();
create trigger quote_requests_updated_at before update on public.quote_requests
for each row execute function public.set_updated_at();

insert into public.categories (name, sort_order) values
  ('Cement', 10),
  ('Wood', 20),
  ('Paint', 30),
  ('Hardware', 40),
  ('Steel rods', 50),
  ('Roofing', 60),
  ('Equipment services', 70)
on conflict (name) do nothing;

insert into public.payment_methods (name, sort_order) values
  ('Cash', 10),
  ('Mobile Money', 20),
  ('Bank Transfer', 30),
  ('Card', 40)
on conflict (name) do nothing;

insert into public.business_settings (key, value) values
  ('profile', '{"name":"K.K. Danny Enterprise","tagline":"Building Materials & Services","location":"Adeiso, Ghana","address":"Opp. Radiance Gas filling station, Near Point 3 Hotel.","phones":["02444754803","0249986118","0240268125"],"logo":"/logo.jpeg"}'),
  ('receipt', '{"footer":"Thank you for your patronage!","paper_width":"80mm"}'),
  ('theme', '{"charcoal":"#1e211c","green":"#24523c","gold":"#c38b2e","concrete":"#f3f0e8"}')
on conflict (key) do update set value = excluded.value, updated_at = now();

insert into storage.buckets (id, name, public) values
  ('product-images', 'product-images', false),
  ('supplier-documents', 'supplier-documents', false),
  ('expense-receipts', 'expense-receipts', false),
  ('quote-files', 'quote-files', false),
  ('uploads', 'uploads', false)
on conflict (id) do nothing;

create policy "staff upload business files" on storage.objects
for insert with check (
  bucket_id in ('product-images','supplier-documents','expense-receipts','quote-files','uploads')
  and public.is_staff()
);

create policy "staff read business files" on storage.objects
for select using (
  bucket_id in ('product-images','supplier-documents','expense-receipts','quote-files','uploads')
  and public.is_staff()
);

create policy "staff update business files" on storage.objects
for update using (
  bucket_id in ('product-images','supplier-documents','expense-receipts','quote-files','uploads')
  and public.is_staff()
) with check (
  bucket_id in ('product-images','supplier-documents','expense-receipts','quote-files','uploads')
  and public.is_staff()
);
