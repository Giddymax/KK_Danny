"use client";

import Image from "next/image";
import {
  BadgeDollarSign,
  Boxes,
  Building2,
  ClipboardList,
  CreditCard,
  Edit3,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  PackagePlus,
  Printer,
  ReceiptText,
  Save,
  Search,
  Settings,
  ShoppingCart,
  Trash2,
  Truck,
  UserCog,
  Users,
  WalletCards,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { brand, phoneLine } from "@/lib/brand";
import { formatGhs } from "@/lib/currency";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";
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

type InventoryFormState = {
  name: string;
  category: string;
  unit: string;
  price: string;
  stock: string;
  threshold: string;
  supplier: string;
  isService: boolean;
};

type InventoryRow = {
  id: string;
  name: string;
  category: string;
  unit: string;
  price: number | string;
  stock: number | string;
  threshold: number | string;
  supplier: string | null;
  is_service: boolean;
};

type ManagedKind =
  | "sale"
  | "supplier"
  | "purchase"
  | "expense"
  | "quote"
  | "customer"
  | "staff"
  | "settings";

type ManagedField = {
  name: string;
  label: string;
  value: string;
  type?: "text" | "number" | "date" | "select";
  options?: string[];
};

type ManagedEditorState = {
  kind: ManagedKind;
  title: string;
  itemId?: string;
  fields: ManagedField[];
};

type SupplierRecord = {
  id: string;
  name: string;
  category: string;
  phone: string;
  active: boolean;
};

type PurchaseRecord = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unitCost: number;
  date: string;
  active: boolean;
};

type ExpenseRecord = {
  id: string;
  category: string;
  amount: number;
  method: string;
  date: string;
  staff: string;
  active: boolean;
};

type QuoteRecord = {
  id: string;
  customer: string;
  phone: string;
  request: string;
  status: string;
  active: boolean;
};

type CustomerRecord = {
  id: string;
  name: string;
  phone: string;
  balance: number;
  visits: number;
  active: boolean;
};

type StaffRecord = {
  id: string;
  name: string;
  role: "admin" | "staff";
  email: string;
  active: boolean;
};

type SettingsRecord = {
  name: string;
  location: string;
  phones: string;
  receiptFooter: string;
};

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

function inventoryRowToItem(row: InventoryRow): InventoryItem {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    unit: row.unit,
    price: Number(row.price),
    stock: Number(row.stock),
    threshold: Number(row.threshold),
    supplier: row.supplier ?? "",
    isService: row.is_service
  };
}

function inventoryItemToForm(item?: InventoryItem): InventoryFormState {
  return {
    name: item?.name ?? "",
    category: item?.category ?? "",
    unit: item?.unit ?? "item",
    price: String(item?.price ?? ""),
    stock: String(item?.stock ?? "0"),
    threshold: String(item?.threshold ?? "0"),
    supplier: item?.supplier ?? "",
    isService: Boolean(item?.isService)
  };
}

function fieldValue(fields: ManagedField[], name: string) {
  return fields.find((field) => field.name === name)?.value ?? "";
}

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function makeDemoId(prefix: string) {
  return `${prefix}-${Date.now()}`;
}

function titleCaseStatus(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function saleToFields(sale?: Sale): ManagedField[] {
  return [
    { name: "customer", label: "Customer", value: sale?.customer ?? "Walk-in" },
    { name: "phone", label: "Phone", value: sale?.phone ?? "" },
    { name: "method", label: "Payment method", value: sale?.method ?? "Cash", type: "select", options: ["Cash", "Mobile Money", "Bank Transfer", "Card"] },
    { name: "status", label: "Status", value: sale?.status ?? "Paid", type: "select", options: ["Paid", "Part paid", "Overpaid"] },
    { name: "paid", label: "Amount paid", value: String(sale?.paid ?? 0), type: "number" },
    { name: "discount", label: "Discount", value: String(sale?.discount ?? 0), type: "number" },
    { name: "notes", label: "Notes", value: sale?.notes ?? "" }
  ];
}

function supplierToFields(supplier?: SupplierRecord): ManagedField[] {
  return [
    { name: "name", label: "Supplier name", value: supplier?.name ?? "" },
    { name: "category", label: "Category/contact", value: supplier?.category ?? "" },
    { name: "phone", label: "Phone", value: supplier?.phone ?? "" },
    { name: "active", label: "Status", value: supplier?.active === false ? "Inactive" : "Active", type: "select", options: ["Active", "Inactive"] }
  ];
}

function purchaseToFields(purchase?: PurchaseRecord): ManagedField[] {
  return [
    { name: "name", label: "Item", value: purchase?.name ?? "" },
    { name: "category", label: "Supplier", value: purchase?.category ?? "" },
    { name: "quantity", label: "Quantity", value: String(purchase?.quantity ?? 0), type: "number" },
    { name: "unitCost", label: "Unit cost", value: String(purchase?.unitCost ?? 0), type: "number" },
    { name: "date", label: "Purchase date", value: purchase?.date ?? new Date().toISOString().slice(0, 10), type: "date" },
    { name: "active", label: "Status", value: purchase?.active === false ? "Inactive" : "Active", type: "select", options: ["Active", "Inactive"] }
  ];
}

function expenseToFields(expense?: ExpenseRecord): ManagedField[] {
  return [
    { name: "category", label: "Category", value: expense?.category ?? "" },
    { name: "amount", label: "Amount", value: String(expense?.amount ?? 0), type: "number" },
    { name: "method", label: "Payment method", value: expense?.method ?? "Cash", type: "select", options: ["Cash", "Mobile Money", "Bank Transfer", "Card"] },
    { name: "date", label: "Expense date", value: expense?.date ?? new Date().toISOString().slice(0, 10), type: "date" },
    { name: "staff", label: "Staff/notes", value: expense?.staff ?? "" },
    { name: "active", label: "Status", value: expense?.active === false ? "Inactive" : "Active", type: "select", options: ["Active", "Inactive"] }
  ];
}

function quoteToFields(quote?: QuoteRecord): ManagedField[] {
  return [
    { name: "customer", label: "Customer", value: quote?.customer ?? "" },
    { name: "phone", label: "Phone", value: quote?.phone ?? "" },
    { name: "request", label: "Requested items", value: quote?.request ?? "" },
    { name: "status", label: "Status", value: quote?.status ?? "New", type: "select", options: ["New", "Reviewed", "Quoted", "Completed", "Cancelled"] },
    { name: "active", label: "Record status", value: quote?.active === false ? "Inactive" : "Active", type: "select", options: ["Active", "Inactive"] }
  ];
}

function customerToFields(customer?: CustomerRecord): ManagedField[] {
  return [
    { name: "name", label: "Customer name", value: customer?.name ?? "" },
    { name: "phone", label: "Phone", value: customer?.phone ?? "" },
    { name: "balance", label: "Balance", value: String(customer?.balance ?? 0), type: "number" },
    { name: "visits", label: "Visits", value: String(customer?.visits ?? 0), type: "number" },
    { name: "active", label: "Status", value: customer?.active === false ? "Inactive" : "Active", type: "select", options: ["Active", "Inactive"] }
  ];
}

function staffToFields(staff?: StaffRecord): ManagedField[] {
  return [
    { name: "name", label: "Full name", value: staff?.name ?? "" },
    { name: "email", label: "Email", value: staff?.email ?? "" },
    { name: "role", label: "Role", value: staff?.role ?? "staff", type: "select", options: ["admin", "staff"] },
    { name: "active", label: "Status", value: staff?.active === false ? "Inactive" : "Active", type: "select", options: ["Active", "Inactive"] }
  ];
}

function settingsToFields(settings: SettingsRecord): ManagedField[] {
  return [
    { name: "name", label: "Business name", value: settings.name },
    { name: "location", label: "Location", value: settings.location },
    { name: "phones", label: "Phone numbers", value: settings.phones },
    { name: "receiptFooter", label: "Receipt footer", value: settings.receiptFooter }
  ];
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
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>(inventory);
  const [inventoryStatus, setInventoryStatus] = useState("");
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [inventoryForm, setInventoryForm] = useState<InventoryFormState>(inventoryItemToForm());
  const [inventoryFormOpen, setInventoryFormOpen] = useState(false);
  const [inventoryPending, setInventoryPending] = useState(false);
  const [salesRecords, setSalesRecords] = useState<Sale[]>(recentSales);
  const [supplierRecords, setSupplierRecords] = useState<SupplierRecord[]>(
    suppliers.map((supplier, index) => ({
      id: `supplier-${index}`,
      name: supplier.name,
      category: supplier.category,
      phone: supplier.phone,
      active: supplier.active
    }))
  );
  const [purchaseRecords, setPurchaseRecords] = useState<PurchaseRecord[]>(
    inventory.slice(0, 4).map((item) => ({
      id: `purchase-${item.id}`,
      name: item.name,
      category: item.supplier,
      quantity: item.stock,
      unitCost: item.price,
      date: "2026-05-19",
      active: true
    }))
  );
  const [expenseRecords, setExpenseRecords] = useState<ExpenseRecord[]>(
    expenses.map((expense, index) => ({
      id: `expense-${index}`,
      category: expense.category,
      amount: expense.amount,
      method: expense.method,
      date: expense.date,
      staff: expense.staff,
      active: true
    }))
  );
  const [quoteRecords, setQuoteRecords] = useState<QuoteRecord[]>(
    quotes.map((quote, index) => ({
      id: `quote-${index}`,
      customer: quote.customer,
      phone: quote.phone,
      request: quote.request,
      status: quote.status,
      active: true
    }))
  );
  const [customerRecords, setCustomerRecords] = useState<CustomerRecord[]>(
    customers.map((customer, index) => ({
      id: `customer-${index}`,
      name: customer.name,
      phone: customer.phone,
      balance: customer.balance,
      visits: customer.visits,
      active: true
    }))
  );
  const [staffRecords, setStaffRecords] = useState<StaffRecord[]>([
    { id: "staff-admin", name: "Admin", role: "admin", email: "admin@kkdanny.com", active: true },
    { id: "staff-shop", name: "Shop Staff", role: "staff", email: "staff@kkdanny.com", active: true },
    { id: "staff-accounts", name: "Accounts", role: "admin", email: "accounts@kkdanny.com", active: true }
  ]);
  const [settingsRecord, setSettingsRecord] = useState<SettingsRecord>({
    name: brand.name,
    location: brand.location,
    phones: phoneLine,
    receiptFooter: "Thank you for your patronage!"
  });
  const [managedEditor, setManagedEditor] = useState<ManagedEditorState | null>(null);
  const [managedStatus, setManagedStatus] = useState("");
  const [managedPending, setManagedPending] = useState(false);

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cart]
  );
  const total = Math.max(subtotal - discount, 0);
  const lowStock = inventoryItems.filter((item) => !item.isService && item.stock <= item.threshold);
  const revenue = salesRecords.reduce((sum, sale) => sum + saleTotal(sale), 0);
  const activeLabel = navItems.find((item) => item.key === active)?.label ?? "Dashboard";

  useEffect(() => {
    if (isDemo) {
      return;
    }

    let ignore = false;

    async function loadInventory() {
      const supabase = createBrowserSupabaseClient();

      if (!supabase) {
        return;
      }

      const { data, error } = await supabase
        .from("inventory_items")
        .select("id,name,category,unit,price,stock,threshold,supplier,is_service")
        .eq("active", true)
        .order("name", { ascending: true });

      if (ignore) {
        return;
      }

      if (error) {
        setInventoryStatus(error.message);
        return;
      }

      setInventoryItems((data ?? []).map(inventoryRowToItem));
      setInventoryStatus("");

      const [
        suppliersResult,
        purchasesResult,
        expensesResult,
        quotesResult,
        customersResult,
        salesResult,
        profilesResult,
        settingsResult
      ] = await Promise.all([
        supabase.from("suppliers").select("id,name,phone,contact_person,active").order("name", { ascending: true }),
        supabase.from("purchases").select("id,item_name,supplier_name,quantity,unit_cost,purchase_date,active").eq("active", true).order("purchase_date", { ascending: false }),
        supabase.from("expenses").select("id,category,amount,expense_date,payment_method,notes,active").eq("active", true).order("expense_date", { ascending: false }),
        supabase.from("quote_requests").select("id,customer_name,phone,requested_items,status,active").eq("active", true).order("created_at", { ascending: false }),
        supabase.from("customers").select("id,name,phone,balance,visits,active").eq("active", true).order("name", { ascending: true }),
        supabase.from("sales").select("id,sale_ref,customer_name,customer_phone,payment_method,status,total,amount_paid,discount,notes,created_at,active").eq("active", true).order("created_at", { ascending: false }),
        supabase.from("profiles").select("id,email,full_name,role,is_active").order("email", { ascending: true }),
        supabase.from("business_settings").select("key,value").in("key", ["profile", "receipt"])
      ]);

      if (suppliersResult.data) {
        setSupplierRecords(
          suppliersResult.data.map((row) => ({
            id: row.id,
            name: row.name,
            category: row.contact_person ?? "",
            phone: row.phone ?? "",
            active: row.active
          }))
        );
      }

      if (purchasesResult.data) {
        setPurchaseRecords(
          purchasesResult.data.map((row) => ({
            id: row.id,
            name: row.item_name,
            category: row.supplier_name ?? "",
            quantity: Number(row.quantity),
            unitCost: Number(row.unit_cost),
            date: row.purchase_date,
            active: row.active
          }))
        );
      }

      if (expensesResult.data) {
        setExpenseRecords(
          expensesResult.data.map((row) => ({
            id: row.id,
            category: row.category,
            amount: Number(row.amount),
            method: row.payment_method,
            date: row.expense_date,
            staff: row.notes ?? "",
            active: row.active
          }))
        );
      }

      if (quotesResult.data) {
        setQuoteRecords(
          quotesResult.data.map((row) => ({
            id: row.id,
            customer: row.customer_name,
            phone: row.phone,
            request: row.requested_items,
            status: titleCaseStatus(row.status),
            active: row.active
          }))
        );
      }

      if (customersResult.data) {
        setCustomerRecords(
          customersResult.data.map((row) => ({
            id: row.id,
            name: row.name,
            phone: row.phone ?? "",
            balance: Number(row.balance),
            visits: Number(row.visits),
            active: row.active
          }))
        );
      }

      if (salesResult.data) {
        setSalesRecords(
          salesResult.data.map((row) => ({
            ref: row.sale_ref,
            customer: row.customer_name,
            phone: row.customer_phone ?? "",
            date: new Date(row.created_at).toLocaleString("en-GB", {
              dateStyle: "short",
              timeStyle: "short"
            }),
            method: row.payment_method,
            staff: userEmail,
            status: row.status === "part_paid" ? "Part paid" : row.status === "overpaid" ? "Overpaid" : "Paid",
            items: [],
            discount: Number(row.discount),
            paid: Number(row.amount_paid),
            notes: row.notes ?? ""
          }))
        );
      }

      if (profilesResult.data) {
        setStaffRecords(
          profilesResult.data.map((row) => ({
            id: row.id,
            name: row.full_name || row.email,
            email: row.email,
            role: row.role,
            active: row.is_active
          }))
        );
      }

      if (settingsResult.data) {
        const profile = settingsResult.data.find((row) => row.key === "profile")?.value as
          | { name?: string; location?: string; phones?: string[] }
          | undefined;
        const receipt = settingsResult.data.find((row) => row.key === "receipt")?.value as
          | { footer?: string }
          | undefined;

        setSettingsRecord({
          name: profile?.name ?? brand.name,
          location: profile?.location ?? brand.location,
          phones: profile?.phones?.join(", ") ?? phoneLine,
          receiptFooter: receipt?.footer ?? "Thank you for your patronage!"
        });
      }
    }

    loadInventory();

    return () => {
      ignore = true;
    };
  }, [isDemo, userEmail]);

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

  function openInventoryForm(item?: InventoryItem) {
    setEditingItem(item ?? null);
    setInventoryForm(inventoryItemToForm(item));
    setInventoryStatus("");
    setInventoryFormOpen(true);
  }

  function closeInventoryForm() {
    if (inventoryPending) {
      return;
    }

    setInventoryFormOpen(false);
    setEditingItem(null);
    setInventoryForm(inventoryItemToForm());
  }

  async function saveInventoryItem() {
    const name = inventoryForm.name.trim();
    const category = inventoryForm.category.trim();
    const unit = inventoryForm.unit.trim() || "item";
    const price = Number(inventoryForm.price);
    const stock = Number(inventoryForm.stock);
    const threshold = Number(inventoryForm.threshold);

    if (!name || !category || !Number.isFinite(price) || !Number.isFinite(stock) || !Number.isFinite(threshold)) {
      setInventoryStatus("Enter a name, category, and valid numbers for price, stock, and threshold.");
      return;
    }

    const item: InventoryItem = {
      id: editingItem?.id ?? `local-${Date.now()}`,
      name,
      category,
      unit,
      price: Math.max(price, 0),
      stock: Math.max(stock, 0),
      threshold: Math.max(threshold, 0),
      supplier: inventoryForm.supplier.trim(),
      isService: inventoryForm.isService
    };

    if (isDemo) {
      setInventoryItems((current) =>
        editingItem ? current.map((entry) => (entry.id === editingItem.id ? item : entry)) : [item, ...current]
      );
      setInventoryStatus("Demo inventory updated. Connect Supabase to save changes permanently.");
      closeInventoryForm();
      return;
    }

    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setInventoryStatus("Supabase keys are not set.");
      return;
    }

    setInventoryPending(true);
    const payload = {
      name: item.name,
      category: item.category,
      unit: item.unit,
      price: item.price,
      stock: item.stock,
      threshold: item.threshold,
      supplier: item.supplier,
      is_service: item.isService ?? false,
      active: true
    };
    const query = editingItem
      ? supabase
          .from("inventory_items")
          .update(payload)
          .eq("id", editingItem.id)
          .select("id,name,category,unit,price,stock,threshold,supplier,is_service")
          .single()
      : supabase
          .from("inventory_items")
          .insert(payload)
          .select("id,name,category,unit,price,stock,threshold,supplier,is_service")
          .single();

    const { data, error } = await query;
    setInventoryPending(false);

    if (error) {
      setInventoryStatus(error.message);
      return;
    }

    const saved = inventoryRowToItem(data);
    setInventoryItems((current) =>
      editingItem
        ? current.map((entry) => (entry.id === editingItem.id ? saved : entry))
        : [saved, ...current]
    );
    setInventoryStatus(editingItem ? "Inventory item updated." : "Inventory item added.");
    setInventoryFormOpen(false);
    setEditingItem(null);
    setInventoryForm(inventoryItemToForm());
  }

  async function deleteInventoryItem(item: InventoryItem) {
    const confirmed = window.confirm(`Delete ${item.name} from inventory?`);

    if (!confirmed) {
      return;
    }

    if (isDemo) {
      setInventoryItems((current) => current.filter((entry) => entry.id !== item.id));
      setInventoryStatus("Demo inventory item deleted. Connect Supabase to save changes permanently.");
      return;
    }

    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setInventoryStatus("Supabase keys are not set.");
      return;
    }

    const { error } = await supabase.from("inventory_items").delete().eq("id", item.id);

    if (error) {
      setInventoryStatus(error.message);
      return;
    }

    setInventoryItems((current) => current.filter((entry) => entry.id !== item.id));
    setInventoryStatus("Inventory item deleted.");
  }

  function openManagedEditor(kind: ManagedKind, itemId?: string) {
    const titlePrefix = itemId ? "Edit" : "Add";

    if (kind === "sale") {
      const sale = salesRecords.find((entry) => entry.ref === itemId);
      setManagedEditor({ kind, itemId, title: `${titlePrefix} sale`, fields: saleToFields(sale) });
    }

    if (kind === "supplier") {
      const supplier = supplierRecords.find((entry) => entry.id === itemId);
      setManagedEditor({ kind, itemId, title: `${titlePrefix} supplier`, fields: supplierToFields(supplier) });
    }

    if (kind === "purchase") {
      const purchase = purchaseRecords.find((entry) => entry.id === itemId);
      setManagedEditor({ kind, itemId, title: `${titlePrefix} purchase`, fields: purchaseToFields(purchase) });
    }

    if (kind === "expense") {
      const expense = expenseRecords.find((entry) => entry.id === itemId);
      setManagedEditor({ kind, itemId, title: `${titlePrefix} expense`, fields: expenseToFields(expense) });
    }

    if (kind === "quote") {
      const quote = quoteRecords.find((entry) => entry.id === itemId);
      setManagedEditor({ kind, itemId, title: `${titlePrefix} quote`, fields: quoteToFields(quote) });
    }

    if (kind === "customer") {
      const customerRecord = customerRecords.find((entry) => entry.id === itemId);
      setManagedEditor({ kind, itemId, title: `${titlePrefix} customer`, fields: customerToFields(customerRecord) });
    }

    if (kind === "staff") {
      const staff = staffRecords.find((entry) => entry.id === itemId);
      setManagedEditor({ kind, itemId, title: `${titlePrefix} staff account`, fields: staffToFields(staff) });
    }

    if (kind === "settings") {
      setManagedEditor({ kind, itemId: "settings", title: "Edit settings", fields: settingsToFields(settingsRecord) });
    }

    setManagedStatus("");
  }

  function updateManagedField(name: string, value: string) {
    setManagedEditor((current) =>
      current
        ? {
            ...current,
            fields: current.fields.map((field) => (field.name === name ? { ...field, value } : field))
          }
        : current
    );
  }

  function closeManagedEditor() {
    if (!managedPending) {
      setManagedEditor(null);
    }
  }

  async function saveManagedRecord() {
    if (!managedEditor) {
      return;
    }

    const fields = managedEditor.fields;
    const activeValue = fieldValue(fields, "active") !== "Inactive";
    const supabase = isDemo ? null : createBrowserSupabaseClient();
    setManagedPending(true);

    try {
      if (managedEditor.kind === "sale") {
        const sale: Sale = {
          ref: managedEditor.itemId ?? `KKD-${Date.now()}`,
          customer: fieldValue(fields, "customer") || "Walk-in",
          phone: fieldValue(fields, "phone"),
          date: new Date().toLocaleString("en-GB", { dateStyle: "short", timeStyle: "short" }),
          method: fieldValue(fields, "method") || "Cash",
          staff: userEmail,
          status: fieldValue(fields, "status") as Sale["status"],
          items: managedEditor.itemId ? salesRecords.find((entry) => entry.ref === managedEditor.itemId)?.items ?? [] : [],
          discount: toNumber(fieldValue(fields, "discount")),
          paid: toNumber(fieldValue(fields, "paid")),
          notes: fieldValue(fields, "notes")
        };

        if (supabase) {
          const totalAmount = sale.items.length ? saleTotal(sale) : sale.paid;
          const payload = {
            sale_ref: sale.ref,
            customer_name: sale.customer,
            customer_phone: sale.phone,
            payment_method: sale.method,
            status: sale.status === "Part paid" ? "part_paid" : sale.status.toLowerCase(),
            discount: sale.discount,
            total: totalAmount,
            amount_paid: sale.paid,
            notes: sale.notes,
            active: true
          };
          const query = managedEditor.itemId
            ? supabase.from("sales").update(payload).eq("sale_ref", managedEditor.itemId)
            : supabase.from("sales").insert(payload);
          const { error } = await query;
          if (error) throw error;
        }

        setSalesRecords((current) =>
          managedEditor.itemId ? current.map((entry) => (entry.ref === managedEditor.itemId ? sale : entry)) : [sale, ...current]
        );
      }

      if (managedEditor.kind === "supplier") {
        const supplier: SupplierRecord = {
          id: managedEditor.itemId ?? makeDemoId("supplier"),
          name: fieldValue(fields, "name"),
          category: fieldValue(fields, "category"),
          phone: fieldValue(fields, "phone"),
          active: activeValue
        };
        if (supabase) {
          const payload = { name: supplier.name, contact_person: supplier.category, phone: supplier.phone, active: supplier.active };
          const query = managedEditor.itemId
            ? supabase.from("suppliers").update(payload).eq("id", managedEditor.itemId)
            : supabase.from("suppliers").insert(payload).select("id").single();
          const { data, error } = await query;
          if (error) throw error;
          supplier.id = data?.id ?? supplier.id;
        }
        setSupplierRecords((current) =>
          managedEditor.itemId ? current.map((entry) => (entry.id === managedEditor.itemId ? supplier : entry)) : [supplier, ...current]
        );
      }

      if (managedEditor.kind === "purchase") {
        const purchase: PurchaseRecord = {
          id: managedEditor.itemId ?? makeDemoId("purchase"),
          name: fieldValue(fields, "name"),
          category: fieldValue(fields, "category"),
          quantity: toNumber(fieldValue(fields, "quantity")),
          unitCost: toNumber(fieldValue(fields, "unitCost")),
          date: fieldValue(fields, "date"),
          active: activeValue
        };
        if (supabase) {
          const payload = {
            item_name: purchase.name,
            supplier_name: purchase.category,
            quantity: purchase.quantity,
            unit_cost: purchase.unitCost,
            total_cost: purchase.quantity * purchase.unitCost,
            purchase_date: purchase.date,
            active: purchase.active
          };
          const query = managedEditor.itemId
            ? supabase.from("purchases").update(payload).eq("id", managedEditor.itemId)
            : supabase.from("purchases").insert(payload).select("id").single();
          const { data, error } = await query;
          if (error) throw error;
          purchase.id = data?.id ?? purchase.id;
        }
        setPurchaseRecords((current) =>
          managedEditor.itemId ? current.map((entry) => (entry.id === managedEditor.itemId ? purchase : entry)) : [purchase, ...current]
        );
      }

      if (managedEditor.kind === "expense") {
        const expense: ExpenseRecord = {
          id: managedEditor.itemId ?? makeDemoId("expense"),
          category: fieldValue(fields, "category"),
          amount: toNumber(fieldValue(fields, "amount")),
          method: fieldValue(fields, "method"),
          date: fieldValue(fields, "date"),
          staff: fieldValue(fields, "staff"),
          active: activeValue
        };
        if (supabase) {
          const payload = {
            category: expense.category,
            amount: expense.amount,
            payment_method: expense.method,
            expense_date: expense.date,
            notes: expense.staff,
            active: expense.active
          };
          const query = managedEditor.itemId
            ? supabase.from("expenses").update(payload).eq("id", managedEditor.itemId)
            : supabase.from("expenses").insert(payload).select("id").single();
          const { data, error } = await query;
          if (error) throw error;
          expense.id = data?.id ?? expense.id;
        }
        setExpenseRecords((current) =>
          managedEditor.itemId ? current.map((entry) => (entry.id === managedEditor.itemId ? expense : entry)) : [expense, ...current]
        );
      }

      if (managedEditor.kind === "quote") {
        const quote: QuoteRecord = {
          id: managedEditor.itemId ?? makeDemoId("quote"),
          customer: fieldValue(fields, "customer"),
          phone: fieldValue(fields, "phone"),
          request: fieldValue(fields, "request"),
          status: fieldValue(fields, "status"),
          active: activeValue
        };
        if (supabase) {
          const payload = {
            customer_name: quote.customer,
            phone: quote.phone,
            requested_items: quote.request,
            status: quote.status.toLowerCase().replace(" ", "_"),
            active: quote.active
          };
          const query = managedEditor.itemId
            ? supabase.from("quote_requests").update(payload).eq("id", managedEditor.itemId)
            : supabase.from("quote_requests").insert(payload).select("id").single();
          const { data, error } = await query;
          if (error) throw error;
          quote.id = data?.id ?? quote.id;
        }
        setQuoteRecords((current) =>
          managedEditor.itemId ? current.map((entry) => (entry.id === managedEditor.itemId ? quote : entry)) : [quote, ...current]
        );
      }

      if (managedEditor.kind === "customer") {
        const customerRecord: CustomerRecord = {
          id: managedEditor.itemId ?? makeDemoId("customer"),
          name: fieldValue(fields, "name"),
          phone: fieldValue(fields, "phone"),
          balance: toNumber(fieldValue(fields, "balance")),
          visits: toNumber(fieldValue(fields, "visits")),
          active: activeValue
        };
        if (supabase) {
          const payload = {
            name: customerRecord.name,
            phone: customerRecord.phone,
            balance: customerRecord.balance,
            visits: customerRecord.visits,
            active: customerRecord.active
          };
          const query = managedEditor.itemId
            ? supabase.from("customers").update(payload).eq("id", managedEditor.itemId)
            : supabase.from("customers").insert(payload).select("id").single();
          const { data, error } = await query;
          if (error) throw error;
          customerRecord.id = data?.id ?? customerRecord.id;
        }
        setCustomerRecords((current) =>
          managedEditor.itemId ? current.map((entry) => (entry.id === managedEditor.itemId ? customerRecord : entry)) : [customerRecord, ...current]
        );
      }

      if (managedEditor.kind === "staff") {
        const staff: StaffRecord = {
          id: managedEditor.itemId ?? makeDemoId("staff"),
          name: fieldValue(fields, "name"),
          email: fieldValue(fields, "email"),
          role: fieldValue(fields, "role") === "admin" ? "admin" : "staff",
          active: activeValue
        };
        if (supabase) {
          if (!managedEditor.itemId) {
            throw new Error("Create the staff login in Supabase Authentication first, then edit the profile here.");
          }

          const { error } = await supabase
            .from("profiles")
            .update({ full_name: staff.name, role: staff.role, is_active: staff.active })
            .eq("id", managedEditor.itemId);
          if (error) throw error;
        }
        setStaffRecords((current) =>
          managedEditor.itemId ? current.map((entry) => (entry.id === managedEditor.itemId ? staff : entry)) : [staff, ...current]
        );
      }

      if (managedEditor.kind === "settings") {
        const settings: SettingsRecord = {
          name: fieldValue(fields, "name"),
          location: fieldValue(fields, "location"),
          phones: fieldValue(fields, "phones"),
          receiptFooter: fieldValue(fields, "receiptFooter")
        };
        if (supabase) {
          const { error: profileError } = await supabase.from("business_settings").upsert({
            key: "profile",
            value: {
              name: settings.name,
              tagline: brand.tagline,
              location: settings.location,
              address: brand.address,
              phones: settings.phones.split(",").map((phoneNumber) => phoneNumber.trim()).filter(Boolean),
              logo: brand.logo
            }
          });
          if (profileError) throw profileError;

          const { error: receiptError } = await supabase.from("business_settings").upsert({
            key: "receipt",
            value: { footer: settings.receiptFooter, paper_width: "80mm" }
          });
          if (receiptError) throw receiptError;
        }
        setSettingsRecord(settings);
      }

      setManagedStatus(isDemo ? "Demo data updated. Connect Supabase to save changes permanently." : "Changes saved.");
      setManagedEditor(null);
    } catch (error) {
      setManagedStatus(error instanceof Error ? error.message : "Unable to save changes.");
    } finally {
      setManagedPending(false);
    }
  }

  async function deleteManagedRecord(kind: ManagedKind, itemId: string, label: string) {
    if (!window.confirm(`Delete ${label}?`)) {
      return;
    }

    const supabase = isDemo ? null : createBrowserSupabaseClient();

    try {
      if (supabase) {
        const tableMap: Partial<Record<ManagedKind, string>> = {
          sale: "sales",
          supplier: "suppliers",
          purchase: "purchases",
          expense: "expenses",
          quote: "quote_requests",
          customer: "customers",
          staff: "profiles"
        };
        const table = tableMap[kind];

        if (table) {
          const idColumn = kind === "sale" ? "sale_ref" : "id";
          const payload = kind === "staff" ? { is_active: false } : { active: false };
          const { error } = await supabase.from(table).update(payload).eq(idColumn, itemId);
          if (error) throw error;
        }
      }

      if (kind === "sale") setSalesRecords((current) => current.filter((entry) => entry.ref !== itemId));
      if (kind === "supplier") setSupplierRecords((current) => current.filter((entry) => entry.id !== itemId));
      if (kind === "purchase") setPurchaseRecords((current) => current.filter((entry) => entry.id !== itemId));
      if (kind === "expense") setExpenseRecords((current) => current.filter((entry) => entry.id !== itemId));
      if (kind === "quote") setQuoteRecords((current) => current.filter((entry) => entry.id !== itemId));
      if (kind === "customer") setCustomerRecords((current) => current.filter((entry) => entry.id !== itemId));
      if (kind === "staff") setStaffRecords((current) => current.filter((entry) => entry.id !== itemId));

      setManagedStatus(isDemo ? "Demo record deleted." : "Record deleted.");
    } catch (error) {
      setManagedStatus(error instanceof Error ? error.message : "Unable to delete record.");
    }
  }

  function updateQuantity(id: string, quantity: number) {
    setCart((current) =>
      current
        .map((line) => (line.id === id ? { ...line, quantity: Math.max(quantity, 1) } : line))
        .filter((line) => line.quantity > 0)
    );
  }

  function updateQuantityInput(id: string, value: string) {
    setCart((current) =>
      current.map((line) => (line.id === id ? { ...line, quantity: value === "" ? 0 : Number(value) } : line))
    );
  }

  function normalizeQuantity(id: string) {
    setCart((current) =>
      current.map((line) =>
        line.id === id && (!Number.isFinite(line.quantity) || line.quantity < 1)
          ? { ...line, quantity: 1 }
          : line
      )
    );
  }

  function clearCart() {
    setCart([]);
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
          <DashboardOverview
            revenue={revenue}
            lowStockCount={lowStock.length}
            sales={salesRecords}
            onNewSale={() => setActive("pos")}
            onAddStock={() => {
              setActive("inventory");
              openInventoryForm();
            }}
            onCreateQuote={() => {
              setActive("quotes");
              openManagedEditor("quote");
            }}
            onReprintReceipt={() => setActive("sales")}
          />
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
            onQuantityInput={updateQuantityInput}
            onQuantityBlur={normalizeQuantity}
            onClearCart={clearCart}
            onCheckout={createReceipt}
            inventoryItems={inventoryItems}
          />
        ) : null}
        {managedStatus ? (
          <div className="inline-alert" role="status">
            {managedStatus}
          </div>
        ) : null}
        {active === "sales" ? (
          <SalesPanel
            sales={salesRecords}
            onAdd={() => openManagedEditor("sale")}
            onEdit={(sale) => openManagedEditor("sale", sale.ref)}
            onDelete={(sale) => deleteManagedRecord("sale", sale.ref, sale.ref)}
            onReceipt={openSaleReceipt}
          />
        ) : null}
        {active === "inventory" ? (
          <InventoryPanel
            items={inventoryItems}
            status={inventoryStatus}
            onAdd={() => openInventoryForm()}
            onEdit={openInventoryForm}
            onDelete={deleteInventoryItem}
          />
        ) : null}
        {active === "suppliers" ? (
          <SuppliersPanel
            rows={supplierRecords}
            onAdd={() => openManagedEditor("supplier")}
            onEdit={(row) => openManagedEditor("supplier", row.id)}
            onDelete={(row) => deleteManagedRecord("supplier", row.id, row.name)}
          />
        ) : null}
        {active === "purchases" ? (
          <PurchasesPanel
            rows={purchaseRecords}
            onAdd={() => openManagedEditor("purchase")}
            onEdit={(row) => openManagedEditor("purchase", row.id)}
            onDelete={(row) => deleteManagedRecord("purchase", row.id, row.name)}
          />
        ) : null}
        {active === "expenses" ? (
          <ExpensesPanel
            rows={expenseRecords}
            onAdd={() => openManagedEditor("expense")}
            onEdit={(row) => openManagedEditor("expense", row.id)}
            onDelete={(row) => deleteManagedRecord("expense", row.id, row.category)}
          />
        ) : null}
        {active === "quotes" ? (
          <QuotesPanel
            rows={quoteRecords}
            onAdd={() => openManagedEditor("quote")}
            onEdit={(row) => openManagedEditor("quote", row.id)}
            onDelete={(row) => deleteManagedRecord("quote", row.id, row.customer)}
          />
        ) : null}
        {active === "customers" ? (
          <CustomersPanel
            rows={customerRecords}
            onAdd={() => openManagedEditor("customer")}
            onEdit={(row) => openManagedEditor("customer", row.id)}
            onDelete={(row) => deleteManagedRecord("customer", row.id, row.name)}
          />
        ) : null}
        {active === "reports" ? <ReportsPanel /> : null}
        {active === "staff" ? (
          <StaffPanel
            rows={staffRecords}
            onAdd={() => openManagedEditor("staff")}
            onEdit={(row) => openManagedEditor("staff", row.id)}
            onDelete={(row) => deleteManagedRecord("staff", row.id, row.name)}
          />
        ) : null}
        {active === "settings" ? <SettingsPanel settings={settingsRecord} onEdit={() => openManagedEditor("settings")} /> : null}
      </section>

      {receipt ? <ReceiptModal sale={receipt} onClose={() => setReceipt(null)} /> : null}
      {inventoryFormOpen ? (
        <InventoryEditor
          form={inventoryForm}
          title={editingItem ? "Edit inventory item" : "Add inventory item"}
          pending={inventoryPending}
          onChange={setInventoryForm}
          onCancel={closeInventoryForm}
          onSave={saveInventoryItem}
        />
      ) : null}
      {managedEditor ? (
        <ManagedEditor
          editor={managedEditor}
          pending={managedPending}
          onChange={updateManagedField}
          onCancel={closeManagedEditor}
          onSave={saveManagedRecord}
        />
      ) : null}
    </main>
  );
}

function DashboardOverview({
  revenue,
  lowStockCount,
  sales,
  onNewSale,
  onAddStock,
  onCreateQuote,
  onReprintReceipt
}: {
  revenue: number;
  lowStockCount: number;
  sales: Sale[];
  onNewSale: () => void;
  onAddStock: () => void;
  onCreateQuote: () => void;
  onReprintReceipt: () => void;
}) {
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
          <button type="button" onClick={onNewSale}>
            <ShoppingCart size={18} /> New sale
          </button>
          <button type="button" onClick={onAddStock}>
            <PackagePlus size={18} /> Add stock
          </button>
          <button type="button" onClick={onCreateQuote}>
            <ClipboardList size={18} /> Create quote
          </button>
          <button type="button" onClick={onReprintReceipt}>
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
        <ResponsiveSalesTable sales={sales} />
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
  onQuantityInput,
  onQuantityBlur,
  onClearCart,
  onCheckout,
  inventoryItems
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
  onQuantityInput: (id: string, value: string) => void;
  onQuantityBlur: (id: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
  inventoryItems: InventoryItem[];
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
          {inventoryItems.map((item) => (
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
                value={line.quantity || ""}
                onChange={(event) => onQuantityInput(line.id, event.target.value)}
                onBlur={() => onQuantityBlur(line.id)}
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

        <div className="checkout-actions">
          <button type="button" className="secondary-action" onClick={onClearCart} disabled={cart.length === 0}>
            <Trash2 size={18} />
            Clear cart
          </button>
          <button type="button" className="primary-action" onClick={onCheckout} disabled={cart.length === 0}>
            <ReceiptText size={18} />
            Save sale & print receipt
          </button>
        </div>
      </div>
    </section>
  );
}

function SalesPanel({
  sales,
  onAdd,
  onEdit,
  onDelete,
  onReceipt
}: {
  sales: Sale[];
  onAdd: () => void;
  onEdit: (sale: Sale) => void;
  onDelete: (sale: Sale) => void;
  onReceipt: (sale: Sale) => void;
}) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Receipts & balances</p>
          <h2>Sales register</h2>
        </div>
        <button type="button" className="small-action" onClick={onAdd}>
          <ReceiptText size={15} /> Add sale
        </button>
      </div>
      <ResponsiveSalesTable sales={sales} onEdit={onEdit} onDelete={onDelete} onReceipt={onReceipt} />
    </section>
  );
}

function ResponsiveSalesTable({
  sales,
  onEdit,
  onDelete,
  onReceipt
}: {
  sales: Sale[];
  onEdit?: (sale: Sale) => void;
  onDelete?: (sale: Sale) => void;
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
                <div className="row-actions">
                  <button type="button" className="icon-button" onClick={() => onReceipt?.(sale)} aria-label={`Print ${sale.ref}`} title="Receipt">
                    <Printer size={15} />
                  </button>
                  {onEdit ? (
                    <button type="button" className="icon-button" onClick={() => onEdit(sale)} aria-label={`Edit ${sale.ref}`} title="Edit sale">
                      <Edit3 size={15} />
                    </button>
                  ) : null}
                  {onDelete ? (
                    <button type="button" className="icon-button danger" onClick={() => onDelete(sale)} aria-label={`Delete ${sale.ref}`} title="Delete sale">
                      <Trash2 size={15} />
                    </button>
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InventoryPanel({
  items,
  status,
  onAdd,
  onEdit,
  onDelete
}: {
  items: InventoryItem[];
  status: string;
  onAdd: () => void;
  onEdit: (item: InventoryItem) => void;
  onDelete: (item: InventoryItem) => void;
}) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Stock control</p>
          <h2>Inventory</h2>
        </div>
        <button type="button" className="small-action" onClick={onAdd}>
          <PackagePlus size={15} /> Add item
        </button>
      </div>
      {status ? (
        <div className="inline-alert" role="status">
          {status}
        </div>
      ) : null}
      <div className="inventory-grid">
        {items.map((item) => (
          <article key={item.id} className="inventory-card">
            <div>
              <span>{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.supplier}</p>
            </div>
            <div className="inventory-meta">
              <strong>{formatGhs(item.price)}</strong>
              <em>{item.isService ? "Service" : `${item.stock} ${item.unit}s`}</em>
              <div className="card-actions">
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => onEdit(item)}
                  aria-label={`Edit ${item.name}`}
                  title="Edit item"
                >
                  <Edit3 size={16} />
                </button>
                <button
                  type="button"
                  className="icon-button danger"
                  onClick={() => onDelete(item)}
                  aria-label={`Delete ${item.name}`}
                  title="Delete item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function InventoryEditor({
  form,
  title,
  pending,
  onChange,
  onCancel,
  onSave
}: {
  form: InventoryFormState;
  title: string;
  pending: boolean;
  onChange: (form: InventoryFormState) => void;
  onCancel: () => void;
  onSave: () => void;
}) {
  function update<Key extends keyof InventoryFormState>(key: Key, value: InventoryFormState[Key]) {
    onChange({ ...form, [key]: value });
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="inventory-modal" role="dialog" aria-modal="true" aria-labelledby="inventory-editor-title">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Stock control</p>
            <h2 id="inventory-editor-title">{title}</h2>
          </div>
          <button type="button" className="icon-button" onClick={onCancel} aria-label="Close editor" title="Close">
            <X size={18} />
          </button>
        </div>

        <div className="form-grid">
          <label>
            <span>Name</span>
            <input value={form.name} onChange={(event) => update("name", event.target.value)} />
          </label>
          <label>
            <span>Category</span>
            <input value={form.category} onChange={(event) => update("category", event.target.value)} />
          </label>
          <label>
            <span>Supplier</span>
            <input value={form.supplier} onChange={(event) => update("supplier", event.target.value)} />
          </label>
          <label>
            <span>Unit</span>
            <input value={form.unit} onChange={(event) => update("unit", event.target.value)} />
          </label>
          <label>
            <span>Price</span>
            <input type="number" min="0" step="0.01" value={form.price} onChange={(event) => update("price", event.target.value)} />
          </label>
          <label>
            <span>Stock</span>
            <input type="number" min="0" step="0.01" value={form.stock} onChange={(event) => update("stock", event.target.value)} />
          </label>
          <label>
            <span>Low stock threshold</span>
            <input type="number" min="0" step="0.01" value={form.threshold} onChange={(event) => update("threshold", event.target.value)} />
          </label>
          <label className="check-row editor-check">
            <input
              type="checkbox"
              checked={form.isService}
              onChange={(event) => update("isService", event.target.checked)}
            />
            <span>Service item</span>
          </label>
        </div>

        <div className="modal-actions">
          <button type="button" className="secondary-action" onClick={onCancel} disabled={pending}>
            Cancel
          </button>
          <button type="button" className="primary-action" onClick={onSave} disabled={pending}>
            <Save size={18} /> {pending ? "Saving..." : "Save item"}
          </button>
        </div>
      </section>
    </div>
  );
}

function SuppliersPanel({
  rows,
  onAdd,
  onEdit,
  onDelete
}: {
  rows: SupplierRecord[];
  onAdd: () => void;
  onEdit: (row: SupplierRecord) => void;
  onDelete: (row: SupplierRecord) => void;
}) {
  const listRows = rows.map((row) => ({ ...row, raw: row }));
  return <SimpleList title="Suppliers" eyebrow="Vendor contacts" rows={listRows} onAdd={onAdd} onEdit={(row) => onEdit(row.raw as SupplierRecord)} onDelete={(row) => onDelete(row.raw as SupplierRecord)} />;
}

function PurchasesPanel({
  rows,
  onAdd,
  onEdit,
  onDelete
}: {
  rows: PurchaseRecord[];
  onAdd: () => void;
  onEdit: (row: PurchaseRecord) => void;
  onDelete: (row: PurchaseRecord) => void;
}) {
  const listRows = rows.map((row) => ({
    id: row.id,
    name: row.name,
    category: row.category,
    phone: `${row.quantity} units · ${formatGhs(row.unitCost)} · ${row.date}`,
    active: row.active,
    raw: row
  }));
  return <SimpleList title="Purchases / Stock Intake" eyebrow="Restock records" rows={listRows} onAdd={onAdd} onEdit={(row) => onEdit(row.raw as PurchaseRecord)} onDelete={(row) => onDelete(row.raw as PurchaseRecord)} />;
}

function ExpensesPanel({
  rows,
  onAdd,
  onEdit,
  onDelete
}: {
  rows: ExpenseRecord[];
  onAdd: () => void;
  onEdit: (row: ExpenseRecord) => void;
  onDelete: (row: ExpenseRecord) => void;
}) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Business costs</p>
          <h2>Expenses</h2>
        </div>
        <button type="button" className="small-action" onClick={onAdd}>
          <WalletCards size={15} /> Add expense
        </button>
      </div>
      <div className="stack-list">
        {rows.map((expense) => (
          <div key={expense.id} className="stack-row">
            <div>
              <strong>{expense.category}</strong>
              <span>{expense.date} · {expense.method} · {expense.staff}</span>
            </div>
            <em>{formatGhs(expense.amount)}</em>
            <RowActions onEdit={() => onEdit(expense)} onDelete={() => onDelete(expense)} label={expense.category} />
          </div>
        ))}
      </div>
    </section>
  );
}

function QuotesPanel({
  rows,
  onAdd,
  onEdit,
  onDelete
}: {
  rows: QuoteRecord[];
  onAdd: () => void;
  onEdit: (row: QuoteRecord) => void;
  onDelete: (row: QuoteRecord) => void;
}) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Customer requests</p>
          <h2>Quotes / Orders</h2>
        </div>
        <button type="button" className="small-action" onClick={onAdd}>
          <ClipboardList size={15} /> Add quote
        </button>
      </div>
      <div className="stack-list">
        {rows.map((quote) => (
          <div key={quote.id} className="stack-row">
            <div>
              <strong>{quote.customer}</strong>
              <span>{quote.phone} · {quote.request}</span>
            </div>
            <span className="status paid">{quote.status}</span>
            <RowActions onEdit={() => onEdit(quote)} onDelete={() => onDelete(quote)} label={quote.customer} />
          </div>
        ))}
      </div>
    </section>
  );
}

function CustomersPanel({
  rows,
  onAdd,
  onEdit,
  onDelete
}: {
  rows: CustomerRecord[];
  onAdd: () => void;
  onEdit: (row: CustomerRecord) => void;
  onDelete: (row: CustomerRecord) => void;
}) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Buying history</p>
          <h2>Customers</h2>
        </div>
        <button type="button" className="small-action" onClick={onAdd}>
          <Users size={15} /> Add customer
        </button>
      </div>
      <div className="inventory-grid">
        {rows.map((customer) => (
          <article key={customer.id} className="inventory-card">
            <div>
              <span>{customer.phone}</span>
              <h3>{customer.name}</h3>
              <p>{customer.visits} visits</p>
            </div>
            <div className="inventory-meta">
              <strong>{formatGhs(customer.balance)}</strong>
              <em>Balance</em>
              <div className="card-actions">
                <RowActions onEdit={() => onEdit(customer)} onDelete={() => onDelete(customer)} label={customer.name} />
              </div>
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

function StaffPanel({
  rows,
  onAdd,
  onEdit,
  onDelete
}: {
  rows: StaffRecord[];
  onAdd: () => void;
  onEdit: (row: StaffRecord) => void;
  onDelete: (row: StaffRecord) => void;
}) {
  const listRows = rows.map((row) => ({
    id: row.id,
    name: row.name,
    category: row.role,
    phone: row.email,
    active: row.active,
    raw: row
  }));
  return <SimpleList title="Staff Accounts" eyebrow="Role-based access" rows={listRows} onAdd={onAdd} onEdit={(row) => onEdit(row.raw as StaffRecord)} onDelete={(row) => onDelete(row.raw as StaffRecord)} />;
}

function SettingsPanel({ settings, onEdit }: { settings: SettingsRecord; onEdit: () => void }) {
  return (
    <section className="panel settings-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Business profile</p>
          <h2>Settings</h2>
        </div>
        <button type="button" className="small-action" onClick={onEdit}>
          <Edit3 size={15} /> Edit settings
        </button>
      </div>
      <div className="settings-layout">
        <Image src={brand.logo} alt={`${brand.name} logo`} width={220} height={135} />
        <div className="form-grid">
          <label>
            <span>Business name</span>
            <input value={settings.name} readOnly />
          </label>
          <label>
            <span>Phone numbers</span>
            <input value={settings.phones} readOnly />
          </label>
          <label>
            <span>Location</span>
            <input value={settings.location} readOnly />
          </label>
          <label>
            <span>Receipt footer</span>
            <input value={settings.receiptFooter} readOnly />
          </label>
        </div>
      </div>
    </section>
  );
}

function SimpleList({
  title,
  eyebrow,
  rows,
  onAdd,
  onEdit,
  onDelete
}: {
  title: string;
  eyebrow: string;
  rows: { id?: string; name: string; category: string; phone: string; active: boolean; raw?: unknown }[];
  onAdd?: () => void;
  onEdit?: (row: { id?: string; name: string; category: string; phone: string; active: boolean; raw?: unknown }) => void;
  onDelete?: (row: { id?: string; name: string; category: string; phone: string; active: boolean; raw?: unknown }) => void;
}) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        {onAdd ? (
          <button type="button" className="small-action" onClick={onAdd}>
            <PackagePlus size={15} /> Add
          </button>
        ) : null}
      </div>
      <div className="stack-list">
        {rows.map((row) => (
          <div key={row.id ?? `${row.name}-${row.phone}`} className="stack-row">
            <div>
              <strong>{row.name}</strong>
              <span>{row.category} · {row.phone}</span>
            </div>
            <span className={row.active ? "status paid" : "status part-paid"}>
              {row.active ? "Active" : "Inactive"}
            </span>
            {onEdit && onDelete ? (
              <RowActions onEdit={() => onEdit(row)} onDelete={() => onDelete(row)} label={row.name} />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function RowActions({
  onEdit,
  onDelete,
  label
}: {
  onEdit: () => void;
  onDelete: () => void;
  label: string;
}) {
  return (
    <div className="row-actions">
      <button type="button" className="icon-button" onClick={onEdit} aria-label={`Edit ${label}`} title="Edit">
        <Edit3 size={15} />
      </button>
      <button type="button" className="icon-button danger" onClick={onDelete} aria-label={`Delete ${label}`} title="Delete">
        <Trash2 size={15} />
      </button>
    </div>
  );
}

function ManagedEditor({
  editor,
  pending,
  onChange,
  onCancel,
  onSave
}: {
  editor: ManagedEditorState;
  pending: boolean;
  onChange: (name: string, value: string) => void;
  onCancel: () => void;
  onSave: () => void;
}) {
  return (
    <div className="modal-backdrop" role="presentation">
      <section className="inventory-modal" role="dialog" aria-modal="true" aria-labelledby="managed-editor-title">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Admin management</p>
            <h2 id="managed-editor-title">{editor.title}</h2>
          </div>
          <button type="button" className="icon-button" onClick={onCancel} aria-label="Close editor" title="Close">
            <X size={18} />
          </button>
        </div>

        <div className="form-grid">
          {editor.fields.map((field) => (
            <label key={field.name}>
              <span>{field.label}</span>
              {field.type === "select" ? (
                <select value={field.value} onChange={(event) => onChange(field.name, event.target.value)}>
                  {(field.options ?? []).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type ?? "text"}
                  min={field.type === "number" ? "0" : undefined}
                  step={field.type === "number" ? "0.01" : undefined}
                  value={field.value}
                  onChange={(event) => onChange(field.name, event.target.value)}
                />
              )}
            </label>
          ))}
        </div>

        <div className="modal-actions">
          <button type="button" className="secondary-action" onClick={onCancel} disabled={pending}>
            Cancel
          </button>
          <button type="button" className="primary-action" onClick={onSave} disabled={pending}>
            <Save size={18} /> {pending ? "Saving..." : "Save changes"}
          </button>
        </div>
      </section>
    </div>
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
