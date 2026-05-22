# K.K. Danny Enterprise Admin And Staff Dashboard Prompt

Build a complete professional sign-in page and protected admin/staff dashboard for **K.K. Danny Enterprise**, a Ghana-based building materials and services business in Adeiso.

Do **not** build a full public landing page, marketing website, blog, gallery, or public service pages. The first screen should be the admin/staff sign-in experience. The root route `/` should redirect to `/admin/login` or render the same sign-in page.

Use Next.js 16 App Router, React 19, TypeScript, Supabase, Supabase Auth, server components, server actions, Tailwind/CSS variables, and responsive UI patterns. Before coding, read the relevant Next.js 16 guide from `node_modules/next/dist/docs/` because this version may include breaking changes.

## Business Details

- Company name: K.K. Danny Enterprise
- Location: Adeiso, Ghana
- Industry: building materials, construction supplies, cement, wood, paint, nails, roofing items, wheelbarrows, concrete mixer services, reinforcement rods, and related services
- Tagline/category line: Building Materials & Services
- Address: Opp. Radiance Gas filling station, Near Point 3 Hotel.
- Phone numbers:
  - 02444754803
  - 0249986118
  - 0240268125
- Primary contact display: 02444754803 / 0249986118 / 0240268125
- Brand feel: practical, trustworthy, construction-focused, stock-and-sales oriented, clear enough for daily staff use

## Logo Requirements

- Use the supplied logo file `logo.jpeg` as the official brand logo.
- Place the logo at `public/logo.jpeg` and use that same file everywhere a logo appears.
- Update every logo instance to use the K.K. Danny Enterprise logo, including:
  - admin/staff sign-in page
  - dashboard sidebar
  - dashboard topbar where appropriate
  - printed receipts
  - invoices/quotes
  - favicon or app icon if configured
  - loading and empty states where a brand mark is needed
- Do not use any previous brand name, logo, colors, tagline, contact details, or website references.

## Sign-In Page Only

- Create a polished `/admin/login` page for admin and staff users.
- This page should be the app's first visible experience. Do not create a large homepage, hero landing page, marketing sections, blog previews, service grids, or public navigation.
- Use a nice full-screen background inspired by construction and building materials, such as cement texture, stacked materials, steel rods, timber, paint, or a subtle workshop/storefront feel.
- The background must stay readable with a professional overlay, strong contrast, and clean spacing.
- Show the K.K. Danny Enterprise logo clearly, with the business name, "Building Materials & Services", Adeiso, and the phone numbers.
- Login form fields: email, password, remember me, forgot password, and submit.
- Include validated form states, loading state, disabled state, toast errors, and clear first-time setup guidance for the admin account.
- Keep the sign-in page responsive on phones, tablets, laptops, desktops, and wide screens.
- After login, redirect users to `/admin`.

## All-Device Responsiveness

- The sign-in page and dashboard must work beautifully on phones, tablets, laptops, desktops, and wide screens.
- Design mobile-first, then scale up using responsive grids, flexible layouts, `max-width`, `minmax()`, `clamp()`, wrapping, and safe spacing.
- Verify common widths: 320px, 375px, 414px, 768px, 1024px, 1280px, 1440px, and wider desktop screens.
- No text, buttons, cards, tables, charts, forms, images, nav menus, or dashboard panels may overlap, overflow, or become unreadable.
- Touch targets should be easy to tap, ideally at least 44px where practical.
- Tables should scroll horizontally or transform into mobile-friendly stacked rows.
- Admin forms should become single-column on mobile.
- Sidebar should adapt on smaller screens by collapsing, hiding labels, or becoming mobile navigation.
- POS, sales, inventory, purchases, expenses, suppliers, staff, and settings tools must remain usable on phones and tablets.

## Admin/Staff Dashboard

- Create a protected `/admin` portal using Supabase Auth.
- Unauthenticated users must redirect to `/admin/login`.
- Dashboard layout should be operational, dense, fast to scan, and easy for daily shop work.
- Use a sticky/adaptive sidebar, responsive topbar, role/email display, page title, quick search where useful, and role-based navigation.
- Admin users see every section.
- Staff users see only operational sections allowed by their role.
- Dashboard styling should feel construction/business focused: charcoal, deep green, gold/yellow, concrete gray, white, and strong readable accents. Avoid any previous unrelated color scheme.

## Admin Sections

- Dashboard: total revenue, total sales, today's sales, outstanding balances, pending orders/quotes, low-stock items, top-selling materials, 6-month revenue chart, quick actions, and recent sales.
- POS: create sales for products and services, add customer details, select items, quantity, discount, amount paid, payment method, notes, status, and decrement product stock after successful sale.
- Sales: list sales, search/filter, show details, show payment state, reprint receipts, update status, and view sale items.
- Inventory: manage building materials and services with name, category, image, price, stock, threshold, SKU/code, supplier, unit, and `is_service`.
- Categories: manage product/service categories such as cement, wood, paint, nails, roofing, tools, steel rods, hardware, delivery, and equipment services.
- Suppliers: manage supplier name, phone, contact person, address, notes, and active state.
- Purchases/Stock Intake: record restocks, supplier, item, quantity, unit cost, total cost, purchase date, notes, and update stock levels.
- Expenses: record business expenses with category, amount, date, payment method, staff, notes, and receipt/reference where available.
- Quotes/Orders: create and manage customer quote/order requests with customer name, phone, requested items/services, quantity, deadline, details, and status.
- Customers: manage customer records, phone numbers, purchase history, balances, and notes.
- Reports: sales summary, inventory value, profit estimates, low-stock report, expense report, and staff activity.
- Staff Accounts: admin can create, update, activate/deactivate, reset password, change role, and delete staff/admin accounts.
- Settings: manage business profile, phone numbers, address, receipt footer, tax/discount preferences, payment methods, dashboard theme colors, and logo path.

## Receipt Generation

- The POS must generate a receipt immediately after a sale is successfully recorded.
- The receipt must use the saved `sale_ref` returned from the database, not a temporary client-side reference.
- Show an on-screen receipt preview modal after checkout with clear actions for Print and Close.
- The Sales page must allow staff/admin users to reprint receipts for previous sales.
- Receipt printing must use print-specific CSS that hides the dashboard UI and prints only the receipt.
- Receipts must be optimized for 80mm thermal receipt printers while still being readable in browser print preview.
- Use a compact monochrome receipt style with a white background, black text, monospace type, approximately 12px text, and a printable width of about 80mm or 302px.
- Include `public/logo.jpeg` at the top of the receipt.
- Include customer payment state clearly: full payment, part payment with balance due, or overpayment with change due.
- Use Ghana cedi formatting consistently across the dashboard.
- Support receipts for both physical products and service items.
- Use saved `sale_items` when reprinting from the Sales page. If line items are missing, show a small fallback note instead of breaking the receipt.
- Receipt data should include sale date/time, reference, customer, phone, payment method, staff/server where available, optional notes, line items, subtotal, discount, total, amount paid, change, balance due, and customer copy label.

Receipt format:

```text
[LOGO] K.K. DANNY ENTERPRISE
       Building Materials & Services
       Adeiso, Ghana
       Opp. Radiance Gas filling station,
       Near Point 3 Hotel.
       Tel: 02444754803 / 0249986118 / 0240268125
================================
Date: DD/MM/YYYY HH:MM
Ref:  [sale_ref]
Cust: [customer name or Walk-in]
Tel:  [customer phone if available]
Pay:  [Cash | Mobile Money | Bank Transfer | Card]
Serv: [staff/server name if available]
Note: [optional sale note]
--------------------------------
ITEM                    QTY  TOTAL
--------------------------------
[product/service name]  [q]  [line total]
[product/service name]  [q]  [line total]
--------------------------------
SUBTOTAL                     [subtotal]
DISCOUNT                    -[discount, if any]
--------------------------------
TOTAL                        [total]
PAID                         [amount paid]
CHANGE                       [change due, if overpaid]
BALANCE DUE                  [balance due, if part-paid]
================================
Thank you for your patronage!
*** CUSTOMER COPY ***
```

## Supabase

- Create schema for profiles, products, categories, suppliers, purchases, expenses, customers, sales, sale_items, quote_requests, business_settings, payment_methods, and audit_logs.
- Include UUID support, `updated_at` trigger, auth profile trigger, RLS helper functions `is_admin()` and `is_staff()`, and secure RLS policies.
- Staff can manage operational data allowed by role.
- Admins can manage all data, settings, and users.
- Create storage buckets: product-images, supplier-documents, expense-receipts, quote-files, and uploads.
- Add storage policies for authenticated uploads and protected reads where appropriate.
- Seed default categories, payment methods, business settings, and sample inventory items for K.K. Danny Enterprise.

## Implementation

- Use Supabase server client for server components/actions and browser client for uploads/client interactions.
- Use `revalidatePath` after mutations.
- Use validation, accessible labels, loading states, disabled states, empty states, confirmation dialogs, and toast notifications.
- Use role-based route protection for every admin route.
- Keep all previous public website code out of scope unless it directly supports the admin/staff dashboard.
- Keep the dashboard practical, fast, and easy to use for daily building-material sales and stock management.
- Before final delivery, run a production build and visually verify the sign-in page and admin screens on mobile, tablet, desktop, and wide desktop widths.
