# ToolZone | Heavy-Duty Power Tools E-Commerce Store

An industrial-grade, responsive e-commerce website for heavy-duty power tools, designed for Indian contractors, fabricators, carpenters, and workshops.

Built with **pure HTML5, CSS3, and Vanilla JavaScript**, with zero runtime dependencies. It runs directly in any modern browser, or can be deployed in seconds to static hosting platforms like GitHub Pages, Vercel, or Netlify.

---

## 🚀 Live Demo & Key Highlights

- **Multi-Page Experience**:
  - `index.html` — Homepage featuring hot deals, bestselling tools, contractor reviews, and trust badges.
  - `shop.html` — Interactive catalog with category filters (Angle Grinders, Drills, Cordless Brushless, Saws, Kits) and sorting.
  - `product.html` — Dynamic product detail view with technical specifications table, pincode delivery timeline calculator, and warranty information.
  - `cart.html` — Full-featured shopping cart, free shipping progress bar (threshold: ₹1,999), and two-step checkout.
  - `about.html` — Story, 4 engineering standards (100% copper armatures, 1-yr warranty), and business metrics.
  - `contact.html` — Contact details, regional fulfillment depot locations, and WhatsApp inquiry form.

- **Direct Indian Commerce Integrations**:
  - **Payment Modes**: Supports Cash on Delivery (COD) and Direct UPI (with QR code and copyable UPI ID).
  - **Instant WhatsApp Checkout**: Automatically formats cart items, quantities, addresses, and payment selection into a structured message sent directly to WhatsApp.
  - **Pincode Delivery Check**: 6-digit Indian PIN code validator with estimated transit days.
  - **Persistent Cart**: Stores user selections securely in browser `localStorage`.
  - **Mobile-First Design**: Minimum 44px touch targets, sticky navigation, and responsive drawer menu.

---

## 📁 Project Structure

```
├── index.html        # Homepage
├── shop.html         # All Power Tools Catalog
├── product.html      # Dynamic Product Detail Page
├── cart.html         # Shopping Cart & Checkout Page
├── about.html        # About Us & Company Standards
├── contact.html      # Contact & Support Page
├── css/
│   └── style.css     # Complete styling system & responsive rules
├── js/
│   ├── products.js   # Power tool catalog data & helper functions
│   └── main.js       # Cart state, mobile drawer, WhatsApp links & UI handlers
├── images/           # SVG illustrations & product artwork
└── README.md         # Project documentation
```

---

## 💻 Running the Website Locally

You can run this project in two ways:

### Option 1: Direct in Browser (Simplest)
Just double-click `index.html` to open it in Chrome, Edge, Safari, or Firefox.

### Option 2: Using a Local Development Server
If you have Node.js installed:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be accessible at `http://localhost:3000`.

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be published live at `https://<username>.github.io/<repo-name>/`.

---

## 📄 License & Attribution

© 2026 ToolZone India (toolzonestore.in). All Rights Reserved.
Developed for Indian hardware contractors and tradesmen.
