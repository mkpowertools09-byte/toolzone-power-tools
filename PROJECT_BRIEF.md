# ToolZone E-Commerce Project Brief

## 1. Brand & Business Overview
- **Store Name:** ToolZone
- **Domain:** toolzonestore.in
- **Category:** Industrial & Heavy-Duty Power Tools (Drills, Grinders, Cordless Drivers, Rotary Hammers, Cutters, Saws, Toolkits)
- **Target Audience:** Contractors, workshop technicians, carpenters, metalworkers, fabricators, and DIY enthusiasts in India.
- **Brand Identity / Vibe:** Clean Minimal Modern — rugged, precision-engineered, high-contrast, professional, and clutter-free.

## 2. Product Catalog & Pricing Strategy
- **Launch Catalog:** 8-12 bestselling power tools.
- **Price Range:** ₹1,500 – ₹15,000.
- **Data Model:** Clean, easy-to-edit JavaScript array in `js/products.js`.
- **Photo Strategy:** Real, crisp tool images with clean studio aesthetics and easy placeholder fallbacks.

## 3. Site Structure & Architecture
- `index.html` - Homepage (Top announcement bar, hero banner, bestselling tools, category cards, why choose us, warranty pledge, reviews, footer).
- `shop.html` - Full product catalog with category filter tabs, search, and sorting.
- `product.html` - Dynamic product detail page driven by query parameter (`product.html?id=1`) with full technical specs (Watts, RPM, Voltage, Chuck size, Weight), pincode delivery estimator, quantity selector, add to cart, and direct WhatsApp enquiry.
- `cart.html` - Real interactive cart with item counter, quantity +/- adjustments, item removal, free shipping progress bar (orders above ₹1,999), promo discount calculation, and checkout modal with direct WhatsApp order generation & UPI QR code.
- `about.html` - Story of ToolZone, authorized quality commitment, testing standards, and direct dealer support.
- `contact.html` - Interactive contact form, direct phone call link, shop address, Google Map placeholder, and WhatsApp link.

## 4. Design & Aesthetic Specifications
- **Theme:** Clean Minimal Modern with Electric Orange accents.
- **Colors:**
  - Off-White canvas / Light Background: `#F8FAFC` & `#FFFFFF`
  - Slate / Charcoal text: `#0F172A` and `#334155`
  - Accent / Primary CTA: Electric Orange (`#F97316` / `#EA580C`)
  - Border & Dividers: Subtle slate border (`#E2E8F0`)
- **Typography:** Google Fonts (`Plus Jakarta Sans` for clean, modern legibility).
- **Mobile First:** Optimized for 375px+ screens, responsive hamburger menu, minimum 44px tap targets.

## 5. Payments & Checkout Flow
- **Payment Methods:**
  - **UPI:** Instant UPI ID copy + QR code placeholder.
  - **Cash on Delivery (COD):** Available for verified pincodes.
- **WhatsApp Integration:** Checkout compiles order details (Items, quantities, customer name, phone, shipping address, payment method) and automatically opens a pre-filled WhatsApp message to the store owner's number (`+91 94630 69968`).

## 6. Trust & Conversion Features
- Top announcement bar: "Free Express Shipping on Orders Above ₹1,999 | 100% Genuine 1-Year Warranty".
- Pincode delivery estimator on product page.
- Technical specs comparison table.
- Verified customer reviews & ratings.
- GST invoice option for contractors & businesses.
- Sticky floating WhatsApp button across all pages.
