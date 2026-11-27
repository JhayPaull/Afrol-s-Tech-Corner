# 🛒 Afrol's Tech Corner

> A fully responsive **Product Showcase Website** built with **HTML, CSS, and Bootstrap 5** for a Web Development Performance Task.

![Static Site](https://img.shields.io/badge/Type-Static%20Website-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Products](https://img.shields.io/badge/Products-100%20Items-green)
![No Admin](https://img.shields.io/badge/Admin-Removed-red)

---

## ✅ Assignment Requirements Checklist

| # | Requirement | Status |
|---|-------------|--------|
| 1 | **Four (4) Hyperlinks** — Home, Products, About Us, Contact | ✅ Done |
| 2 | **Products Page — 100 Images** with product names and prices | ✅ Done |
| 3 | **Bootstrap Template** — responsive, professional layout | ✅ Done |
| 4 | **Buttons** — View Details, Add to Cart, Buy Now | ✅ Done |
| 5 | **Product Prices** — clearly displayed on every card | ✅ Done |
| 6 | **Product Names** — placed directly below each product image | ✅ Done |
| 7 | **No admin/localStorage logic** — clean static catalog only | ✅ Done |

---

## 🌐 Live Page

| File | Description |
|------|-------------|
| `index.html` | Main product showcase website — open this in your browser |

---

## 🗂️ Project Structure

```
Afrol's Tech Corner/
│
├── index.html          # 🏪 Main showcase website (Bootstrap 5.3, 4 nav links, 100 products)
├── products-data.js    # 💾 Static 100-item product catalog (no localStorage, no admin)
├── style.css           # 🎨 Custom Nike-inspired styles (admin CSS removed)
└── README.md           # 📖 This file
```

> ⚠️ `admin.html` has been **permanently removed**. `products-data.js` is now a pure static data file with no localStorage, no `saveProducts()`, no `updateProduct()`, and no admin references.

---

## 🔗 Four (4) Functional Navigation Hyperlinks

Located in the sticky top navbar:

| Link | Destination |
|------|-------------|
| **Home** | `#home` — Hero section at the top of the page |
| **Products** | `#products` — Full 100-item product grid |
| **About Us** | `#about` — Store story and trust badges |
| **Contact** | `#contact` — Message form and store info |

All four links scroll smoothly to their respective sections. The active link is **highlighted** as you scroll.

---

## 🖼️ Products Page — 100 Product Images

The Products section displays **100 items** across **4 categories**:

| Category | Items | IDs |
|----------|-------|-----|
| ⌚ Relo / Smartwatches | 25 | #1 – #25 |
| 💻 Laptops | 25 | #26 – #50 |
| 📱 Cellphones (CP) | 25 | #51 – #75 |
| 🎧 Accessories | 25 | #76 – #100 |

Each product card shows:
- **Product Image** (100 total, with fallback on error)
- **Product Name** — directly below the image
- **Category** label
- **Price** — clearly displayed in Philippine Peso (₱)
- **Status tag** — Best Seller or Just In
- **Action Buttons**

---

## 🎨 Bootstrap 5.3 Template

The site is built on **Bootstrap 5.3** and includes:
- Responsive grid system (`col-lg-3 col-md-4 col-sm-6 col-6`) — adapts to any screen size
- Bootstrap Navbar with collapse on mobile
- Bootstrap Modals for product detail view
- Bootstrap utility classes for spacing, alignment, and typography
- Google Fonts: **Oswald** (headings) + **Inter** (body)
- **Bootstrap Icons** throughout the UI

---

## 🔘 Buttons — Functional & Properly Designed

### On Each Product Card:
| Button | Function |
|--------|----------|
| **View Details** (black pill) | Opens a **Product Details Modal** showing full info |
| **🛒** (orange icon) | **Add to Cart** — instantly adds 1 item, updates cart count |

### Inside the Product Details Modal:
| Button | Function |
|--------|----------|
| **Add to Cart** | Adds selected quantity to cart, shows success message |
| **Buy Now** | Adds to cart + shows order confirmation, scrolls to Contact form |

### In the Navbar:
| Button | Function |
|--------|----------|
| **Cart 🛒** | Shows live cart count badge; click to see total items & price |

---

## 💰 Product Prices

Every product displays its price in **Philippine Peso (₱)** format, e.g.:
- ₱18,990 — Samsung Galaxy Watch 7
- ₱74,990 — MacBook Air M3
- ₱89,990 — iPhone 16 Pro Max

Prices update correctly when sorted by **Low to High** or **High to Low**.

---

## 🚀 How to Run

No installation or server needed:

```bash
# Clone the repository
git clone https://github.com/JhayPaull/Afrol-s-Tech-Corner.git

# Open in browser
# Just double-click index.html — or open it from VS Code with Live Server
```

> ✅ Works on Chrome, Firefox, Edge, and Safari.

---

## ⚙️ Additional Features (Beyond Requirements)

| Feature | Description |
|---------|-------------|
| 🔍 **Live Search** | Search bar in navbar filters products in real time |
| 🏷️ **Category Filter** | Filter buttons: All / Relo / Laptops / Cellphones / Accessories |
| ↕️ **Sort** | Sort by Featured, Price Low→High, or Price High→Low |
| 🛒 **Cart System** | In-memory cart with item count badge and total price |
| 🔔 **Toast Notifications** | Bottom-right popup confirms every cart action |
| 🔢 **Quantity Selector** | +/− buttons in product modal for choosing quantity |
| 📱 **Responsive** | Works on mobile, tablet, and desktop |
| 🖱️ **Smooth Scroll** | All nav links and hero button scroll smoothly |

---

## 🧰 Built With

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure |
| **CSS3** | Custom styling and animations |
| **JavaScript (ES6+)** | Product rendering, cart, filters, search, modals |
| **Bootstrap 5.3** | Grid, navbar, modals, responsive utilities |
| **Bootstrap Icons 1.11** | Icon library |
| **Google Fonts** | Oswald + Inter typography |
| **Unsplash CDN** | Product placeholder images |

---

## 👨‍💻 Developer

**JhayPaull** — [GitHub Profile](https://github.com/JhayPaull)

---

*© 2026 Afrol's Tech Corner. All Rights Reserved.*
