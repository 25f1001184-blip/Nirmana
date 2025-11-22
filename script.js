// Hamburger menu
const menuToggle = document.getElementById('menu-toggle');
const menuBar = document.getElementById('menu-bar');
menuToggle.addEventListener('click', () => {
  const shown = menuBar.classList.toggle('show');
  document.body.classList.toggle('menu-open', shown);
});
menuToggle.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    menuToggle.click();
  }
});
function toggleSubcategories(id) {
  const element = document.getElementById(id);
  const visible = element.style.display === "flex";
  element.style.display = visible ? "none" : "flex";
  const category = element.previousElementSibling;
  category.setAttribute("aria-expanded", String(!visible));
  element.setAttribute("aria-hidden", String(visible));
}
document.querySelectorAll('.category').forEach(cat => {
  cat.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      cat.click();
    }
  });
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll("#trendy-slideshow .slide");
const totalSlides = slides.length;
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
}
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});
nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

// Search results overlay functionality
const allProducts = [
  {name: "Handwoven Cotton Scarf", category: "Clothes", rating: 4.2, location: "Kerala", artist: "Arjun"},
  {name: "Handmade Ceramic Vase", category: "Decor", rating: 5.0, location: "Rajasthan", artist: "Maya"},
  {name: "Clay Diyas Set", category: "Divine Supplies", rating: 4.4, location: "Uttar Pradesh", artist: "Sita"},
  {name: "Jute Bags", category: "Accessories", rating: 4.0, location: "West Bengal", artist: "Rohan"},
  {name: "Wooden Laptop Stands", category: "Home & Furniture", rating: 4.6, location: "Punjab", artist: "Kiran"}
];
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const overlay = document.getElementById('search-results-overlay');
const resultsList = document.getElementById('search-results-list');
const closeBtn = document.getElementById('close-search-results');

searchButton.addEventListener('click', () => {
  const keyword = searchInput.value.trim().toLowerCase();
  if (!keyword) return;

  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(keyword) || p.category.toLowerCase().includes(keyword)
  );

  resultsList.innerHTML = '';

  if (filtered.length === 0) {
    resultsList.innerHTML = '<p>No products found.</p>';
  } else {
    filtered.forEach(p => {
      const div = document.createElement('div');
      div.className = 'search-result-item';
      div.innerHTML = `
        <h3>${p.name}</h3>
        <div>Category: ${p.category}</div>
        <div>Rating: ${"⭐".repeat(Math.round(p.rating))} (${p.rating.toFixed(1)})</div>
        <div>Location: ${p.location}</div>
        <button>View Artist Profile: ${p.artist}</button>
      `;
      resultsList.appendChild(div);
    });
  }

  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});
