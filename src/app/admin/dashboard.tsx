"use client";

import Image from "next/image";
import {
  BadgeDollarSign,
  Boxes,
  Building2,
  ClipboardList,
  CreditCard,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  PackagePlus,
  Printer,
  ReceiptText,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  UserCog,
  Users,
  WalletCards,
  X
} from "lucide-react";
import { useMemo, useState } from "react";
import { brand, phoneLine } from "@/lib/brand";
import { formatGhs } from "@/lib/currency";
import {
  customers,
  expenses,
  inventory,
  InventoryItem,
  quotes,
  recentSales,
  Sale,
  SaleItem,
  suppliers
} from "@/lib/demo-data";

type AdminDashboardProps = {
  userEmail: string;
  isDemo: boolean;
};

type CartLine = SaleItem;

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "pos", label: "POS", icon: ShoppingCart },
  { key: "sales", label: "Sales", icon: ReceiptText },
  { key: "inventory", label: "Inventory", icon: Boxes },
  { key: "suppliers", label: "Suppliers", icon: Truck },
  { key: "purchases", label: "Purchases", icon: PackagePlus },
  { key: "expenses", label: "Expenses", icon: WalletCards },
  { key: "quotes", label: "Quotes", icon: ClipboardList },
  { key: "customers", label: "Customers", icon: Users },
  { key: "reports", label: "Reports", icon: FileText },
  { key: "staff", label: "Staff", icon: UserCog },
  { key: "settings", label: "Settings", icon: Settings }
] as const;

const revenueBars = [
  { label: "Dec", value: 21800 },
  { label: "Jan", value: 26350 },
  { label: "Feb", value: 24140 },
  { label: "Mar", value: 31980 },
  { label: "Apr", value: 34640 },
  { label: "May", value: 38920 }
];

function saleTotal(sale: Sale) {
  return sale.items.reduce((sum, item) => sum + item.price * item.quantity, 0) - sale.discount;
}

function statusFor(total: number, paid: number) {
  if (paid > total) return "Overpaid";
  if (paid < total) return "Part paid";
  return "Paid";
}

export function AdminDashboard({ userEmail, isDemo }: AdminDashboardProps) {
  const [active, setActive] = useState<(typeof navItems)[number]["key"]>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cart, setCart] = useState<CartLine[]>([
    { id: "cement-ghacem", name: "Ghacem Cement", quantity: 4, price: 98 }
  ]);
  const [customer, setCustomer] = useState("Walk-in");
  const [phone, setPhone] = useState("");
  const [discount, setDiscount] = useState(0);
  const [amountPaid, setAmountPaid] = useState(392);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [receipt, setReceipt] = useState<Sale | null>(null);

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cart]
  );
  const total = Math.max(subtotal - discount, 0);
  const lowStock = inventory.filter((item) => !item.isService && item.stock <= item.threshold);
  const revenue = recentSales.reduce((sum, sale) => sum + saleTotal(sale), 0);
  const activeLabel = navItems.find((item) => item.key === active)?.label ?? "Dashboard";

  function addToCart(item: InventoryItem) {
    setCart((current) => {
      const existing = current.find((line) => line.id === item.id);
      if (existing) {
        return current.map((line) =>
          line.id === item.id ? { ...line, quantity: line.quantity + 1 } : line
        );
      }
      return [...current, { id: item.id, name: item.name, quantity: 1, price: item.price }];
    });
  }

  function updateQuantity(id: string, quantity: number) {
    setCart((current) =>
      current
        .map((line) => (line.id === id ? { ...line, quantity: Math.max(quantity, 1) } : line))
        .filter((line) => line.quantity > 0)
    );
  }

  function createReceipt() {
    const now = new Date();
    setReceipt({
      ref: `KKD-${now.getFullYear().toString().slice(2)}${String(now.getMonth() + 1).padStart(
        2,
        "0"
      )}${String(now.getDate()).padStart(2, "0")}-${String(
        Math.floor(Math.random() * 900) + 100
      )}`,
      customer: customer.trim() || "Walk-in",
      phone,
      date: now.toLocaleString("en-GB", {
        dateStyle: "short",
        timeStyle: "short"
      }),
      method: paymentMethod,
      staff: userEmail,
      status: statusFor(total, amountPaid),
      items: cart,
      discount,
      paid: amountPaid,
      notes: "Customer copy"
    });
  }

  function openSaleReceipt(sale: Sale) {
    setReceipt(sale);
  }

  async function signOut() {
    window.location.href = "/admin/login";
  }

  return (
    <main className="dashboard-shell">
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <Image src={brand.logo} alt={`${brand.name} logo`} width={88} height={54} />
          <div>
            <strong>{brand.shortName}</strong>
            <span>{brand.tagline}</span>
          </div>
          <button
            type="button"
            className="icon-button mobile-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation"
            title="Close navigation"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="side-nav" aria-label="Admin navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                type="button"
                className={active === item.key ? "active" : ""}
                onClick={() => {
                  setActive(item.key);
                  setSidebarOpen(false);
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <Building2 size={18} />
          <span>{brand.location}</span>
        </div>
      </aside>

      <section className="dashboard-main">
        <header className="topbar">
          <div className="topbar-left">
            <button
              type="button"
              className="icon-button nav-toggle"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation"
              title="Open navigation"
            >
              <Menu size={20} />
            </button>
            <div>
              <p className="eyebrow">Admin / Staff Dashboard</p>
              <h1>{activeLabel}</h1>
            </div>
          </div>

          <div className="topbar-actions">
            <label className="search-box">
              <Search size={17} aria-hidden="true" />
              <input type="search" placeholder="Search stock, receipt, customer" />
            </label>
            <div className="user-pill">
              <span>{isDemo ? "Demo preview" : "Signed in"}</span>
              <strong>{userEmail}</strong>
            </div>
            <button
              type="button"
              className="icon-button"
              onClick={signOut}
              aria-label="Sign out"
              title="Sign out"
            >
              <LogOut size={18} />
            </button>
          </div>
        </header>

        {isDemo ? (
          <div className="demo-banner" role="status">
            Supabase is not connected yet, so this dashboard is running with local demo data. Add
            `.env.local` keys to enable real authentication and database reads.
          </div>
        ) : null}

        <div className="mobile-section-select">
          <label>
            <span>Section</span>
            <select value={active} onChange={(event) => setActive(event.target.value as typeof active)}>
              {navItems.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {active === "dashboard" ? (
          <DashboardOverview revenue={revenue} lowStockCount={lowStock.length} />
        ) : null}
        {active === "pos" ? (
          <PosPanel
            cart={cart}
            customer={customer}
            phone={phone}
            discount={discount}
            amountPaid={amountPaid}
            paymentMethod={paymentMethod}
            subtotal={subtotal}
            total={total}
            onCustomerChange={setCustomer}
            onPhoneChange={setPhone}
            onDiscountChange={setDiscount}
            onAmountPaidChange={setAmountPaid}
            onPaymentMethodChange={setPaymentMethod}
            onAddToCart={addToCart}
            onQuantityChange={updateQuantity}
            onCheckout={createReceipt}
          />
        ) : null}
        {active === "sales" ? <SalesPanel onReceipt={openSaleReceipt} /> : null}
        {active === "inventory" ? <InventoryPanel /> : null}
        {active === "suppliers" ? <SuppliersPanel /> : null}
        {active === "purchases" ? <PurchasesPanel /> : null}
        {active === "expenses" ? <ExpensesPanel /> : null}
        {active === "quotes" ? <QuotesPanel /> : null}
        {active === "customers" ? <CustomersPanel /> : null}
        {active === "reports" ? <ReportsPanel /> : null}
        {active === "staff" ? <StaffPanel /> : null}
        {active === "settings" ? <SettingsPanel /> : null}
      </section>

      {receipt ? <ReceiptModal sale={receipt} onClose={() => setReceipt(null)} /> : null}
    </main>
  );
}

function DashboardOverview({ revenue, lowStockCount }: { revenue: number; lowStockCount: number }) {
  const maxRevenue = Math.max(...revenueBars.map((bar) => bar.value));

  return (
    <section className="dashboard-grid">
      <MetricCard icon={BadgeDollarSign} label="Revenue today" value={formatGhs(revenue)} tone="green" />
      <MetricCard icon={ReceiptText} label="Sales today" value="3 receipts" tone="gold" />
      <MetricCard icon={ClipboardList} label="Pending quotes" value="3 open" tone="blue" />
      <MetricCard icon={Boxes} label="Low stock" value={`${lowStockCount} items`} tone="red" />

      <div className="panel chart-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">6 month view</p>
            <h2>Revenue trend</h2>
          </div>
          <span className="badge">GHS</span>
        </div>
        <div className="bar-chart" aria-label="Revenue chart">
          {revenueBars.map((bar) => (
            <div key={bar.label} className="bar-item">
              <div className="bar-track">
                <span style={{ height: `${(bar.value / maxRevenue) * 100}%` }} />
              </div>
              <strong>{bar.label}</strong>
              <small>{Math.round(bar.value / 1000)}k</small>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Quick actions</p>
            <h2>Daily shop work</h2>
          </div>
        </div>
        <div className="quick-actions">
          <button type="button">
            <ShoppingCart size={18} /> New sale
          </button>
          <button type="button">
            <PackagePlus size={18} /> Add stock
          </button>
          <button type="button">
            <ClipboardList size={18} /> Create quote
          </button>
          <button type="button">
            <Printer size={18} /> Reprint receipt
          </button>
        </div>
      </div>

      <div className="panel wide-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Recent activity</p>
            <h2>Latest sales</h2>
          </div>
        </div>
        <ResponsiveSalesTable sales={recentSales} />
      </div>
    </section>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  tone
}: {
  icon: typeof BadgeDollarSign;
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <div className={`metric-card ${tone}`}>
      <div className="metric-icon">
        <Icon size={22} />
      </div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function PosPanel({
  cart,
  customer,
  phone,
  discount,
  amountPaid,
  paymentMethod,
  subtotal,
  total,
  onCustomerChange,
  onPhoneChange,
  onDiscountChange,
  onAmountPaidChange,
  onPaymentMethodChange,
  onAddToCart,
  onQuantityChange,
  onCheckout
}: {
  cart: CartLine[];
  customer: string;
  phone: string;
  discount: number;
  amountPaid: number;
  paymentMethod: string;
  subtotal: number;
  total: number;
  onCustomerChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onDiscountChange: (value: number) => void;
  onAmountPaidChange: (value: number) => void;
  onPaymentMethodChange: (value: string) => void;
  onAddToCart: (item: InventoryItem) => void;
  onQuantityChange: (id: string, quantity: number) => void;
  onCheckout: () => void;
}) {
  return (
    <section className="pos-layout">
      <div className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Products & services</p>
            <h2>Add items</h2>
          </div>
        </div>
        <div className="product-grid">
          {inventory.map((item) => (
            <button key={item.id} type="button" className="product-tile" onClick={() => onAddToCart(item)}>
              <span>{item.category}</span>
              <strong>{item.name}</strong>
              <small>
                {formatGhs(item.price)} / {item.unit}
              </small>
              <em>{item.isService ? "Service item" : `${item.stock} in stock`}</em>
            </button>
          ))}
        </div>
      </div>

      <div className="panel checkout-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Checkout</p>
            <h2>Current sale</h2>
          </div>
        </div>

        <div className="form-grid">
          <label>
            <span>Customer</span>
            <input value={customer} onChange={(event) => onCustomerChange(event.target.value)} />
          </label>
          <label>
            <span>Phone</span>
            <input value={phone} onChange={(event) => onPhoneChange(event.target.value)} />
          </label>
        </div>

        <div className="cart-lines">
          {cart.map((line) => (
            <div key={line.id} className="cart-line">
              <div>
                <strong>{line.name}</strong>
                <span>{formatGhs(line.price)}</span>
              </div>
              <input
                type="number"
                min="1"
                value={line.quantity}
                onChange={(event) => onQuantityChange(line.id, Number(event.target.value))}
                aria-label={`Quantity for ${line.name}`}
              />
              <strong>{formatGhs(line.price * line.quantity)}</strong>
            </div>
          ))}
        </div>

        <div className="form-grid">
          <label>
            <span>Discount</span>
            <input
              type="number"
              min="0"
              value={discount}
              onChange={(event) => onDiscountChange(Number(event.target.value))}
            />
          </label>
          <label>
            <span>Amount paid</span>
            <input
              type="number"
              min="0"
              value={amountPaid}
              onChange={(event) => onAmountPaidChange(Number(event.target.value))}
            />
          </label>
          <label>
            <span>Payment method</span>
            <select value={paymentMethod} onChange={(event) => onPaymentMethodChange(event.target.value)}>
              <option>Cash</option>
              <option>Mobile Money</option>
              <option>Bank Transfer</option>
              <option>Card</option>
            </select>
          </label>
        </div>

        <div className="totals-box">
          <span>Subtotal <strong>{formatGhs(subtotal)}</strong></span>
          <span>Discount <strong>-{formatGhs(discount)}</strong></span>
          <span>Total <strong>{formatGhs(total)}</strong></span>
          <span>Balance <strong>{formatGhs(Math.max(total - amountPaid, 0))}</strong></span>
        </div>

        <button type="button" className="primary-action" onClick={onCheckout} disabled={cart.length === 0}>
          <ReceiptText size={18} />
          Save sale & print receipt
        </button>
      </div>
    </section>
  );
}

function SalesPanel({ onReceipt }: { onReceipt: (sale: Sale) => void }) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Receipts & balances</p>
          <h2>Sales register</h2>
        </div>
      </div>
      <ResponsiveSalesTable sales={recentSales} onReceipt={onReceipt} />
    </section>
  );
}

function ResponsiveSalesTable({
  sales,
  onReceipt
}: {
  sales: Sale[];
  onReceipt?: (sale: Sale) => void;
}) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Ref</th>
            <th>Customer</th>
            <th>Method</th>
            <th>Status</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.ref}>
              <td data-label="Ref">{sale.ref}</td>
              <td data-label="Customer">{sale.customer}</td>
              <td data-label="Method">{sale.method}</td>
              <td data-label="Status">
                <span className={`status ${sale.status.toLowerCase().replace(" ", "-")}`}>
                  {sale.status}
                </span>
              </td>
              <td data-label="Total">{formatGhs(saleTotal(sale))}</td>
              <td data-label="Paid">{formatGhs(sale.paid)}</td>
              <td data-label="Action">
                <button type="button" className="small-action" onClick={() => onReceipt?.(sale)}>
                  <Printer size={15} /> Receipt
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InventoryPanel() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Stock control</p>
          <h2>Inventory</h2>
        </div>
        <button type="button" className="small-action">
          <PackagePlus size={15} /> Add item
        </button>
      </div>
      <div className="inventory-grid">
        {inventory.map((item) => (
          <article key={item.id} className="inventory-card">
            <div>
              <span>{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.supplier}</p>
            </div>
            <div className="inventory-meta">
              <strong>{formatGhs(item.price)}</strong>
              <em>{item.isService ? "Service" : `${item.stock} ${item.unit}s`}</em>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SuppliersPanel() {
  return <SimpleList title="Suppliers" eyebrow="Vendor contacts" rows={suppliers} />;
}

function PurchasesPanel() {
  const rows = inventory.slice(0, 4).map((item) => ({
    name: item.name,
    category: item.supplier,
    phone: `${item.stock} ${item.unit}s received`,
    active: true
  }));
  return <SimpleList title="Purchases / Stock Intake" eyebrow="Restock records" rows={rows} />;
}

function ExpensesPanel() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Business costs</p>
          <h2>Expenses</h2>
        </div>
      </div>
      <div className="stack-list">
        {expenses.map((expense) => (
          <div key={`${expense.category}-${expense.date}`} className="stack-row">
            <div>
              <strong>{expense.category}</strong>
              <span>{expense.date} · {expense.method} · {expense.staff}</span>
            </div>
            <em>{formatGhs(expense.amount)}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuotesPanel() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Customer requests</p>
          <h2>Quotes / Orders</h2>
        </div>
      </div>
      <div className="stack-list">
        {quotes.map((quote) => (
          <div key={quote.phone} className="stack-row">
            <div>
              <strong>{quote.customer}</strong>
              <span>{quote.phone} · {quote.request}</span>
            </div>
            <span className="status paid">{quote.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CustomersPanel() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Buying history</p>
          <h2>Customers</h2>
        </div>
      </div>
      <div className="inventory-grid">
        {customers.map((customer) => (
          <article key={customer.phone} className="inventory-card">
            <div>
              <span>{customer.phone}</span>
              <h3>{customer.name}</h3>
              <p>{customer.visits} visits</p>
            </div>
            <div className="inventory-meta">
              <strong>{formatGhs(customer.balance)}</strong>
              <em>Balance</em>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReportsPanel() {
  return (
    <section className="dashboard-grid">
      <MetricCard icon={BadgeDollarSign} label="Inventory value" value={formatGhs(42180)} tone="green" />
      <MetricCard icon={CreditCard} label="Expenses month" value={formatGhs(745)} tone="red" />
      <MetricCard icon={Boxes} label="Top category" value="Cement" tone="gold" />
      <MetricCard icon={ClipboardList} label="Open balances" value={formatGhs(525)} tone="blue" />
      <div className="panel wide-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Operational reports</p>
            <h2>Ready report exports</h2>
          </div>
        </div>
        <div className="quick-actions">
          <button type="button"><FileText size={18} /> Sales summary</button>
          <button type="button"><Boxes size={18} /> Low-stock report</button>
          <button type="button"><WalletCards size={18} /> Expense report</button>
          <button type="button"><Users size={18} /> Staff activity</button>
        </div>
      </div>
    </section>
  );
}

function StaffPanel() {
  const rows = [
    { name: "Admin", category: "Owner", phone: "Full access", active: true },
    { name: "Shop Staff", category: "Staff", phone: "POS, sales, stock", active: true },
    { name: "Accounts", category: "Admin", phone: "Reports, expenses", active: true }
  ];
  return <SimpleList title="Staff Accounts" eyebrow="Role-based access" rows={rows} />;
}

function SettingsPanel() {
  return (
    <section className="panel settings-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Business profile</p>
          <h2>Settings</h2>
        </div>
      </div>
      <div className="settings-layout">
        <Image src={brand.logo} alt={`${brand.name} logo`} width={220} height={135} />
        <div className="form-grid">
          <label>
            <span>Business name</span>
            <input value={brand.name} readOnly />
          </label>
          <label>
            <span>Phone numbers</span>
            <input value={phoneLine} readOnly />
          </label>
          <label>
            <span>Location</span>
            <input value={brand.location} readOnly />
          </label>
          <label>
            <span>Receipt footer</span>
            <input value="Thank you for your patronage!" readOnly />
          </label>
        </div>
      </div>
    </section>
  );
}

function SimpleList({
  title,
  eyebrow,
  rows
}: {
  title: string;
  eyebrow: string;
  rows: { name: string; category: string; phone: string; active: boolean }[];
}) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="stack-list">
        {rows.map((row) => (
          <div key={`${row.name}-${row.phone}`} className="stack-row">
            <div>
              <strong>{row.name}</strong>
              <span>{row.category} · {row.phone}</span>
            </div>
            <span className={row.active ? "status paid" : "status part-paid"}>
              {row.active ? "Active" : "Inactive"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReceiptModal({ sale, onClose }: { sale: Sale; onClose: () => void }) {
  const total = saleTotal(sale);
  const change = Math.max(sale.paid - total, 0);
  const balance = Math.max(total - sale.paid, 0);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Receipt preview">
      <div className="receipt-modal">
        <div className="modal-actions">
          <button type="button" className="small-action" onClick={() => window.print()}>
            <Printer size={15} /> Print
          </button>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close receipt" title="Close receipt">
            <X size={18} />
          </button>
        </div>

        <div className="receipt-print-area">
          <Image src={brand.logo} alt={`${brand.name} logo`} width={120} height={74} className="receipt-logo" />
          <h2>{brand.name.toUpperCase()}</h2>
          <p>{brand.tagline}</p>
          <p>{brand.location}</p>
          <p>{brand.address}</p>
          <p>Tel: {phoneLine}</p>
          <hr />
          <p>Date: {sale.date}</p>
          <p>Ref: {sale.ref}</p>
          <p>Cust: {sale.customer}</p>
          {sale.phone ? <p>Tel: {sale.phone}</p> : null}
          <p>Pay: {sale.method}</p>
          <p>Serv: {sale.staff}</p>
          {sale.notes ? <p>Note: {sale.notes}</p> : null}
          <hr />
          <div className="receipt-row receipt-head">
            <span>ITEM</span>
            <span>QTY</span>
            <span>TOTAL</span>
          </div>
          {sale.items.length ? (
            sale.items.map((item) => (
              <div key={`${sale.ref}-${item.id}`} className="receipt-row">
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>{formatGhs(item.price * item.quantity)}</span>
              </div>
            ))
          ) : (
            <p>Line items unavailable for this reprint.</p>
          )}
          <hr />
          <div className="receipt-totals">
            <span>SUBTOTAL <strong>{formatGhs(total + sale.discount)}</strong></span>
            {sale.discount ? <span>DISCOUNT <strong>-{formatGhs(sale.discount)}</strong></span> : null}
            <span>TOTAL <strong>{formatGhs(total)}</strong></span>
            <span>PAID <strong>{formatGhs(sale.paid)}</strong></span>
            {change ? <span>CHANGE <strong>{formatGhs(change)}</strong></span> : null}
            {balance ? <span>BALANCE DUE <strong>{formatGhs(balance)}</strong></span> : null}
          </div>
          <hr />
          <p>Thank you for your patronage!</p>
          <strong>*** CUSTOMER COPY ***</strong>
        </div>
      </div>
    </div>
  );
}
