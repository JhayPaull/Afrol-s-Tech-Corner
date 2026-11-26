/**
 * products-data.js
 * Afrol's Tech Corner — Shared 100-Item Product Catalog
 * Handles localStorage sync between admin.html and index.html
 */

// ─── STORAGE KEY ────────────────────────────────────────────────────────────
const STORAGE_KEY = 'afrol_tech_products';

// ─── DEFAULT 100-ITEM CATALOG ────────────────────────────────────────────────
const DEFAULT_PRODUCTS = [

  // ══════════════════════════════════════════════════════
  //  RELO / SMARTWATCHES (1–25)
  // ══════════════════════════════════════════════════════
  {
    id: 1,
    name: 'Samsung Galaxy Watch 7',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 18990,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'
  },
  {
    id: 2,
    name: 'Apple Watch Series 10',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 24990,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80'
  },
  {
    id: 3,
    name: 'Garmin Venu 3',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 21500,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80'
  },
  {
    id: 4,
    name: 'Xiaomi Mi Band 9',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80'
  },
  {
    id: 5,
    name: 'Huawei Watch GT 5',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 14990,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80'
  },
  {
    id: 6,
    name: 'Fitbit Charge 6',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 9990,
    image: 'https://images.unsplash.com/photo-1555487505-8603a1a69755?w=600&q=80'
  },
  {
    id: 7,
    name: 'Samsung Galaxy Watch Ultra',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 34990,
    image: 'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=600&q=80'
  },
  {
    id: 8,
    name: 'Amazfit GTR 4',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 7490,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80'
  },
  {
    id: 9,
    name: 'Apple Watch SE 2',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 16490,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'
  },
  {
    id: 10,
    name: 'Garmin Forerunner 965',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 29900,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80'
  },
  {
    id: 11,
    name: 'Fossil Gen 6 Smartwatch',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 11500,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80'
  },
  {
    id: 12,
    name: 'Realme Watch 3 Pro',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80'
  },
  {
    id: 13,
    name: 'Oppo Watch 4 Pro',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 16990,
    image: 'https://images.unsplash.com/photo-1555487505-8603a1a69755?w=600&q=80'
  },
  {
    id: 14,
    name: 'Withings ScanWatch 2',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 19500,
    image: 'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=600&q=80'
  },
  {
    id: 15,
    name: 'Haylou RS5 Smart Watch',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'
  },
  {
    id: 16,
    name: 'Garmin Instinct 2 Solar',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 23500,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80'
  },
  {
    id: 17,
    name: 'Samsung Galaxy Fit 3',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 3290,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80'
  },
  {
    id: 18,
    name: 'Xiaomi Redmi Watch 4',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80'
  },
  {
    id: 19,
    name: 'Fitbit Sense 2',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 12990,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80'
  },
  {
    id: 20,
    name: 'Amazfit Balance',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 9490,
    image: 'https://images.unsplash.com/photo-1555487505-8603a1a69755?w=600&q=80'
  },
  {
    id: 21,
    name: 'Polar Vantage V3',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 32990,
    image: 'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=600&q=80'
  },
  {
    id: 22,
    name: 'Noise ColorFit Pro 5',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'
  },
  {
    id: 23,
    name: 'Suunto Race S',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 27500,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80'
  },
  {
    id: 24,
    name: 'Imilab W12 SmartWatch',
    category: 'Relo / Smartwatches',
    status: 'Best Seller',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80'
  },
  {
    id: 25,
    name: 'Coros Vertix 2S',
    category: 'Relo / Smartwatches',
    status: 'Just In',
    price: 39990,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80'
  },

  // ══════════════════════════════════════════════════════
  //  LAPTOPS (26–50)
  // ══════════════════════════════════════════════════════
  {
    id: 26,
    name: 'MacBook Air M3 (13")',
    category: 'Laptops',
    status: 'Best Seller',
    price: 74990,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80'
  },
  {
    id: 27,
    name: 'MacBook Pro M4 (14")',
    category: 'Laptops',
    status: 'Just In',
    price: 109990,
    image: 'https://images.unsplash.com/photo-1611186871525-4b92d3c2cd2a?w=600&q=80'
  },
  {
    id: 28,
    name: 'ASUS ROG Zephyrus G14',
    category: 'Laptops',
    status: 'Best Seller',
    price: 89990,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80'
  },
  {
    id: 29,
    name: 'Dell XPS 15 (2024)',
    category: 'Laptops',
    status: 'Just In',
    price: 99990,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80'
  },
  {
    id: 30,
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'Laptops',
    status: 'Best Seller',
    price: 79990,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80'
  },
  {
    id: 31,
    name: 'HP Spectre x360 14',
    category: 'Laptops',
    status: 'Just In',
    price: 69990,
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80'
  },
  {
    id: 32,
    name: 'ASUS VivoBook 15 OLED',
    category: 'Laptops',
    status: 'Best Seller',
    price: 42990,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80'
  },
  {
    id: 33,
    name: 'Acer Swift 5 Slim',
    category: 'Laptops',
    status: 'Just In',
    price: 54990,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80'
  },
  {
    id: 34,
    name: 'Samsung Galaxy Book 4 Pro',
    category: 'Laptops',
    status: 'Best Seller',
    price: 72990,
    image: 'https://images.unsplash.com/photo-1611186871525-4b92d3c2cd2a?w=600&q=80'
  },
  {
    id: 35,
    name: 'Microsoft Surface Pro 11',
    category: 'Laptops',
    status: 'Just In',
    price: 84990,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80'
  },
  {
    id: 36,
    name: 'Lenovo IdeaPad Slim 5',
    category: 'Laptops',
    status: 'Best Seller',
    price: 36990,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80'
  },
  {
    id: 37,
    name: 'HP Envy x360 15',
    category: 'Laptops',
    status: 'Just In',
    price: 59990,
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80'
  },
  {
    id: 38,
    name: 'ASUS TUF Gaming F15',
    category: 'Laptops',
    status: 'Best Seller',
    price: 55990,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80'
  },
  {
    id: 39,
    name: 'Dell Inspiron 16 Plus',
    category: 'Laptops',
    status: 'Just In',
    price: 64990,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80'
  },
  {
    id: 40,
    name: 'Acer Nitro 5 (2024)',
    category: 'Laptops',
    status: 'Best Seller',
    price: 48990,
    image: 'https://images.unsplash.com/photo-1611186871525-4b92d3c2cd2a?w=600&q=80'
  },
  {
    id: 41,
    name: 'MacBook Air M2 (15")',
    category: 'Laptops',
    status: 'Best Seller',
    price: 83990,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80'
  },
  {
    id: 42,
    name: 'Realme Book Prime',
    category: 'Laptops',
    status: 'Just In',
    price: 34990,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80'
  },
  {
    id: 43,
    name: 'Xiaomi Mi Notebook Pro',
    category: 'Laptops',
    status: 'Best Seller',
    price: 47990,
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80'
  },
  {
    id: 44,
    name: 'Lenovo Legion 5 Pro',
    category: 'Laptops',
    status: 'Just In',
    price: 76990,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80'
  },
  {
    id: 45,
    name: 'HP Pavilion 15 Laptop',
    category: 'Laptops',
    status: 'Best Seller',
    price: 32990,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80'
  },
  {
    id: 46,
    name: 'ASUS ExpertBook B9',
    category: 'Laptops',
    status: 'Just In',
    price: 95990,
    image: 'https://images.unsplash.com/photo-1611186871525-4b92d3c2cd2a?w=600&q=80'
  },
  {
    id: 47,
    name: 'MSI Prestige 16 AI',
    category: 'Laptops',
    status: 'Best Seller',
    price: 69990,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80'
  },
  {
    id: 48,
    name: 'Acer Aspire 5 (2024)',
    category: 'Laptops',
    status: 'Just In',
    price: 38990,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80'
  },
  {
    id: 49,
    name: 'Huawei MateBook D16',
    category: 'Laptops',
    status: 'Best Seller',
    price: 44990,
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80'
  },
  {
    id: 50,
    name: 'ASUS ROG Flow Z13',
    category: 'Laptops',
    status: 'Just In',
    price: 115990,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80'
  },

  // ══════════════════════════════════════════════════════
  //  CELLPHONES / CP (51–75)
  // ══════════════════════════════════════════════════════
  {
    id: 51,
    name: 'iPhone 16 Pro Max',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 89990,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
  },
  {
    id: 52,
    name: 'Samsung Galaxy S25 Ultra',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 79990,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80'
  },
  {
    id: 53,
    name: 'Google Pixel 9 Pro',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 69990,
    image: 'https://images.unsplash.com/photo-1598327105854-a718f04d8e3e?w=600&q=80'
  },
  {
    id: 54,
    name: 'Xiaomi 14 Ultra',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 59990,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80'
  },
  {
    id: 55,
    name: 'OnePlus 13',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 44990,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
  },
  {
    id: 56,
    name: 'Samsung Galaxy A55',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 22990,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80'
  },
  {
    id: 57,
    name: 'Realme GT 6T',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 23990,
    image: 'https://images.unsplash.com/photo-1598327105854-a718f04d8e3e?w=600&q=80'
  },
  {
    id: 58,
    name: 'Vivo X100 Ultra',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 54990,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80'
  },
  {
    id: 59,
    name: 'Oppo Find X8 Pro',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 62990,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
  },
  {
    id: 60,
    name: 'Huawei Nova 12 Pro',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 34990,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80'
  },
  {
    id: 61,
    name: 'iPhone 16',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 59990,
    image: 'https://images.unsplash.com/photo-1598327105854-a718f04d8e3e?w=600&q=80'
  },
  {
    id: 62,
    name: 'Samsung Galaxy Z Fold 6',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 99990,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80'
  },
  {
    id: 63,
    name: 'Xiaomi Redmi Note 13 Pro+',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 19990,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
  },
  {
    id: 64,
    name: 'Realme 12 Pro Plus',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 17990,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80'
  },
  {
    id: 65,
    name: 'Samsung Galaxy Z Flip 6',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 59990,
    image: 'https://images.unsplash.com/photo-1598327105854-a718f04d8e3e?w=600&q=80'
  },
  {
    id: 66,
    name: 'Nothing Phone (2a) Plus',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 24990,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80'
  },
  {
    id: 67,
    name: 'Tecno Pova 6 Pro',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 12990,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
  },
  {
    id: 68,
    name: 'Infinix GT 20 Pro',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 13990,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80'
  },
  {
    id: 69,
    name: 'Vivo V40 Pro',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 29990,
    image: 'https://images.unsplash.com/photo-1598327105854-a718f04d8e3e?w=600&q=80'
  },
  {
    id: 70,
    name: 'Oppo Reno 12 Pro',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 27990,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80'
  },
  {
    id: 71,
    name: 'Google Pixel 8a',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 36990,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
  },
  {
    id: 72,
    name: 'Samsung Galaxy A35',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 17990,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80'
  },
  {
    id: 73,
    name: 'Xiaomi POCO X6 Pro',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 15990,
    image: 'https://images.unsplash.com/photo-1598327105854-a718f04d8e3e?w=600&q=80'
  },
  {
    id: 74,
    name: 'Huawei Pura 70 Pro',
    category: 'Cellphones (CP)',
    status: 'Best Seller',
    price: 49990,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80'
  },
  {
    id: 75,
    name: 'OnePlus Nord 4',
    category: 'Cellphones (CP)',
    status: 'Just In',
    price: 20990,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
  },

  // ══════════════════════════════════════════════════════
  //  ACCESSORIES (76–100)
  // ══════════════════════════════════════════════════════
  {
    id: 76,
    name: 'AirPods Pro 2nd Gen',
    category: 'Accessories',
    status: 'Best Seller',
    price: 14990,
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=600&q=80'
  },
  {
    id: 77,
    name: 'Sony WH-1000XM5 Headphones',
    category: 'Accessories',
    status: 'Best Seller',
    price: 19990,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80'
  },
  {
    id: 78,
    name: 'Samsung 65W Charger',
    category: 'Accessories',
    status: 'Just In',
    price: 1990,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80'
  },
  {
    id: 79,
    name: 'Anker 26800 Power Bank',
    category: 'Accessories',
    status: 'Best Seller',
    price: 4499,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80'
  },
  {
    id: 80,
    name: 'Logitech MX Master 3S',
    category: 'Accessories',
    status: 'Best Seller',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80'
  },
  {
    id: 81,
    name: 'Samsung T7 Shield 1TB SSD',
    category: 'Accessories',
    status: 'Just In',
    price: 5490,
    image: 'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?w=600&q=80'
  },
  {
    id: 82,
    name: 'Belkin 3-in-1 Wireless Charger',
    category: 'Accessories',
    status: 'Best Seller',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80'
  },
  {
    id: 83,
    name: 'JBL Charge 5 Speaker',
    category: 'Accessories',
    status: 'Just In',
    price: 7490,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80'
  },
  {
    id: 84,
    name: 'Sony WF-1000XM5 Earbuds',
    category: 'Accessories',
    status: 'Best Seller',
    price: 16990,
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=600&q=80'
  },
  {
    id: 85,
    name: 'Logitech G Pro X Keyboard',
    category: 'Accessories',
    status: 'Just In',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?w=600&q=80'
  },
  {
    id: 86,
    name: 'Samsung USB-C Hub 7-in-1',
    category: 'Accessories',
    status: 'Best Seller',
    price: 2990,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80'
  },
  {
    id: 87,
    name: 'Bose QuietComfort 45',
    category: 'Accessories',
    status: 'Just In',
    price: 17990,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80'
  },
  {
    id: 88,
    name: 'Anker 737 Power Bank 24K',
    category: 'Accessories',
    status: 'Best Seller',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80'
  },
  {
    id: 89,
    name: 'Apple MagSafe Charger 15W',
    category: 'Accessories',
    status: 'Best Seller',
    price: 2890,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80'
  },
  {
    id: 90,
    name: 'Samsung Galaxy Buds 3 Pro',
    category: 'Accessories',
    status: 'Just In',
    price: 11990,
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=600&q=80'
  },
  {
    id: 91,
    name: 'Razer Basilisk V3 Pro Mouse',
    category: 'Accessories',
    status: 'Just In',
    price: 6490,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80'
  },
  {
    id: 92,
    name: 'Sandisk 1TB Extreme SSD',
    category: 'Accessories',
    status: 'Best Seller',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?w=600&q=80'
  },
  {
    id: 93,
    name: 'JBL Tune 770NC Headphones',
    category: 'Accessories',
    status: 'Just In',
    price: 4499,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80'
  },
  {
    id: 94,
    name: 'Xiaomi 120W GaN Charger',
    category: 'Accessories',
    status: 'Best Seller',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80'
  },
  {
    id: 95,
    name: 'Logitech Pebble M350s Mouse',
    category: 'Accessories',
    status: 'Best Seller',
    price: 1990,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80'
  },
  {
    id: 96,
    name: 'JBL Flip 6 Portable Speaker',
    category: 'Accessories',
    status: 'Just In',
    price: 5490,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80'
  },
  {
    id: 97,
    name: 'Realme Buds Air 6 Pro',
    category: 'Accessories',
    status: 'Best Seller',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=600&q=80'
  },
  {
    id: 98,
    name: 'Baseus 65W USB-C Car Charger',
    category: 'Accessories',
    status: 'Just In',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80'
  },
  {
    id: 99,
    name: 'Corsair K70 RGB Keyboard',
    category: 'Accessories',
    status: 'Best Seller',
    price: 8990,
    image: 'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?w=600&q=80'
  },
  {
    id: 100,
    name: 'Sony SRS-XB100 Speaker',
    category: 'Accessories',
    status: 'Just In',
    price: 3290,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80'
  }
];


// ─── LOCALSTORAGE HELPERS ─────────────────────────────────────────────────────

/**
 * Load products from localStorage.
 * Falls back to DEFAULT_PRODUCTS if key doesn't exist yet.
 * @returns {Array} products array
 */
function loadProducts() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.warn('Afrol Tech: Failed to parse stored products. Using defaults.', e);
    }
  }
  // First run — seed localStorage with defaults
  saveProducts(DEFAULT_PRODUCTS);
  return DEFAULT_PRODUCTS;
}

/**
 * Persist the products array to localStorage.
 * @param {Array} products
 */
function saveProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

/**
 * Reset localStorage back to factory defaults.
 */
function resetProducts() {
  saveProducts(DEFAULT_PRODUCTS);
  return DEFAULT_PRODUCTS;
}

/**
 * Update a single product's editable fields by ID.
 * @param {number} id
 * @param {Object} updates — e.g. { price: 9999, name: 'New Name', image: 'https://...' }
 * @returns {Array} updated full products array
 */
function updateProduct(id, updates) {
  const products = loadProducts();
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return products;
  products[idx] = { ...products[idx], ...updates };
  saveProducts(products);
  return products;
}

/**
 * Format Philippine Peso price string.
 * @param {number} price
 * @returns {string}  e.g. "₱18,990"
 */
function formatPrice(price) {
  return '₱' + Number(price).toLocaleString('en-PH');
}
