/**
 * ToolZone Main Application Logic
 * -------------------------------------------------------------
 * Clean vanilla JavaScript with zero dependencies.
 * Handles: Cart with LocalStorage, WhatsApp Checkout, Dynamic Product
 * rendering, Pincode verification, Mobile Drawer, and Filters.
 * -------------------------------------------------------------
 */

const STORE_CONFIG = {
  name: "ToolZone",
  phone: "+91 94630 69968",
  whatsappNumber: "919463069968", // WhatsApp international format (without + or spaces)
  email: "support@toolzonestore.in",
  upiId: "toolzone@okhdfcbank",
  freeShippingThreshold: 1999,
  standardShippingFee: 99
};

/* ==========================================================================
   Cart System (LocalStorage Persistence)
   ========================================================================== */

const CART_STORAGE_KEY = 'toolzone_cart_items_v1';

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to read cart from localStorage:", err);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadge();
  } catch (err) {
    console.error("Failed to save cart:", err);
  }
}

function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) {
    showToast("Product not found!");
    return;
  }

  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === product.id);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      mrp: product.mrp,
      image: product.image,
      categoryLabel: product.categoryLabel,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`Added ${quantity}x "${product.name.substring(0, 24)}..." to Cart!`);
}

function updateCartQuantity(productId, newQty) {
  let cart = getCart();
  const index = cart.findIndex(item => item.id === productId);
  if (index > -1) {
    if (newQty <= 0) {
      cart.splice(index, 1);
      showToast("Item removed from cart");
    } else {
      cart[index].quantity = newQty;
    }
    saveCart(cart);
    renderCartPage();
  }
}

function removeFromCart(productId) {
  updateCartQuantity(productId, 0);
}

function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  updateCartBadge();
}

function getCartTotalCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-counter');
  const count = getCartTotalCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ==========================================================================
   UI Notifications (Toasts)
   ========================================================================== */

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

/* ==========================================================================
   Mobile Drawer & Navigation
   ========================================================================== */

function setupNavigation() {
  const hamburger = document.getElementById('hamburger-btn');
  const closeBtn = document.getElementById('mobile-nav-close');
  const backdrop = document.getElementById('mobile-nav-backdrop');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.body.classList.add('mobile-nav-open');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.body.classList.remove('mobile-nav-open');
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      document.body.classList.remove('mobile-nav-open');
    });
  }

  // Highlight active page link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-links a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  updateCartBadge();
}

/* ==========================================================================
   Product Card HTML Template Generator
   ========================================================================== */

function generateProductCardHTML(product) {
  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  
  return `
    <article class="product-card" id="product-card-${product.id}">
      <div class="product-card-media">
        <div class="product-badge-group">
          ${product.badge ? `<span class="badge badge-orange">${product.badge}</span>` : ''}
        </div>
        <span class="product-discount-tag">${discountPercent}% OFF</span>
        <a href="product.html?id=${product.id}" aria-label="View ${product.name}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
      </div>
      <div class="product-card-body">
        <span class="product-category-label">${product.categoryLabel}</span>
        <h3 class="product-card-title">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-rating">
          <span class="rating-stars">★★★★★</span>
          <span>${product.rating}</span>
          <span class="rating-count">(${product.reviewsCount})</span>
        </div>
        <div class="product-spec-chip">
          ${Object.entries(product.specs)[0] ? `${Object.keys(product.specs)[0]}: ${Object.values(product.specs)[0]}` : 'Heavy Duty Quality'}
        </div>
        <div class="product-price-row">
          <span class="current-price">${formatINR(product.price)}</span>
          <span class="mrp-price">${formatINR(product.mrp)}</span>
        </div>
        <div class="product-card-actions">
          <button class="btn btn-primary btn-full" onclick="addToCart(${product.id}, 1)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   Home Page Logic
   ========================================================================== */

function initHomePage() {
  const container = document.getElementById('featured-products-grid');
  if (!container || typeof PRODUCTS === 'undefined') return;

  // Display top 6 featured tools on homepage
  const featured = PRODUCTS.slice(0, 6);
  container.innerHTML = featured.map(generateProductCardHTML).join('');
}

/* ==========================================================================
   Shop / Catalog Page Logic (Filter & Sort)
   ========================================================================== */

function initShopPage() {
  const container = document.getElementById('shop-products-grid');
  if (!container || typeof PRODUCTS === 'undefined') return;

  let activeCategory = 'all';
  let activeSort = 'featured';

  function renderFilteredProducts() {
    let filtered = [...PRODUCTS];

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (activeSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    const countElem = document.getElementById('product-count-display');
    if (countElem) {
      countElem.textContent = `Showing ${filtered.length} products`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">No power tools found in this category</h3>
          <p style="color: var(--color-text-muted);">Try choosing "All Tools" above to view our full collection.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(generateProductCardHTML).join('');
    }
  }

  // Filter button click events
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderFilteredProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('shop-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderFilteredProducts();
    });
  }

  renderFilteredProducts();
}

/* ==========================================================================
   Product Detail Page Logic (Dynamic via ?id=)
   ========================================================================== */

function initProductDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 1; // Default to first product if none specified
  const product = getProductById(productId);

  if (!product) {
    const main = document.getElementById('product-detail-container');
    if (main) {
      main.innerHTML = `
        <div style="text-align: center; padding: 5rem 1rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem;">Product Not Found</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">The power tool you are looking for might be discontinued or unavailable.</p>
          <a href="shop.html" class="btn btn-primary">Browse All Power Tools</a>
        </div>
      `;
    }
    return;
  }

  // Set Page Title and SEO metadata
  document.title = `${product.name} | ToolZone India`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = product.shortDesc;

  // Render Product Image & Badges
  const imageBox = document.getElementById('product-image-box');
  if (imageBox) {
    imageBox.innerHTML = `<img id="main-product-img" src="${product.image}" alt="${product.name}">`;
  }

  // Render Title & Pricing
  const titleEl = document.getElementById('product-title');
  if (titleEl) titleEl.textContent = product.name;

  const categoryEl = document.getElementById('product-category-breadcrumb');
  if (categoryEl) categoryEl.textContent = product.categoryLabel;

  const priceEl = document.getElementById('product-current-price');
  if (priceEl) priceEl.textContent = formatINR(product.price);

  const mrpEl = document.getElementById('product-mrp');
  if (mrpEl) mrpEl.textContent = formatINR(product.mrp);

  const discountBadge = document.getElementById('product-savings-badge');
  if (discountBadge) {
    const savings = product.mrp - product.price;
    const discountPercent = Math.round((savings / product.mrp) * 100);
    discountBadge.textContent = `Save ${formatINR(savings)} (${discountPercent}% OFF)`;
  }

  const shortDescEl = document.getElementById('product-short-desc');
  if (shortDescEl) shortDescEl.textContent = product.shortDesc;

  const fullDescEl = document.getElementById('product-full-desc');
  if (fullDescEl) fullDescEl.textContent = product.fullDesc;

  // Key Features
  const featuresList = document.getElementById('product-features-list');
  if (featuresList && product.keyFeatures) {
    featuresList.innerHTML = product.keyFeatures.map(feat => `
      <li style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span style="font-size: var(--text-sm); font-weight: 500;">${feat}</span>
      </li>
    `).join('');
  }

  // Specifications Table
  const specsTable = document.getElementById('product-specs-tbody');
  if (specsTable && product.specs) {
    specsTable.innerHTML = Object.entries(product.specs).map(([label, val]) => `
      <tr>
        <td>${label}</td>
        <td>${val}</td>
      </tr>
    `).join('');
  }

  // Quantity stepper
  let currentQty = 1;
  const qtyInput = document.getElementById('detail-qty-input');
  const minusBtn = document.getElementById('detail-qty-minus');
  const plusBtn = document.getElementById('detail-qty-plus');

  if (minusBtn && qtyInput) {
    minusBtn.addEventListener('click', () => {
      if (currentQty > 1) {
        currentQty--;
        qtyInput.value = currentQty;
      }
    });
  }

  if (plusBtn && qtyInput) {
    plusBtn.addEventListener('click', () => {
      currentQty++;
      qtyInput.value = currentQty;
    });
  }

  // Add to Cart Button
  const addToCartBtn = document.getElementById('detail-add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      addToCart(product.id, currentQty);
    });
  }

  // Instant Buy Now button
  const buyNowBtn = document.getElementById('detail-buy-now-btn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      addToCart(product.id, currentQty);
      window.location.href = 'cart.html';
    });
  }

  // WhatsApp Enquiry for this specific tool
  const waBtn = document.getElementById('detail-whatsapp-btn');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const msg = encodeURIComponent(
        `Namaste ToolZone, I am interested in purchasing:\n\n*${product.name}*\nPrice: ${formatINR(product.price)}\n\nPlease share availability, bulk discount, and delivery timeline to my pincode.`
      );
      window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${msg}`, '_blank');
    });
  }

  // Pincode Delivery Estimator
  const pincodeBtn = document.getElementById('check-pincode-btn');
  const pincodeInput = document.getElementById('pincode-input');
  const pincodeResult = document.getElementById('pincode-result');

  if (pincodeBtn && pincodeInput && pincodeResult) {
    pincodeBtn.addEventListener('click', () => {
      const pin = pincodeInput.value.trim();
      if (!/^\d{6}$/.test(pin)) {
        pincodeResult.className = 'pincode-result error';
        pincodeResult.textContent = 'Please enter a valid 6-digit Indian Pincode (e.g. 110001 or 400001).';
        return;
      }

      // Calculate realistic delivery date (3-4 business days)
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 3);
      const dateString = deliveryDate.toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });

      pincodeResult.className = 'pincode-result success';
      pincodeResult.innerHTML = `
        <strong>✓ Delivery Available to ${pin} by ${dateString}</strong><br>
        Cash on Delivery & Direct UPI available. Dispatched within 24 hours from regional tool depot.
      `;
    });
  }

  // Related Products
  const relatedGrid = document.getElementById('related-products-grid');
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
    const fallback = related.length ? related : PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
    relatedGrid.innerHTML = fallback.map(generateProductCardHTML).join('');
  }
}

/* ==========================================================================
   Cart & Checkout Page Logic
   ========================================================================== */

function renderCartPage() {
  const container = document.getElementById('cart-items-container');
  const emptyView = document.getElementById('cart-empty-view');
  const cartContent = document.getElementById('cart-content-view');
  
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    if (emptyView) emptyView.style.display = 'block';
    if (cartContent) cartContent.style.display = 'none';
    return;
  }

  if (emptyView) emptyView.style.display = 'none';
  if (cartContent) cartContent.style.display = 'grid';

  // Render items
  container.innerHTML = cart.map(item => `
    <div class="cart-item-card" id="cart-item-${item.id}">
      <div class="cart-item-thumb">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <span class="product-category-label">${item.categoryLabel || 'Power Tool'}</span>
        <h4>${item.name}</h4>
        <div class="cart-item-price">${formatINR(item.price)}</div>
        <div class="cart-item-controls">
          <div class="quantity-stepper">
            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" aria-label="Decrease quantity">-</button>
            <input type="text" class="quantity-input" value="${item.quantity}" readonly>
            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" aria-label="Increase quantity">+</button>
          </div>
          <button class="cart-remove-btn" onclick="removeFromCart(${item.id})">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
            Remove
          </button>
        </div>
      </div>
      <div style="font-weight: 800; font-size: 1.1rem; text-align: right;">
        ${formatINR(item.price * item.quantity)}
      </div>
    </div>
  `).join('');

  // Calculations
  const subtotal = getCartSubtotal();
  const isFreeShipping = subtotal >= STORE_CONFIG.freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : STORE_CONFIG.standardShippingFee;
  const total = subtotal + shippingFee;

  // Update Free Shipping Meter
  const meterFill = document.getElementById('meter-progress-fill');
  const meterText = document.getElementById('meter-text-info');
  if (meterFill && meterText) {
    if (isFreeShipping) {
      meterFill.style.width = '100%';
      meterFill.style.backgroundColor = 'var(--color-success)';
      meterText.innerHTML = `<span style="color: var(--color-success); font-weight: 800;">🎉 Congratulations! You have unlocked FREE Express Delivery!</span>`;
    } else {
      const remaining = STORE_CONFIG.freeShippingThreshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / STORE_CONFIG.freeShippingThreshold) * 100));
      meterFill.style.width = `${pct}%`;
      meterFill.style.backgroundColor = 'var(--color-accent)';
      meterText.innerHTML = `Add <strong>${formatINR(remaining)}</strong> more to get <strong>FREE Express Shipping</strong>!`;
    }
  }

  // Summary figures
  const subtotalEl = document.getElementById('summary-subtotal');
  const shippingEl = document.getElementById('summary-shipping');
  const totalEl = document.getElementById('summary-total');

  if (subtotalEl) subtotalEl.textContent = formatINR(subtotal);
  if (shippingEl) shippingEl.textContent = isFreeShipping ? 'FREE' : formatINR(shippingFee);
  if (totalEl) totalEl.textContent = formatINR(total);
}

function initCartPage() {
  renderCartPage();

  // Payment method selection switcher
  const codRadio = document.getElementById('pay-cod');
  const upiRadio = document.getElementById('pay-upi');
  const upiSection = document.getElementById('upi-qr-section');
  const paymentOptions = document.querySelectorAll('.payment-option');

  function updatePaymentUI() {
    paymentOptions.forEach(opt => opt.classList.remove('selected'));
    if (upiRadio && upiRadio.checked) {
      upiRadio.closest('.payment-option').classList.add('selected');
      if (upiSection) upiSection.classList.add('visible');
    } else if (codRadio) {
      codRadio.closest('.payment-option').classList.add('selected');
      if (upiSection) upiSection.classList.remove('visible');
    }
  }

  if (codRadio) codRadio.addEventListener('change', updatePaymentUI);
  if (upiRadio) upiRadio.addEventListener('change', updatePaymentUI);

  // Copy UPI ID button
  const copyUpiBtn = document.getElementById('copy-upi-btn');
  if (copyUpiBtn) {
    copyUpiBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(STORE_CONFIG.upiId).then(() => {
        showToast("UPI ID copied to clipboard!");
      }).catch(() => {
        showToast("UPI ID: " + STORE_CONFIG.upiId);
      });
    });
  }

  // Checkout Form Submission (generates structured WhatsApp order)
  const checkoutForm = document.getElementById('checkout-order-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const cart = getCart();
      if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
      }

      const name = document.getElementById('order-name').value.trim();
      const phone = document.getElementById('order-phone').value.trim();
      const address = document.getElementById('order-address').value.trim();
      const pincode = document.getElementById('order-pincode').value.trim();
      const city = document.getElementById('order-city').value.trim();
      const gst = document.getElementById('order-gst')?.value.trim() || 'N/A';
      const isUpi = document.getElementById('pay-upi')?.checked;
      const paymentMethod = isUpi ? 'Direct UPI Payment' : 'Cash on Delivery (COD)';

      if (!name || !phone || !address || !pincode) {
        showToast("Please fill all required delivery details.");
        return;
      }

      if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
        showToast("Please enter a valid 10-digit mobile number.");
        return;
      }

      const subtotal = getCartSubtotal();
      const shipping = subtotal >= STORE_CONFIG.freeShippingThreshold ? 0 : STORE_CONFIG.standardShippingFee;
      const finalTotal = subtotal + shipping;

      // Build WhatsApp message format
      let itemLines = cart.map((item, idx) => 
        `${idx + 1}. *${item.name}*\n   Qty: ${item.quantity} × ${formatINR(item.price)} = ${formatINR(item.price * item.quantity)}`
      ).join('\n\n');

      const messageText = 
`⚡ *NEW ORDER: ${STORE_CONFIG.name} Store*
--------------------------------
*CUSTOMER DETAILS:*
• Name: ${name}
• Mobile: ${phone}
• Delivery Address: ${address}
• City & Pincode: ${city ? city + ' - ' : ''}${pincode}
• GST Number: ${gst}

*ORDER ITEMS:*
${itemLines}

--------------------------------
• Subtotal: ${formatINR(subtotal)}
• Shipping: ${shipping === 0 ? 'FREE' : formatINR(shipping)}
• *GRAND TOTAL: ${formatINR(finalTotal)}*
• *Payment Mode: ${paymentMethod}*
--------------------------------
Please confirm dispatch and share tracking details. Thank you!`;

      // Open WhatsApp
      const whatsappURL = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappURL, '_blank');

      // Clear cart & show friendly confirmation
      clearCart();
      
      const successModal = document.getElementById('order-success-modal');
      if (successModal) {
        successModal.style.display = 'flex';
      } else {
        showToast("Order initiated on WhatsApp!");
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1500);
      }
    });
  }
}

/* ==========================================================================
   Contact Page Logic
   ========================================================================== */

function initContactPage() {
  const form = document.getElementById('contact-inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const phone = document.getElementById('contact-phone').value;
      const message = document.getElementById('contact-message').value;

      const waText = `Namaste ToolZone Team,\n\nMy Name: ${name}\nPhone: ${phone}\n\n*Inquiry:* ${message}`;
      window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`, '_blank');
      showToast("Redirecting your inquiry to WhatsApp...");
      form.reset();
    });
  }
}

/* ==========================================================================
   DOM Ready Initialization
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();

  // Route-specific initializer based on body data-page or element existence
  if (document.getElementById('featured-products-grid')) {
    initHomePage();
  } else if (document.getElementById('shop-products-grid')) {
    initShopPage();
  } else if (document.getElementById('product-detail-container')) {
    initProductDetailPage();
  } else if (document.getElementById('cart-items-container')) {
    initCartPage();
  } else if (document.getElementById('contact-inquiry-form')) {
    initContactPage();
  }
});
