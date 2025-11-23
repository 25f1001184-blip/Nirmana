// ========== CONSOLE CHECK ==========
console.log("Products.js is loading...");

// ========== HAMBURGER MENU ==========
const menuToggle = document.getElementById('menu-toggle');
const menuBar = document.getElementById('menu-bar');

if (menuToggle && menuBar) {
  menuToggle.addEventListener('click', () => {
    const shown = menuBar.classList.toggle('show');
    document.body.classList.toggle('menu-open', shown);
  });
}

// ========== MENU NAVIGATION ==========
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

// ========== PRODUCT DATABASE (with categories) ==========
const products = [
  // West Bengal - Decor
  { id: 1, name: "Kalighat Goddess Kali", artist: "Jamini Roy", state: "West Bengal", location: "Kolkata", price: 8500, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Kali" },
  { id: 2, name: "Kalighat Cat with Fish", artist: "Kalam Patua", state: "West Bengal", location: "Kolkata", price: 4200, rating: "4.6", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Cat" },
  { id: 3, name: "Kalighat Dancing Woman", artist: "Niranjan Chitrakar", state: "West Bengal", location: "Kolkata", price: 5500, rating: "4.7", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Dance" },
  { id: 4, name: "Patachitra Ramayana Scroll", artist: "Dukhushyam Chitrakar", state: "West Bengal", location: "Pingla", price: 12000, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Ramayana" },
  { id: 5, name: "Patachitra Village Life", artist: "Manu Chitrakar", state: "West Bengal", location: "Pingla", price: 9500, rating: "4.7", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Village" },
  { id: 6, name: "Bankura Horse Large", artist: "Rajesh Kumar Pal", state: "West Bengal", location: "Bankura", price: 3500, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Horse" },
  { id: 7, name: "Terracotta Owl", artist: "Nayan Pal", state: "West Bengal", location: "Bankura", price: 1800, rating: "4.5", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Owl" },
  { id: 8, name: "Terracotta Elephant", artist: "Arup Pal", state: "West Bengal", location: "Bankura", price: 2200, rating: "4.6", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Elephant" },
  { id: 9, name: "Terracotta Wall Panel", artist: "Gopal Pal", state: "West Bengal", location: "Bankura", price: 6800, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Wall+Panel" },
  { id: 10, name: "Dokra Dancing Girl", artist: "Bikash Karmakar", state: "West Bengal", location: "Dariapur", price: 5500, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Dokra+Girl" },
  { id: 11, name: "Dokra Tribal Musician", artist: "Rajesh Karmakar", state: "West Bengal", location: "Bikna", price: 4800, rating: "4.7", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Musician" },
  { id: 12, name: "Dokra Owl Lamp", artist: "Soumen Karmakar", state: "West Bengal", location: "Dariapur", price: 3200, rating: "4.5", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Owl+Lamp" },
  { id: 13, name: "Chhau Mask Mahisasura", artist: "Sudarshan Sutradhar", state: "West Bengal", location: "Purulia", price: 3500, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Mask" },
  { id: 14, name: "Chhau Mask Ganesha", artist: "Jadu Sutradhar", state: "West Bengal", location: "Charida", price: 2800, rating: "4.7", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Ganesha+Mask" },
  { id: 15, name: "Chhau Mask Ravana", artist: "Ram Sutradhar", state: "West Bengal", location: "Purulia", price: 4200, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Ravana" },

  // West Bengal - Divine Supplies
  { id: 16, name: "Kalighat Hanuman", artist: "Swarna Chitrakar", state: "West Bengal", location: "Kolkata", price: 6200, rating: "4.9", category: "Divine Supplies", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Hanuman" },
  { id: 17, name: "Kalighat Durga", artist: "Monimala Chitrakar", state: "West Bengal", location: "Kolkata", price: 8900, rating: "4.8", category: "Divine Supplies", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Durga" },
  { id: 18, name: "Terracotta Durga Idol", artist: "Subhas Pal", state: "West Bengal", location: "Kumartuli", price: 5500, rating: "4.7", category: "Divine Supplies", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Durga+Idol" },
  { id: 19, name: "Shola Ganesha", artist: "Kartik Das", state: "West Bengal", location: "Malda", price: 1800, rating: "4.5", category: "Divine Supplies", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Ganesha" },
  { id: 20, name: "Brass Diya Set", artist: "Bengal Artisans", state: "West Bengal", location: "Kolkata", price: 1200, rating: "4.6", category: "Divine Supplies", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Diya" },

  // West Bengal - Clothes
  { id: 21, name: "Kantha Saree Traditional", artist: "Anjali Das", state: "West Bengal", location: "Bolpur", price: 7200, rating: "4.9", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Saree" },
  { id: 22, name: "Baluchari Saree Red", artist: "Bishnupur Weavers", state: "West Bengal", location: "Bishnupur", price: 18000, rating: "4.9", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Red+Saree" },
  { id: 23, name: "Baluchari Saree Blue", artist: "Ratan Weaver Coop", state: "West Bengal", location: "Bishnupur", price: 16500, rating: "4.8", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Blue+Saree" },
  { id: 24, name: "Kantha Dupatta", artist: "Purnima Das", state: "West Bengal", location: "Bolpur", price: 2800, rating: "4.6", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Dupatta" },
  { id: 25, name: "Cotton Block Print Kurta", artist: "Santiniketan Weavers", state: "West Bengal", location: "Santiniketan", price: 1800, rating: "4.5", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Kurta" },

  // West Bengal - Accessories
  { id: 26, name: "Dokra Jewelry Set", artist: "Bikash Karmakar", state: "West Bengal", location: "Dariapur", price: 3200, rating: "4.7", category: "Accessories", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Jewelry" },
  { id: 27, name: "Dokra Necklace", artist: "Manik Karmakar", state: "West Bengal", location: "Bikna", price: 2500, rating: "4.6", category: "Accessories", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Necklace" },
  { id: 28, name: "Terracotta Earrings", artist: "Kumartuli Artisans", state: "West Bengal", location: "Kolkata", price: 450, rating: "4.4", category: "Accessories", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Earrings" },
  { id: 29, name: "Leather Handbag", artist: "Shantiniketan Leather", state: "West Bengal", location: "Shantiniketan", price: 3500, rating: "4.8", category: "Accessories", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Handbag" },

  // West Bengal - Home & Furniture
  { id: 30, name: "Kantha Quilt Floral", artist: "Rekha Devi", state: "West Bengal", location: "Birbhum", price: 4500, rating: "4.7", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Quilt" },
  { id: 31, name: "Kantha Wall Hanging", artist: "Mina Karmakar", state: "West Bengal", location: "Santiniketan", price: 3800, rating: "4.6", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Hanging" },
  { id: 32, name: "Kantha Cushion Cover", artist: "Sujata Mondal", state: "West Bengal", location: "Birbhum", price: 1200, rating: "4.5", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Cushion" },
  { id: 33, name: "Kantha Table Runner", artist: "Sarita Mondal", state: "West Bengal", location: "Birbhum", price: 1800, rating: "4.5", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Runner" },
  { id: 34, name: "Bamboo Lamp Shade", artist: "Rural Artisans", state: "West Bengal", location: "Sundarbans", price: 2200, rating: "4.6", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Lamp" },

  // West Bengal - Personal Care
  { id: 35, name: "Neem Wood Comb", artist: "Wooden Crafts", state: "West Bengal", location: "Malda", price: 250, rating: "4.5", category: "Personal Care", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Comb" },
  { id: 36, name: "Ayurvedic Soap Set", artist: "Herbal Collective", state: "West Bengal", location: "Kolkata", price: 450, rating: "4.6", category: "Personal Care", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Soap" },
  { id: 37, name: "Natural Face Pack", artist: "Organic Bengal", state: "West Bengal", location: "Kolkata", price: 350, rating: "4.4", category: "Personal Care", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Face+Pack" },

  // Rajasthan Products
  { id: 38, name: "Phad Painting Pabuji", artist: "Shree Lal Joshi", state: "Rajasthan", location: "Shahpura", price: 18000, rating: "5.0", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Phad" },
  { id: 39, name: "Pichwai Krishna", artist: "KM Singh", state: "Rajasthan", location: "Nathdwara", price: 25000, rating: "4.9", category: "Divine Supplies", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Pichwai" },
  { id: 40, name: "Blue Pottery Vase", artist: "Kripal Singh", state: "Rajasthan", location: "Jaipur", price: 3500, rating: "4.7", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Pottery" },
  { id: 41, name: "Bandhani Dupatta", artist: "Abdul Gafur", state: "Rajasthan", location: "Bhuj", price: 2800, rating: "4.6", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Bandhani" },
  { id: 42, name: "Miniature Painting Ragini", artist: "Nainsukh School", state: "Rajasthan", location: "Udaipur", price: 15000, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Miniature" },
  { id: 43, name: "Block Print Bedsheet", artist: "Bagru Artisans", state: "Rajasthan", location: "Bagru", price: 3200, rating: "4.5", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Bedsheet" },
  { id: 44, name: "Meenakari Jewelry Box", artist: "Jaipur Goldsmiths", state: "Rajasthan", location: "Jaipur", price: 8500, rating: "4.8", category: "Accessories", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Meenakari" },
  { id: 45, name: "Kathputli Puppet", artist: "Bhatt Community", state: "Rajasthan", location: "Udaipur", price: 2500, rating: "4.6", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Puppet" },
  { id: 46, name: "Rajasthani Lehenga", artist: "Jaipur Designers", state: "Rajasthan", location: "Jaipur", price: 15000, rating: "4.8", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Lehenga" },
  { id: 47, name: "Sandalwood Oil", artist: "Rajasthan Herbals", state: "Rajasthan", location: "Jodhpur", price: 850, rating: "4.7", category: "Personal Care", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Oil" },

  // Bihar Products
  { id: 48, name: "Madhubani Radha Krishna", artist: "Sita Devi", state: "Bihar", location: "Madhubani", price: 12000, rating: "5.0", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Madhubani" },
  { id: 49, name: "Madhubani Fish Motif", artist: "Ganga Devi", state: "Bihar", location: "Ranti", price: 8500, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Fish" },
  { id: 50, name: "Madhubani Sun Moon", artist: "Baua Devi", state: "Bihar", location: "Jitwarpur", price: 9200, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Sun+Moon" },
  { id: 51, name: "Madhubani Wall Hanging", artist: "Dulari Devi", state: "Bihar", location: "Madhubani", price: 6500, rating: "4.7", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Wall+Art" },
  { id: 52, name: "Tussar Silk Saree", artist: "Bihar Weavers", state: "Bihar", location: "Bhagalpur", price: 8500, rating: "4.8", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Tussar" },

  // Maharashtra Products
  { id: 53, name: "Warli Tarpa Dance", artist: "Jivya Soma Mashe", state: "Maharashtra", location: "Thane", price: 11000, rating: "5.0", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Warli" },
  { id: 54, name: "Warli Farming Scene", artist: "Balu Mashe", state: "Maharashtra", location: "Ganjad", price: 8500, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Farming" },
  { id: 55, name: "Paithani Saree", artist: "Paithan Weavers", state: "Maharashtra", location: "Paithan", price: 25000, rating: "4.9", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Paithani" },
  { id: 56, name: "Kolhapuri Chappal", artist: "Kolhapur Artisans", state: "Maharashtra", location: "Kolhapur", price: 1200, rating: "4.6", category: "Accessories", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Chappal" },

  // Odisha Products
  { id: 57, name: "Pattachitra Jagannath", artist: "Raghunath Mohapatra", state: "Odisha", location: "Puri", price: 10000, rating: "4.9", category: "Divine Supplies", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Jagannath" },
  { id: 58, name: "Pattachitra Dasavatara", artist: "Apanna Mahapatra", state: "Odisha", location: "Raghurajpur", price: 14000, rating: "5.0", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Dasavatara" },
  { id: 59, name: "Sambalpuri Saree", artist: "Odisha Weavers", state: "Odisha", location: "Sambalpur", price: 7500, rating: "4.7", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Sambalpuri" },
  { id: 60, name: "Silver Filigree Necklace", artist: "Cuttack Silversmiths", state: "Odisha", location: "Cuttack", price: 5500, rating: "4.8", category: "Accessories", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Filigree" },

  // Kerala Products
  { id: 61, name: "Kerala Mural Painting", artist: "Temple Artisans", state: "Kerala", location: "Thrissur", price: 15000, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Mural" },
  { id: 62, name: "Kasavu Saree", artist: "Kerala Weavers", state: "Kerala", location: "Kochi", price: 6500, rating: "4.7", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Kasavu" },
  { id: 63, name: "Coconut Shell Crafts", artist: "Coastal Artisans", state: "Kerala", location: "Kovalam", price: 850, rating: "4.5", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Coconut" },
  { id: 64, name: "Ayurvedic Oil Set", artist: "Kerala Herbals", state: "Kerala", location: "Kottayam", price: 1200, rating: "4.8", category: "Personal Care", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Ayurvedic" },
  { id: 65, name: "Kathakali Mask", artist: "Dance Academy", state: "Kerala", location: "Ernakulam", price: 3500, rating: "4.6", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Kathakali" },

  // Tamil Nadu Products
  { id: 66, name: "Tanjore Painting", artist: "Thanjavur Artists", state: "Tamil Nadu", location: "Thanjavur", price: 22000, rating: "5.0", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Tanjore" },
  { id: 67, name: "Kanchipuram Silk Saree", artist: "Kanchipuram Weavers", state: "Tamil Nadu", location: "Kanchipuram", price: 18000, rating: "4.9", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Kanchipuram" },
  { id: 68, name: "Bronze Nataraja Statue", artist: "Temple Sculptors", state: "Tamil Nadu", location: "Swamimalai", price: 12000, rating: "4.8", category: "Divine Supplies", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Nataraja" },
  { id: 69, name: "Temple Jewelry Set", artist: "Chennai Jewelers", state: "Tamil Nadu", location: "Chennai", price: 8500, rating: "4.7", category: "Accessories", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Temple+Jewelry" },
  { id: 70, name: "Sandalwood Powder", artist: "Mysore Herbals", state: "Tamil Nadu", location: "Coimbatore", price: 450, rating: "4.6", category: "Personal Care", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Sandalwood" },

  // Gujarat Products
  { id: 71, name: "Rogan Art Textile", artist: "Khatri Family", state: "Gujarat", location: "Nirona", price: 8500, rating: "4.9", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Rogan" },
  { id: 72, name: "Patola Silk Saree", artist: "Patan Weavers", state: "Gujarat", location: "Patan", price: 35000, rating: "5.0", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Patola" },
  { id: 73, name: "Bandhani Saree", artist: "Kutch Artisans", state: "Gujarat", location: "Bhuj", price: 6500, rating: "4.7", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Bandhani+Saree" },
  { id: 74, name: "Kutch Embroidery Wall Art", artist: "Rabari Women", state: "Gujarat", location: "Bhuj", price: 4500, rating: "4.8", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Embroidery" },
  { id: 75, name: "Silver Anklets", artist: "Surat Silversmiths", state: "Gujarat", location: "Surat", price: 3200, rating: "4.6", category: "Accessories", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Anklets" },

  // Madhya Pradesh Products
  { id: 76, name: "Gond Painting", artist: "Jangarh Singh Shyam", state: "Madhya Pradesh", location: "Bhopal", price: 11000, rating: "5.0", category: "Decor", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Gond" },
  { id: 77, name: "Bagh Print Bedspread", artist: "Bagh Artisans", state: "Madhya Pradesh", location: "Bagh", price: 4500, rating: "4.7", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Bagh+Print" },
  { id: 78, name: "Chanderi Silk Saree", artist: "Chanderi Weavers", state: "Madhya Pradesh", location: "Chanderi", price: 8500, rating: "4.8", category: "Clothes", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Chanderi" },
  { id: 79, name: "Bamboo Craft Basket", artist: "Tribal Artisans", state: "Madhya Pradesh", location: "Jabalpur", price: 850, rating: "4.5", category: "Home & Furniture", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Basket" },
  { id: 80, name: "Herbal Soap", artist: "Forest Collective", state: "Madhya Pradesh", location: "Indore", price: 250, rating: "4.4", category: "Personal Care", image: "https://via.placeholder.com/240x180/FFF4DC/5D4037?text=Herbal+Soap" }
];

console.log("Products loaded:", products.length, "items");

// ========== RENDER PRODUCTS FUNCTION ==========
function renderProducts(productsToRender) {
  console.log("Rendering products:", productsToRender.length);
  
  const grid = document.getElementById('products-grid');
  if (!grid) {
    console.error("products-grid element not found!");
    return;
  }
  
  grid.innerHTML = '';
  
  if (productsToRender.length === 0) {
    grid.innerHTML = '<p class="no-results">No products found. Try different keywords or filters.</p>';
    return;
  }
  
  productsToRender.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-name">${product.name}</div>
      <div class="product-artist">By <a href="artist-profile.html?id=${product.id}">${product.artist}</a></div>
      <div class="product-location">📍 ${product.location}, ${product.state}</div>
      <div class="product-rating">⭐ ${product.rating} / 5.0</div>
      <div class="product-price">₹${product.price.toLocaleString()}</div>
      <button class="add-to-cart-btn">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
  
  console.log("Products rendered successfully");
}

// ========== SEARCH FUNCTION ==========
function searchProducts(keyword) {
  console.log("Searching for:", keyword);
  
  if (!keyword || keyword.trim() === '') {
    console.log("Empty search, showing all products");
    renderProducts(products);
    return;
  }
  
  const searchTerm = keyword.toLowerCase().trim();
  
  const filtered = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.artist.toLowerCase().includes(searchTerm) ||
      product.state.toLowerCase().includes(searchTerm) ||
      product.location.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  });
  
  console.log("Found", filtered.length, "products");
  renderProducts(filtered);
  
  // Show result count
  const grid = document.getElementById('products-grid');
  if (filtered.length > 0) {
    const countMsg = document.createElement('p');
    countMsg.className = 'result-count';
    countMsg.textContent = `Found ${filtered.length} products for "${keyword}"`;
    grid.insertBefore(countMsg, grid.firstChild);
  }
}

// ========== FILTER BY CATEGORY ==========
function filterByCategory(category) {
  console.log("Filtering by category:", category);
  const filtered = products.filter(p => p.category === category);
  renderProducts(filtered);
  
  const grid = document.getElementById('products-grid');
  if (filtered.length > 0) {
    const countMsg = document.createElement('p');
    countMsg.className = 'result-count';
    countMsg.textContent = `Showing ${filtered.length} products in "${category}"`;
    grid.insertBefore(countMsg, grid.firstChild);
  }
}

// ========== GET PARAMETERS FROM URL ==========
function getSearchFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get('search');
  console.log("URL search parameter:", search);
  return search;
}

function getCategoryFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  console.log("URL category parameter:", category);
  return category;
}

// ========== SEARCH INPUT HANDLERS ==========
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

if (searchButton && searchInput) {
  // Search on button click
  searchButton.addEventListener('click', () => {
    const keyword = searchInput.value;
    console.log("Search button clicked, keyword:", keyword);
    searchProducts(keyword);
  });

  // Search on Enter key
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const keyword = searchInput.value;
      console.log("Enter pressed, keyword:", keyword);
      searchProducts(keyword);
    }
  });

  // Clear search
  searchInput.addEventListener('input', (e) => {
    if (e.target.value === '') {
      console.log("Search cleared");
      renderProducts(products);
    }
  });
}

// ========== FILTER BY CATEGORY DROPDOWN ==========
const categoryFilter = document.getElementById('category-filter');
if (categoryFilter) {
  categoryFilter.addEventListener('change', (e) => {
    const category = e.target.value;
    console.log("Filter by category dropdown:", category);
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
  });
}

// ========== FILTER BY STATE ==========
const stateFilter = document.getElementById('state-filter');
if (stateFilter) {
  stateFilter.addEventListener('change', (e) => {
    const state = e.target.value;
    console.log("Filter by state:", state);
    const filtered = state === 'all' ? products : products.filter(p => p.state === state);
    renderProducts(filtered);
  });
}

// ========== SORT FUNCTIONALITY ==========
const sortFilter = document.getElementById('sort-filter');
if (sortFilter) {
  sortFilter.addEventListener('change', (e) => {
    const sortBy = e.target.value;
    console.log("Sort by:", sortBy);
    let sorted = [...products];
    
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') sorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    
    renderProducts(sorted);
  });
}

// ========== PAGE LOAD - INITIALIZE ==========
window.addEventListener('DOMContentLoaded', () => {
  console.log("Page loaded, initializing...");
  
  const searchQuery = getSearchFromURL();
  const categoryQuery = getCategoryFromURL();
  
  if (searchQuery) {
    console.log("Search query found:", searchQuery);
    if (searchInput) {
      searchInput.value = searchQuery;
    }
    searchProducts(searchQuery);
  } else if (categoryQuery) {
    console.log("Category query found:", categoryQuery);
    filterByCategory(categoryQuery);
    // Pre-select category in dropdown
    if (categoryFilter) {
      categoryFilter.value = categoryQuery;
    }
  } else {
    console.log("No query, showing all products");
    renderProducts(products);
  }
});

console.log("Products.js loaded completely!");
