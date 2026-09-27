// File Format Example: Santos_Juan_BSCS4A

// ==========================================
// 10 CONST VARIABLES
// ==========================================
const storeName = "TechMart Express";
const taxRate = 0.12;
const freeShippingThreshold = 2000;
const currencySymbol = "PHP";
const maxCartItems = 10;
const supportEmail = "help@techmart.ph";
const defaultCarrier = "Express Delivery";
const minOrderAmount = 100;
const discountCode = "SAVE10";
const systemTimezone = "Asia/Manila";

// ==========================================
// 10 LET VARIABLES
// ==========================================
let currentCartTotal = 0;
let itemCount = 0;
let isDiscountApplied = false;
let appliedDiscountAmount = 0;
let shippingFee = 150;
let orderStatus = "Pending";
let selectedPaymentMethod = "GCash";
let customerLoyaltyPoints = 250;
let estimatedDeliveryDays = 3;
let activeSessionToken = "TOK-987654321";

// SAMPLE DATA FOR DESTRUCTURING & SPREAD DEMOS
const rawOrderInfo = ["ORD-2026-99", "2026-09-09", "Credit Card", "Completed"];
const rawItemDetails = ["PROD-01", "Wireless Mouse", 850, 2];
const rawWarehouseLoc = ["Zone A", "Aisle 4", "Bin 12"];

const customerInfo = {
  id: "CUST-8812",
  name: "Maria Santos",
  membership: "Gold",
  address: {
    street: "45 Rizal St",
    city: "Calbayog",
    zip: "6710"
  }
};

const vendorInfo = {
  vendorId: "VEND-004",
  companyName: "LogiTech Distro",
  contactPerson: "Carlos Garcia"
};

const paymentConfig = {
  gateway: "PayMaya",
  merchantId: "MERCH-7711",
  security: {
    requiresOtp: true
  }
};

// ==========================================
// 3 DESTRUCTURED ARRAYS
// ==========================================
// 1. Array destructuring
const [orderId, orderDate, paymentType, status] = rawOrderInfo;

// 2. Array destructuring
const [productId, productName, productPrice, productQty] = rawItemDetails;

// 3. Array destructuring
const [warehouseZone, warehouseAisle, warehouseBin] = rawWarehouseLoc;

// ==========================================
// 3 DESTRUCTURED OBJECT LITERALS
// ==========================================
// 1. Object destructuring
const { id: customerId, name: customerName, membership: customerTier } = customerInfo;

// 2. Object destructuring
const { vendorId, companyName, contactPerson } = vendorInfo;

// 3. Object destructuring
const { gateway, merchantId } = paymentConfig;

// ==========================================
// 2 ARRAYS USING SPREAD OPERATOR
// ==========================================
const electronicsCategory = ["Headphones", "Keyboard", "Monitor"];
const accessoriesCategory = ["Mousepad", "USB Hub", "Cable Organizer"];

// 1. Spread operator array
const combinedCatalog = [...electronicsCategory, ...accessoriesCategory];

// 2. Spread operator array with additional elements
const fullInventory = ["Featured Item", ...combinedCatalog, "Clearance Item"];

// ==========================================
// 2 OBJECT LITERALS USING SPREAD OPERATOR
// ==========================================
const baseProduct = {
  category: "Electronics",
  inStock: true,
  warrantyMonths: 12
};

// 1. Spread operator object literal
const laptopProduct = {
  ...baseProduct,
  id: "LAP-001",
  title: "Gaming Laptop",
  price: 45000
};

// 2. Spread operator object literal with property override
const promotionalProduct = {
  ...baseProduct,
  title: "Budget Tablet",
  price: 8000,
  warrantyMonths: 6
};

// SAMPLE DATA FOR MAP & FILTER
const orderItems = [
  { id: 101, name: "Mechanical Keyboard", price: 2500, inStock: true },
  { id: 102, name: "Bluetooth Speaker", price: 1200, inStock: false },
  { id: 103, name: "Webcam 1080p", price: 1800, inStock: true },
  { id: 104, name: "USB Micro", price: 350, inStock: true },
  { id: 105, name: "Ergonomic Chair", price: 6500, inStock: false }
];

// ==========================================
// 2 ARRAYS USING .map()
// ==========================================
// 1. Map to extract product titles
const itemNamesList = orderItems.map(item => item.name);

// 2. Map to calculate prices with VAT tax added
const pricesWithTax = orderItems.map(item => item.price * (1 + taxRate));

// ==========================================
// 2 ARRAYS USING .filter()
// ==========================================
// 1. Filter items that are currently in stock
const availableItems = orderItems.filter(item => item.inStock === true);

// 2. Filter premium items (price > 1500 PHP)
const premiumItems = orderItems.filter(item => item.price > 1500);

// SAMPLE DATA FOR OPTIONAL CHAINING
const completeCustomerProfile = {
  account: {
    details: {
      phone: "+639171234567"
    }
  }
};

const incompleteCustomerProfile = {
  account: {}
};

// ==========================================
// 2 OBJECT LITERALS USING OPTIONAL CHAINING
// ==========================================
// 1. Optional chaining on existing nested property
const verifiedPhoneRecord = {
  customerId: "CUST-101",
  contactPhone: completeCustomerProfile?.account?.details?.phone ?? "No Phone Registered"
};

// 2. Optional chaining on missing nested property (safe fallback)
const verifiedAddressRecord = {
  customerId: "CUST-102",
  deliveryCity: incompleteCustomerProfile?.account?.shipping?.city ?? "City Not Specified"
};

// ==========================================
// 5 ARROW FUNCTIONS & 10 TEMPLATE LITERALS
// ==========================================

// Arrow Function 1 (Template Literals 1 & 2)
const generateHeaderBanner = () => {
  // Template Literal 1
  const title = `=== ${storeName.toUpperCase()} ORDER SYSTEM ===`;
  // Template Literal 2
  return `${title}\nProcessing Timezone: ${systemTimezone} | Customer Email: ${supportEmail}`;
};

// Arrow Function 2 (Template Literals 3 & 4)
const formatPriceTag = (name, amount) => {
  // Template Literal 3
  const formattedAmount = `${currencySymbol} ${amount.toFixed(2)}`;
  // Template Literal 4
  return `Item: [${name}] - Final Price: ${formattedAmount}`;
};

// Arrow Function 3 (Template Literals 5 & 6)
const getWarehouseBinTag = (zone, bin) => {
  // Template Literal 5
  const locationCode = `LOC-${zone}`;
  // Template Literal 6
  return `Storage Designation: ${locationCode} / ${bin}`;
};

// Arrow Function 4 (Template Literals 7 & 8)
const generateReceiptLine = (custName, orderNum, total) => {
  // Template Literal 7
  const customerMeta = `Customer: ${custName} (${customerId})`;
  // Template Literal 8
  return `${customerMeta} | Order #${orderNum} | Total Paid: ${currencySymbol} ${total}`;
};

// Arrow Function 5 (Template Literals 9 & 10)
const getShippingNotice = (method, days) => {
  // Template Literal 9
  const carrierInfo = `Method: ${method}`;
  // Template Literal 10
  return `Shipping Alert -> ${carrierInfo} | Estimated Arrival: ${days} business days`;
};

// ==========================================
// PROGRAM EXECUTION & OUTPUT DEMO
// ==========================================

console.log(generateHeaderBanner());

console.log("\n--- Order Summary ---");
console.log(formatPriceTag(productName, productPrice));
console.log(getWarehouseBinTag(warehouseZone, warehouseBin));

console.log("\n--- Dispatch & Receipt Details ---");
console.log(generateReceiptLine(customerName, orderId, 3200));
console.log(getShippingNotice(defaultCarrier, estimatedDeliveryDays));

console.log("\n--- Processed Catalog Data ---");
console.log("All Item Names:", itemNamesList);
console.log("Prices with VAT (12%):", pricesWithTax);
console.log("In-Stock Count:", availableItems.length);
console.log("Premium Items Count:", premiumItems.length);

console.log("\n--- Spread Operators Demo ---");
console.log("Combined Inventory List:", fullInventory);
console.log("Promotional Laptop Object:", promotionalProduct);

console.log("\n--- Optional Chaining Results ---");
console.log("Phone Verification Object:", verifiedPhoneRecord);
console.log("Address Verification Object:", verifiedAddressRecord);