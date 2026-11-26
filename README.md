# 🛒 Afrol's Tech Corner

> A fully responsive online gadget storefront for a Philippines-based tech shop — built with pure HTML, CSS, and JavaScript. No backend required.

![Static Site](https://img.shields.io/badge/Type-Static%20Website-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌐 Live Pages

| Page | File | Description |
|------|------|-------------|
| **Storefront** | `index.html` | Public-facing shop where customers browse products |
| **Admin Panel** | `admin.html` | Staff dashboard to manage product names, prices, and images |

> ⚠️ `admin.html` is **not linked** from the storefront on purpose. Access it directly by opening the file or navigating to `/admin.html`.

---

## 🔐 Admin Login Credentials

| Field | Value |
|-------|-------|
| **Username** | `admin` |
| **Password** | `afrol2026` |

**How to access the Admin Panel:**
1. Open `admin.html` in your browser
2. Enter the username and password above
3. Click **Sign In**
4. You'll be taken to the product management dashboard

> 🔒 The session is stored in `sessionStorage` — logging out or closing the browser tab will require you to sign in again.

---

## 📁 Project Structure

```
Afrol's Tech Corner/
│
├── index.html          # 🏪 Public storefront
├── admin.html          # 🛠️  Admin dashboard (password protected)
├── products-data.js    # 💾 Shared product catalog + localStorage logic
├── style.css           # 🎨 Shared styles for both pages
└── README.md           # 📖 This file
```

---

## 🔗 How the Two Pages Are Connected

Both pages share data through the **browser's `localStorage`** using a single shared script called `products-data.js`.

```
┌─────────────┐    saves changes     ┌──────────────────┐
│  admin.html │  ──────────────────► │   localStorage   │
│ (Admin Panel│                      │ "afrol_tech_     │
│            )│  ◄────────────────── │  products"       │
└─────────────┘    loads on edit     └────────┬─────────┘
                                              │
                                              │ loads on visit
                                              ▼
                                     ┌─────────────────┐
                                     │   index.html    │
                                     │  (Storefront)   │
                                     └─────────────────┘
```

**In plain English:**
- When the **admin edits** a product's name, price, or image → the change is saved to the browser's local storage
- When a **customer visits** the storefront → it reads from that same local storage and shows the updated data
- If no edits have been made yet, both pages fall back to the **100 built-in default products**

> 📝 Because this uses `localStorage`, data only syncs between pages **in the same browser on the same device**. This is a static website — there is no server or cloud database.

---

## ⚙️ How the System Works

### 🏪 Storefront (`index.html`)

The storefront is what customers see. Here's everything it can do:

| Feature | How it works |
|---------|-------------|
| **Product Grid** | Automatically loads and displays all 100 products in a responsive card layout |
| **Category Filter** | Click All / Relo / Laptops / Cellphones / Accessories to filter the grid instantly |
| **Search Bar** | Type in the navbar search box to filter products by name, category, or status in real time |
| **Sort** | Use the dropdown to sort by Featured (default), Price: Low to High, or Price: High to Low |
| **Inquire Button** | Clicking "Inquire" on any product opens a form modal where customers can submit their name and contact info |
| **Contact Form** | The "Send Us A Message" section at the bottom lets customers send general inquiries |
| **Smooth Scrolling** | Nav links and the "Explore Gadgets" button smoothly scroll to the right section |
| **Responsive Design** | Works on mobile, tablet, and desktop — built with Bootstrap 5 grid |

---

### 🛠️ Admin Dashboard (`admin.html`)

The admin panel lets staff manage the product catalog. Here's everything it can do:

| Feature | How it works |
|---------|-------------|
| **Login / Logout** | Secure front-end login gate using username + password. Session is kept per browser tab |
| **Product Table** | Shows all 100 products in a scrollable table with ID, image, name, category, status, and price |
| **Search** | Filter the table by product name, category, status, or ID number |
| **Category Filter** | Dropdown to show only one product category at a time |
| **Edit Product** | Click the ✏️ Edit button on any row to edit its name and price inline |
| **Save Changes** | Click ✓ Save (or press Enter in the price field) to save the edit — it immediately updates the storefront too |
| **Cancel Edit** | Click ✗ to discard changes without saving |
| **Change Image** | Click the pencil icon on a product thumbnail to open a modal where you can paste a new image URL with a live preview |
| **Edited Badge** | Edited products show an orange "EDITED" badge so you know what's been changed this session |
| **Summary Bar** | Shows Total Products, currently Showing (after filters), and how many were Edited This Session |
| **Reset to Defaults** | Click "Reset Default Prices" → confirm → all 100 products revert to their original names, prices, and images |
| **Toast Notifications** | A small pop-up at the bottom-right confirms every save, image update, or reset action |
| **View Storefront** | A link in the top bar opens the storefront in a new tab so you can preview changes |

---

## 💾 Data Layer (`products-data.js`)

This file is loaded by **both pages** and handles all data operations:

| Function | What it does |
|----------|-------------|
| `loadProducts()` | Loads the product list from `localStorage`. If nothing is saved yet, seeds it with the 100 default products |
| `saveProducts(array)` | Saves the full product array to `localStorage` |
| `updateProduct(id, changes)` | Updates a single product by its ID and saves |
| `resetProducts()` | Wipes saved data and restores all 100 defaults |
| `formatPrice(price)` | Formats a number like `18990` into `₱18,990` (Philippine Peso format) |

---

## 🗂️ Product Catalog

The store comes with **100 pre-loaded products** across 4 categories:

| Category | Products | IDs |
|----------|----------|-----|
| ⌚ Relo / Smartwatches | 25 items | #1 – #25 |
| 💻 Laptops | 25 items | #26 – #50 |
| 📱 Cellphones (CP) | 25 items | #51 – #75 |
| 🎧 Accessories | 25 items | #76 – #100 |

**Product status types:**
- 🔥 `Best Seller` — popular items
- 🆕 `Just In` — newly added / fresh stock

---

## 🚀 How to Run Locally

No installation needed. Just:

1. **Download or clone** this repository
2. **Open `index.html`** in any modern browser to view the storefront
3. **Open `admin.html`** to access the admin panel (use credentials above)

```bash
# Clone the repo
git clone https://github.com/JhayPaull/Afrol-s-Tech-Corner.git

# Then just open index.html in your browser
```

> ✅ Works on Chrome, Firefox, Edge, and Safari. No server or Node.js needed.

---

## 🧰 Built With

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure and content |
| **CSS3 + Custom Properties** | Styling, theming, responsive layout |
| **Vanilla JavaScript (ES6+)** | All interactivity and data management |
| **Bootstrap 5.3** | Grid system, modals, navbar, responsive utilities |
| **Bootstrap Icons** | Icon library used throughout the UI |
| **Google Fonts** | Oswald (headings) + Inter (body text) |
| **localStorage API** | Persistent data storage shared across pages |
| **Unsplash** | Default product images (CDN-hosted) |

---

## 📌 Important Notes

- 🔓 **Admin credentials are stored in the front-end source code.** This is intentional for a static/demo site. Do **not** use this setup for a real production environment without a proper backend authentication system.
- 💾 **Data is browser-local.** Changes made in the admin panel only sync to the storefront on the **same browser and device**. There is no cloud database.
- 📧 **Forms are simulated.** The inquiry and contact forms show success messages but do not actually send emails or save submissions anywhere.
- 🔗 **Admin page is hidden by design.** It is not linked from `index.html` — staff must navigate to it directly.

---

## 👨‍💻 Developer

**JhayPaull** — [GitHub Profile](https://github.com/JhayPaull)

---

*© 2026 Afrol's Tech Corner. All Rights Reserved.*
