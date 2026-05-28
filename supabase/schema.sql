create extension if not exists "pgcrypto";

do $$
begin
  create type public.app_role as enum ('admin', 'staff');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type public.sale_status as enum ('draft', 'paid', 'part_paid', 'overpaid', 'cancelled');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type public.quote_status as enum ('new', 'reviewed', 'quoted', 'completed', 'cancelled');
exception
  when duplicate_object then null;
end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role public.app_role not null default 'staff',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.suppliers (
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

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sku text unique,
  category_id uuid references public.categories(id),
  supplier_id uuid references public.suppliers(id),
  image_path text,
  unit text not null default 'item',
  price numeric(12,2) not null default 0,
  cost_price numeric(12,2) not null default 0 check (cost_price >= 0),
  stock numeric(12,2) not null default 0,
  threshold numeric(12,2) not null default 0,
  is_service boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.inventory_items (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  category text not null,
  unit text not null default 'item',
  price numeric(12,2) not null default 0 check (price >= 0),
  cost_price numeric(12,2) not null default 0 check (cost_price >= 0),
  stock numeric(12,2) not null default 0 check (stock >= 0),
  threshold numeric(12,2) not null default 0 check (threshold >= 0),
  supplier text,
  is_service boolean not null default false,
  active boolean not null default true,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  address text,
  balance numeric(12,2) not null default 0 check (balance >= 0),
  visits integer not null default 0 check (visits >= 0),
  notes text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sales (
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
  active boolean not null default true,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sale_items (
  id uuid primary key default gen_random_uuid(),
  sale_id uuid not null references public.sales(id) on delete cascade,
  product_id uuid references public.products(id),
  item_name text not null,
  quantity numeric(12,2) not null default 1,
  unit_price numeric(12,2) not null default 0,
  unit_cost numeric(12,2) not null default 0 check (unit_cost >= 0),
  line_total numeric(12,2) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  supplier_id uuid references public.suppliers(id),
  product_id uuid references public.products(id),
  item_name text not null default '',
  supplier_name text,
  quantity numeric(12,2) not null default 0,
  unit_cost numeric(12,2) not null default 0,
  total_cost numeric(12,2) not null default 0,
  purchase_date date not null default current_date,
  notes text,
  active boolean not null default true,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.expenses (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  amount numeric(12,2) not null default 0,
  expense_date date not null default current_date,
  payment_method text not null default 'Cash',
  notes text,
  receipt_path text,
  active boolean not null default true,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  phone text not null,
  requested_items text not null,
  quantity text,
  deadline date,
  details text,
  status public.quote_status not null default 'new',
  active boolean not null default true,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.payment_methods (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  active boolean not null default true,
  sort_order integer not null default 0
);

create table if not exists public.business_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by uuid references public.profiles(id)
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id),
  action text not null,
  table_name text,
  record_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.customers
  add column if not exists balance numeric(12,2) not null default 0 check (balance >= 0),
  add column if not exists visits integer not null default 0 check (visits >= 0),
  add column if not exists active boolean not null default true;

alter table public.sales
  add column if not exists active boolean not null default true;

alter table public.sale_items
  add column if not exists unit_cost numeric(12,2) not null default 0 check (unit_cost >= 0);

alter table public.purchases
  add column if not exists item_name text not null default '',
  add column if not exists supplier_name text,
  add column if not exists active boolean not null default true;

alter table public.expenses
  add column if not exists active boolean not null default true;

alter table public.quote_requests
  add column if not exists active boolean not null default true;

alter table public.inventory_items
  add column if not exists cost_price numeric(12,2) not null default 0 check (cost_price >= 0),
  add column if not exists created_by uuid references public.profiles(id),
  add column if not exists active boolean not null default true;

alter table public.products
  add column if not exists cost_price numeric(12,2) not null default 0 check (cost_price >= 0);

update public.inventory_items
set cost_price = price
where cost_price = 0 and price > 0;

update public.products
set cost_price = price
where cost_price = 0 and price > 0;

update public.sale_items
set unit_cost = unit_price
where unit_cost = 0 and unit_price > 0;

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

drop trigger if exists on_auth_user_created on auth.users;
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
    'inventory_items','purchases','expenses','quote_requests','payment_methods','business_settings','audit_logs'
  ]
  loop
    execute format('alter table public.%I enable row level security', tbl);
  end loop;
end $$;

grant select, insert, update, delete on
  public.profiles,
  public.categories,
  public.suppliers,
  public.products,
  public.inventory_items,
  public.customers,
  public.sales,
  public.sale_items,
  public.purchases,
  public.expenses,
  public.quote_requests,
  public.payment_methods,
  public.business_settings
to authenticated;

drop policy if exists "profiles read own or admin" on public.profiles;
create policy "profiles read own or admin" on public.profiles
for select using (id = auth.uid() or public.is_admin());
drop policy if exists "admins manage profiles" on public.profiles;
create policy "admins manage profiles" on public.profiles
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff read categories" on public.categories;
create policy "staff read categories" on public.categories
for select using (public.is_staff());
drop policy if exists "admins manage categories" on public.categories;
create policy "admins manage categories" on public.categories
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff read suppliers" on public.suppliers;
create policy "staff read suppliers" on public.suppliers
for select using (public.is_staff());
drop policy if exists "admins manage suppliers" on public.suppliers;
create policy "admins manage suppliers" on public.suppliers
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff manage products" on public.products;
drop policy if exists "staff read products" on public.products;
create policy "staff read products" on public.products
for select using (public.is_staff());
drop policy if exists "admins manage products" on public.products;
create policy "admins manage products" on public.products
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff manage inventory items" on public.inventory_items;
drop policy if exists "staff read inventory items" on public.inventory_items;
drop policy if exists "staff update inventory items" on public.inventory_items;
create policy "staff read inventory items" on public.inventory_items
for select using (public.is_staff());
create policy "staff update inventory items" on public.inventory_items
for update using (public.is_staff()) with check (public.is_staff());
drop policy if exists "admins manage inventory items" on public.inventory_items;
create policy "admins manage inventory items" on public.inventory_items
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff manage customers" on public.customers;
drop policy if exists "staff read customers" on public.customers;
create policy "staff read customers" on public.customers
for select using (public.is_staff());
drop policy if exists "admins manage customers" on public.customers;
create policy "admins manage customers" on public.customers
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff manage sales" on public.sales;
drop policy if exists "staff read sales" on public.sales;
drop policy if exists "staff insert sales" on public.sales;
create policy "staff read sales" on public.sales
for select using (public.is_staff());
create policy "staff insert sales" on public.sales
for insert with check (public.is_staff());
drop policy if exists "admins manage sales" on public.sales;
create policy "admins manage sales" on public.sales
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff manage sale items" on public.sale_items;
drop policy if exists "staff read sale items" on public.sale_items;
drop policy if exists "staff insert sale items" on public.sale_items;
create policy "staff read sale items" on public.sale_items
for select using (public.is_staff());
create policy "staff insert sale items" on public.sale_items
for insert with check (public.is_staff());
drop policy if exists "admins manage sale items" on public.sale_items;
create policy "admins manage sale items" on public.sale_items
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff manage purchases" on public.purchases;
drop policy if exists "staff read purchases" on public.purchases;
create policy "staff read purchases" on public.purchases
for select using (public.is_staff());
drop policy if exists "admins manage purchases" on public.purchases;
create policy "admins manage purchases" on public.purchases
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff manage expenses" on public.expenses;
drop policy if exists "staff read expenses" on public.expenses;
create policy "staff read expenses" on public.expenses
for select using (public.is_staff());
drop policy if exists "admins manage expenses" on public.expenses;
create policy "admins manage expenses" on public.expenses
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff manage quotes" on public.quote_requests;
drop policy if exists "staff read quotes" on public.quote_requests;
drop policy if exists "staff insert quotes" on public.quote_requests;
create policy "staff read quotes" on public.quote_requests
for select using (public.is_staff());
create policy "staff insert quotes" on public.quote_requests
for insert with check (public.is_staff());
drop policy if exists "admins manage quotes" on public.quote_requests;
create policy "admins manage quotes" on public.quote_requests
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff read payment methods" on public.payment_methods;
create policy "staff read payment methods" on public.payment_methods
for select using (public.is_staff());
drop policy if exists "admins manage payment methods" on public.payment_methods;
create policy "admins manage payment methods" on public.payment_methods
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "staff read settings" on public.business_settings;
drop policy if exists "admins manage settings" on public.business_settings;
create policy "admins manage settings" on public.business_settings
for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admins read audit logs" on public.audit_logs;
create policy "admins read audit logs" on public.audit_logs
for select using (public.is_admin());
drop policy if exists "staff insert audit logs" on public.audit_logs;
create policy "staff insert audit logs" on public.audit_logs
for insert with check (public.is_staff());

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at before update on public.profiles
for each row execute function public.set_updated_at();
drop trigger if exists categories_updated_at on public.categories;
create trigger categories_updated_at before update on public.categories
for each row execute function public.set_updated_at();
drop trigger if exists suppliers_updated_at on public.suppliers;
create trigger suppliers_updated_at before update on public.suppliers
for each row execute function public.set_updated_at();
drop trigger if exists products_updated_at on public.products;
create trigger products_updated_at before update on public.products
for each row execute function public.set_updated_at();
drop trigger if exists inventory_items_updated_at on public.inventory_items;
create trigger inventory_items_updated_at before update on public.inventory_items
for each row execute function public.set_updated_at();
drop trigger if exists customers_updated_at on public.customers;
create trigger customers_updated_at before update on public.customers
for each row execute function public.set_updated_at();
drop trigger if exists sales_updated_at on public.sales;
create trigger sales_updated_at before update on public.sales
for each row execute function public.set_updated_at();
drop trigger if exists purchases_updated_at on public.purchases;
create trigger purchases_updated_at before update on public.purchases
for each row execute function public.set_updated_at();
drop trigger if exists expenses_updated_at on public.expenses;
create trigger expenses_updated_at before update on public.expenses
for each row execute function public.set_updated_at();
drop trigger if exists quote_requests_updated_at on public.quote_requests;
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

insert into public.inventory_items (name, category, unit, price, cost_price, stock, threshold, supplier, is_service) values
  ('Ghacem Cement', 'Cement', 'bag', 98, 82, 146, 35, 'Adeiso Depot', false),
  ('Treated Wood 2x4', 'Wood', 'piece', 42, 31, 68, 20, 'Central Timber', false),
  ('Reinforcement Rod 12mm', 'Steel rods', 'length', 115, 96, 18, 25, 'Eastern Steel', false),
  ('Savanna Paint', 'Paint', 'bucket', 185, 142, 32, 12, 'Paint House Ghana', false),
  ('4 Inch Nails', 'Hardware', 'box', 58, 43, 54, 16, 'Hardware Market', false),
  ('Concrete Mixer Service', 'Equipment services', 'hour', 220, 0, 0, 0, 'In-house', true)
on conflict (name) do nothing;

insert into public.customers (name, phone, balance, visits)
select * from (values
  ('Point 3 Project', '0244000000', 525, 8),
  ('Asona Builders', '0249111111', 0, 14),
  ('Ama Construction', '0247000000', 0, 3)
) as seed(name, phone, balance, visits)
where not exists (
  select 1 from public.customers where public.customers.phone = seed.phone
);

insert into public.suppliers (name, phone, contact_person, notes)
select * from (values
  ('Adeiso Depot', '0245551000', 'Cement', 'Primary cement supplier'),
  ('Central Timber', '0245552000', 'Wood', 'Timber and wood products'),
  ('Eastern Steel', '0245553000', 'Steel rods', 'Steel rod supplier')
) as seed(name, phone, contact_person, notes)
where not exists (
  select 1 from public.suppliers where public.suppliers.name = seed.name
);

insert into public.purchases (item_name, supplier_name, quantity, unit_cost, total_cost, purchase_date, notes)
select
  item_name,
  supplier_name,
  quantity,
  unit_cost,
  total_cost,
  purchase_date::date,
  notes
from (values
  ('Ghacem Cement', 'Adeiso Depot', 146, 82, 11972, '2026-05-19', 'Initial stock intake'),
  ('Treated Wood 2x4', 'Central Timber', 68, 31, 2108, '2026-05-18', 'Initial stock intake'),
  ('Reinforcement Rod 12mm', 'Eastern Steel', 18, 96, 1728, '2026-05-17', 'Initial stock intake'),
  ('Savanna Paint', 'Paint House Ghana', 32, 142, 4544, '2026-05-16', 'Initial stock intake')
) as seed(item_name, supplier_name, quantity, unit_cost, total_cost, purchase_date, notes)
where not exists (
  select 1 from public.purchases
  where public.purchases.item_name = seed.item_name
    and public.purchases.purchase_date = seed.purchase_date::date
);

insert into public.expenses (category, amount, expense_date, payment_method, notes)
select
  category,
  amount,
  expense_date::date,
  payment_method,
  notes
from (values
  ('Transport', 350, '2026-05-19', 'Cash', 'Admin'),
  ('Loading boys', 120, '2026-05-18', 'Cash', 'Staff'),
  ('Shop utilities', 275, '2026-05-17', 'Mobile Money', 'Admin')
) as seed(category, amount, expense_date, payment_method, notes)
where not exists (
  select 1 from public.expenses
  where public.expenses.category = seed.category
    and public.expenses.expense_date = seed.expense_date::date
);

insert into public.quote_requests (customer_name, phone, requested_items, status)
select customer_name, phone, requested_items, status::public.quote_status
from (values
  ('Ama Construction', '0247000000', '80 bags cement, rods, nails', 'new'),
  ('Kojo Mensah', '0247111111', 'Roofing sheets and delivery', 'quoted'),
  ('Site Foreman', '0247222222', 'Mixer service for 2 days', 'reviewed')
) as seed(customer_name, phone, requested_items, status)
where not exists (
  select 1 from public.quote_requests
  where public.quote_requests.phone = seed.phone
    and public.quote_requests.requested_items = seed.requested_items
);

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

drop policy if exists "staff upload business files" on storage.objects;
create policy "staff upload business files" on storage.objects
for insert with check (
  bucket_id in ('product-images','supplier-documents','expense-receipts','quote-files','uploads')
  and public.is_staff()
);

drop policy if exists "staff read business files" on storage.objects;
create policy "staff read business files" on storage.objects
for select using (
  bucket_id in ('product-images','supplier-documents','expense-receipts','quote-files','uploads')
  and public.is_staff()
);

drop policy if exists "staff update business files" on storage.objects;
create policy "staff update business files" on storage.objects
for update using (
  bucket_id in ('product-images','supplier-documents','expense-receipts','quote-files','uploads')
  and public.is_staff()
) with check (
  bucket_id in ('product-images','supplier-documents','expense-receipts','quote-files','uploads')
  and public.is_staff()
);
