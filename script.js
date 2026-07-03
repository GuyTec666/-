/* ============================================================
   FRESH FRUITS MARKET — script.js
   ============================================================ */

/* ---- Default product seed data ---- */
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'ส้มสายน้ำผึ้ง',
    category: 'citrus',
    season: 'yearround',
    price: 65,
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500&auto=format&fit=crop',
    description: 'ส้มสายน้ำผึ้งสด คัดเกรดพิเศษ หวานฉ่ำ เปลือกบาง รสชาติดี เต็มไปด้วยวิตามิน C'
  },
  {
    id: 2,
    name: 'มะนาว',
    category: 'citrus',
    season: 'yearround',
    price: 40,
    image: 'https://images.unsplash.com/photo-1596404643764-2a2461483a3b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'มะนาวเขียวสด เหมาะทำน้ำมะนาว ปรุงอาหาร รสเปรี้ยวจัดจ้าน ฉ่ำน้ำ'
  },
  {
    id: 3,
    name: 'ส้มโอทับทิมสยาม',
    category: 'citrus',
    season: 'yearround',
    price: 90,
    image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=500&auto=format&fit=crop',
    description: 'ส้มโอทับทิมสยาม ชื่อดังจากปราจีนบุรี หวานอมเปรี้ยว เนื้อแน่น ฉ่ำน้ำ'
  },
  {
    id: 4,
    name: 'มะม่วงน้ำตาลอกไม้',
    category: 'tropical',
    season: 'summer',
    price: 120,
    image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop',
    description: 'มะม่วงน้ำตาลอกไม้ หวานหอม เนื้อแน่นไม่มีเส้น เหมาะทานสดหรือทำข้าวเหนียวมะม่วง'
  },
  {
    id: 5,
    name: 'สับปะรดแล',
    category: 'tropical',
    season: 'yearround',
    price: 55,
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&auto=format&fit=crop',
    description: 'สับปะรดแลจากเชียงราย หวานฉ่ำ เนื้อกรอบ ไม่ฝาด สีเหลืองทอง'
  },
  {
    id: 6,
    name: 'กล้วยน้ำว้า',
    category: 'tropical',
    season: 'yearround',
    price: 30,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop',
    description: 'กล้วยน้ำว้าสุกสด หวานนุ่ม อุดมด้วยโพแทสเซียม และพลังงาน'
  },
  {
    id: 7,
    name: 'ทุเรียนหมอนทอง',
    category: 'tropical',
    season: 'rainy',
    price: 200,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop',
    description: 'ทุเรียนหมอนทองจากจันทบุรี สุกพอดี เนื้อแน่น หวานมัน กลิ่นหอมเฉพาะตัว'
  },
  {
    id: 8,
    name: 'สตรอว์เบอร์รี่',
    category: 'berry',
    season: 'winter',
    price: 180,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop',
    description: 'สตรอว์เบอร์รี่สดจากดอยอ่างขาง หวานอมเปรี้ยว เต็มไปด้วยวิตามิน C'
  },
  {
    id: 9,
    name: 'บลูเบอร์รี่',
    category: 'berry',
    season: 'winter',
    price: 250,
    image: 'https://images.unsplash.com/photo-1622226506784-5d1a1a4c3ef5?w=500&auto=format&fit=crop',
    description: 'บลูเบอร์รี่นำเข้าคัดพิเศษ อุดมด้วยสารต้านอนุมูลอิสระ เหมาะทำสมูทตี้'
  },
  {
    id: 10,
    name: 'ราสเบอร์รี่',
    category: 'berry',
    season: 'winter',
    price: 290,
    image: 'https://images.unsplash.com/photo-1563746924237-f81b0559b3a3?w=500&auto=format&fit=crop',
    description: 'ราสเบอร์รี่นำเข้า รสชาติหวานอมเปรี้ยว สีแดงสวย เหมาะทำขนมหวาน'
  },
  {
    id: 11,
    name: 'ท้อ',
    category: 'stone',
    season: 'winter',
    price: 150,
    image: 'https://images.unsplash.com/photo-1563699804-f61d0e3e3c5a?w=500&auto=format&fit=crop',
    description: 'ท้อนำเข้าสด เนื้อนุ่ม หอม หวาน เปลือกบาง คัดเกรด A'
  },
  {
    id: 12,
    name: 'พลัม',
    category: 'stone',
    season: 'winter',
    price: 160,
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=500&auto=format&fit=crop',
    description: 'พลัมนำเข้า เนื้อฉ่ำ รสหวานอมเปรี้ยว สีม่วงเข้มสวยงาม'
  }
];

/* ---- Category & Season labels ---- */
const CAT_LABELS = {
  citrus:   'ตระกูลส้ม',
  tropical: 'เขตร้อน',
  berry:    'เบอร์รี่',
  stone:    'เมล็ดแข็ง',
};

const SEASON_LABELS = {
  summer:    'ฤดูร้อน',
  rainy:     'ฤดูฝน',
  winter:    'ฤดูหนาว',
  yearround: 'ตลอดทั้งปี',
};

/* ============================================================
   STATE
   ============================================================ */
let products = [];
let cart     = [];  // [{ product, qty }]
let orders   = [];  // saved orders
let currentFilter = 'all';
let cartOpen = false;

/* ============================================================
   INIT
   ============================================================ */
(function init() {
  loadStorage();
  navigate('home');
})();

/* ============================================================
   LOCAL STORAGE
   ============================================================ */
function loadStorage() {
  const savedProducts = localStorage.getItem('ffm_products');
  products = savedProducts ? JSON.parse(savedProducts) : [...DEFAULT_PRODUCTS];

  const savedOrders = localStorage.getItem('ffm_orders');
  orders = savedOrders ? JSON.parse(savedOrders) : [];

  const savedCart = localStorage.getItem('ffm_cart');
  cart = savedCart ? JSON.parse(savedCart) : [];

  updateCartBadge();
}

function saveProducts() {
  localStorage.setItem('ffm_products', JSON.stringify(products));
}

function saveOrders() {
  localStorage.setItem('ffm_orders', JSON.stringify(orders));
}

function saveCart() {
  localStorage.setItem('ffm_cart', JSON.stringify(cart));
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function navigate(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target page
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Render page-specific content
  if (page === 'products') {
    currentFilter = 'all';
    resetFilterUI();
    renderProducts();
  }
  if (page === 'orders')  renderOrders();
  if (page === 'admin')   renderAdminList();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Quick-navigate to products with category filter */
function goToCategory(cat) {
  navigate('products');
  setTimeout(() => filterProducts(cat, document.querySelector(`.filter-btn[data-filter="${cat}"]`)), 0);
}

function goToSeason(season) {
  navigate('products');
  // Filter is by category, so just show all for season shortcut
  setTimeout(() => {
    resetFilterUI();
    renderProducts('all', season);
  }, 0);
}

function resetFilterUI() {
  document.querySelectorAll('.filter-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === 0);
  });
}

/* ============================================================
   PRODUCTS
   ============================================================ */
function renderProducts(filter, seasonOverride) {
  filter = filter || currentFilter;
  const grid = document.getElementById('products-grid');

  const filtered = products.filter(p => {
    const catMatch    = filter === 'all' || p.category === filter;
    const seasonMatch = !seasonOverride || p.season === seasonOverride;
    return catMatch && seasonMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#777;padding:40px 0;">ไม่พบสินค้า</p>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="openProductModal(${p.id})">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&auto=format&fit=crop'" />
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-cat">${CAT_LABELS[p.category] || p.category} · ${SEASON_LABELS[p.season] || p.season}</div>
        <div class="product-price">฿${p.price} / กก.</div>
        <button class="btn-add-card" onclick="event.stopPropagation(); addToCart(${p.id})">เพิ่มลงตะกร้า</button>
      </div>
    </div>
  `).join('');
}

function filterProducts(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts(cat);
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modal-img').src   = p.image;
  document.getElementById('modal-img').alt   = p.name;
  document.getElementById('modal-name').textContent  = p.name;
  document.getElementById('modal-price').textContent = `฿${p.price} / กก.`;
  document.getElementById('modal-desc').textContent  = p.description;

  document.getElementById('modal-tags').innerHTML = `
    <span class="tag tag-green">${CAT_LABELS[p.category] || p.category}</span>
    <span class="tag tag-orange">${SEASON_LABELS[p.season] || p.season}</span>
  `;

  const addBtn = document.getElementById('modal-add-btn');
  addBtn.onclick = () => { addToCart(p.id); closeProductModal(); };

  document.getElementById('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('product-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModal(event) {
  if (event.target === document.getElementById('product-modal')) closeProductModal();
}

/* ============================================================
   CART
   ============================================================ */
function addToCart(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ productId, name: p.name, price: p.price, image: p.image, qty: 1 });
  }

  saveCart();
  updateCartBadge();
  showToast(`เพิ่ม "${p.name}" ลงตะกร้าแล้ว`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function changeQty(productId, delta) {
  const item = cart.find(x => x.productId === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  if (total > 0) {
    badge.style.display = 'flex';
    badge.textContent = total > 99 ? '99+' : total;
  } else {
    badge.style.display = 'none';
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const totalEl   = document.getElementById('cart-total');

  if (cart.length === 0) {
    container.innerHTML = `<p class="cart-empty">ยังไม่มีสินค้าในตะกร้า</p>`;
    totalEl.textContent = '฿0';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=100'" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">฿${item.price} × ${item.qty} กก.</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty(${item.productId}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.productId}, +1)">+</button>
      </div>
      <button class="cart-delete" onclick="removeFromCart(${item.productId})" title="ลบ">
        🗑
      </button>
    </div>
  `).join('');

  totalEl.textContent = `฿${getCartTotal().toLocaleString()}`;
}

function toggleCart() {
  cartOpen = !cartOpen;
  const sidebar  = document.getElementById('cart-sidebar');
  const backdrop = document.getElementById('cart-backdrop');

  if (cartOpen) {
    sidebar.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    setCartStep('items');
    renderCartItems();
  } else {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ============================================================
   CART STEPS
   ============================================================ */
function setCartStep(stepName) {
  document.querySelectorAll('.cart-step').forEach(el => el.classList.remove('active'));
  document.getElementById('cart-step-' + stepName).classList.add('active');
}

function proceedCheckout() {
  if (cart.length === 0) {
    showToast('กรุณาเพิ่มสินค้าก่อน');
    return;
  }
  setCartStep('checkout');
}

function backToCart() {
  setCartStep('items');
  renderCartItems();
}

function confirmOrder() {
  const name     = document.getElementById('cf-name').value.trim();
  const phone    = document.getElementById('cf-phone').value.trim();
  const address  = document.getElementById('cf-address').value.trim();
  const subdist  = document.getElementById('cf-subdistrict').value.trim();
  const district = document.getElementById('cf-district').value.trim();
  const province = document.getElementById('cf-province').value.trim();
  const zip      = document.getElementById('cf-zip').value.trim();

  if (!name || !phone || !address || !province) {
    showToast('กรุณากรอกข้อมูลให้ครบ');
    return;
  }

  // Save order
  const order = {
    id:       'ORD-' + Date.now(),
    date:     new Date().toLocaleDateString('th-TH', { year:'numeric', month:'long', day:'numeric' }),
    items:    [...cart],
    total:    getCartTotal(),
    address:  { name, phone, address, subdist, district, province, zip },
    status:   'ดำเนินการแล้ว',
  };

  orders.unshift(order);
  saveOrders();

  // Clear cart
  cart = [];
  saveCart();
  updateCartBadge();

  // Reset form
  ['cf-name','cf-phone','cf-address','cf-subdistrict','cf-district','cf-province','cf-zip']
    .forEach(id => { document.getElementById(id).value = ''; });

  setCartStep('success');
}

function closeAfterSuccess() {
  cartOpen = false;
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   ORDERS
   ============================================================ */
function renderOrders() {
  const container = document.getElementById('orders-list');

  if (orders.length === 0) {
    container.innerHTML = `<p class="orders-empty">ยังไม่มีประวัติการสั่งซื้อ</p>`;
    return;
  }

  container.innerHTML = orders.map(order => {
    const itemsSummary = order.items
      .map(item => `${item.name} ×${item.qty}`)
      .join(', ');

    return `
      <div class="order-card">
        <div class="order-card-header">
          <div>
            <div class="order-id">${order.id}</div>
            <div class="order-date">${order.date}</div>
          </div>
          <span class="order-status">${order.status}</span>
        </div>
        <div class="order-items-summary">${itemsSummary}</div>
        <div class="order-total">฿${order.total.toLocaleString()}</div>
      </div>
    `;
  }).join('');
}

/* ============================================================
   ADMIN
   ============================================================ */
function addProduct() {
  const name     = document.getElementById('admin-name').value.trim();
  const price    = parseFloat(document.getElementById('admin-price').value);
  const category = document.getElementById('admin-category').value;
  const season   = document.getElementById('admin-season').value;
  const image    = document.getElementById('admin-image').value.trim();
  const desc     = document.getElementById('admin-desc').value.trim();

  if (!name || isNaN(price) || price <= 0) {
    showToast('กรุณากรอกชื่อสินค้าและราคาให้ถูกต้อง');
    return;
  }

  const newProduct = {
    id:          Date.now(),
    name,
    price,
    category,
    season,
    image:       image || 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&auto=format&fit=crop',
    description: desc || `${name} สดใหม่ คุณภาพดี`,
  };

  products.unshift(newProduct);
  saveProducts();
  renderAdminList();
  showToast(`เพิ่มสินค้า "${name}" เรียบร้อย`);

  // Reset fields
  ['admin-name','admin-price','admin-image','admin-desc'].forEach(id => {
    document.getElementById(id).value = '';
  });
}

function deleteProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  if (!confirm(`ลบสินค้า "${p.name}" ออกจากระบบ?`)) return;

  products = products.filter(x => x.id !== id);
  // Also remove from cart if present
  cart = cart.filter(x => x.productId !== id);
  saveProducts();
  saveCart();
  updateCartBadge();
  renderAdminList();
  showToast(`ลบ "${p.name}" เรียบร้อย`);
}

function renderAdminList() {
  const list = document.getElementById('admin-list');
  if (products.length === 0) {
    list.innerHTML = `<p style="color:#777;text-align:center;padding:20px 0;">ยังไม่มีสินค้า</p>`;
    return;
  }

  list.innerHTML = products.map(p => `
    <div class="admin-item">
      <div class="admin-item-img">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=100'" />
      </div>
      <div class="admin-item-info">
        <div class="admin-item-name">${p.name}</div>
        <div class="admin-item-meta">${CAT_LABELS[p.category] || p.category} · ฿${p.price}/กก.</div>
      </div>
      <button class="admin-delete" onclick="deleteProduct(${p.id})" title="ลบ">🗑</button>
    </div>
  `).join('');
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
let toastTimer;

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  clearTimeout(toastTimer);

  // Force reflow so transition re-triggers
  toast.classList.remove('show');
  void toast.offsetHeight;
  toast.classList.add('show');

  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ============================================================
   KEYBOARD / ACCESSIBILITY
   ============================================================ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('product-modal').classList.contains('open')) closeProductModal();
    else if (cartOpen) toggleCart();
  }
});
