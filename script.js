// ========== HAMBURGER MENU ==========
const menuToggle = document.getElementById('menu-toggle');
const menuBar = document.getElementById('menu-bar');

menuToggle.addEventListener('click', () => {
  const shown = menuBar.classList.toggle('show');
  document.body.classList.toggle('menu-open', shown);
});

// ========== MENU BUTTON NAVIGATION ==========
document.getElementById('account-btn').onclick = () => window.location.href = 'account.html';
document.getElementById('orders-btn').onclick = () => window.location.href = 'orders.html';
document.getElementById('wishlist-btn').onclick = () => window.location.href = 'wishlist.html';
document.getElementById('wallet-btn').onclick = () => window.location.href = 'wallet.html';
document.getElementById('deals-btn').onclick = () => window.location.href = 'deals.html';
document.getElementById('support-btn').onclick = () => window.location.href = 'support-local.html';
document.getElementById('artist-btn').onclick = () => window.location.href = 'artist-info.html';
document.getElementById('help-btn').onclick = () => window.location.href = 'help.html';

// ========== SEARCH FUNCTIONALITY - REDIRECT TO PRODUCTS PAGE ==========
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

// Search on button click
searchButton.addEventListener('click', () => {
  const keyword = searchInput.value.trim();
  if (keyword) {
    // Redirect to products page with search parameter
    window.location.href = `products.html?search=${encodeURIComponent(keyword)}`;
  } else {
    // If empty, just go to products page
    window.location.href = 'products.html';
  }
});

// Search on Enter key
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const keyword = searchInput.value.trim();
    if (keyword) {
      window.location.href = `products.html?search=${encodeURIComponent(keyword)}`;
    } else {
      window.location.href = 'products.html';
    }
  }
});

// ========== PRODUCT IMAGE SLIDER ==========
// Product images array - FIXED PATHS (use relative paths, not C:\Users\...)
const productImages1 = [
  "images/scarf-1.webp",   // Put your images in an "images" folder
  "images/scarf-2.webp",
  "images/scarf-3.webp"
];

let productImage1Index = 0;

const productImage1 = document.getElementById('productImage1');
const leftArrow1 = document.querySelector('#trendy-slideshow .gallery-arrow.left');
const rightArrow1 = document.querySelector('#trendy-slideshow .gallery-arrow.right');

function updateProductImage1() {
  if (productImage1) {
    productImage1.src = productImages1[productImage1Index];
  }
}

// Left arrow click
if (leftArrow1) {
  leftArrow1.addEventListener('click', () => {
    productImage1Index = (productImage1Index - 1 + productImages1.length) % productImages1.length;
    updateProductImage1();
  });
}

// Right arrow click
if (rightArrow1) {
  rightArrow1.addEventListener('click', () => {
    productImage1Index = (productImage1Index + 1) % productImages1.length;
    updateProductImage1();
  });
}

//
// ========== CATEGORY NAVIGATION ==========
const categorySquares = document.querySelectorAll('.category-square');

categorySquares.forEach(square => {
  square.style.cursor = 'pointer'; // Make it look clickable
  
  square.addEventListener('click', () => {
    const category = square.getAttribute('data-category');
    // Redirect to products page with category parameter
    window.location.href = `products.html?category=${encodeURIComponent(category)}`;
  });
  
  // Add hover effect
  square.addEventListener('mouseenter', () => {
    square.style.transform = 'scale(1.05)';
    square.style.transition = 'transform 0.2s ease';
  });
  
  square.addEventListener('mouseleave', () => {
    square.style.transform = 'scale(1)';
  });
});
