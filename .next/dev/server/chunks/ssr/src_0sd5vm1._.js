module.exports = [
"[project]/src/lib/brand.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brand",
    ()=>brand,
    "phoneLine",
    ()=>phoneLine
]);
const brand = {
    name: "K.K. Danny Enterprise",
    shortName: "K.K. Danny",
    tagline: "Building Materials & Services",
    location: "Adeiso, Ghana",
    address: "Opp. Radiance Gas filling station, Near Point 3 Hotel.",
    phones: [
        "02444754803",
        "0249986118",
        "0240268125"
    ],
    logo: "/logo.jpeg"
};
const phoneLine = brand.phones.join(" / ");
}),
"[project]/src/lib/currency.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatGhs",
    ()=>formatGhs
]);
function formatGhs(value) {
    return `GHS ${value.toLocaleString("en-GH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}
}),
"[project]/src/lib/supabase/env.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabaseAdminConfig",
    ()=>getSupabaseAdminConfig,
    "getSupabaseConfig",
    ()=>getSupabaseConfig,
    "hasSupabaseEnv",
    ()=>hasSupabaseEnv
]);
function getSupabaseConfig() {
    const url = ("TURBOPACK compile-time value", "");
    const key = ("TURBOPACK compile-time value", "") ?? ("TURBOPACK compile-time value", "");
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
function hasSupabaseEnv() {
    return Boolean(getSupabaseConfig());
}
function getSupabaseAdminConfig() {
    const url = ("TURBOPACK compile-time value", "");
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/lib/supabase/browser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBrowserSupabaseClient",
    ()=>createBrowserSupabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/env.ts [app-ssr] (ecmascript)");
"use client";
;
;
function createBrowserSupabaseClient() {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabaseConfig"])();
    if (!config) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(config.url, config.key);
}
}),
"[project]/src/lib/demo-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customers",
    ()=>customers,
    "expenses",
    ()=>expenses,
    "inventory",
    ()=>inventory,
    "quotes",
    ()=>quotes,
    "recentSales",
    ()=>recentSales,
    "suppliers",
    ()=>suppliers
]);
const inventory = [
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
const recentSales = [
    {
        ref: "KKD-260519-001",
        customer: "Walk-in",
        phone: "",
        date: "2026-05-19 09:18",
        method: "Cash",
        staff: "Admin",
        status: "Paid",
        items: [
            {
                id: "cement-ghacem",
                name: "Ghacem Cement",
                quantity: 12,
                price: 98
            },
            {
                id: "nails-4-inch",
                name: "4 Inch Nails",
                quantity: 2,
                price: 58
            }
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
        items: [
            {
                id: "rod-12mm",
                name: "Reinforcement Rod 12mm",
                quantity: 15,
                price: 115
            }
        ],
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
            {
                id: "paint-savanna",
                name: "Savanna Paint",
                quantity: 8,
                price: 185
            },
            {
                id: "wood-2x4",
                name: "Treated Wood 2x4",
                quantity: 20,
                price: 42
            }
        ],
        discount: 50,
        paid: 2270
    }
];
const suppliers = [
    {
        name: "Adeiso Depot",
        phone: "0245551000",
        category: "Cement",
        active: true
    },
    {
        name: "Central Timber",
        phone: "0245552000",
        category: "Wood",
        active: true
    },
    {
        name: "Eastern Steel",
        phone: "0245553000",
        category: "Steel rods",
        active: true
    }
];
const expenses = [
    {
        category: "Transport",
        amount: 350,
        method: "Cash",
        date: "2026-05-19",
        staff: "Admin"
    },
    {
        category: "Loading boys",
        amount: 120,
        method: "Cash",
        date: "2026-05-18",
        staff: "Staff"
    },
    {
        category: "Shop utilities",
        amount: 275,
        method: "Mobile Money",
        date: "2026-05-17",
        staff: "Admin"
    }
];
const quotes = [
    {
        customer: "Ama Construction",
        phone: "0247000000",
        request: "Ghacem Cement",
        quantity: "80",
        totalAmount: 7840,
        status: "New"
    },
    {
        customer: "Kojo Mensah",
        phone: "0247111111",
        request: "Roofing sheets and delivery",
        quantity: "1",
        totalAmount: 0,
        status: "Quoted"
    },
    {
        customer: "Site Foreman",
        phone: "0247222222",
        request: "Concrete Mixer Service",
        quantity: "16",
        totalAmount: 3520,
        status: "Reviewed"
    }
];
const customers = [
    {
        name: "Point 3 Project",
        phone: "0244000000",
        balance: 525,
        visits: 8
    },
    {
        name: "Asona Builders",
        phone: "0249111111",
        balance: 0,
        visits: 14
    },
    {
        name: "Ama Construction",
        phone: "0247000000",
        balance: 0,
        visits: 3
    }
];
}),
"[project]/src/app/admin/dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminDashboard",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-dollar-sign.js [app-ssr] (ecmascript) <export default as BadgeDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-ssr] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-plus.js [app-ssr] (ecmascript) <export default as PackagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt-text.js [app-ssr] (ecmascript) <export default as ReceiptText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-cog.js [app-ssr] (ecmascript) <export default as UserCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet-cards.js [app-ssr] (ecmascript) <export default as WalletCards>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/currency.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/browser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const demoStorageKeys = {
    inventory: "kk-danny-demo-inventory-v1"
};
const navItems = [
    {
        key: "dashboard",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        key: "pos",
        label: "POS",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"]
    },
    {
        key: "sales",
        label: "Sales",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__["ReceiptText"]
    },
    {
        key: "inventory",
        label: "Inventory",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"]
    },
    {
        key: "suppliers",
        label: "Suppliers",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"]
    },
    {
        key: "purchases",
        label: "Purchases",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"]
    },
    {
        key: "expenses",
        label: "Expenses",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__["WalletCards"]
    },
    {
        key: "quotes",
        label: "Quotes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
    },
    {
        key: "customers",
        label: "Customers",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        key: "reports",
        label: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        key: "staff",
        label: "Staff",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"]
    },
    {
        key: "settings",
        label: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
function saleTotal(sale) {
    if (typeof sale.total === "number") {
        return sale.total;
    }
    return sale.items.reduce((sum, item)=>sum + item.price * item.quantity, 0) - sale.discount;
}
function parseSaleDate(dateStr) {
    if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
        return new Date(dateStr.replace(" ", "T"));
    }
    const m = dateStr.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
    if (m) return new Date(`${m[3]}-${m[2]}-${m[1]}`);
    return null;
}
function computeRevenueBars(sales) {
    const now = new Date();
    return Array.from({
        length: 6
    }, (_, i)=>{
        const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
        const label = d.toLocaleString("en-GB", {
            month: "short"
        });
        const value = sales.filter((sale)=>{
            const sd = parseSaleDate(sale.date);
            return sd !== null && sd.getFullYear() === d.getFullYear() && sd.getMonth() === d.getMonth();
        }).reduce((sum, sale)=>sum + saleTotal(sale), 0);
        return {
            label,
            value
        };
    });
}
function statusFor(total, paid) {
    if (paid > total) return "Overpaid";
    if (paid < total) return "Part paid";
    return "Paid";
}
function saleStatusToDatabase(status) {
    return status === "Part paid" ? "part_paid" : status.toLowerCase();
}
function inventoryRowToItem(row) {
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
function inventoryItemToForm(item) {
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
function readStoredDemoInventory() {
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
function writeStoredDemoInventory(items) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function fieldValue(fields, name) {
    return fields.find((field)=>field.name === name)?.value ?? "";
}
function toNumber(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
}
function moneyInputToNumber(value) {
    if (value.trim() === "") {
        return 0;
    }
    const parsed = Number(value);
    return Number.isFinite(parsed) ? Math.max(parsed, 0) : 0;
}
function sameItemName(left, right) {
    return left.trim().toLowerCase() === right.trim().toLowerCase();
}
function makeDemoId(prefix) {
    return `${prefix}-${Date.now()}`;
}
function titleCaseStatus(value) {
    return value.split("_").map((part)=>part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}
function isLegacyReceiptCopyNote(value) {
    return value?.trim().toLowerCase() === [
        "customer",
        "copy"
    ].join(" ");
}
function parseQuoteDetails(value) {
    if (typeof value !== "string" || !value.trim()) {
        return {
            totalAmount: 0,
            items: []
        };
    }
    try {
        const parsed = JSON.parse(value);
        const items = Array.isArray(parsed.items) ? parsed.items.filter((item)=>typeof item?.id === "string" && typeof item?.name === "string").map((item)=>({
                id: item.id,
                name: item.name,
                quantity: Number.isFinite(Number(item.quantity)) ? Number(item.quantity) : 1,
                price: Number.isFinite(Number(item.price)) ? Number(item.price) : 0
            })) : [];
        return {
            totalAmount: Number.isFinite(Number(parsed.totalAmount)) ? Number(parsed.totalAmount) : 0,
            items
        };
    } catch  {
        return {
            totalAmount: toNumber(value),
            items: []
        };
    }
}
function quoteRecordToCart(quote) {
    if (!quote) {
        return [];
    }
    if (quote.items?.length) {
        return quote.items;
    }
    const names = quote.request.split(/\r?\n|,/).map((item)=>item.trim()).filter(Boolean);
    const quantities = quote.quantity.split(/\r?\n|,/).map((item)=>Number(item.trim())).filter((value)=>Number.isFinite(value) && value > 0);
    return names.map((name, index)=>({
            id: `quote-${index}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
            name,
            quantity: quantities[index] ?? 1,
            price: index === 0 && quote.totalAmount > 0 ? quote.totalAmount / (quantities[index] || 1) : 0
        }));
}
function saleToFields(sale) {
    return [
        {
            name: "customer",
            label: "Customer",
            value: sale?.customer ?? "Walk-in"
        },
        {
            name: "phone",
            label: "Phone",
            value: sale?.phone ?? ""
        },
        {
            name: "method",
            label: "Payment method",
            value: sale?.method ?? "Cash",
            type: "select",
            options: [
                "Cash",
                "Mobile Money",
                "Bank Transfer",
                "Card"
            ]
        },
        {
            name: "status",
            label: "Status",
            value: sale?.status ?? "Paid",
            type: "select",
            options: [
                "Paid",
                "Part paid",
                "Overpaid"
            ]
        },
        {
            name: "paid",
            label: "Amount paid",
            value: String(sale?.paid ?? 0),
            type: "number"
        },
        {
            name: "discount",
            label: "Discount",
            value: String(sale?.discount ?? 0),
            type: "number"
        },
        {
            name: "notes",
            label: "Notes",
            value: sale?.notes ?? ""
        }
    ];
}
function supplierToFields(supplier) {
    return [
        {
            name: "name",
            label: "Supplier name",
            value: supplier?.name ?? ""
        },
        {
            name: "category",
            label: "Category/contact",
            value: supplier?.category ?? ""
        },
        {
            name: "phone",
            label: "Phone",
            value: supplier?.phone ?? ""
        },
        {
            name: "active",
            label: "Status",
            value: supplier?.active === false ? "Inactive" : "Active",
            type: "select",
            options: [
                "Active",
                "Inactive"
            ]
        }
    ];
}
function purchaseToFields(purchase) {
    return [
        {
            name: "name",
            label: "Item",
            value: purchase?.name ?? ""
        },
        {
            name: "category",
            label: "Supplier",
            value: purchase?.category ?? ""
        },
        {
            name: "quantity",
            label: "Quantity",
            value: String(purchase?.quantity ?? 0),
            type: "number"
        },
        {
            name: "unitCost",
            label: "Unit cost",
            value: String(purchase?.unitCost ?? 0),
            type: "number"
        },
        {
            name: "date",
            label: "Purchase date",
            value: purchase?.date ?? new Date().toISOString().slice(0, 10),
            type: "date"
        },
        {
            name: "active",
            label: "Status",
            value: purchase?.active === false ? "Inactive" : "Active",
            type: "select",
            options: [
                "Active",
                "Inactive"
            ]
        }
    ];
}
function expenseToFields(expense) {
    return [
        {
            name: "category",
            label: "Category",
            value: expense?.category ?? ""
        },
        {
            name: "amount",
            label: "Amount",
            value: String(expense?.amount ?? 0),
            type: "number"
        },
        {
            name: "method",
            label: "Payment method",
            value: expense?.method ?? "Cash",
            type: "select",
            options: [
                "Cash",
                "Mobile Money",
                "Bank Transfer",
                "Card"
            ]
        },
        {
            name: "date",
            label: "Expense date",
            value: expense?.date ?? new Date().toISOString().slice(0, 10),
            type: "date"
        },
        {
            name: "staff",
            label: "Staff/notes",
            value: expense?.staff ?? ""
        },
        {
            name: "active",
            label: "Status",
            value: expense?.active === false ? "Inactive" : "Active",
            type: "select",
            options: [
                "Active",
                "Inactive"
            ]
        }
    ];
}
function quoteToFields(quote) {
    return [
        {
            name: "customer",
            label: "Customer",
            value: quote?.customer ?? ""
        },
        {
            name: "phone",
            label: "Phone",
            value: quote?.phone ?? ""
        },
        {
            name: "request",
            label: "Item",
            value: quote?.request ?? ""
        },
        {
            name: "quantity",
            label: "Quantity",
            value: quote?.quantity ?? "",
            type: "number"
        },
        {
            name: "totalAmount",
            label: "Total amount",
            value: String(quote?.totalAmount ?? 0),
            type: "number"
        },
        {
            name: "status",
            label: "Status",
            value: quote?.status ?? "New",
            type: "select",
            options: [
                "New",
                "Reviewed",
                "Quoted",
                "Completed",
                "Cancelled"
            ]
        },
        {
            name: "active",
            label: "Record status",
            value: quote?.active === false ? "Inactive" : "Active",
            type: "select",
            options: [
                "Active",
                "Inactive"
            ]
        }
    ];
}
function customerToFields(customer) {
    return [
        {
            name: "name",
            label: "Customer name",
            value: customer?.name ?? ""
        },
        {
            name: "phone",
            label: "Phone",
            value: customer?.phone ?? ""
        },
        {
            name: "balance",
            label: "Balance",
            value: String(customer?.balance ?? 0),
            type: "number"
        },
        {
            name: "visits",
            label: "Visits",
            value: String(customer?.visits ?? 0),
            type: "number"
        },
        {
            name: "active",
            label: "Status",
            value: customer?.active === false ? "Inactive" : "Active",
            type: "select",
            options: [
                "Active",
                "Inactive"
            ]
        }
    ];
}
function staffToFields(staff) {
    const isEditing = Boolean(staff);
    return [
        {
            name: "name",
            label: "Full name",
            value: staff?.name ?? ""
        },
        {
            name: "email",
            label: "Email",
            value: staff?.email ?? ""
        },
        {
            name: "password",
            label: isEditing ? "New password" : "Password",
            value: "",
            type: "password"
        },
        {
            name: "role",
            label: "Role",
            value: staff?.role ?? "staff",
            type: "select",
            options: [
                "admin",
                "staff"
            ]
        },
        {
            name: "active",
            label: "Status",
            value: staff?.active === false ? "Inactive" : "Active",
            type: "select",
            options: [
                "Active",
                "Inactive"
            ]
        }
    ];
}
function settingsToFields(settings) {
    return [
        {
            name: "name",
            label: "Business name",
            value: settings.name
        },
        {
            name: "location",
            label: "Location",
            value: settings.location
        },
        {
            name: "phones",
            label: "Phone numbers",
            value: settings.phones
        },
        {
            name: "receiptFooter",
            label: "Receipt footer",
            value: settings.receiptFooter
        }
    ];
}
function AdminDashboard({ userEmail, userName, isDemo }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customer, setCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Walk-in");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [quoteCustomer, setQuoteCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [quotePhone, setQuotePhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [quoteCart, setQuoteCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingQuote, setEditingQuote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [quoteEditorOpen, setQuoteEditorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [discountInput, setDiscountInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0");
    const [amountPaidInput, setAmountPaidInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0");
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Cash");
    const [receipt, setReceipt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [quotePreview, setQuotePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inventoryItems, setInventoryItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isDemo ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventory"] : []);
    const [inventoryStatus, setInventoryStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inventoryForm, setInventoryForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(inventoryItemToForm());
    const [inventoryFormOpen, setInventoryFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inventoryPending, setInventoryPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [salesRecords, setSalesRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isDemo ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recentSales"] : []);
    const [supplierRecords, setSupplierRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [purchaseRecords, setPurchaseRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isDemo ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventory"].slice(0, 4).map((item)=>({
            id: `purchase-${item.id}`,
            name: item.name,
            category: item.supplier,
            quantity: item.stock,
            unitCost: item.price,
            date: "2026-05-19",
            active: true
        })) : []);
    const [expenseRecords, setExpenseRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isDemo ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expenses"].map((expense, index)=>({
            id: `expense-${index}`,
            category: expense.category,
            amount: expense.amount,
            method: expense.method,
            date: expense.date,
            staff: expense.staff,
            active: true
        })) : []);
    const [quoteRecords, setQuoteRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isDemo ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quotes"].map((quote, index)=>({
            id: `quote-${index}`,
            customer: quote.customer,
            phone: quote.phone,
            request: quote.request,
            quantity: quote.quantity ?? "",
            totalAmount: quote.totalAmount ?? 0,
            status: quote.status,
            active: true
        })) : []);
    const [customerRecords, setCustomerRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isDemo ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customers"].map((customer, index)=>({
            id: `customer-${index}`,
            name: customer.name,
            phone: customer.phone,
            balance: customer.balance,
            visits: customer.visits,
            active: true
        })) : []);
    const [staffRecords, setStaffRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isDemo ? [
        {
            id: "staff-admin",
            name: "Admin",
            role: "admin",
            email: "admin@kkdanny.com",
            active: true
        },
        {
            id: "staff-shop",
            name: "Shop Staff",
            role: "staff",
            email: "staff@kkdanny.com",
            active: true
        },
        {
            id: "staff-accounts",
            name: "Accounts",
            role: "admin",
            email: "accounts@kkdanny.com",
            active: true
        }
    ] : []);
    const [settingsRecord, setSettingsRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name,
        location: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].location,
        phones: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phoneLine"],
        receiptFooter: "Thank you for your patronage!"
    });
    const [managedEditor, setManagedEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [managedStatus, setManagedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [managedPending, setManagedPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dashboardPeriod, setDashboardPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("today");
    const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cart.reduce((sum, item)=>sum + item.quantity * item.price, 0), [
        cart
    ]);
    const discount = moneyInputToNumber(discountInput);
    const amountPaid = moneyInputToNumber(amountPaidInput);
    const total = Math.max(subtotal - discount, 0);
    const lowStock = inventoryItems.filter((item)=>!item.isService && item.stock <= item.threshold);
    const dashboardSales = salesRecords.filter((sale)=>isWithinReportPeriod(sale.date, dashboardPeriod));
    const dashboardRevenue = dashboardSales.reduce((sum, sale)=>sum + saleTotal(sale), 0);
    const dashboardSalesCount = dashboardSales.length;
    const dashboardDiscount = dashboardSales.reduce((sum, sale)=>sum + sale.discount, 0);
    const pendingQuotesCount = quoteRecords.filter((q)=>q.status === "New").length;
    const activeLabel = navItems.find((item)=>item.key === active)?.label ?? "Dashboard";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isDemo) {
            return;
        }
        const storedInventory = readStoredDemoInventory();
        if (storedInventory) {
            setInventoryItems(storedInventory);
        }
    }, [
        isDemo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDemo) {
            return;
        }
        let ignore = false;
        async function loadInventory() {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserSupabaseClient"])();
            if (!supabase) {
                return;
            }
            const { data, error } = await supabase.from("inventory_items").select("id,name,category,unit,price,stock,threshold,supplier,is_service").eq("active", true).order("name", {
                ascending: true
            });
            if (ignore) {
                return;
            }
            if (error) {
                setInventoryStatus(error.message);
                return;
            }
            setInventoryItems((data ?? []).map(inventoryRowToItem));
            setInventoryStatus("");
            const [suppliersResult, purchasesResult, expensesResult, quotesResult, customersResult, salesResult, profilesResult, settingsResult] = await Promise.all([
                supabase.from("suppliers").select("id,name,phone,contact_person,active").order("name", {
                    ascending: true
                }),
                supabase.from("purchases").select("id,item_name,supplier_name,quantity,unit_cost,purchase_date,active").eq("active", true).order("purchase_date", {
                    ascending: false
                }),
                supabase.from("expenses").select("id,category,amount,expense_date,payment_method,notes,active").eq("active", true).order("expense_date", {
                    ascending: false
                }),
                supabase.from("quote_requests").select("id,customer_name,phone,requested_items,quantity,details,status,active").eq("active", true).order("created_at", {
                    ascending: false
                }),
                supabase.from("customers").select("id,name,phone,balance,visits,active").eq("active", true).order("name", {
                    ascending: true
                }),
                supabase.from("sales").select("id,sale_ref,customer_name,customer_phone,payment_method,status,total,amount_paid,discount,notes,created_at,active").eq("active", true).order("created_at", {
                    ascending: false
                }),
                supabase.from("profiles").select("id,email,full_name,role,is_active").order("email", {
                    ascending: true
                }),
                supabase.from("business_settings").select("key,value").in("key", [
                    "profile",
                    "receipt"
                ])
            ]);
            if (suppliersResult.data) {
                setSupplierRecords(suppliersResult.data.map((row)=>({
                        id: row.id,
                        name: row.name,
                        category: row.contact_person ?? "",
                        phone: row.phone ?? "",
                        active: row.active
                    })));
            }
            if (purchasesResult.data) {
                setPurchaseRecords(purchasesResult.data.map((row)=>({
                        id: row.id,
                        name: row.item_name,
                        category: row.supplier_name ?? "",
                        quantity: Number(row.quantity),
                        unitCost: Number(row.unit_cost),
                        date: row.purchase_date,
                        active: row.active
                    })));
            }
            if (expensesResult.data) {
                setExpenseRecords(expensesResult.data.map((row)=>({
                        id: row.id,
                        category: row.category,
                        amount: Number(row.amount),
                        method: row.payment_method,
                        date: row.expense_date,
                        staff: row.notes ?? "",
                        active: row.active
                    })));
            }
            if (quotesResult.data) {
                setQuoteRecords(quotesResult.data.map((row)=>{
                    const details = parseQuoteDetails(row.details);
                    return {
                        id: row.id,
                        customer: row.customer_name,
                        phone: row.phone,
                        request: row.requested_items,
                        quantity: row.quantity ?? "",
                        totalAmount: details.totalAmount,
                        items: details.items,
                        status: titleCaseStatus(row.status),
                        active: row.active
                    };
                }));
            }
            if (customersResult.data) {
                setCustomerRecords(customersResult.data.map((row)=>({
                        id: row.id,
                        name: row.name,
                        phone: row.phone ?? "",
                        balance: Number(row.balance),
                        visits: Number(row.visits),
                        active: row.active
                    })));
            }
            if (salesResult.data) {
                setSalesRecords(salesResult.data.map((row)=>({
                        ref: row.sale_ref,
                        customer: row.customer_name,
                        phone: row.customer_phone ?? "",
                        date: new Date(row.created_at).toLocaleString("en-GB", {
                            dateStyle: "short",
                            timeStyle: "short"
                        }),
                        method: row.payment_method,
                        staff: row.notes && !isLegacyReceiptCopyNote(row.notes) ? row.notes : userName,
                        status: row.status === "part_paid" ? "Part paid" : row.status === "overpaid" ? "Overpaid" : "Paid",
                        items: [],
                        discount: Number(row.discount),
                        paid: Number(row.amount_paid),
                        total: Number(row.total),
                        notes: row.notes ?? ""
                    })));
            }
            if (profilesResult.data) {
                setStaffRecords(profilesResult.data.map((row)=>({
                        id: row.id,
                        name: row.full_name || row.email,
                        email: row.email,
                        role: row.role,
                        active: row.is_active
                    })));
            }
            if (settingsResult.data) {
                const profile = settingsResult.data.find((row)=>row.key === "profile")?.value;
                const receipt = settingsResult.data.find((row)=>row.key === "receipt")?.value;
                setSettingsRecord({
                    name: profile?.name ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name,
                    location: profile?.location ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].location,
                    phones: profile?.phones?.join(", ") ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phoneLine"],
                    receiptFooter: receipt?.footer ?? "Thank you for your patronage!"
                });
            }
        }
        loadInventory();
        return ()=>{
            ignore = true;
        };
    }, [
        isDemo,
        userEmail,
        userName
    ]);
    function addToCart(item) {
        if (!item.isService && item.stock <= 0) {
            setManagedStatus(`${item.name} is out of stock.`);
            return;
        }
        if (!item.isService) {
            setInventoryItems((current)=>current.map((entry)=>entry.id === item.id ? {
                        ...entry,
                        stock: Math.max(entry.stock - 1, 0)
                    } : entry));
        }
        setCart((current)=>{
            const existing = current.find((line)=>line.id === item.id);
            if (existing) {
                return current.map((line)=>line.id === item.id ? {
                        ...line,
                        quantity: line.quantity + 1
                    } : line);
            }
            return [
                ...current,
                {
                    id: item.id,
                    name: item.name,
                    quantity: 1,
                    price: item.price
                }
            ];
        });
        setManagedStatus("");
    }
    function openInventoryForm(item) {
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
        const item = {
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
            setInventoryItems((current)=>{
                const next = editingItem ? current.map((entry)=>entry.id === editingItem.id ? item : entry) : [
                    item,
                    ...current
                ];
                writeStoredDemoInventory(next);
                return next;
            });
            setInventoryStatus("Inventory item saved.");
            closeInventoryForm();
            return;
        }
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserSupabaseClient"])();
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
        const query = editingItem ? supabase.from("inventory_items").update(payload).eq("id", editingItem.id).select("id,name,category,unit,price,stock,threshold,supplier,is_service").single() : supabase.from("inventory_items").insert(payload).select("id,name,category,unit,price,stock,threshold,supplier,is_service").single();
        const { data, error } = await query;
        setInventoryPending(false);
        if (error) {
            setInventoryStatus(error.message);
            return;
        }
        const saved = inventoryRowToItem(data);
        setInventoryItems((current)=>editingItem ? current.map((entry)=>entry.id === editingItem.id ? saved : entry) : [
                saved,
                ...current
            ]);
        setInventoryStatus(editingItem ? "Inventory item updated." : "Inventory item added.");
        setInventoryFormOpen(false);
        setEditingItem(null);
        setInventoryForm(inventoryItemToForm());
    }
    async function deleteInventoryItem(item) {
        const confirmed = window.confirm(`Delete ${item.name} from inventory?`);
        if (!confirmed) {
            return;
        }
        if (isDemo) {
            setInventoryItems((current)=>{
                const next = current.filter((entry)=>entry.id !== item.id);
                writeStoredDemoInventory(next);
                return next;
            });
            setInventoryStatus("Inventory item deleted.");
            return;
        }
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserSupabaseClient"])();
        if (!supabase) {
            setInventoryStatus("Supabase keys are not set.");
            return;
        }
        const { error } = await supabase.from("inventory_items").delete().eq("id", item.id);
        if (error) {
            setInventoryStatus(error.message);
            return;
        }
        setInventoryItems((current)=>current.filter((entry)=>entry.id !== item.id));
        setInventoryStatus("Inventory item deleted.");
    }
    function openManagedEditor(kind, itemId) {
        const titlePrefix = itemId ? "Edit" : "Add";
        if (kind === "sale") {
            const sale = salesRecords.find((entry)=>entry.ref === itemId);
            setManagedEditor({
                kind,
                itemId,
                title: `${titlePrefix} sale`,
                fields: saleToFields(sale)
            });
        }
        if (kind === "supplier") {
            const supplier = supplierRecords.find((entry)=>entry.id === itemId);
            setManagedEditor({
                kind,
                itemId,
                title: `${titlePrefix} supplier`,
                fields: supplierToFields(supplier)
            });
        }
        if (kind === "purchase") {
            const purchase = purchaseRecords.find((entry)=>entry.id === itemId);
            setManagedEditor({
                kind,
                itemId,
                title: `${titlePrefix} purchase`,
                fields: purchaseToFields(purchase)
            });
        }
        if (kind === "expense") {
            const expense = expenseRecords.find((entry)=>entry.id === itemId);
            setManagedEditor({
                kind,
                itemId,
                title: `${titlePrefix} expense`,
                fields: expenseToFields(expense)
            });
        }
        if (kind === "quote") {
            const quote = quoteRecords.find((entry)=>entry.id === itemId);
            setManagedEditor({
                kind,
                itemId,
                title: `${titlePrefix} quote`,
                fields: quoteToFields(quote)
            });
        }
        if (kind === "customer") {
            const customerRecord = customerRecords.find((entry)=>entry.id === itemId);
            setManagedEditor({
                kind,
                itemId,
                title: `${titlePrefix} customer`,
                fields: customerToFields(customerRecord)
            });
        }
        if (kind === "staff") {
            const staff = staffRecords.find((entry)=>entry.id === itemId);
            setManagedEditor({
                kind,
                itemId,
                title: `${titlePrefix} staff account`,
                fields: staffToFields(staff)
            });
        }
        if (kind === "settings") {
            setManagedEditor({
                kind,
                itemId: "settings",
                title: "Edit settings",
                fields: settingsToFields(settingsRecord)
            });
        }
        setManagedStatus("");
    }
    function openQuoteEditor(quote) {
        setEditingQuote(quote ?? null);
        setQuoteCustomer(quote?.customer ?? "");
        setQuotePhone(quote?.phone ?? "");
        setQuoteCart(quoteRecordToCart(quote));
        setQuoteEditorOpen(true);
        setManagedStatus("");
    }
    function closeQuoteEditor() {
        if (managedPending) {
            return;
        }
        setQuoteEditorOpen(false);
        setEditingQuote(null);
        setQuoteCustomer("");
        setQuotePhone("");
        setQuoteCart([]);
    }
    function addToQuoteCart(item) {
        setQuoteCart((current)=>{
            const existing = current.find((line)=>line.id === item.id);
            if (existing) {
                return current.map((line)=>line.id === item.id ? {
                        ...line,
                        quantity: line.quantity + 1
                    } : line);
            }
            return [
                ...current,
                {
                    id: item.id,
                    name: item.name,
                    quantity: 1,
                    price: item.price
                }
            ];
        });
        setManagedStatus("");
    }
    function updateQuoteQuantityInput(id, value) {
        const desiredQuantity = value === "" ? 0 : Math.max(Number(value), 0);
        const nextQuantity = Number.isFinite(desiredQuantity) ? desiredQuantity : 1;
        setQuoteCart((current)=>current.map((entry)=>entry.id === id ? {
                    ...entry,
                    quantity: nextQuantity
                } : entry));
    }
    function normalizeQuoteQuantity(id) {
        setQuoteCart((current)=>current.map((entry)=>entry.id === id ? {
                    ...entry,
                    quantity: Math.max(entry.quantity, 1)
                } : entry));
    }
    function clearQuoteCart() {
        setQuoteCart([]);
        setManagedStatus("");
    }
    async function saveQuoteRecord() {
        const totalAmount = quoteCart.reduce((sum, item)=>sum + item.quantity * item.price, 0);
        const quote = {
            id: editingQuote?.id ?? makeDemoId("quote"),
            customer: quoteCustomer.trim() || "Customer",
            phone: quotePhone.trim(),
            request: quoteCart.map((item)=>item.name).join(", "),
            quantity: quoteCart.map((item)=>String(item.quantity)).join(", "),
            totalAmount,
            items: quoteCart,
            status: editingQuote?.status ?? "New",
            active: editingQuote?.active ?? true
        };
        if (!quote.items?.length) {
            setManagedStatus("Add at least one item to the quote.");
            return;
        }
        const supabase = isDemo ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserSupabaseClient"])();
        setManagedPending(true);
        try {
            if (supabase) {
                const payload = {
                    customer_name: quote.customer,
                    phone: quote.phone,
                    requested_items: quote.request,
                    quantity: quote.quantity,
                    details: JSON.stringify({
                        totalAmount: quote.totalAmount,
                        items: quote.items
                    }),
                    status: quote.status.toLowerCase().replace(" ", "_"),
                    active: quote.active
                };
                const query = editingQuote ? supabase.from("quote_requests").update(payload).eq("id", editingQuote.id) : supabase.from("quote_requests").insert(payload).select("id").single();
                const { data, error } = await query;
                if (error) throw error;
                quote.id = data?.id ?? quote.id;
            }
            setQuoteRecords((current)=>editingQuote ? current.map((entry)=>entry.id === editingQuote.id ? quote : entry) : [
                    quote,
                    ...current
                ]);
            setManagedStatus(editingQuote ? "Quote updated." : "Quote saved.");
            setQuoteEditorOpen(false);
            setEditingQuote(null);
            setQuoteCustomer("");
            setQuotePhone("");
            setQuoteCart([]);
        } catch (error) {
            setManagedStatus(error instanceof Error ? error.message : "Unable to save quote.");
        } finally{
            setManagedPending(false);
        }
    }
    function updateManagedField(name, value) {
        setManagedEditor((current)=>current ? {
                ...current,
                fields: current.fields.map((field)=>field.name === name ? {
                        ...field,
                        value
                    } : field)
            } : current);
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
        const supabase = isDemo ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserSupabaseClient"])();
        setManagedPending(true);
        try {
            if (managedEditor.kind === "sale") {
                const existingSale = managedEditor.itemId ? salesRecords.find((entry)=>entry.ref === managedEditor.itemId) : undefined;
                const sale = {
                    ref: managedEditor.itemId ?? `KKD-${Date.now()}`,
                    customer: fieldValue(fields, "customer") || "Walk-in",
                    phone: fieldValue(fields, "phone"),
                    date: new Date().toLocaleString("en-GB", {
                        dateStyle: "short",
                        timeStyle: "short"
                    }),
                    method: fieldValue(fields, "method") || "Cash",
                    staff: userName,
                    status: "Paid",
                    items: existingSale?.items ?? [],
                    discount: toNumber(fieldValue(fields, "discount")),
                    paid: toNumber(fieldValue(fields, "paid")),
                    total: existingSale?.total ?? toNumber(fieldValue(fields, "paid")),
                    notes: fieldValue(fields, "notes")
                };
                const totalAmount = sale.items.length ? saleTotal(sale) : sale.total ?? sale.paid;
                sale.total = totalAmount;
                sale.status = statusFor(totalAmount, sale.paid);
                if (supabase) {
                    const payload = {
                        sale_ref: sale.ref,
                        customer_name: sale.customer,
                        customer_phone: sale.phone,
                        payment_method: sale.method,
                        status: saleStatusToDatabase(sale.status),
                        discount: sale.discount,
                        total: totalAmount,
                        amount_paid: sale.paid,
                        notes: sale.notes,
                        active: true
                    };
                    const query = managedEditor.itemId ? supabase.from("sales").update(payload).eq("sale_ref", managedEditor.itemId) : supabase.from("sales").insert(payload);
                    const { error } = await query;
                    if (error) throw error;
                }
                setSalesRecords((current)=>managedEditor.itemId ? current.map((entry)=>entry.ref === managedEditor.itemId ? sale : entry) : [
                        sale,
                        ...current
                    ]);
            }
            if (managedEditor.kind === "supplier") {
                const supplier = {
                    id: managedEditor.itemId ?? makeDemoId("supplier"),
                    name: fieldValue(fields, "name"),
                    category: fieldValue(fields, "category"),
                    phone: fieldValue(fields, "phone"),
                    active: activeValue
                };
                if (supabase) {
                    const payload = {
                        name: supplier.name,
                        contact_person: supplier.category,
                        phone: supplier.phone,
                        active: supplier.active
                    };
                    const query = managedEditor.itemId ? supabase.from("suppliers").update(payload).eq("id", managedEditor.itemId) : supabase.from("suppliers").insert(payload).select("id").single();
                    const { data, error } = await query;
                    if (error) throw error;
                    supplier.id = data?.id ?? supplier.id;
                }
                setSupplierRecords((current)=>managedEditor.itemId ? current.map((entry)=>entry.id === managedEditor.itemId ? supplier : entry) : [
                        supplier,
                        ...current
                    ]);
            }
            if (managedEditor.kind === "purchase") {
                const previousPurchase = managedEditor.itemId ? purchaseRecords.find((entry)=>entry.id === managedEditor.itemId) : undefined;
                const purchase = {
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
                    const query = managedEditor.itemId ? supabase.from("purchases").update(payload).eq("id", managedEditor.itemId) : supabase.from("purchases").insert(payload).select("id").single();
                    const { data, error } = await query;
                    if (error) throw error;
                    purchase.id = data?.id ?? purchase.id;
                }
                if (previousPurchase) {
                    if (sameItemName(previousPurchase.name, purchase.name)) {
                        await adjustInventoryByItemName(purchase.name, purchase.quantity - previousPurchase.quantity);
                    } else {
                        await adjustInventoryByItemName(previousPurchase.name, -previousPurchase.quantity);
                        await adjustInventoryByItemName(purchase.name, purchase.quantity);
                    }
                } else {
                    await adjustInventoryByItemName(purchase.name, purchase.quantity);
                }
                setPurchaseRecords((current)=>managedEditor.itemId ? current.map((entry)=>entry.id === managedEditor.itemId ? purchase : entry) : [
                        purchase,
                        ...current
                    ]);
            }
            if (managedEditor.kind === "expense") {
                const expense = {
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
                    const query = managedEditor.itemId ? supabase.from("expenses").update(payload).eq("id", managedEditor.itemId) : supabase.from("expenses").insert(payload).select("id").single();
                    const { data, error } = await query;
                    if (error) throw error;
                    expense.id = data?.id ?? expense.id;
                }
                setExpenseRecords((current)=>managedEditor.itemId ? current.map((entry)=>entry.id === managedEditor.itemId ? expense : entry) : [
                        expense,
                        ...current
                    ]);
            }
            if (managedEditor.kind === "quote") {
                const quote = {
                    id: managedEditor.itemId ?? makeDemoId("quote"),
                    customer: fieldValue(fields, "customer"),
                    phone: fieldValue(fields, "phone"),
                    request: fieldValue(fields, "request"),
                    quantity: fieldValue(fields, "quantity"),
                    totalAmount: moneyInputToNumber(fieldValue(fields, "totalAmount")),
                    status: fieldValue(fields, "status"),
                    active: activeValue
                };
                if (supabase) {
                    const payload = {
                        customer_name: quote.customer,
                        phone: quote.phone,
                        requested_items: quote.request,
                        quantity: quote.quantity,
                        details: String(quote.totalAmount),
                        status: quote.status.toLowerCase().replace(" ", "_"),
                        active: quote.active
                    };
                    const query = managedEditor.itemId ? supabase.from("quote_requests").update(payload).eq("id", managedEditor.itemId) : supabase.from("quote_requests").insert(payload).select("id").single();
                    const { data, error } = await query;
                    if (error) throw error;
                    quote.id = data?.id ?? quote.id;
                }
                setQuoteRecords((current)=>managedEditor.itemId ? current.map((entry)=>entry.id === managedEditor.itemId ? quote : entry) : [
                        quote,
                        ...current
                    ]);
            }
            if (managedEditor.kind === "customer") {
                const customerRecord = {
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
                    const query = managedEditor.itemId ? supabase.from("customers").update(payload).eq("id", managedEditor.itemId) : supabase.from("customers").insert(payload).select("id").single();
                    const { data, error } = await query;
                    if (error) throw error;
                    customerRecord.id = data?.id ?? customerRecord.id;
                }
                setCustomerRecords((current)=>managedEditor.itemId ? current.map((entry)=>entry.id === managedEditor.itemId ? customerRecord : entry) : [
                        customerRecord,
                        ...current
                    ]);
            }
            if (managedEditor.kind === "staff") {
                const staff = {
                    id: managedEditor.itemId ?? makeDemoId("staff"),
                    name: fieldValue(fields, "name"),
                    email: fieldValue(fields, "email"),
                    role: fieldValue(fields, "role") === "admin" ? "admin" : "staff",
                    active: activeValue
                };
                if (supabase) {
                    const response = await fetch("/api/admin/staff", {
                        method: managedEditor.itemId ? "PATCH" : "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id: managedEditor.itemId,
                            name: staff.name,
                            email: staff.email,
                            password: fieldValue(fields, "password"),
                            role: staff.role,
                            active: staff.active
                        })
                    });
                    const result = await response.json();
                    if (!response.ok || !result.staff) {
                        throw new Error(result.error ?? "Unable to save staff account.");
                    }
                    staff.id = result.staff.id;
                }
                setStaffRecords((current)=>managedEditor.itemId ? current.map((entry)=>entry.id === managedEditor.itemId ? staff : entry) : [
                        staff,
                        ...current
                    ]);
            }
            if (managedEditor.kind === "settings") {
                const settings = {
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
                            tagline: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].tagline,
                            location: settings.location,
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].address,
                            phones: settings.phones.split(",").map((phoneNumber)=>phoneNumber.trim()).filter(Boolean),
                            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].logo
                        }
                    });
                    if (profileError) throw profileError;
                    const { error: receiptError } = await supabase.from("business_settings").upsert({
                        key: "receipt",
                        value: {
                            footer: settings.receiptFooter,
                            paper_width: "80mm"
                        }
                    });
                    if (receiptError) throw receiptError;
                }
                setSettingsRecord(settings);
            }
            setManagedStatus(isDemo ? "Demo data updated. Connect Supabase to save changes permanently." : "Changes saved.");
            setManagedEditor(null);
        } catch (error) {
            setManagedStatus(error instanceof Error ? error.message : "Unable to save changes.");
        } finally{
            setManagedPending(false);
        }
    }
    async function deleteManagedRecord(kind, itemId, label) {
        if (!window.confirm(`Delete ${label}?`)) {
            return;
        }
        const supabase = isDemo ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserSupabaseClient"])();
        try {
            if (supabase) {
                if (kind === "supplier") {
                    const { error } = await supabase.from("suppliers").delete().eq("id", itemId);
                    if (error) throw error;
                } else {
                    const tableMap = {
                        sale: "sales",
                        purchase: "purchases",
                        expense: "expenses",
                        quote: "quote_requests",
                        customer: "customers",
                        staff: "profiles"
                    };
                    const table = tableMap[kind];
                    if (table) {
                        const idColumn = kind === "sale" ? "sale_ref" : "id";
                        const payload = kind === "staff" ? {
                            is_active: false
                        } : {
                            active: false
                        };
                        const { error } = await supabase.from(table).update(payload).eq(idColumn, itemId);
                        if (error) throw error;
                    }
                }
            }
            if (kind === "sale") setSalesRecords((current)=>current.filter((entry)=>entry.ref !== itemId));
            if (kind === "supplier") setSupplierRecords((current)=>current.filter((entry)=>entry.id !== itemId));
            if (kind === "purchase") {
                const purchase = purchaseRecords.find((entry)=>entry.id === itemId);
                if (purchase) {
                    await adjustInventoryByItemName(purchase.name, -purchase.quantity);
                }
                setPurchaseRecords((current)=>current.filter((entry)=>entry.id !== itemId));
            }
            if (kind === "expense") setExpenseRecords((current)=>current.filter((entry)=>entry.id !== itemId));
            if (kind === "quote") setQuoteRecords((current)=>current.filter((entry)=>entry.id !== itemId));
            if (kind === "customer") setCustomerRecords((current)=>current.filter((entry)=>entry.id !== itemId));
            if (kind === "staff") setStaffRecords((current)=>current.filter((entry)=>entry.id !== itemId));
            setManagedStatus(isDemo ? "Demo record deleted." : "Record deleted.");
        } catch (error) {
            setManagedStatus(error instanceof Error ? error.message : "Unable to delete record.");
        }
    }
    function updateQuantity(id, quantity) {
        setCart((current)=>current.map((line)=>line.id === id ? {
                    ...line,
                    quantity: Math.max(quantity, 1)
                } : line).filter((line)=>line.quantity > 0));
    }
    function updateQuantityInput(id, value) {
        const line = cart.find((entry)=>entry.id === id);
        if (!line) {
            return;
        }
        const inventoryItem = inventoryItems.find((entry)=>entry.id === id);
        const desiredQuantity = value === "" ? 0 : Math.max(Number(value), 0);
        const safeDesiredQuantity = Number.isFinite(desiredQuantity) ? desiredQuantity : line.quantity;
        const availableQuantity = inventoryItem && !inventoryItem.isService ? inventoryItem.stock + line.quantity : safeDesiredQuantity;
        const nextQuantity = inventoryItem && !inventoryItem.isService ? Math.min(safeDesiredQuantity, availableQuantity) : safeDesiredQuantity;
        const stockDelta = line.quantity - nextQuantity;
        if (inventoryItem && !inventoryItem.isService && stockDelta !== 0) {
            setInventoryItems((current)=>current.map((item)=>item.id === id ? {
                        ...item,
                        stock: Math.max(item.stock + stockDelta, 0)
                    } : item));
        }
        setCart((current)=>current.map((entry)=>entry.id === id ? {
                    ...entry,
                    quantity: nextQuantity
                } : entry));
        if (inventoryItem && !inventoryItem.isService && safeDesiredQuantity > availableQuantity) {
            setManagedStatus(`Only ${availableQuantity} ${inventoryItem.unit}${availableQuantity === 1 ? "" : "s"} available for ${inventoryItem.name}.`);
        } else {
            setManagedStatus("");
        }
    }
    function normalizeQuantity(id) {
        const line = cart.find((entry)=>entry.id === id);
        if (!line || line.quantity >= 1) {
            return;
        }
        updateQuantityInput(id, "1");
    }
    function clearCart() {
        for (const line of cart){
            const inventoryItem = inventoryItems.find((item)=>item.id === line.id);
            if (inventoryItem && !inventoryItem.isService) {
                setInventoryItems((current)=>current.map((item)=>item.id === line.id ? {
                            ...item,
                            stock: item.stock + line.quantity
                        } : item));
            }
        }
        setCart([]);
        setManagedStatus("");
    }
    async function updateInventoryStock(itemId, nextStock) {
        const stock = Math.max(nextStock, 0);
        if (isDemo) {
            setInventoryItems((current)=>{
                const next = current.map((item)=>item.id === itemId ? {
                        ...item,
                        stock
                    } : item);
                writeStoredDemoInventory(next);
                return next;
            });
            return;
        }
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserSupabaseClient"])();
        if (!supabase) {
            throw new Error("Supabase keys are not set.");
        }
        const { data, error } = await supabase.from("inventory_items").update({
            stock
        }).eq("id", itemId).select("id,name,category,unit,price,stock,threshold,supplier,is_service").single();
        if (error) {
            throw error;
        }
        setInventoryItems((current)=>current.map((item)=>item.id === itemId ? inventoryRowToItem(data) : item));
    }
    async function adjustInventoryByItemName(itemName, quantityDelta) {
        if (!itemName.trim() || quantityDelta === 0) {
            return;
        }
        const item = inventoryItems.find((entry)=>sameItemName(entry.name, itemName));
        if (!item || item.isService) {
            return;
        }
        await updateInventoryStock(item.id, item.stock + quantityDelta);
    }
    async function createReceipt() {
        const now = new Date();
        const sale = {
            ref: `KKD-${now.getFullYear().toString().slice(2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}-${String(Math.floor(Math.random() * 900) + 100)}`,
            customer: customer.trim() || "Walk-in",
            phone,
            date: now.toLocaleString("en-GB", {
                dateStyle: "short",
                timeStyle: "short"
            }),
            method: paymentMethod,
            staff: userName,
            status: statusFor(total, amountPaid),
            items: cart,
            discount,
            paid: amountPaid,
            total,
            notes: ""
        };
        if (!isDemo) {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserSupabaseClient"])();
            if (!supabase) {
                setManagedStatus("Supabase keys are not set.");
                return;
            }
            const { data: saleRow, error: saleError } = await supabase.from("sales").insert({
                sale_ref: sale.ref,
                customer_name: sale.customer,
                customer_phone: sale.phone,
                subtotal,
                discount: sale.discount,
                total,
                amount_paid: sale.paid,
                payment_method: sale.method,
                status: saleStatusToDatabase(sale.status),
                notes: sale.staff,
                active: true
            }).select("id").single();
            if (saleError) {
                setManagedStatus(saleError.message);
                return;
            }
            if (saleRow && sale.items.length) {
                const { error: itemsError } = await supabase.from("sale_items").insert(sale.items.map((item)=>({
                        sale_id: saleRow.id,
                        product_id: null,
                        item_name: item.name,
                        quantity: item.quantity,
                        unit_price: item.price,
                        line_total: item.quantity * item.price
                    })));
                if (itemsError) {
                    setManagedStatus(itemsError.message);
                    return;
                }
            }
        }
        let inventoryWarning = "";
        try {
            for (const item of sale.items){
                const inventoryItem = inventoryItems.find((entry)=>entry.id === item.id);
                if (inventoryItem && !inventoryItem.isService) {
                    await updateInventoryStock(inventoryItem.id, inventoryItem.stock);
                }
            }
        } catch (error) {
            inventoryWarning = error instanceof Error ? error.message : "Sale saved, but inventory stock could not be updated.";
        }
        setSalesRecords((current)=>[
                sale,
                ...current
            ]);
        setReceipt(sale);
        setCart([]);
        setDiscountInput("0");
        setAmountPaidInput("0");
        setManagedStatus(inventoryWarning || (isDemo ? "Demo sale saved to sales history." : "Sale saved to sales history."));
    }
    function openSaleReceipt(sale) {
        setReceipt(sale);
    }
    async function signOut() {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserSupabaseClient"])();
        if (supabase) {
            await supabase.auth.signOut();
        }
        window.location.href = "/admin/login";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "dashboard-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `sidebar ${sidebarOpen ? "open" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].logo,
                                alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name} logo`,
                                width: 88,
                                height: 54
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 1689,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].shortName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 1691,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].tagline
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 1692,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 1690,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "icon-button mobile-close",
                                onClick: ()=>setSidebarOpen(false),
                                "aria-label": "Close navigation",
                                title: "Close navigation",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 1701,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 1694,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1688,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "side-nav",
                        "aria-label": "Admin navigation",
                        children: navItems.map((item)=>{
                            const Icon = item.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: active === item.key ? "active" : "",
                                onClick: ()=>{
                                    setActive(item.key);
                                    setSidebarOpen(false);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 1718,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 1719,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 1709,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1705,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 1726,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].location
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 1727,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1725,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 1687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "dashboard-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "topbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "topbar-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "icon-button nav-toggle",
                                        onClick: ()=>setSidebarOpen(true),
                                        "aria-label": "Open navigation",
                                        title: "Open navigation",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 1741,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 1734,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Admin / Staff Dashboard"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 1744,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: activeLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 1745,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 1743,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 1733,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "topbar-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "search-box",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 17,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 1751,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "search",
                                                placeholder: "Search stock, receipt, customer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 1752,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 1750,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "user-pill",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isDemo ? "Demo preview" : "Signed in"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 1755,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: userEmail
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 1756,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 1754,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "icon-button",
                                        onClick: signOut,
                                        "aria-label": "Sign out",
                                        title: "Sign out",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 1765,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 1758,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 1749,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1732,
                        columnNumber: 9
                    }, this),
                    isDemo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "demo-banner",
                        role: "status",
                        children: "Supabase is not connected yet, so this dashboard is running with local demo data. Add `.env.local` keys to enable real authentication and database reads."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1771,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-section-select",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Section"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 1779,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: active,
                                    onChange: (event)=>setActive(event.target.value),
                                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: item.key,
                                            children: item.label
                                        }, item.key, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 1782,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 1780,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 1778,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1777,
                        columnNumber: 9
                    }, this),
                    active === "dashboard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardOverview, {
                        revenue: dashboardRevenue,
                        lowStockCount: lowStock.length,
                        sales: dashboardSales,
                        salesCount: dashboardSalesCount,
                        discount: dashboardDiscount,
                        period: dashboardPeriod,
                        onPeriodChange: setDashboardPeriod,
                        pendingQuotesCount: pendingQuotesCount,
                        onNewSale: ()=>setActive("pos"),
                        onAddStock: ()=>{
                            setActive("inventory");
                            openInventoryForm();
                        },
                        onCreateQuote: ()=>{
                            setActive("quotes");
                            openQuoteEditor();
                        },
                        onReprintReceipt: ()=>setActive("sales")
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1791,
                        columnNumber: 11
                    }, this) : null,
                    active === "pos" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PosPanel, {
                        cart: cart,
                        customer: customer,
                        phone: phone,
                        discount: discount,
                        discountInput: discountInput,
                        amountPaid: amountPaid,
                        amountPaidInput: amountPaidInput,
                        paymentMethod: paymentMethod,
                        subtotal: subtotal,
                        total: total,
                        onCustomerChange: setCustomer,
                        onPhoneChange: setPhone,
                        onDiscountChange: setDiscountInput,
                        onAmountPaidChange: setAmountPaidInput,
                        onPaymentMethodChange: setPaymentMethod,
                        onAddToCart: addToCart,
                        onQuantityInput: updateQuantityInput,
                        onQuantityBlur: normalizeQuantity,
                        onClearCart: clearCart,
                        onCheckout: createReceipt,
                        inventoryItems: inventoryItems
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1813,
                        columnNumber: 11
                    }, this) : null,
                    managedStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-alert",
                        role: "status",
                        children: managedStatus
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1838,
                        columnNumber: 11
                    }, this) : null,
                    active === "sales" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SalesPanel, {
                        sales: salesRecords,
                        onAdd: ()=>setActive("pos"),
                        onEdit: (sale)=>openManagedEditor("sale", sale.ref),
                        onDelete: (sale)=>deleteManagedRecord("sale", sale.ref, sale.ref),
                        onReceipt: openSaleReceipt
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1843,
                        columnNumber: 11
                    }, this) : null,
                    active === "inventory" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryPanel, {
                        items: inventoryItems,
                        status: inventoryStatus,
                        onAdd: ()=>openInventoryForm(),
                        onEdit: openInventoryForm,
                        onDelete: deleteInventoryItem
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1852,
                        columnNumber: 11
                    }, this) : null,
                    active === "suppliers" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuppliersPanel, {
                        rows: supplierRecords,
                        onAdd: ()=>openManagedEditor("supplier"),
                        onEdit: (row)=>openManagedEditor("supplier", row.id),
                        onDelete: (row)=>deleteManagedRecord("supplier", row.id, row.name)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1861,
                        columnNumber: 11
                    }, this) : null,
                    active === "purchases" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PurchasesPanel, {
                        rows: purchaseRecords,
                        onAdd: ()=>openManagedEditor("purchase"),
                        onEdit: (row)=>openManagedEditor("purchase", row.id),
                        onDelete: (row)=>deleteManagedRecord("purchase", row.id, row.name)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1869,
                        columnNumber: 11
                    }, this) : null,
                    active === "expenses" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpensesPanel, {
                        rows: expenseRecords,
                        onAdd: ()=>openManagedEditor("expense"),
                        onEdit: (row)=>openManagedEditor("expense", row.id),
                        onDelete: (row)=>deleteManagedRecord("expense", row.id, row.category)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1877,
                        columnNumber: 11
                    }, this) : null,
                    active === "quotes" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuotesPanel, {
                        rows: quoteRecords,
                        onAdd: ()=>openQuoteEditor(),
                        onEdit: openQuoteEditor,
                        onDelete: (row)=>deleteManagedRecord("quote", row.id, row.customer),
                        onPrint: setQuotePreview
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1885,
                        columnNumber: 11
                    }, this) : null,
                    active === "customers" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomersPanel, {
                        rows: customerRecords,
                        onAdd: ()=>openManagedEditor("customer"),
                        onEdit: (row)=>openManagedEditor("customer", row.id),
                        onDelete: (row)=>deleteManagedRecord("customer", row.id, row.name)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1894,
                        columnNumber: 11
                    }, this) : null,
                    active === "reports" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportsPanel, {
                        inventoryItems: inventoryItems,
                        salesRecords: salesRecords,
                        expenseRecords: expenseRecords,
                        customerRecords: customerRecords,
                        staffRecords: staffRecords
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1902,
                        columnNumber: 11
                    }, this) : null,
                    active === "staff" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StaffPanel, {
                        rows: staffRecords,
                        onAdd: ()=>openManagedEditor("staff"),
                        onEdit: (row)=>openManagedEditor("staff", row.id),
                        onDelete: (row)=>deleteManagedRecord("staff", row.id, row.name)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1911,
                        columnNumber: 11
                    }, this) : null,
                    active === "settings" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsPanel, {
                        settings: settingsRecord,
                        onEdit: ()=>openManagedEditor("settings")
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1918,
                        columnNumber: 34
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 1731,
                columnNumber: 7
            }, this),
            receipt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReceiptModal, {
                sale: receipt,
                onClose: ()=>setReceipt(null)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 1921,
                columnNumber: 18
            }, this) : null,
            quotePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuotePrintModal, {
                quote: quotePreview,
                onClose: ()=>setQuotePreview(null)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 1922,
                columnNumber: 23
            }, this) : null,
            quoteEditorOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuoteCartEditor, {
                title: editingQuote ? "Edit quote" : "Add quote",
                customer: quoteCustomer,
                phone: quotePhone,
                cart: quoteCart,
                total: quoteCart.reduce((sum, item)=>sum + item.quantity * item.price, 0),
                pending: managedPending,
                inventoryItems: inventoryItems,
                onCustomerChange: setQuoteCustomer,
                onPhoneChange: setQuotePhone,
                onAddToCart: addToQuoteCart,
                onQuantityInput: updateQuoteQuantityInput,
                onQuantityBlur: normalizeQuoteQuantity,
                onClearCart: clearQuoteCart,
                onCancel: closeQuoteEditor,
                onSave: saveQuoteRecord
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 1924,
                columnNumber: 9
            }, this) : null,
            inventoryFormOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryEditor, {
                form: inventoryForm,
                title: editingItem ? "Edit inventory item" : "Add inventory item",
                pending: inventoryPending,
                onChange: setInventoryForm,
                onCancel: closeInventoryForm,
                onSave: saveInventoryItem
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 1943,
                columnNumber: 9
            }, this) : null,
            managedEditor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ManagedEditor, {
                editor: managedEditor,
                pending: managedPending,
                onChange: updateManagedField,
                onCancel: closeManagedEditor,
                onSave: saveManagedRecord
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 1953,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 1686,
        columnNumber: 5
    }, this);
}
function DashboardOverview({ revenue, lowStockCount, sales, salesCount, discount, period, onPeriodChange, pendingQuotesCount, onNewSale, onAddStock, onCreateQuote, onReprintReceipt }) {
    const bars = computeRevenueBars(sales);
    const maxRevenue = Math.max(...bars.map((bar)=>bar.value), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "dashboard-grid dashboard-overview-grid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel dashboard-filter-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "Dashboard time filter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2000,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            reportPeriodLabel(period),
                                            " overview"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2001,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 1999,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                size: 24,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2003,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 1998,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-grid",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Time period"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2007,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: period,
                                    onChange: (event)=>onPeriodChange(event.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "today",
                                            children: "Today"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2009,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "yesterday",
                                            children: "Yesterday"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2010,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "this-month",
                                            children: "This month"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2011,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "last-30",
                                            children: "Last 30 days"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2012,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All time"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2013,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2008,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2006,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2005,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 1997,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSign$3e$__["BadgeDollarSign"],
                label: "Revenue",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(revenue),
                tone: "green"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2019,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__["ReceiptText"],
                label: "Sales",
                value: `${salesCount} receipt${salesCount !== 1 ? "s" : ""}`,
                tone: "gold"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2020,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                label: "Discounts",
                value: discount > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(discount) : "—",
                tone: "blue"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2021,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                label: "Pending quotes",
                value: `${pendingQuotesCount} open`,
                tone: "blue"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2022,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
                label: "Low stock",
                value: `${lowStockCount} items`,
                tone: "red"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2023,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel chart-panel dashboard-chart-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: [
                                            reportPeriodLabel(period),
                                            " view"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2028,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Revenue trend"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2029,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2027,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge",
                                children: "GHS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2031,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2026,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bar-chart",
                        "aria-label": "Revenue chart",
                        children: bars.map((bar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bar-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bar-track",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                "--bar-h": `${bar.value / maxRevenue * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2037,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2036,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: bar.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2039,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: bar.value > 0 ? `${Math.round(bar.value / 1000)}k` : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2040,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, bar.label, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2035,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2033,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2025,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel dashboard-actions-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel-heading",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Quick actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2049,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Daily shop work"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2050,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2048,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2047,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "quick-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onNewSale,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2055,
                                        columnNumber: 13
                                    }, this),
                                    " New sale"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2054,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onAddStock,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2058,
                                        columnNumber: 13
                                    }, this),
                                    " Add stock"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2057,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onCreateQuote,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2061,
                                        columnNumber: 13
                                    }, this),
                                    " Create quote"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2060,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onReprintReceipt,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2064,
                                        columnNumber: 13
                                    }, this),
                                    " Reprint receipt"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2063,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2053,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2046,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel dashboard-sales-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel-heading",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Recent activity"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2072,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Latest sales"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2073,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2071,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2070,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponsiveSalesTable, {
                        sales: sales
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2076,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2069,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 1996,
        columnNumber: 5
    }, this);
}
function MetricCard({ icon: Icon, label, value, tone }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `metric-card ${tone}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "metric-icon",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 22
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 2096,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2095,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2098,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2099,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2094,
        columnNumber: 5
    }, this);
}
function PosPanel({ cart, customer, phone, discount, discountInput, amountPaid, amountPaidInput, paymentMethod, subtotal, total, onCustomerChange, onPhoneChange, onDiscountChange, onAmountPaidChange, onPaymentMethodChange, onAddToCart, onQuantityInput, onQuantityBlur, onClearCart, onCheckout, inventoryItems }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pos-layout",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel-heading",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Products & services"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Add items"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2153,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "product-grid",
                        children: inventoryItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "product-tile",
                                onClick: ()=>onAddToCart(item),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(item.price),
                                            " / ",
                                            item.unit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: item.isService ? "Service item" : `${item.stock} in stock`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2160,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel checkout-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel-heading",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Current sale"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2174,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: customer,
                                        onChange: (event)=>onCustomerChange(event.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Phone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: phone,
                                        onChange: (event)=>onPhoneChange(event.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cart-lines",
                        children: cart.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cart-line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: line.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(line.price)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2196,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        value: line.quantity || "",
                                        onChange: (event)=>onQuantityInput(line.id, event.target.value),
                                        onBlur: ()=>onQuantityBlur(line.id),
                                        "aria-label": `Quantity for ${line.name}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(line.price * line.quantity)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, line.id, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2193,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Discount"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "0",
                                        value: discountInput,
                                        onChange: (event)=>onDiscountChange(event.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Amount paid"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "0",
                                        value: amountPaidInput,
                                        onChange: (event)=>onAmountPaidChange(event.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Payment method"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: paymentMethod,
                                        onChange: (event)=>onPaymentMethodChange(event.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Cash"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Mobile Money"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2234,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Bank Transfer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2235,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Card"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2236,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "totals-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Subtotal ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(subtotal)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2242,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Discount ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            "-",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(discount)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2243,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Total ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(total)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2244,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Balance ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(Math.max(total - amountPaid, 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2245,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "checkout-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "secondary-action",
                                onClick: onClearCart,
                                disabled: cart.length === 0,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2250,
                                        columnNumber: 13
                                    }, this),
                                    "Clear cart"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "primary-action",
                                onClick: onCheckout,
                                disabled: cart.length === 0,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__["ReceiptText"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2254,
                                        columnNumber: 13
                                    }, this),
                                    "Save sale & print receipt"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2150,
        columnNumber: 5
    }, this);
}
function QuoteCartEditor({ title, customer, phone, cart, total, pending, inventoryItems, onCustomerChange, onPhoneChange, onAddToCart, onQuantityInput, onQuantityBlur, onClearCart, onCancel, onSave }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        role: "presentation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "quote-cart-modal",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "quote-cart-title",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "panel-heading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Quote cart"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "quote-cart-title",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "icon-button",
                            onClick: onCancel,
                            "aria-label": "Close quote form",
                            title: "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2305,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2304,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 2299,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "pos-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel-heading",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Products & services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2313,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Add items"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2314,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2312,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2311,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "product-grid",
                                    children: inventoryItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "product-tile",
                                            onClick: ()=>onAddToCart(item),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2320,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2321,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(item.price),
                                                        " / ",
                                                        item.unit
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: item.isService ? "Service item" : `${item.stock} in stock`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2325,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2319,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2317,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel checkout-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel-heading",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2334,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Current quote"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2335,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2333,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Customer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2341,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: customer,
                                                    onChange: (event)=>onCustomerChange(event.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2342,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2340,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2345,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: phone,
                                                    onChange: (event)=>onPhoneChange(event.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2346,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2344,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2339,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cart-lines",
                                    children: cart.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cart-line",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: line.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                                            lineNumber: 2354,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(line.price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                                            lineNumber: 2355,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2353,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "1",
                                                    value: line.quantity || "",
                                                    onChange: (event)=>onQuantityInput(line.id, event.target.value),
                                                    onBlur: ()=>onQuantityBlur(line.id),
                                                    "aria-label": `Quantity for ${line.name}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2357,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(line.price * line.quantity)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2365,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, line.id, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2352,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2350,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "totals-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Subtotal ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(total)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2371,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2371,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Discount ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        "-",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2372,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2372,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Total ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(total)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2373,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2373,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2370,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "checkout-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "secondary-action",
                                            onClick: onClearCart,
                                            disabled: cart.length === 0 || pending,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2378,
                                                    columnNumber: 17
                                                }, this),
                                                "Clear cart"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2377,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "primary-action",
                                            onClick: onSave,
                                            disabled: cart.length === 0 || pending,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2382,
                                                    columnNumber: 17
                                                }, this),
                                                pending ? "Saving..." : "Save quote"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2381,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2376,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2331,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 2309,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard.tsx",
            lineNumber: 2298,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2297,
        columnNumber: 5
    }, this);
}
function SalesPanel({ sales, onAdd, onEdit, onDelete, onReceipt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Receipts & balances"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2410,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Sales register"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2411,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "small-action",
                        onClick: onAdd,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__["ReceiptText"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2414,
                                columnNumber: 11
                            }, this),
                            " Add sale"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2413,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2408,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponsiveSalesTable, {
                sales: sales,
                onEdit: onEdit,
                onDelete: onDelete,
                onReceipt: onReceipt
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2417,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2407,
        columnNumber: 5
    }, this);
}
function ResponsiveSalesTable({ sales, onEdit, onDelete, onReceipt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "table-wrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Ref"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2438,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Customer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2439,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Staff"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2440,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Method"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2441,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2442,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2443,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Paid"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2444,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Balance"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2445,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Action"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2446,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2437,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 2436,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: sales.map((sale)=>{
                        const total = saleTotal(sale);
                        const balance = total - sale.paid;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    "data-label": "Ref",
                                    children: sale.ref
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2455,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    "data-label": "Customer",
                                    children: sale.customer
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2456,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    "data-label": "Staff",
                                    children: sale.staff
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2457,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    "data-label": "Method",
                                    children: sale.method
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2458,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    "data-label": "Status",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `status ${sale.status.toLowerCase().replace(" ", "-")}`,
                                        children: sale.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2460,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2459,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    "data-label": "Total",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(total)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2464,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    "data-label": "Paid",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(sale.paid)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2465,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    "data-label": "Balance",
                                    className: balance > 0 ? "text-amber-700 font-semibold" : balance < 0 ? "text-red-700 font-semibold" : "",
                                    children: balance > 0 ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(balance)}` : balance < 0 ? `Overpaid: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(Math.abs(balance))}` : "Paid"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2466,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    "data-label": "Action",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "icon-button",
                                                onClick: ()=>onReceipt?.(sale),
                                                "aria-label": `Print ${sale.ref}`,
                                                title: "Receipt",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2472,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2471,
                                                columnNumber: 19
                                            }, this),
                                            onEdit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "icon-button",
                                                onClick: ()=>onEdit(sale),
                                                "aria-label": `Edit ${sale.ref}`,
                                                title: "Edit sale",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2476,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2475,
                                                columnNumber: 21
                                            }, this) : null,
                                            onDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "icon-button danger",
                                                onClick: ()=>onDelete(sale),
                                                "aria-label": `Delete ${sale.ref}`,
                                                title: "Delete sale",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2481,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2480,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2470,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2469,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, sale.ref, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2454,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 2449,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard.tsx",
            lineNumber: 2435,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2434,
        columnNumber: 5
    }, this);
}
function InventoryPanel({ items, status, onAdd, onEdit, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Stock control"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2512,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Inventory"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2513,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2511,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "small-action",
                        onClick: onAdd,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2516,
                                columnNumber: 11
                            }, this),
                            " Add item"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2515,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2510,
                columnNumber: 7
            }, this),
            status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-alert",
                role: "status",
                children: status
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2520,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inventory-grid",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "inventory-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2528,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2529,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: item.supplier
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2530,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2527,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inventory-meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(item.price)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2533,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: item.isService ? "Service" : `${item.stock} ${item.unit}s`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2534,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "icon-button",
                                                onClick: ()=>onEdit(item),
                                                "aria-label": `Edit ${item.name}`,
                                                title: "Edit item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2543,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2536,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "icon-button danger",
                                                onClick: ()=>onDelete(item),
                                                "aria-label": `Delete ${item.name}`,
                                                title: "Delete item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2552,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2545,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2535,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2532,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2526,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2524,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2509,
        columnNumber: 5
    }, this);
}
function InventoryEditor({ form, title, pending, onChange, onCancel, onSave }) {
    function update(key, value) {
        onChange({
            ...form,
            [key]: value
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        role: "presentation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "inventory-modal",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "inventory-editor-title",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "panel-heading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Stock control"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2587,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "inventory-editor-title",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2588,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2586,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "icon-button",
                            onClick: onCancel,
                            "aria-label": "Close editor",
                            title: "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2591,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2590,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 2585,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2597,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.name,
                                    onChange: (event)=>update("name", event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2598,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2596,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Category"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2601,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.category,
                                    onChange: (event)=>update("category", event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2602,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2600,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Supplier"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2605,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.supplier,
                                    onChange: (event)=>update("supplier", event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2606,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2604,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Unit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2609,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.unit,
                                    onChange: (event)=>update("unit", event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2610,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2608,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Price"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2613,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: "0",
                                    step: "0.01",
                                    value: form.price,
                                    onChange: (event)=>update("price", event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2614,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2612,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Stock"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2617,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: "0",
                                    step: "0.01",
                                    value: form.stock,
                                    onChange: (event)=>update("stock", event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2618,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2616,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Low stock threshold"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2621,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: "0",
                                    step: "0.01",
                                    value: form.threshold,
                                    onChange: (event)=>update("threshold", event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2622,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2620,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "check-row editor-check",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: form.isService,
                                    onChange: (event)=>update("isService", event.target.checked)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2625,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Service item"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2630,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2624,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 2595,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "secondary-action",
                            onClick: onCancel,
                            disabled: pending,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2635,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "primary-action",
                            onClick: onSave,
                            disabled: pending,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2639,
                                    columnNumber: 13
                                }, this),
                                " ",
                                pending ? "Saving..." : "Save item"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 2638,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 2634,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard.tsx",
            lineNumber: 2584,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2583,
        columnNumber: 5
    }, this);
}
function SuppliersPanel({ rows, onAdd, onEdit, onDelete }) {
    const listRows = rows.map((row)=>({
            ...row,
            raw: row
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleList, {
        title: "Suppliers",
        eyebrow: "Vendor contacts",
        rows: listRows,
        onAdd: onAdd,
        onEdit: (row)=>onEdit(row.raw),
        onDelete: (row)=>onDelete(row.raw)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2659,
        columnNumber: 10
    }, this);
}
function PurchasesPanel({ rows, onAdd, onEdit, onDelete }) {
    const listRows = rows.map((row)=>({
            id: row.id,
            name: row.name,
            category: row.category,
            phone: `${row.quantity} units · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(row.unitCost)} · ${row.date}`,
            active: row.active,
            raw: row
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleList, {
        title: "Purchases / Stock Intake",
        eyebrow: "Restock records",
        rows: listRows,
        onAdd: onAdd,
        onEdit: (row)=>onEdit(row.raw),
        onDelete: (row)=>onDelete(row.raw)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2681,
        columnNumber: 10
    }, this);
}
function ExpensesPanel({ rows, onAdd, onEdit, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Business costs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2699,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Expenses"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2700,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2698,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "small-action",
                        onClick: onAdd,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__["WalletCards"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2703,
                                columnNumber: 11
                            }, this),
                            " Add expense"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2702,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2697,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stack-list",
                children: rows.map((expense)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stack-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: expense.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2710,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            expense.date,
                                            " · ",
                                            expense.method,
                                            " · ",
                                            expense.staff
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2711,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2709,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(expense.amount)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2713,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RowActions, {
                                onEdit: ()=>onEdit(expense),
                                onDelete: ()=>onDelete(expense),
                                label: expense.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2714,
                                columnNumber: 13
                            }, this)
                        ]
                    }, expense.id, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2708,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2706,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2696,
        columnNumber: 5
    }, this);
}
function QuotesPanel({ rows, onAdd, onEdit, onDelete, onPrint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Customer requests"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2739,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Quotes / Orders"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2740,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2738,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "small-action",
                        onClick: onAdd,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2743,
                                columnNumber: 11
                            }, this),
                            " Add quote"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2742,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2737,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stack-list",
                children: rows.map((quote)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stack-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: quote.customer
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2750,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            quote.phone,
                                            " · ",
                                            quote.request,
                                            quote.quantity ? ` · Qty ${quote.quantity}` : "",
                                            quote.totalAmount > 0 ? ` · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(quote.totalAmount)}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2751,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2749,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "status paid",
                                children: quote.status
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2757,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "icon-button",
                                        onClick: ()=>onPrint(quote),
                                        "aria-label": `Print quote for ${quote.customer}`,
                                        title: "Print quote",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2760,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2759,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RowActions, {
                                        onEdit: ()=>onEdit(quote),
                                        onDelete: ()=>onDelete(quote),
                                        label: quote.customer
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2762,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2758,
                                columnNumber: 13
                            }, this)
                        ]
                    }, quote.id, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2748,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2746,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2736,
        columnNumber: 5
    }, this);
}
function CustomersPanel({ rows, onAdd, onEdit, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Buying history"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2786,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Customers"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2787,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2785,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "small-action",
                        onClick: onAdd,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2790,
                                columnNumber: 11
                            }, this),
                            " Add customer"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2789,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2784,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inventory-grid",
                children: rows.map((customer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "inventory-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: customer.phone
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2797,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: customer.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2798,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            customer.visits,
                                            " visits"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2799,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2796,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inventory-meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(customer.balance)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2802,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Balance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2803,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-actions",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RowActions, {
                                            onEdit: ()=>onEdit(customer),
                                            onDelete: ()=>onDelete(customer),
                                            label: customer.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2805,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2804,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2801,
                                columnNumber: 13
                            }, this)
                        ]
                    }, customer.id, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2795,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2793,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 2783,
        columnNumber: 5
    }, this);
}
function isWithinReportPeriod(dateValue, period) {
    if (period === "all") {
        return true;
    }
    const date = parseSaleDate(dateValue) ?? new Date(dateValue);
    if (Number.isNaN(date.getTime())) {
        return false;
    }
    const now = new Date();
    if (period === "today") {
        return date.toDateString() === now.toDateString();
    }
    if (period === "yesterday") {
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        return date.toDateString() === yesterday.toDateString();
    }
    if (period === "this-month") {
        return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
    }
    const start = new Date(now);
    start.setDate(now.getDate() - 30);
    start.setHours(0, 0, 0, 0);
    return date >= start && date <= now;
}
function reportPeriodLabel(period) {
    const labels = {
        today: "Today",
        yesterday: "Yesterday",
        "this-month": "This month",
        "last-30": "Last 30 days",
        all: "All time"
    };
    return labels[period];
}
function ReportsPanel({ inventoryItems, salesRecords, expenseRecords, customerRecords, staffRecords }) {
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("this-month");
    const [reportKind, setReportKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const inventoryValue = inventoryItems.filter((item)=>!item.isService).reduce((sum, item)=>sum + item.price * item.stock, 0);
    const filteredSales = salesRecords.filter((sale)=>isWithinReportPeriod(sale.date, period));
    const filteredExpenses = expenseRecords.filter((expense)=>isWithinReportPeriod(expense.date, period));
    const salesAmount = filteredSales.reduce((sum, sale)=>sum + saleTotal(sale), 0);
    const discountAmount = filteredSales.reduce((sum, sale)=>sum + sale.discount, 0);
    const remainingInventoryValue = inventoryValue - salesAmount;
    const expensesTotal = filteredExpenses.reduce((sum, expense)=>sum + expense.amount, 0);
    const topCategory = (()=>{
        const byValue = {};
        for (const item of inventoryItems){
            if (!item.isService) {
                byValue[item.category] = (byValue[item.category] ?? 0) + item.price * item.stock;
            }
        }
        const entries = Object.entries(byValue);
        if (!entries.length) return "—";
        return entries.sort(([, a], [, b])=>b - a)[0][0];
    })();
    const openBalances = customerRecords.reduce((sum, c)=>sum + c.balance, 0);
    const lowStockItems = inventoryItems.filter((item)=>!item.isService && item.stock <= item.threshold);
    const staffActivity = staffRecords.map((staff)=>{
        const sales = filteredSales.filter((sale)=>sale.staff === staff.name || sale.staff === staff.email);
        return {
            name: staff.name,
            role: staff.role,
            active: staff.active,
            salesCount: sales.length,
            salesAmount: sales.reduce((sum, sale)=>sum + saleTotal(sale), 0)
        };
    });
    const reportSummary = {
        kind: reportKind ?? "business",
        periodLabel: reportPeriodLabel(period),
        inventoryValue,
        salesAmount,
        remainingInventoryValue,
        discountAmount,
        expensesTotal,
        openBalances,
        topCategory,
        salesCount: filteredSales.length,
        lowStockCount: lowStockItems.length,
        sales: filteredSales,
        lowStockItems,
        expenses: filteredExpenses,
        staffActivity
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "dashboard-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel wide-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Analysis period"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2937,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Report filter"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2938,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2936,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "small-action",
                                        onClick: ()=>setReportKind("business"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2941,
                                                columnNumber: 13
                                            }, this),
                                            " Print report"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2940,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2935,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-grid",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Time period"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2946,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: period,
                                            onChange: (event)=>setPeriod(event.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "today",
                                                    children: "Today"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2948,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "yesterday",
                                                    children: "Yesterday"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2949,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "this-month",
                                                    children: "This month"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2950,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "last-30",
                                                    children: "Last 30 days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2951,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: "All time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 2952,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2947,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2945,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2944,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2934,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSign$3e$__["BadgeDollarSign"],
                        label: "Inventory value",
                        value: inventoryValue > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(inventoryValue) : "—",
                        tone: "green"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2957,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReceiptText$3e$__["ReceiptText"],
                        label: "Sales amount",
                        value: salesAmount > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(salesAmount) : "—",
                        tone: "gold"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2958,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSign$3e$__["BadgeDollarSign"],
                        label: "Remaining inventory value",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(remainingInventoryValue),
                        tone: "green"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2959,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                        label: "Discounts",
                        value: discountAmount > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(discountAmount) : "—",
                        tone: "blue"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2960,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                        label: "Expenses",
                        value: expensesTotal > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(expensesTotal) : "—",
                        tone: "red"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2961,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
                        label: "Top category",
                        value: topCategory,
                        tone: "gold"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2962,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                        label: "Open balances",
                        value: openBalances > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(openBalances) : "—",
                        tone: "blue"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2963,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel wide-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-heading",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "Operational reports"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2967,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Ready report exports"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 2968,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 2966,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2965,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "quick-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setReportKind("sales"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2972,
                                                columnNumber: 72
                                            }, this),
                                            " Sales summary"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2972,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setReportKind("low-stock"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2973,
                                                columnNumber: 76
                                            }, this),
                                            " Low-stock report"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2973,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setReportKind("expenses"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__["WalletCards"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2974,
                                                columnNumber: 75
                                            }, this),
                                            " Expense report"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2974,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setReportKind("staff"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 2975,
                                                columnNumber: 72
                                            }, this),
                                            " Staff activity"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 2975,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 2971,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 2964,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2933,
                columnNumber: 7
            }, this),
            reportKind ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportPrintModal, {
                summary: reportSummary,
                onClose: ()=>setReportKind(null)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 2979,
                columnNumber: 21
            }, this) : null
        ]
    }, void 0, true);
}
function StaffPanel({ rows, onAdd, onEdit, onDelete }) {
    const listRows = rows.map((row)=>({
            id: row.id,
            name: row.name,
            category: row.role,
            phone: row.email,
            active: row.active,
            raw: row
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleList, {
        title: "Staff Accounts",
        eyebrow: "Role-based access",
        rows: listRows,
        onAdd: onAdd,
        onEdit: (row)=>onEdit(row.raw),
        onDelete: (row)=>onDelete(row.raw)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 3003,
        columnNumber: 10
    }, this);
}
function SettingsPanel({ settings, onEdit }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel settings-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Business profile"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3011,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3012,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 3010,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "small-action",
                        onClick: onEdit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3015,
                                columnNumber: 11
                            }, this),
                            " Edit settings"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 3014,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 3009,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].logo,
                        alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name} logo`,
                        width: 220,
                        height: 135
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 3019,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Business name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3022,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: settings.name,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3023,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3021,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Phone numbers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3026,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: settings.phones,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3027,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3025,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Location"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3030,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: settings.location,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3031,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3029,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Receipt footer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3034,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: settings.receiptFooter,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3035,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3033,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 3020,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 3018,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 3008,
        columnNumber: 5
    }, this);
}
function SimpleList({ title, eyebrow, rows, onAdd, onEdit, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3062,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3063,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 3061,
                        columnNumber: 9
                    }, this),
                    onAdd ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "small-action",
                        onClick: onAdd,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3067,
                                columnNumber: 13
                            }, this),
                            " Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 3066,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 3060,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stack-list",
                children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stack-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: row.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3075,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            row.category,
                                            " · ",
                                            row.phone
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3076,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3074,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: row.active ? "status paid" : "status part-paid",
                                children: row.active ? "Active" : "Inactive"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3078,
                                columnNumber: 13
                            }, this),
                            onEdit && onDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RowActions, {
                                onEdit: ()=>onEdit(row),
                                onDelete: ()=>onDelete(row),
                                label: row.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3082,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, row.id ?? `${row.name}-${row.phone}`, true, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 3073,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 3071,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 3059,
        columnNumber: 5
    }, this);
}
function RowActions({ onEdit, onDelete, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row-actions",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "icon-button",
                onClick: onEdit,
                "aria-label": `Edit ${label}`,
                title: "Edit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 3102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "icon-button danger",
                onClick: onDelete,
                "aria-label": `Delete ${label}`,
                title: "Delete",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 3105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 3101,
        columnNumber: 5
    }, this);
}
function ManagedEditor({ editor, pending, onChange, onCancel, onSave }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        role: "presentation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "inventory-modal",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "managed-editor-title",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "panel-heading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Admin management"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "managed-editor-title",
                                    children: editor.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "icon-button",
                            onClick: onCancel,
                            "aria-label": "Close editor",
                            title: "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-grid",
                    children: editor.fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: field.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3141,
                                    columnNumber: 15
                                }, this),
                                field.type === "select" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: field.value,
                                    onChange: (event)=>onChange(field.name, event.target.value),
                                    children: (field.options ?? []).map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: option,
                                            children: option
                                        }, option, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3145,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3143,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: field.type ?? "text",
                                    min: field.type === "number" ? "0" : undefined,
                                    step: field.type === "number" ? "0.01" : undefined,
                                    autoComplete: field.type === "password" ? "new-password" : undefined,
                                    value: field.value,
                                    onChange: (event)=>onChange(field.name, event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3151,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, field.name, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3140,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "secondary-action",
                            onClick: onCancel,
                            disabled: pending,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "primary-action",
                            onClick: onSave,
                            disabled: pending,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3169,
                                    columnNumber: 13
                                }, this),
                                " ",
                                pending ? "Saving..." : "Save changes"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3164,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard.tsx",
            lineNumber: 3127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 3126,
        columnNumber: 5
    }, this);
}
function QuotePrintModal({ quote, onClose }) {
    const generatedAt = new Date();
    const quoteDate = generatedAt.toLocaleDateString("en-GB");
    const validUntil = new Date(generatedAt);
    validUntil.setDate(validUntil.getDate() + 14);
    const validityDate = validUntil.toLocaleDateString("en-GB");
    const requestedItems = quoteRecordToCart(quote);
    const quoteRows = requestedItems.length ? requestedItems : quoteRecordToCart({
        ...quote,
        request: quote.request || "Requested items"
    });
    const subtotal = requestedItems.length ? requestedItems.reduce((sum, item)=>sum + item.quantity * item.price, 0) : quote.totalAmount;
    const blankRowCount = Math.max(0, 10 - quoteRows.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Quote preview",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "quote-modal",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "small-action",
                            onClick: ()=>window.print(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3197,
                                    columnNumber: 13
                                }, this),
                                " Print"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "icon-button",
                            onClick: onClose,
                            "aria-label": "Close quote",
                            title: "Close quote",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3200,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3199,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "quote-print-area",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "quote-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "quote-address-block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "From"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3208,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].address
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3209,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].location
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3210,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "quote-logo-box",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].logo,
                                        alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name} logo`,
                                        width: 168,
                                        height: 104
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3213,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "quote-topline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "quote-address-block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "To"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: quote.customer || "Customer Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3220,
                                            columnNumber: 15
                                        }, this),
                                        quote.phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: quote.phone
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3221,
                                            columnNumber: 30
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "quote-title-block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: "Quote"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "quote-meta-lines",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Quote #:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                                            lineNumber: 3226,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: quote.id.toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                                            lineNumber: 3226,
                                                            columnNumber: 48
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3226,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Quote Date:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                                            lineNumber: 3227,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: quoteDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                                            lineNumber: 3227,
                                                            columnNumber: 51
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3227,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Due Date:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                                            lineNumber: 3228,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: validityDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                                            lineNumber: 3228,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3228,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3225,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3223,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "quote-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Qty"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 3236,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 3237,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Unit price"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 3238,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 3239,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3235,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        quoteRows.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: item.quantity
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                                        lineNumber: 3245,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                                        lineNumber: 3246,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: item.price > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(item.price) : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                                        lineNumber: 3247,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: item.price > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(item.price * item.quantity) : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                                        lineNumber: 3248,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, `${quote.id}-${item.name}-${index}`, true, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 3244,
                                                columnNumber: 17
                                            }, this)),
                                        Array.from({
                                            length: blankRowCount
                                        }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                                        lineNumber: 3253,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                                        lineNumber: 3254,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                                        lineNumber: 3255,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                                        lineNumber: 3256,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, `${quote.id}-blank-${index}`, true, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 3252,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3242,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "quote-summary",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "quote-totals-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Subtotal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 3264,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(subtotal)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 3264,
                                                columnNumber: 46
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 3265,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(subtotal)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                                lineNumber: 3265,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3265,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3263,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "quote-terms",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Terms and conditions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Payment is due within 14 days of quote acceptance."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Prices, availability, delivery, and payment terms should be confirmed before supply."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Thank you for your business!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3273,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            className: "quote-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Tel:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3278,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phoneLine"]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Email:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3281,
                                            columnNumber: 15
                                        }, this),
                                        " -"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Web:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3284,
                                            columnNumber: 15
                                        }, this),
                                        " -"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3283,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3276,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3204,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard.tsx",
            lineNumber: 3194,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 3193,
        columnNumber: 5
    }, this);
}
function ReportPrintModal({ summary, onClose }) {
    const generatedAt = new Date().toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short"
    });
    const title = {
        business: "Business Report",
        sales: "Sales Summary",
        "low-stock": "Low-Stock Report",
        expenses: "Expense Report",
        staff: "Staff Activity"
    }[summary.kind];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Business report preview",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "report-modal",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "small-action",
                            onClick: ()=>window.print(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3340,
                                    columnNumber: 13
                                }, this),
                                " Print"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "icon-button",
                            onClick: onClose,
                            "aria-label": "Close report",
                            title: "Close report",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3343,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3342,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3338,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "report-print-area",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].logo,
                            alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name} logo`,
                            width: 120,
                            height: 74,
                            className: "receipt-logo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].tagline
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3350,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].location
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3351,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3352,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3353,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Period: ",
                                summary.periodLabel
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3354,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Generated: ",
                                generatedAt
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3356,
                            columnNumber: 11
                        }, this),
                        summary.kind === "business" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "report-lines",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Total sales amount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3359,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(summary.salesAmount)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3359,
                                            columnNumber: 56
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3359,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Remaining inventory value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3360,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(summary.remainingInventoryValue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3360,
                                            columnNumber: 63
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3360,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Total inventory value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3361,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(summary.inventoryValue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3361,
                                            columnNumber: 59
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3361,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Discounts given"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3362,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(summary.discountAmount)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3362,
                                            columnNumber: 53
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3362,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Expenses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3363,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(summary.expensesTotal)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3363,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3363,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Open customer balances"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3364,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(summary.openBalances)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3364,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3364,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Sales count"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3365,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: summary.salesCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3365,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3365,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Low stock items"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3366,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: summary.lowStockCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3366,
                                            columnNumber: 53
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3366,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Top inventory category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3367,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: summary.topCategory
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3367,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3367,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3358,
                            columnNumber: 13
                        }, this) : null,
                        summary.kind === "sales" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "report-lines",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Total sales amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3374,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(summary.salesAmount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3374,
                                                    columnNumber: 58
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3374,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Sales count"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3375,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: summary.salesCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3375,
                                                    columnNumber: 51
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3375,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Discounts given"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3376,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(summary.discountAmount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3376,
                                                    columnNumber: 55
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3376,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3373,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportTable, {
                                    headers: [
                                        "Ref",
                                        "Customer",
                                        "Staff",
                                        "Total",
                                        "Paid"
                                    ],
                                    rows: summary.sales.map((sale)=>[
                                            sale.ref,
                                            sale.customer,
                                            sale.staff,
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(saleTotal(sale)),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(sale.paid)
                                        ])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3378,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : null,
                        summary.kind === "low-stock" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "report-lines",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Low stock items"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3394,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: summary.lowStockCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3394,
                                                    columnNumber: 55
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3394,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Top inventory category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3395,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: summary.topCategory
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3395,
                                                    columnNumber: 62
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3395,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3393,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportTable, {
                                    headers: [
                                        "Item",
                                        "Category",
                                        "Stock",
                                        "Threshold"
                                    ],
                                    rows: summary.lowStockItems.map((item)=>[
                                            item.name,
                                            item.category,
                                            `${item.stock} ${item.unit}`,
                                            `${item.threshold} ${item.unit}`
                                        ])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3397,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : null,
                        summary.kind === "expenses" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "report-lines",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Total expenses"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3412,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(summary.expensesTotal)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3412,
                                                    columnNumber: 54
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3412,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Expense entries"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3413,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: summary.expenses.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3413,
                                                    columnNumber: 55
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3413,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3411,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportTable, {
                                    headers: [
                                        "Date",
                                        "Category",
                                        "Method",
                                        "Amount"
                                    ],
                                    rows: summary.expenses.map((expense)=>[
                                            expense.date,
                                            expense.category,
                                            expense.method,
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(expense.amount)
                                        ])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3415,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : null,
                        summary.kind === "staff" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "report-lines",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Active staff"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3430,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: summary.staffActivity.filter((staff)=>staff.active).length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3430,
                                                    columnNumber: 52
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3430,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Sales count"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3431,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: summary.salesCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                                    lineNumber: 3431,
                                                    columnNumber: 51
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3431,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3429,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportTable, {
                                    headers: [
                                        "Staff",
                                        "Role",
                                        "Sales",
                                        "Amount"
                                    ],
                                    rows: summary.staffActivity.map((staff)=>[
                                            staff.name,
                                            staff.role,
                                            String(staff.salesCount),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(staff.salesAmount)
                                        ])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3433,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3444,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Prepared for management review."
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3445,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3347,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard.tsx",
            lineNumber: 3337,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 3336,
        columnNumber: 5
    }, this);
}
function ReportTable({ headers, rows }) {
    if (!rows.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "No records found for this period."
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard.tsx",
            lineNumber: 3454,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        className: "report-table",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    children: headers.map((header)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: header
                        }, header, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3462,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3460,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 3459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                children: rows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                children: cell
                            }, `${cell}-${cellIndex}`, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3470,
                                columnNumber: 15
                            }, this))
                    }, `${row.join("-")}-${index}`, false, {
                        fileName: "[project]/src/app/admin/dashboard.tsx",
                        lineNumber: 3468,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard.tsx",
                lineNumber: 3466,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 3458,
        columnNumber: 5
    }, this);
}
function ReceiptModal({ sale, onClose }) {
    const total = saleTotal(sale);
    const change = Math.max(sale.paid - total, 0);
    const balance = Math.max(total - sale.paid, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Receipt preview",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "receipt-modal",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "small-action",
                            onClick: ()=>window.print(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3489,
                                    columnNumber: 13
                                }, this),
                                " Print"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3488,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "icon-button",
                            onClick: onClose,
                            "aria-label": "Close receipt",
                            title: "Close receipt",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3492,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3491,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3487,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "receipt-print-area",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].logo,
                            alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name} logo`,
                            width: 120,
                            height: 74,
                            className: "receipt-logo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3497,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3498,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].tagline
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3499,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].location
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3500,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].address
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3501,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Tel: ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phoneLine"]
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3502,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3503,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Date: ",
                                sale.date
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3504,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Ref: ",
                                sale.ref
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3505,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Cust: ",
                                sale.customer
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3506,
                            columnNumber: 11
                        }, this),
                        sale.phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Tel: ",
                                sale.phone
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3507,
                            columnNumber: 25
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Pay: ",
                                sale.method
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3508,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Serv: ",
                                sale.staff
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3509,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3510,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "receipt-row receipt-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "ITEM"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3512,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "QTY"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "TOTAL"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3514,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3511,
                            columnNumber: 11
                        }, this),
                        sale.items.length ? sale.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "receipt-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3519,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.quantity
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3520,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(item.price * item.quantity)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard.tsx",
                                        lineNumber: 3521,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${sale.ref}-${item.id}`, true, {
                                fileName: "[project]/src/app/admin/dashboard.tsx",
                                lineNumber: 3518,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Line items unavailable for this reprint."
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3525,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3527,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "receipt-totals",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "SUBTOTAL ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(total + sale.discount)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3529,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3529,
                                    columnNumber: 13
                                }, this),
                                sale.discount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "DISCOUNT ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                "-",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(sale.discount)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3530,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3530,
                                    columnNumber: 30
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "TOTAL ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(total)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3531,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3531,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "PAID ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(sale.paid)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3532,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3532,
                                    columnNumber: 13
                                }, this),
                                change ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "CHANGE ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(change)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3533,
                                            columnNumber: 36
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3533,
                                    columnNumber: 23
                                }, this) : null,
                                balance ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "BALANCE DUE ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGhs"])(balance)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard.tsx",
                                            lineNumber: 3534,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard.tsx",
                                    lineNumber: 3534,
                                    columnNumber: 24
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3528,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3536,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Thank you for your patronage!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard.tsx",
                            lineNumber: 3537,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard.tsx",
                    lineNumber: 3496,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard.tsx",
            lineNumber: 3486,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard.tsx",
        lineNumber: 3485,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0sd5vm1._.js.map