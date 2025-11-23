console.log("Wishlist page loading...");

// Hamburger menu
const menuToggle = document.getElementById('menu-toggle');
const menuBar = document.getElementById('menu-bar');

if (menuToggle && menuBar) {
  menuToggle.addEventListener('click', () => {
    const shown = menuBar.classList.toggle('show');
    document.body.classList.toggle('menu-open', shown);
  });
}

// Menu navigation
const menuButtons = {
  'account-btn': 'account.html',
  'orders-btn': 'orders.html',
  'wishlist-btn': 'wishlist.html',
  'wallet-btn': 'wallet.html',
  'deals-btn': 'deals.html',
  'support-btn': 'support-local.html',
  'artist-btn': 'artist-info.html',
  'help-btn': 'help.html'
};

Object.keys(menuButtons).forEach(btnId => {
  const btn = document.getElementById(btnId);
  if (btn) {
    btn.onclick = () => window.location.href = menuButtons[btnId];
  }
});

// ========== WISHLIST MANAGEMENT ==========
// Get wishlist from localStorage
function getWishlist() {
  const wishlist = localStorage.getItem('nirmana_wishlist');
  return wishlist ? JSON.parse(wishlist) : [];
}

// Save wishlist to localStorage
function saveWishlist(wishlist) {
  localStorage.setItem('nirmana_wishlist', JSON.stringify(wishlist));
}

// Add product to wishlist
function addToWishlist(product) {
  const wishlist = getWishlist();
  
  // Check if already in wishlist
  const exists = wishlist.some(item => item.id === product.id);
  if (exists) {
    alert('This product is already in your wishlist!');
    return false;
  }
  
  // Add timestamp
  product.addedDate = new Date().toLocaleDateString();
  
  wishlist.push(product);
  saveWishlist(wishlist);
  
  updateWishlistStats();
  renderWishlist();
  
  return true;
}

// Remove product from wishlist
function removeFromWishlist(productId) {
  let wishlist = getWishlist();
  wishlist = wishlist.filter(item => item.id !== productId);
  saveWishlist(wishlist);
  
  updateWishlistStats();
  renderWishlist();
}

// Clear entire wishlist
function clearWishlist() {
  if (confirm('Are you sure you want to clear your entire wishlist?')) {
    localStorage.removeItem('nirmana_wishlist');
    updateWishlistStats();
    renderWishlist();
  }
}

// Update stats
function updateWishlistStats() {
  const wishlist = getWishlist();
  const totalItems = wishlist.length;
  const totalValue = wishlist.reduce((sum, item) => sum + item.price, 0);
  
  document.getElementById('total-items').textContent = totalItems;
  document.getElementById('total-value').textContent = `₹${totalValue.toLocaleString()}`;
}

// Render wishlist items
function renderWishlist() {
  const wishlist = getWishlist();
  const container = document.getElementById('wishlist-container');
  const emptyState = document.getElementById('empty-wishlist');
  
  if (wishlist.length === 0) {
    emptyState.style.display = 'block';
    container.innerHTML = '';
    container.appendChild(emptyState);
    return;
  }
  
  emptyState.style.display = 'none';
  
  const grid = document.createElement('div');
  grid.className = 'wishlist-items-grid';
  
  wishlist.forEach(product => {
    const item = document.createElement('div');
    item.className = 'wishlist-item';
    item.innerHTML = `
      <span class="added-date">Added: ${product.addedDate}</span>
      <img src="${product.image}" alt="${product.name}" class="wishlist-item-image">
      <div class="wishlist-item-details">
        <div>
          <div class="wishlist-item-name">${product.name}</div>
          <div class="wishlist-item-artist">By ${product.artist}</div>
          <div class="wishlist-item-location">📍 ${product.location}, ${product.state}</div>
          <div class="wishlist-item-rating">⭐ ${product.rating} / 5.0</div>
          <div class="wishlist-item-price">₹${product.price.toLocaleString()}</div>
        </div>
        <div class="wishlist-item-actions">
          <button class="wishlist-action-btn add-to-cart-btn" onclick="addToCartFromWishlist(${product.id})">Add to Cart</button>
          <button class="wishlist-action-btn remove-btn" onclick="removeFromWishlist(${product.id})">Remove</button>
        </div>
      </div>
    `;
    grid.appendChild(item);
  });
  
  container.innerHTML = '';
  container.appendChild(grid);
}

// Add to cart from wishlist
function addToCartFromWishlist(productId) {
  alert('Product added to cart! (Cart functionality coming soon)');
  // Future: Implement cart functionality
}

// Share wishlist
function shareWishlist() {
  const wishlist = getWishlist();
  if (wishlist.length === 0) {
    alert('Your wishlist is empty. Add some products first!');
    return;
  }
  
  const wishlistText = `Check out my NIRMANA wishlist!\n\n${wishlist.map(p => `${p.name} by ${p.artist} - ₹${p.price}`).join('\n')}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'My NIRMANA Wishlist',
      text: wishlistText
    }).catch(err => console.log('Share failed', err));
  } else {
    // Fallback: Copy to clipboard
    navigator.clipboard.writeText(wishlistText).then(() => {
      alert('Wishlist copied to clipboard! Share it with friends.');
    });
  }
}

// Action button listeners
document.getElementById('clear-wishlist-btn').addEventListener('click', clearWishlist);
document.getElementById('share-wishlist-btn').addEventListener('click', shareWishlist);

// Page load
window.addEventListener('DOMContentLoaded', () => {
  console.log("Wishlist page loaded");
  updateWishlistStats();
  renderWishlist();
});

// Make functions globally available
window.removeFromWishlist = removeFromWishlist;
window.addToCartFromWishlist = addToCartFromWishlist;
