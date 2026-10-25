// ====================================================================
// Shopping Tracker Data & Logic (Aesthetic Cream & Brown Mobile App)
// ====================================================================


const SUPERMARKET_PRODUCTS = {
  "Family Mart": [
    {
      id: "fm-1",
      name: "FamiCafe Kopi Susu Keluarga",
      category: "Minuman",
      price: 18000,
      discount: 0.20, // 20%
      trend: "down", // ⬇︎ green
      lastMonthPrice: 20000,
      image: "https://www.familymartindonesia.com/static/media/americano-series.d11b5f2c8c8fa083d3f0.png"
    },
    {
      id: "fm-2",
      name: "Crispy chicken korean buldak",
      category: "Makanan Siap Saji",
      price: 26000,
      discount: 0.15, // 15%
      trend: "up", // ⬆ red
      lastMonthPrice: 24000,
      image: "https://www.familymartindonesia.com/static/media/chrispy-chicken-korean-buldak.8cbf3b7cf8f3c70f0e80.png"
    },
    {
      id: "fm-3",
      name: "Onigiri Salmon Mayo",
      category: "Makanan Siap Saji",
      price: 15000,
      discount: 0,
      trend: "same", // = yellow
      lastMonthPrice: 15000,
      image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-4",
      name: "Sofuto Matcha Ice Cream",
      category: "Dessert",
      price: 12000,
      discount: 0.25, // 25%
      trend: "down", // ⬇︎
      lastMonthPrice: 14000,
      image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-5",
      name: "Ultra Milk Rasa Cokelat 250ml",
      category: "Minuman",
      price: 7500,
      discount: 0,
      trend: "same",
      lastMonthPrice: 7500,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-6",
      name: "Choco Mania",
      category: "Snack",
      price: 8900,
      discount: 0.11, // 11% ((10000 - 8900) / 10000)
      trend: "down",
      lastMonthPrice: 10000,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-7",
      name: "Pokka Green Tea No Sugar 450ml",
      category: "Minuman",
      price: 8900,
      discount: 0,
      trend: "down",
      lastMonthPrice: 9500,
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-8",
      name: "French Fries BBQ Family Mart",
      category: "Snack",
      price: 16000,
      discount: 0.12,
      trend: "up",
      lastMonthPrice: 15000,
      image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=200&auto=format&fit=crop&q=80"
    }
  ],
  "Indomaret": [
    {
      id: "in-1",
      name: "Point Coffee Iced Palm Sugar",
      category: "Minuman",
      price: 25000,
      discount: 0.20,
      trend: "down",
      lastMonthPrice: 28000,
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-2",
      name: "Sari Roti Tawar Spesial Kupas",
      category: "Roti",
      price: 16500,
      discount: 0,
      trend: "up",
      lastMonthPrice: 15000,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-3",
      name: "Indomie Mi Instan Goreng 85g",
      category: "Mie Instan",
      price: 3500,
      discount: 0.14,
      trend: "same",
      lastMonthPrice: 3500,
      image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-4",
      name: "Sania Minyak Goreng Pouch 2L",
      category: "Kebutuhan Pokok",
      price: 38000,
      discount: 0.10,
      trend: "down",
      lastMonthPrice: 41000,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-5",
      name: "Say Bread Choco Danish Croissant",
      category: "Roti",
      price: 13500,
      discount: 0,
      trend: "same",
      lastMonthPrice: 13500,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-6",
      name: "Aqua Air Mineral Botol 600ml",
      category: "Minuman",
      price: 4000,
      discount: 0,
      trend: "same",
      lastMonthPrice: 4000,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-7",
      name: "Chitato Sapi Panggang 68g",
      category: "Snack",
      price: 11500,
      discount: 0.15,
      trend: "up",
      lastMonthPrice: 10500,
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-8",
      name: "Indomaret Facial Tissue 220s",
      category: "Rumah Tangga",
      price: 14900,
      discount: 0.25,
      trend: "down",
      lastMonthPrice: 16500,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&auto=format&fit=crop&q=80"
    }
  ],
  "Alfamart": [
    {
      id: "al-1",
      name: "Bimoli Minyak Goreng Pouch 2L",
      category: "Kebutuhan Pokok",
      price: 39500,
      discount: 0.15,
      trend: "down",
      lastMonthPrice: 42000,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-2",
      name: "Telur Ayam Omega 10 Butir",
      category: "Kebutuhan Pokok",
      price: 32000,
      discount: 0,
      trend: "up",
      lastMonthPrice: 29000,
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-3",
      name: "Ultra Milk Susu Cair UHT Cokelat 1L",
      category: "Minuman",
      price: 21500,
      discount: 0.10,
      trend: "same",
      lastMonthPrice: 21500,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-4",
      name: "SilverQueen Cokelat Almond 58g",
      category: "Snack",
      price: 17500,
      discount: 0.20,
      trend: "down",
      lastMonthPrice: 19000,
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-5",
      name: "Indomie Goreng Ayam Geprek",
      category: "Mie Instan",
      price: 3500,
      discount: 0,
      trend: "up",
      lastMonthPrice: 3200,
      image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-6",
      name: "Good Day Cappuccino 5x25g",
      category: "Kopi",
      price: 12000,
      discount: 0.15,
      trend: "same",
      lastMonthPrice: 12000,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-7",
      name: "Sunlight Pencuci Piring Jeruk Nipis 650ml",
      category: "Rumah Tangga",
      price: 16500,
      discount: 0.18,
      trend: "down",
      lastMonthPrice: 18000,
      image: "https://images.unsplash.com/photo-1585670270608-b404fb880719?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-8",
      name: "Alfamart Air Mineral 600ml",
      category: "Minuman",
      price: 3500,
      discount: 0,
      trend: "same",
      lastMonthPrice: 3500,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=200&auto=format&fit=crop&q=80"
    }
  ],
  "Alfamidi": [
    {
      id: "md-1",
      name: "Apel Fuji Manis Segar 1kg",
      category: "Buah & Sayur",
      price: 45000,
      discount: 0.20,
      trend: "down",
      lastMonthPrice: 50000,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-2",
      name: "Daging Sapi Beef Slice Sukiyaki 250g",
      category: "Daging Segar",
      price: 52000,
      discount: 0.10,
      trend: "up",
      lastMonthPrice: 48000,
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-3",
      name: "Cimory Fresh Milk Pasteurisasi 950ml",
      category: "Susu Segar",
      price: 24500,
      discount: 0,
      trend: "same",
      lastMonthPrice: 24500,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-4",
      name: "Pisang Cavendish Fresh Pack",
      category: "Buah & Sayur",
      price: 22000,
      discount: 0.15,
      trend: "down",
      lastMonthPrice: 25000,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-5",
      name: "Midi Fresh Salmon Fillet 200g",
      category: "Ikan Segar",
      price: 68000,
      discount: 0.12,
      trend: "up",
      lastMonthPrice: 62000,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-6",
      name: "Beras Premium Midi Topi Koki 5kg",
      category: "Beras",
      price: 74000,
      discount: 0,
      trend: "up",
      lastMonthPrice: 71000,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-7",
      name: "Roti Sisir Mentega Midi Bakery",
      category: "Bakery",
      price: 11500,
      discount: 0.20,
      trend: "same",
      lastMonthPrice: 11500,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-8",
      name: "Kecap Manis Bango Botol 550ml",
      category: "Bumbu Dapur",
      price: 26000,
      discount: 0.10,
      trend: "down",
      lastMonthPrice: 28000,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&auto=format&fit=crop&q=80"
    }
  ]
};

/* ====================================================================
   STATE MANAGEMENT
   ==================================================================== */
const state = {
  supermarket: '',
  initialBudget: 0,
  cart: [],
  history: [],
  activeTab: 'tabStore'
};

function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(Math.round(number));
}

function formatNumber(number) {
  return new Intl.NumberFormat('id-ID').format(Math.round(number));
}

function parseRupiahInput(value) {
  const clean = value.toString().replace(/[^0-9]/g, '');
  return parseInt(clean, 10) || 0;
}

/* ====================================================================
   DOM ELEMENTS
   ==================================================================== */
const viewSetup = document.getElementById('viewSetup');
const viewMain = document.getElementById('viewMain');

// Setup form
const selectSupermarket = document.getElementById('selectSupermarket');
const inputBudget = document.getElementById('inputBudget');
const btnConfirmSetup = document.getElementById('btnConfirmSetup');
const btnConfirmText = document.getElementById('btnConfirmText');
const btnConfirmIcon = document.getElementById('btnConfirmIcon');
const chipButtons = document.querySelectorAll('.chip-btn');

// Header elements
const headerStoreName = document.getElementById('headerStoreName');
const headerRegionName = document.getElementById('headerRegionName');
const headerStoreIcon = document.getElementById('headerStoreIcon');
const headerRemainingBudget = document.getElementById('headerRemainingBudget');
const budgetPillBox = document.getElementById('budgetPillBox');
const btnLogout = document.getElementById('btnLogout');
const cartCountBadge = document.getElementById('cartCountBadge');
const bannerStoreName = document.getElementById('bannerStoreName');

// Tabs & Views
const navTabBtns = document.querySelectorAll('.tab-btn');
const tabStore = document.getElementById('tabStore');
const tabList = document.getElementById('tabList');
const tabHistory = document.getElementById('tabHistory');
const storeProductsList = document.getElementById('storeProductsList');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const historyContainer = document.getElementById('historyContainer');

// List bottom bar
const dynamicTotalPrice = document.getElementById('dynamicTotalPrice');
const budgetProgressBar = document.getElementById('budgetProgressBar');
const btnCheckout = document.getElementById('btnCheckout');

// Modals & Toast
const toast = document.getElementById('toast');
const checkoutModal = document.getElementById('checkoutModal');
const btnModalClose = document.getElementById('btnModalClose');
const modalStoreName = document.getElementById('modalStoreName');
const modalTotalItems = document.getElementById('modalTotalItems');
const modalRemainingBudget = document.getElementById('modalRemainingBudget');
const modalTotalSpent = document.getElementById('modalTotalSpent');

const logoutModal = document.getElementById('logoutModal');
const btnCancelLogout = document.getElementById('btnCancelLogout');
const btnConfirmLogout = document.getElementById('btnConfirmLogout');

const statusBarClock = document.getElementById('statusBarClock');

/* ====================================================================
   HELPERS & NOTIFICATIONS
   ==================================================================== */
let toastTimeout;
function showToast(message, type = 'normal') {
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.className = 'toast-msg show';
  if (type === 'error') toast.classList.add('error');
  if (type === 'success') toast.classList.add('success');

  toastTimeout = setTimeout(() => {
    toast.className = 'toast-msg';
  }, 2800);
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  if (statusBarClock) statusBarClock.textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

function getStoreEmoji(storeName) {
  switch (storeName) {
    case 'Family Mart': return '🍙';
    case 'Indomaret': return '🏪';
    case 'Alfamart': return '🏬';
    case 'Alfamidi': return '🛒';
    default: return '🏪';
  }
}

/* ====================================================================
   BUDGET & DYNAMIC FADING COLOR
   Fades from Chocolate #622B14 (rgb 98, 43, 20) -> Red #E53935 (rgb 229, 57, 53)
   ==================================================================== */
function getCartTotal() {
  return state.cart.reduce((sum, item) => sum + (item.effectivePrice * item.quantity), 0);
}

function updateBudgetAndColors() {
  const total = getCartTotal();
  const budget = state.initialBudget;
  const remaining = budget - total;

  // Header remaining budget
  headerRemainingBudget.textContent = formatRupiah(remaining);
  if (remaining < 0 || remaining === 0) {
    headerRemainingBudget.style.color = 'var(--accent-danger)';
  } else {
    headerRemainingBudget.style.color = 'var(--text-brown-primary)';
  }

  // Bottom total price
  dynamicTotalPrice.textContent = formatRupiah(total);

  // Dynamic color interpolation
  const ratio = budget > 0 ? Math.min(1, Math.max(0, total / budget)) : 0;
  const r1 = 98, g1 = 43, b1 = 20;
  const r2 = 229, g2 = 57, b2 = 53;

  const currentR = Math.round(r1 + (r2 - r1) * ratio);
  const currentG = Math.round(g1 + (g2 - g1) * ratio);
  const currentB = Math.round(b1 + (b2 - b1) * ratio);

  dynamicTotalPrice.style.color = `rgb(${currentR}, ${currentG}, ${currentB})`;

  // Progress Bar
  const pct = Math.min(100, Math.round(ratio * 100));
  budgetProgressBar.style.width = `${pct}%`;
  if (pct >= 100) {
    budgetProgressBar.style.background = 'var(--accent-danger)';
  } else {
    budgetProgressBar.style.background = `linear-gradient(90deg, #622B14, rgb(${currentR}, ${currentG}, ${currentB}))`;
  }

  // Cart Badge
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (totalCount > 0) {
    cartCountBadge.style.display = 'inline-block';
    cartCountBadge.textContent = totalCount;
  } else {
    cartCountBadge.style.display = 'none';
  }

  btnCheckout.disabled = state.cart.length === 0;
}

/* ====================================================================
   1. SETUP LOGIC (Supermarket, Budget, Confirm)
   ==================================================================== */
inputBudget.addEventListener('input', (e) => {
  const parsed = parseRupiahInput(e.target.value);
  if (parsed > 0) {
    e.target.value = formatNumber(parsed);
  } else {
    e.target.value = '';
  }
  chipButtons.forEach(btn => btn.classList.remove('active'));
});

chipButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const amount = parseInt(btn.dataset.amount, 10);
    inputBudget.value = formatNumber(amount);
    chipButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

btnConfirmSetup.addEventListener('click', async () => {
  const supermarket = selectSupermarket.value;
  const budget = parseRupiahInput(inputBudget.value);

  if (!supermarket) {
    showToast('Silakan pilih supermarket terlebih dahulu!', 'error');
    selectSupermarket.focus();
    return;
  }
  if (!budget || budget <= 0) {
    showToast('Silakan tentukan batas budget belanja!', 'error');
    inputBudget.focus();
    return;
  }

  // Database fetch animation
  btnConfirmSetup.disabled = true;
  btnConfirmIcon.textContent = '⏳';
  btnConfirmText.textContent = 'Menghubungkan ke Database Toko...';

  await new Promise(res => setTimeout(res, 500));

  btnConfirmIcon.textContent = '✨';
  btnConfirmText.textContent = 'Memuat Katalog & Promo...';

  await new Promise(res => setTimeout(res, 400));

  state.supermarket = supermarket;
  state.initialBudget = budget;
  state.cart = [];

  headerStoreName.textContent = state.supermarket;
  bannerStoreName.textContent = state.supermarket;
  if (headerRegionName) {
    headerRegionName.textContent = 'Katalog Resmi';
  }
  headerStoreIcon.textContent = getStoreEmoji(state.supermarket);

  renderStoreProducts();
  renderCart();
  updateBudgetAndColors();

  saveSessionToStorage();

  viewSetup.style.display = 'none';
  viewMain.style.display = 'flex';
  switchTab('tabStore');

  btnConfirmSetup.disabled = false;
  btnConfirmIcon.textContent = '🔍';
  btnConfirmText.textContent = 'Confirm & Cek Promo Database';

  showToast(`Berhasil masuk ke ${state.supermarket}!`, 'success');
});

/* ====================================================================
   LOGOUT
   ==================================================================== */
btnLogout.addEventListener('click', () => {
  logoutModal.classList.add('show');
});

btnCancelLogout.addEventListener('click', () => {
  logoutModal.classList.remove('show');
});

btnConfirmLogout.addEventListener('click', () => {
  logoutModal.classList.remove('show');
  state.cart = [];
  state.initialBudget = 0;
  localStorage.removeItem('hp_shopping_session');
  viewMain.style.display = 'none';
  viewSetup.style.display = 'flex';
  showToast('Sesi belanja diakhiri. Silakan atur kembali.');
});

/* ====================================================================
   TABS SWITCHING
   ==================================================================== */
function switchTab(targetTabId) {
  state.activeTab = targetTabId;
  navTabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === targetTabId);
  });

  tabStore.classList.toggle('active', targetTabId === 'tabStore');
  tabList.classList.toggle('active', targetTabId === 'tabList');
  tabHistory.classList.toggle('active', targetTabId === 'tabHistory');

  if (targetTabId === 'tabStore') {
    renderStoreProducts();
  } else if (targetTabId === 'tabList') {
    renderCart();
  } else if (targetTabId === 'tabHistory') {
    renderHistory();
  }
}

navTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    switchTab(btn.dataset.tab);
  });
});

/* ====================================================================
   TAB 1: STORE
   Format:
   Foto
   Nama
   Harga - Diskon - Harga2 - emote
   Add to list
   ==================================================================== */
function renderStoreProducts() {
  const products = SUPERMARKET_PRODUCTS[state.supermarket] || [];
  storeProductsList.innerHTML = '';

  if (products.length === 0) {
    storeProductsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📦</div>
        <div class="empty-state-title">Katalog Kosong</div>
        <div class="empty-state-sub">Belum ada barang di supermarket ini.</div>
      </div>
    `;
    return;
  }

  products.forEach(prod => {
    const hasDiscount = prod.discount > 0;
    const harga2 = hasDiscount ? Math.round(prod.price - (prod.discount * prod.price)) : prod.price;

    // Status harga perbandingan bulan lalu (Naik, Turun, atau Masih sama)
    let statusBadgeHtml = '';
    if (prod.trend === 'up') {
      statusBadgeHtml = `<span class="trend-badge up" title="Harga naik dibanding bulan lalu (Bulan lalu: ${formatRupiah(prod.lastMonthPrice)})">⬆ Naik</span>`;
    } else if (prod.trend === 'down') {
      statusBadgeHtml = `<span class="trend-badge down" title="Harga turun dibanding bulan lalu (Bulan lalu: ${formatRupiah(prod.lastMonthPrice)})">⬇︎ Turun</span>`;
    } else {
      statusBadgeHtml = `<span class="trend-badge same" title="Harga masih sama dengan bulan lalu">= Masih sama</span>`;
    }

    let pricingHtml = '';
    if (hasDiscount) {
      const discountPct = Math.round(prod.discount * 100);
      pricingHtml = `
        <span class="price-original striked">${formatRupiah(prod.price)}</span>
        <span class="discount-badge">-${discountPct}%</span>
        <span class="price-discounted">${formatRupiah(harga2)}</span>
      `;
    } else {
      pricingHtml = `
        <span class="price-original">${formatRupiah(prod.price)}</span>
      `;
    }

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-card-top">
        <div class="product-info-wrap">
          <div class="product-header-line">
            <h2 class="product-name">${prod.name}</h2>
            ${statusBadgeHtml}
          </div>
          <div class="product-pricing-line">
            ${pricingHtml}
          </div>
        </div>
      </div>
      <button type="button" class="btn-add-list" data-id="${prod.id}">
        <span>+</span>
        <span>Add to list</span>
      </button>
    `;

    const addBtn = card.querySelector('.btn-add-list');
    addBtn.addEventListener('click', () => {
      addProductToCart(prod, harga2);
    });

    storeProductsList.appendChild(card);
  });
}

function addProductToCart(product, effectivePrice) {
  const currentTotal = getCartTotal();
  const projectedTotal = currentTotal + effectivePrice;

  if (projectedTotal > state.initialBudget) {
    budgetPillBox.classList.add('shake');
    setTimeout(() => budgetPillBox.classList.remove('shake'), 450);
    showToast('Budget tidak mencukupi! Kurangi atau hapus barang di list.', 'error');
    return;
  }

  const existingIndex = state.cart.findIndex(i => i.id === product.id);
  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      originalPrice: product.price,
      discount: product.discount,
      effectivePrice: effectivePrice,
      image: product.image,
      quantity: 1
    });
  }

  updateBudgetAndColors();
  showToast(`Ditambahkan ke List: ${product.name}`, 'success');
}

/* ====================================================================
   TAB 2: LIST
   Format:
   X --------------------
    |Gambar barang| Nama barang
    |             |
    |             | Hargatotal   quantity -[]+
     ---------------------
   ==================================================================== */
function renderCart() {
  cartItemsContainer.innerHTML = '';

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🛒</div>
        <div class="empty-state-title">List Belanja Kosong</div>
        <div class="empty-state-sub">Silakan tambahkan barang dari tab <b>Store</b>.</div>
      </div>
    `;
    updateBudgetAndColors();
    return;
  }

  state.cart.forEach((item, index) => {
    const itemTotal = item.effectivePrice * item.quantity;

    const card = document.createElement('div');
    card.className = 'cart-item-card';
    card.innerHTML = `
      <button type="button" class="btn-del-item" title="Hapus dari list" data-index="${index}">✕</button>
      
      <div class="cart-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&auto=format&fit=crop&q=80'">
      </div>

      <div class="cart-details-wrap">
        <h3 class="cart-item-name">${item.name}</h3>
        
        <div class="cart-bottom-row">
          <span class="cart-total-price">${formatRupiah(itemTotal)}</span>
          
          <div class="cart-qty-control">
            <button type="button" class="qty-btn btn-minus" data-index="${index}">-</button>
            <input 
              type="text" 
              class="qty-input" 
              value="${item.quantity}" 
              data-index="${index}" 
              inputmode="numeric" 
              maxlength="3"
            >
            <button type="button" class="qty-btn btn-plus" data-index="${index}">+</button>
          </div>
        </div>
      </div>
    `;

    // Delete item (X button) restores budget immediately
    const delBtn = card.querySelector('.btn-del-item');
    delBtn.addEventListener('click', () => {
      const removed = state.cart.splice(index, 1)[0];
      renderCart();
      updateBudgetAndColors();
      showToast(`Dihapus: ${removed.name} (Budget dikembalikan)`);
    });

    // Minus button
    const minusBtn = card.querySelector('.btn-minus');
    minusBtn.addEventListener('click', () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
        renderCart();
        updateBudgetAndColors();
      } else {
        const removed = state.cart.splice(index, 1)[0];
        renderCart();
        updateBudgetAndColors();
        showToast(`Dihapus: ${removed.name}`);
      }
    });

    // Plus button
    const plusBtn = card.querySelector('.btn-plus');
    plusBtn.addEventListener('click', () => {
      const currentTotal = getCartTotal();
      const projectedTotal = currentTotal + item.effectivePrice;

      if (projectedTotal > state.initialBudget) {
        budgetPillBox.classList.add('shake');
        setTimeout(() => budgetPillBox.classList.remove('shake'), 450);
        showToast('Budget tidak mencukupi untuk menambah barang!', 'error');
        return;
      }

      item.quantity += 1;
      renderCart();
      updateBudgetAndColors();
    });

    // Manual quantity typing
    const qtyInput = card.querySelector('.qty-input');
    qtyInput.addEventListener('change', (e) => {
      const newQty = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10);
      if (!newQty || newQty < 1) {
        e.target.value = item.quantity;
        return;
      }

      const diff = newQty - item.quantity;
      const additionalCost = diff * item.effectivePrice;
      const projectedTotal = getCartTotal() + additionalCost;

      if (projectedTotal > state.initialBudget) {
        budgetPillBox.classList.add('shake');
        setTimeout(() => budgetPillBox.classList.remove('shake'), 450);
        showToast('Jumlah melebihi sisa batas budget!', 'error');
        e.target.value = item.quantity;
        return;
      }

      item.quantity = newQty;
      renderCart();
      updateBudgetAndColors();
    });

    cartItemsContainer.appendChild(card);
  });

  updateBudgetAndColors();
}

/* ====================================================================
   CHECKOUT
   Mengunci list & simpan ke History
   ==================================================================== */
btnCheckout.addEventListener('click', () => {
  if (state.cart.length === 0) return;

  const totalSpent = getCartTotal();
  const totalPcs = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const remaining = state.initialBudget - totalSpent;

  const now = new Date();
  const dateFormatted = `Today, ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const historyRecord = {
    id: 'ord-' + Date.now(),
    dateString: dateFormatted,
    fullTimestamp: now.toISOString(),
    store: state.supermarket,
    totalSpent: totalSpent,
    items: JSON.parse(JSON.stringify(state.cart))
  };

  state.history.unshift(historyRecord);
  saveHistoryToStorage();

  // Sinkronisasi transaksi ke Cloud Firestore
  if (window.FirebaseTracker && typeof window.FirebaseTracker.saveOrderToFirestore === 'function') {
    window.FirebaseTracker.saveOrderToFirestore(historyRecord).then(result => {
      if (result && result.success) {
        showToast('Tersimpan di Firebase Cloud! ☁️', 'success');
      }
    }).catch(err => {
      console.warn('Gagal sinkron Firebase Firestore:', err);
    });
  }

  modalStoreName.textContent = state.supermarket;
  modalTotalItems.textContent = `${totalPcs} item`;
  modalRemainingBudget.textContent = formatRupiah(remaining);
  modalTotalSpent.textContent = formatRupiah(totalSpent);

  // Perbarui budget agar tetap di jumlah yang sudah terpotong setelah checkout
  state.initialBudget = remaining;
  state.cart = [];
  saveSessionToStorage();
  renderCart();
  updateBudgetAndColors();

  checkoutModal.classList.add('show');
});

btnModalClose.addEventListener('click', () => {
  checkoutModal.classList.remove('show');
  switchTab('tabHistory');
});

/* ====================================================================
   TAB 3: HISTORY
   Format tiles: 
   Today/Yesterday/Tanggal - Harga
    --------------------
    |Gambar barang| Nama barang
    |	            |
    |	            | Hargatotal   [] quantity 
     ---------------------
   ==================================================================== */
function renderHistory() {
  historyContainer.innerHTML = '';

  if (state.history.length === 0) {
    historyContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📜</div>
        <div class="empty-state-title">Belum Ada History Belanja</div>
        <div class="empty-state-sub">Belanjaan yang sudah di-checkout akan terkunci dan tampil di sini.</div>
      </div>
    `;
    return;
  }

  state.history.forEach(order => {
    const cardGroup = document.createElement('div');
    cardGroup.className = 'history-card-group';

    const headerRow = document.createElement('div');
    headerRow.className = 'history-header-row';
    headerRow.innerHTML = `
      <div class="history-date-badge">
        <span>🕒</span>
        <span>${order.dateString}</span>
        <span class="history-store-tag">${order.store}</span>
      </div>
      <div class="history-total-spent">
        ${formatRupiah(order.totalSpent)}
      </div>
    `;
    cardGroup.appendChild(headerRow);

    const itemsList = document.createElement('div');
    itemsList.className = 'history-items-list';

    order.items.forEach(item => {
      const itemRow = document.createElement('div');
      itemRow.className = 'history-item-row';
      const itemTotal = item.effectivePrice * item.quantity;

      itemRow.innerHTML = `
        <div class="history-item-img">
          <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&auto=format&fit=crop&q=80'">
        </div>
        <div class="history-item-info">
          <div class="history-item-name">${item.name}</div>
          <div class="history-item-sub">
            <span class="history-item-price">${formatRupiah(itemTotal)}</span>
            <span class="history-item-qty">[ ${item.quantity} ] quantity</span>
          </div>
        </div>
      `;
      itemsList.appendChild(itemRow);
    });

    cardGroup.appendChild(itemsList);
    historyContainer.appendChild(cardGroup);
  });
}

function saveHistoryToStorage() {
  try {
    localStorage.setItem('hp_shopping_history', JSON.stringify(state.history));
  } catch (e) {
    console.error('Failed to save history', e);
  }
}

function loadHistoryFromStorage() {
  try {
    const raw = localStorage.getItem('hp_shopping_history');
    if (raw) {
      state.history = JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load history', e);
  }
}

function saveSessionToStorage() {
  try {
    localStorage.setItem('hp_shopping_session', JSON.stringify({
      supermarket: state.supermarket,
      initialBudget: state.initialBudget
    }));
  } catch (e) {
    console.error('Failed to save session', e);
  }
}

function loadSessionFromStorage() {
  try {
    const raw = localStorage.getItem('hp_shopping_session');
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved && saved.supermarket && saved.initialBudget > 0) {
        state.supermarket = saved.supermarket;
        state.initialBudget = saved.initialBudget;
        headerStoreName.textContent = state.supermarket;
        bannerStoreName.textContent = state.supermarket;
        if (headerRegionName) headerRegionName.textContent = 'Katalog Resmi';
        headerStoreIcon.textContent = getStoreEmoji(state.supermarket);

        renderStoreProducts();
        renderCart();
        updateBudgetAndColors();

        viewSetup.style.display = 'none';
        viewMain.style.display = 'flex';
        switchTab('tabStore');
      }
    }
  } catch (e) {
    console.error('Failed to load session', e);
  }
}

loadHistoryFromStorage();
loadSessionFromStorage();

// Sinkronisasi Real-time dengan Firebase Firestore
function setupFirebaseSync() {
  if (window.FirebaseTracker && typeof window.FirebaseTracker.subscribeShoppingHistory === 'function') {
    window.FirebaseTracker.subscribeShoppingHistory((cloudOrders) => {
      if (cloudOrders && cloudOrders.length > 0) {
        console.log(`☁️ Berhasil memuat ${cloudOrders.length} riwayat belanja dari Firebase Firestore`);
        state.history = cloudOrders;
        saveHistoryToStorage();
        if (state.activeTab === 'tabHistory') {
          renderHistory();
        }
      }
      const chip = document.getElementById('firebaseStatusChip');
      if (chip) {
        chip.className = 'firebase-status-chip synced';
        chip.textContent = '🔥 Cloud Synced';
      }
    }, (err) => {
      console.warn('Firebase sync notice:', err.message || err);
      const chip = document.getElementById('firebaseStatusChip');
      if (chip) {
        chip.className = 'firebase-status-chip';
        chip.textContent = '⚡ Local Mode';
      }
    });
  }
}

if (window.FirebaseTracker && window.FirebaseTracker.isReady) {
  setupFirebaseSync();
} else {
  window.addEventListener('firebase:ready', () => {
    setupFirebaseSync();
  });
}


/* ====================================================================
   PWA & APP INSTALLATION SUPPORT
   ==================================================================== */
const btnInstallApp = document.getElementById('btnInstallApp');
const iosInstallModal = document.getElementById('iosInstallModal');
const btnCloseIosModal = document.getElementById('btnCloseIosModal');
let deferredPrompt = null;

// Deteksi iOS Safari
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

// Deteksi apakah sudah terpasang (standalone mode)
const isInStandaloneMode = () => {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
};

// Tampilkan tombol pasang jika belum dalam mode aplikasi standalone
if (btnInstallApp && !isInStandaloneMode()) {
  btnInstallApp.style.display = 'flex';
}

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('PWA Service Worker registered:', reg.scope);
        if (reg.update) reg.update();
      })
      .catch((err) => console.log('Service Worker registration skipped:', err));
  });
}

// Tangkap event instalasi PWA di Android / Chrome / Edge
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (btnInstallApp && !isInStandaloneMode()) {
    btnInstallApp.style.display = 'flex';
  }
});

if (btnInstallApp) {
  btnInstallApp.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        showToast('Aplikasi berhasil dipasang ke HP!', 'success');
        btnInstallApp.style.display = 'none';
      }
      deferredPrompt = null;
    } else if (isIos()) {
      if (iosInstallModal) iosInstallModal.classList.add('show');
    } else {
      showToast('Tekan ikon titik tiga di browser lalu pilih "Instal Aplikasi" / "Tambahkan ke Layar Utama"');
    }
  });
}

if (btnCloseIosModal) {
  btnCloseIosModal.addEventListener('click', () => {
    if (iosInstallModal) iosInstallModal.classList.remove('show');
  });
}


