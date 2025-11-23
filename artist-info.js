console.log("Artist info page loading...");

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
document.getElementById('account-btn').onclick = () => window.location.href = 'account.html';
document.getElementById('orders-btn').onclick = () => window.location.href = 'orders.html';
document.getElementById('wishlist-btn').onclick = () => window.location.href = 'wishlist.html';
document.getElementById('wallet-btn').onclick = () => window.location.href = 'wallet.html';
document.getElementById('deals-btn').onclick = () => window.location.href = 'deals.html';
document.getElementById('support-btn').onclick = () => window.location.href = 'support-local.html';
document.getElementById('products-btn').onclick = () => window.location.href = 'products.html';
document.getElementById('help-btn').onclick = () => window.location.href = 'help.html';

// ========== ARTISTS DATABASE (200 Artists) ==========
const artists = [
  {
    name: "Jamini Roy",
    realName: "Jamini Roy",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Jamini+Roy",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "45+ years",
    mastery: ["Kalighat Painting", "Folk Art"]
  },
  {
    name: "Kalam Patua",
    realName: "Kalam Patua",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Kalam",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "20+ years",
    mastery: ["Kalighat Painting"]
  },
  {
    name: "Niranjan Chitrakar",
    realName: "Niranjan Chitrakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Niranjan",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "25+ years",
    mastery: ["Kalighat Painting"]
  },
  {
    name: "Swarna Chitrakar",
    realName: "Swarna Chitrakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Swarna",
    location: "Naya, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "25+ years",
    mastery: ["Patachitra"]
  },
  {
    name: "Manisha Chitrakar",
    realName: "Manisha Chitrakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Manisha",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.6",
    experience: "18+ years",
    mastery: ["Kalighat Painting"]
  },
  {
    name: "Gurupada Chitrakar",
    realName: "Gurupada Chitrakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Gurupada",
    location: "Naya, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "30+ years",
    mastery: ["Patachitra", "Scroll Painting"]
  },
  {
    name: "Bapi Chitrakar",
    realName: "Bapi Chitrakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Bapi",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "22+ years",
    mastery: ["Kalighat Painting", "Wildlife Art"]
  },
  {
    name: "Monimala Chitrakar",
    realName: "Monimala Chitrakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Monimala",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "28+ years",
    mastery: ["Kalighat Painting", "Religious Art"]
  },
  {
    name: "Dukhushyam Chitrakar",
    realName: "Dukhushyam Chitrakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Dukhushyam",
    location: "Pingla, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "35+ years",
    mastery: ["Patachitra", "Epic Narratives"]
  },
  {
    name: "Manu Chitrakar",
    realName: "Manu Chitrakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Manu",
    location: "Pingla, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "20+ years",
    mastery: ["Patachitra", "Village Life"]
  },
  {
    name: "Rani Chitrakar",
    realName: "Rani Chitrakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Rani",
    location: "Naya, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "24+ years",
    mastery: ["Patachitra", "Nature Art"]
  },
  {
    name: "Rajesh Kumar Pal",
    realName: "Rajesh Kumar Pal",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Rajesh+Pal",
    location: "Bankura, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "35+ years",
    mastery: ["Terracotta Sculpture", "Bankura Horse"]
  },
  {
    name: "Subhas Pal",
    realName: "Subhas Pal",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Subhas",
    location: "Kumartuli, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "30+ years",
    mastery: ["Terracotta Sculpture", "Idol Making"]
  },
  {
    name: "Nayan Pal",
    realName: "Nayan Pal",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Nayan",
    location: "Bankura, West Bengal",
    state: "West Bengal",
    rating: "4.5",
    experience: "18+ years",
    mastery: ["Terracotta Art"]
  },
  {
    name: "Arup Pal",
    realName: "Arup Pal",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Arup",
    location: "Bankura, West Bengal",
    state: "West Bengal",
    rating: "4.6",
    experience: "22+ years",
    mastery: ["Terracotta Sculpture"]
  },
  {
    name: "Gopal Pal",
    realName: "Gopal Pal",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Gopal",
    location: "Bankura, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "28+ years",
    mastery: ["Terracotta Relief", "Wall Panels"]
  },
  {
    name: "Rekha Devi",
    realName: "Rekha Devi",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Rekha",
    location: "Birbhum, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "25+ years",
    mastery: ["Kantha Embroidery", "Quilting"]
  },
  {
    name: "Anjali Das",
    realName: "Anjali Das",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Anjali",
    location: "Bolpur, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "30+ years",
    mastery: ["Kantha Embroidery", "Saree Design"]
  },
  {
    name: "Mina Karmakar",
    realName: "Mina Karmakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Mina",
    location: "Santiniketan, West Bengal",
    state: "West Bengal",
    rating: "4.6",
    experience: "20+ years",
    mastery: ["Kantha Embroidery", "Wall Art"]
  },
  {
    name: "Bikash Karmakar",
    realName: "Bikash Karmakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Bikash",
    location: "Dariapur, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "28+ years",
    mastery: ["Dokra Metal Casting", "Tribal Art"]
  },
  {
    name: "Rajesh Karmakar",
    realName: "Rajesh Karmakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Rajesh+K",
    location: "Bikna, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "24+ years",
    mastery: ["Dokra Casting", "Tribal Art"]
  },
  {
    name: "Soumen Karmakar",
    realName: "Soumen Karmakar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Soumen",
    location: "Dariapur, West Bengal",
    state: "West Bengal",
    rating: "4.5",
    experience: "19+ years",
    mastery: ["Dokra Casting", "Functional Art"]
  },
  {
    name: "Sudarshan Sutradhar",
    realName: "Sudarshan Sutradhar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Sudarshan",
    location: "Purulia, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "32+ years",
    mastery: ["Mask Making", "Chhau Art"]
  },
  {
    name: "Jadu Sutradhar",
    realName: "Jadu Sutradhar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Jadu",
    location: "Charida, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "26+ years",
    mastery: ["Mask Making", "Religious Art"]
  },
  {
    name: "Ram Sutradhar",
    realName: "Ram Sutradhar",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Ram",
    location: "Purulia, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "35+ years",
    mastery: ["Mask Making", "Character Art"]
  },
  {
    name: "Shree Lal Joshi",
    realName: "Shree Lal Joshi",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Shree+Lal",
    location: "Shahpura, Rajasthan",
    state: "Rajasthan",
    rating: "5.0",
    experience: "50+ years",
    mastery: ["Phad Painting", "Epic Narratives"]
  },
  {
    name: "KM Singh",
    realName: "KM Singh",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=KM+Singh",
    location: "Nathdwara, Rajasthan",
    state: "Rajasthan",
    rating: "4.9",
    experience: "40+ years",
    mastery: ["Pichwai Painting", "Religious Art"]
  },
  {
    name: "Kripal Singh",
    realName: "Kripal Singh",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Kripal",
    location: "Jaipur, Rajasthan",
    state: "Rajasthan",
    rating: "4.7",
    experience: "38+ years",
    mastery: ["Blue Pottery", "Ceramic Art"]
  },
  {
    name: "Abdul Gafur",
    realName: "Abdul Gafur",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Abdul",
    location: "Bhuj, Rajasthan",
    state: "Rajasthan",
    rating: "4.6",
    experience: "30+ years",
    mastery: ["Bandhani", "Tie-Dye"]
  },
  {
    name: "Sita Devi",
    realName: "Sita Devi",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Sita+Devi",
    location: "Madhubani, Bihar",
    state: "Bihar",
    rating: "5.0",
    experience: "60+ years",
    mastery: ["Madhubani Painting", "Bharni Style"]
  },
  {
    name: "Ganga Devi",
    realName: "Ganga Devi",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Ganga",
    location: "Ranti, Bihar",
    state: "Bihar",
    rating: "4.8",
    experience: "35+ years",
    mastery: ["Madhubani Painting", "Fish Motifs"]
  },
  {
    name: "Baua Devi",
    realName: "Baua Devi",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Baua",
    location: "Jitwarpur, Bihar",
    state: "Bihar",
    rating: "4.9",
    experience: "32+ years",
    mastery: ["Madhubani Painting", "Katchni Style"]
  },
  {
    name: "Jivya Soma Mashe",
    realName: "Jivya Soma Mashe",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Jivya",
    location: "Thane, Maharashtra",
    state: "Maharashtra",
    rating: "5.0",
    experience: "55+ years",
    mastery: ["Warli Painting", "Tribal Art"]
  },
  {
    name: "Balu Mashe",
    realName: "Balu Mashe",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Balu",
    location: "Ganjad, Maharashtra",
    state: "Maharashtra",
    rating: "4.8",
    experience: "28+ years",
    mastery: ["Warli Painting", "Agricultural Themes"]
  },
  {
    name: "Raghunath Mohapatra",
    realName: "Raghunath Mohapatra",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Raghunath",
    location: "Puri, Odisha",
    state: "Odisha",
    rating: "4.9",
    experience: "45+ years",
    mastery: ["Pattachitra", "Temple Art"]
  },
  {
    name: "Apanna Mahapatra",
    realName: "Apanna Mahapatra",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Apanna",
    location: "Raghurajpur, Odisha",
    state: "Odisha",
    rating: "5.0",
    experience: "40+ years",
    mastery: ["Pattachitra", "Dasavatara"]
  },
  {
    name: "Bishnupur Weavers",
    realName: "Bishnupur Weavers Collective",
    photo: "https://via.placeholder.com/120x120/A1887F/FFF?text=Bishnupur",
    location: "Bishnupur, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "300+ years",
    mastery: ["Baluchari Weaving", "Silk Sarees"]
  },

  // Generate remaining 165 artists
  ...generateRemainingArtists(165)
];

function generateRemainingArtists(count) {
  const artistsList = [];
  const states = ["West Bengal", "Rajasthan", "Bihar", "Odisha", "Maharashtra", "Tamil Nadu", "Kerala", "Gujarat", "Madhya Pradesh", "Assam"];
  const cities = {
    "West Bengal": ["Kolkata", "Bankura", "Birbhum", "Malda", "Purulia"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    "Bihar": ["Madhubani", "Patna", "Gaya"],
    "Odisha": ["Puri", "Bhubaneswar", "Cuttack"],
    "Maharashtra": ["Mumbai", "Pune", "Thane"],
    "Tamil Nadu": ["Chennai", "Thanjavur", "Kanchipuram"],
    "Kerala": ["Kochi", "Thrissur"],
    "Gujarat": ["Ahmedabad", "Bhuj", "Surat"],
    "Madhya Pradesh": ["Bhopal", "Indore"],
    "Assam": ["Guwahati", "Jorhat"]
  };

  const artForms = ["Traditional Painting", "Sculpture", "Textile Art", "Metal Craft", "Pottery", "Wood Carving"];
  
  for (let i = 0; i < count; i++) {
    const state = states[i % states.length];
    const cityList = cities[state];
    const city = cityList[i % cityList.length];
    const artistName = `Artist ${i + 37}`;
    
    artistsList.push({
      name: artistName,
      realName: `${artistName} (Full Name)`,
      photo: `https://via.placeholder.com/120x120/A1887F/FFF?text=Artist+${i+37}`,
      location: `${city}, ${state}`,
      state: state,
      rating: (4.0 + Math.random()).toFixed(1),
      experience: `${Math.floor(15 + Math.random() * 30)}+ years`,
      mastery: [artForms[i % artForms.length], "Traditional Techniques"]
    });
  }
  
  return artistsList;
}

console.log("Artists loaded:", artists.length);

// ========== RENDER ARTISTS ==========
function renderArtists(artistsList) {
  const grid = document.getElementById('artists-grid');
  
  if (!grid) {
    console.error("artists-grid element not found!");
    return;
  }
  
  grid.innerHTML = '';
  
  if (artistsList.length === 0) {
    grid.innerHTML = '<p class="no-results">No artists found. Try different keywords or filters.</p>';
    return;
  }
  
  artistsList.forEach(artist => {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.innerHTML = `
      <img src="${artist.photo}" alt="${artist.name}" class="artist-card-photo">
      <div class="artist-card-name">${artist.name}</div>
      <div class="artist-card-location">📍 ${artist.location}</div>
      <div class="artist-card-rating">⭐ ${artist.rating} / 5.0</div>
      <div class="artist-card-mastery">${artist.mastery.slice(0, 2).join(', ')}</div>
      <button class="view-profile-btn" onclick="window.location.href='artist-profile.html?artist=${encodeURIComponent(artist.name)}'">View Profile</button>
    `;
    grid.appendChild(card);
  });
  
  console.log("Rendered", artistsList.length, "artists");
}

// ========== SEARCH ARTISTS ==========
function searchArtists(keyword) {
  console.log("Searching for:", keyword);
  
  if (!keyword || keyword.trim() === '') {
    renderArtists(artists);
    return;
  }
  
  const searchTerm = keyword.toLowerCase().trim();
  
  const filtered = artists.filter(artist => {
    return (
      artist.name.toLowerCase().includes(searchTerm) ||
      artist.location.toLowerCase().includes(searchTerm) ||
      artist.state.toLowerCase().includes(searchTerm) ||
      artist.mastery.some(skill => skill.toLowerCase().includes(searchTerm))
    );
  });
  
  console.log("Found", filtered.length, "artists");
  renderArtists(filtered);
  
  // Show result count
  const grid = document.getElementById('artists-grid');
  if (filtered.length > 0) {
    const countMsg = document.createElement('p');
    countMsg.className = 'result-count';
    countMsg.textContent = `Found ${filtered.length} artists for "${keyword}"`;
    grid.insertBefore(countMsg, grid.firstChild);
  }
}

// ========== SEARCH INPUT HANDLERS ==========
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

if (searchButton && searchInput) {
  searchButton.addEventListener('click', () => {
    const keyword = searchInput.value;
    console.log("Search button clicked");
    searchArtists(keyword);
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const keyword = searchInput.value;
      console.log("Enter pressed");
      searchArtists(keyword);
    }
  });

  searchInput.addEventListener('input', (e) => {
    if (e.target.value === '') {
      renderArtists(artists);
    }
  });
}

// ========== FILTER BY STATE ==========
const stateFilter = document.getElementById('state-filter');
if (stateFilter) {
  stateFilter.addEventListener('change', (e) => {
    const state = e.target.value;
    console.log("Filter by state:", state);
    const filtered = state === 'all' ? artists : artists.filter(a => a.state === state);
    renderArtists(filtered);
  });
}

// ========== PAGE LOAD ==========
window.addEventListener('DOMContentLoaded', () => {
  console.log("Page loaded, rendering all artists");
  renderArtists(artists);
});
