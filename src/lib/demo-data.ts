export type InventoryItem = {
  id: string;
  name: string;
  category: string;
  unit: string;
  price: number;
  stock: number;
  threshold: number;
  supplier: string;
  isService?: boolean;
};

export type SaleItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type Sale = {
  ref: string;
  customer: string;
  phone: string;
  date: string;
  method: string;
  staff: string;
  status: "Paid" | "Part paid" | "Overpaid";
  items: SaleItem[];
  discount: number;
  paid: number;
  total?: number;
  notes?: string;
};

export const inventory: InventoryItem[] = [
  {
    id: "cement-ghacem",
    name: "Ghacem Cement",
    category: "Cement",
    unit: "bag",
    price: 98,
    stock: 146,
    threshold: 35,
    supplier: "Adeiso Depot"
  },
  {
    id: "wood-2x4",
    name: "Treated Wood 2x4",
    category: "Wood",
    unit: "piece",
    price: 42,
    stock: 68,
    threshold: 20,
    supplier: "Central Timber"
  },
  {
    id: "rod-12mm",
    name: "Reinforcement Rod 12mm",
    category: "Steel rods",
    unit: "length",
    price: 115,
    stock: 18,
    threshold: 25,
    supplier: "Eastern Steel"
  },
  {
    id: "paint-savanna",
    name: "Savanna Paint",
    category: "Paint",
    unit: "bucket",
    price: 185,
    stock: 32,
    threshold: 12,
    supplier: "Paint House Ghana"
  },
  {
    id: "nails-4-inch",
    name: "4 Inch Nails",
    category: "Hardware",
    unit: "box",
    price: 58,
    stock: 54,
    threshold: 16,
    supplier: "Hardware Market"
  },
  {
    id: "mixer-service",
    name: "Concrete Mixer Service",
    category: "Equipment services",
    unit: "hour",
    price: 220,
    stock: 0,
    threshold: 0,
    supplier: "In-house",
    isService: true
  }
];

export const recentSales: Sale[] = [
  {
    ref: "KKD-260519-001",
    customer: "Walk-in",
    phone: "",
    date: "2026-05-19 09:18",
    method: "Cash",
    staff: "Admin",
    status: "Paid",
    items: [
      { id: "cement-ghacem", name: "Ghacem Cement", quantity: 12, price: 98 },
      { id: "nails-4-inch", name: "4 Inch Nails", quantity: 2, price: 58 }
    ],
    discount: 20,
    paid: 1272
  },
  {
    ref: "KKD-260519-002",
    customer: "Point 3 Project",
    phone: "0244000000",
    date: "2026-05-19 10:42",
    method: "Mobile Money",
    staff: "Staff",
    status: "Part paid",
    items: [{ id: "rod-12mm", name: "Reinforcement Rod 12mm", quantity: 15, price: 115 }],
    discount: 0,
    paid: 1200,
    notes: "Balance due after delivery."
  },
  {
    ref: "KKD-260518-006",
    customer: "Asona Builders",
    phone: "0249111111",
    date: "2026-05-18 16:05",
    method: "Bank Transfer",
    staff: "Admin",
    status: "Paid",
    items: [
      { id: "paint-savanna", name: "Savanna Paint", quantity: 8, price: 185 },
      { id: "wood-2x4", name: "Treated Wood 2x4", quantity: 20, price: 42 }
    ],
    discount: 50,
    paid: 2270
  }
];

export const suppliers = [
  { name: "Adeiso Depot", phone: "0245551000", category: "Cement", active: true },
  { name: "Central Timber", phone: "0245552000", category: "Wood", active: true },
  { name: "Eastern Steel", phone: "0245553000", category: "Steel rods", active: true }
];

export const expenses = [
  { category: "Transport", amount: 350, method: "Cash", date: "2026-05-19", staff: "Admin" },
  { category: "Loading boys", amount: 120, method: "Cash", date: "2026-05-18", staff: "Staff" },
  { category: "Shop utilities", amount: 275, method: "Mobile Money", date: "2026-05-17", staff: "Admin" }
];

export const quotes = [
  { customer: "Ama Construction", phone: "0247000000", request: "Ghacem Cement", quantity: "80", totalAmount: 7840, status: "New" },
  { customer: "Kojo Mensah", phone: "0247111111", request: "Roofing sheets and delivery", quantity: "1", totalAmount: 0, status: "Quoted" },
  { customer: "Site Foreman", phone: "0247222222", request: "Concrete Mixer Service", quantity: "16", totalAmount: 3520, status: "Reviewed" }
];

export const customers = [
  { name: "Point 3 Project", phone: "0244000000", balance: 525, visits: 8 },
  { name: "Asona Builders", phone: "0249111111", balance: 0, visits: 14 },
  { name: "Ama Construction", phone: "0247000000", balance: 0, visits: 3 }
];
