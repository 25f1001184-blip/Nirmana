console.log("Artist profile page loading...");

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

// ========== ARTISTS DATABASE (200 Artists) ==========
const artists = {
  "Jamini Roy": {
    name: "Jamini Roy",
    realName: "Jamini Roy",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Jamini+Roy",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "45+ years",
    about: "Jamini Roy (1887-1972) was one of the earliest and most significant modernists of Indian art. He is celebrated for his bold use of form and color, inspired by Bengali folk art traditions, particularly Kalighat paintings. His works simplified complex subjects into essential forms using natural pigments and earthy colors. Roy's art depicts mythological themes, village life, and social subjects with a unique visual language that bridges traditional folk art and modern aesthetics.",
    mastery: ["Kalighat Painting", "Folk Art", "Tempera", "Natural Pigments"],
    famousWorks: [
      { name: "Mother and Child", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Mother+Child" },
      { name: "Three Pujarins", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Three+Pujarins" },
      { name: "Cat Series", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Cat+Series" }
    ],
    productsCount: 15
  },
  
  "Kalam Patua": {
    name: "Kalam Patua",
    realName: "Kalam Patua",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Kalam",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "20+ years",
    about: "Kalam Patua is a contemporary Kalighat artist who continues the tradition of his ancestors. His work focuses on everyday life, satire, and social commentary through simplified forms and bold colors. He has exhibited his work across India and internationally.",
    mastery: ["Kalighat Painting", "Social Commentary", "Folk Art"],
    famousWorks: [
      { name: "Cat with Fish", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Cat" },
      { name: "Market Scene", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Market" }
    ],
    productsCount: 8
  },

  "Niranjan Chitrakar": {
    name: "Niranjan Chitrakar",
    realName: "Niranjan Chitrakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Niranjan",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "25+ years",
    about: "Niranjan Chitrakar specializes in Kalighat paintings depicting dance, music, and cultural performances. His vibrant use of color and fluid lines capture the essence of Bengal's rich performing arts tradition.",
    mastery: ["Kalighat Painting", "Performance Art", "Cultural Documentation"],
    famousWorks: [
      { name: "Dancing Woman", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Dance" },
      { name: "Musician", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Music" }
    ],
    productsCount: 6
  },

  "Swarna Chitrakar": {
    name: "Swarna Chitrakar",
    realName: "Swarna Chitrakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Swarna",
    location: "Naya, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "25+ years",
    about: "Swarna Chitrakar is a renowned female Patua artist who has brought global attention to Bengal's scroll painting tradition. She uses her art to address social issues including women's rights, climate change, and health awareness. Her innovative approach combines traditional Patua techniques with contemporary themes.",
    mastery: ["Patachitra", "Social Commentary Art", "Performance Art", "Natural Colors"],
    famousWorks: [
      { name: "Women Empowerment Series", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Women" },
      { name: "Climate Change Scroll", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Climate" }
    ],
    productsCount: 10
  },

  "Manisha Chitrakar": {
    name: "Manisha Chitrakar",
    realName: "Manisha Chitrakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Manisha",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.6",
    experience: "18+ years",
    about: "Manisha Chitrakar is known for her detailed Kalighat paintings depicting courtesans and urban life of 19th century Calcutta. Her work preserves the satirical and observational aspects of traditional Kalighat art.",
    mastery: ["Kalighat Painting", "Historical Themes", "Urban Life"],
    famousWorks: [
      { name: "Courtesan Series", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Courtesan" }
    ],
    productsCount: 5
  },

  "Gurupada Chitrakar": {
    name: "Gurupada Chitrakar",
    realName: "Gurupada Chitrakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Gurupada",
    location: "Naya, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "30+ years",
    about: "Gurupada Chitrakar is a master Patua scroll painter from West Bengal's Medinipur district. He belongs to the ancient Patua community that has preserved the tradition of painted scrolls accompanied by narrative songs for centuries. His work documents contemporary social issues alongside mythological themes.",
    mastery: ["Patachitra", "Scroll Painting", "Natural Dyes", "Storytelling Art"],
    famousWorks: [
      { name: "Krishna Leela", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Krishna" },
      { name: "Ramayana Epic", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Ramayana" }
    ],
    productsCount: 12
  },

  "Bapi Chitrakar": {
    name: "Bapi Chitrakar",
    realName: "Bapi Chitrakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Bapi",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "22+ years",
    about: "Bapi Chitrakar specializes in animal and wildlife themes in Kalighat style. His paintings of tigers, elephants, and other creatures are celebrated for their dynamic composition and vibrant energy.",
    mastery: ["Kalighat Painting", "Wildlife Art", "Animal Motifs"],
    famousWorks: [
      { name: "Tiger in Forest", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Tiger" }
    ],
    productsCount: 7
  },

  "Monimala Chitrakar": {
    name: "Monimala Chitrakar",
    realName: "Monimala Chitrakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Monimala",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "28+ years",
    about: "Monimala Chitrakar is renowned for her devotional Kalighat paintings, particularly depictions of Goddess Durga. Her work captures the spiritual essence and power of Bengali religious iconography.",
    mastery: ["Kalighat Painting", "Religious Art", "Goddess Iconography"],
    famousWorks: [
      { name: "Durga Mahishasuramardini", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Durga" }
    ],
    productsCount: 9
  },

  "Dukhushyam Chitrakar": {
    name: "Dukhushyam Chitrakar",
    realName: "Dukhushyam Chitrakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Dukhushyam",
    location: "Pingla, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "35+ years",
    about: "Dukhushyam Chitrakar is a master Patua artist famous for his epic Ramayana scrolls. His detailed narrative paintings can span several meters and are accompanied by traditional songs that tell the complete story.",
    mastery: ["Patachitra", "Epic Narratives", "Scroll Painting"],
    famousWorks: [
      { name: "Complete Ramayana Scroll", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Ramayana" }
    ],
    productsCount: 8
  },

  "Manu Chitrakar": {
    name: "Manu Chitrakar",
    realName: "Manu Chitrakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Manu",
    location: "Pingla, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "20+ years",
    about: "Manu Chitrakar creates Patachitra paintings depicting village life, agricultural practices, and rural traditions. His work documents the changing landscape of rural Bengal.",
    mastery: ["Patachitra", "Village Life", "Agricultural Themes"],
    famousWorks: [
      { name: "Village Life Series", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Village" }
    ],
    productsCount: 6
  },

  "Rani Chitrakar": {
    name: "Rani Chitrakar",
    realName: "Rani Chitrakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Rani",
    location: "Naya, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "24+ years",
    about: "Rani Chitrakar specializes in nature-themed Patachitra paintings featuring trees, birds, and environmental conservation messages. Her 'Tree of Life' series has gained international recognition.",
    mastery: ["Patachitra", "Nature Art", "Environmental Themes"],
    famousWorks: [
      { name: "Tree of Life", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Tree" }
    ],
    productsCount: 7
  },

  "Rajesh Kumar Pal": {
    name: "Rajesh Kumar Pal",
    realName: "Rajesh Kumar Pal",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Rajesh+Pal",
    location: "Bankura, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "35+ years",
    about: "Rajesh Kumar Pal is a master terracotta artist from Bankura, famous for creating the iconic Bankura Horse and other traditional clay sculptures. His family has practiced this craft for seven generations, using ancient techniques passed down through oral tradition.",
    mastery: ["Terracotta Sculpture", "Bankura Horse", "Clay Modeling", "Traditional Firing"],
    famousWorks: [
      { name: "Large Bankura Horse", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Horse" },
      { name: "Elephant Family", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Elephant" }
    ],
    productsCount: 12
  },

  "Subhas Pal": {
    name: "Subhas Pal",
    realName: "Subhas Pal",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Subhas",
    location: "Kumartuli, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "30+ years",
    about: "Subhas Pal is a renowned idol maker from Kumartuli, the traditional potters' quarter of Kolkata. He specializes in creating Durga idols for Durga Puja festivals, combining traditional techniques with contemporary aesthetics.",
    mastery: ["Terracotta Sculpture", "Idol Making", "Festival Art"],
    famousWorks: [
      { name: "Durga Idol", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Durga+Idol" }
    ],
    productsCount: 10
  },

  "Nayan Pal": {
    name: "Nayan Pal",
    realName: "Nayan Pal",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Nayan",
    location: "Bankura, West Bengal",
    state: "West Bengal",
    rating: "4.5",
    experience: "18+ years",
    about: "Nayan Pal creates decorative terracotta pieces including owls, birds, and other animal figures. His work is known for its intricate surface patterns and traditional firing techniques.",
    mastery: ["Terracotta Art", "Animal Sculptures", "Traditional Patterns"],
    famousWorks: [
      { name: "Owl Guardian", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Owl" }
    ],
    productsCount: 8
  },

  "Arup Pal": {
    name: "Arup Pal",
    realName: "Arup Pal",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Arup",
    location: "Bankura, West Bengal",
    state: "West Bengal",
    rating: "4.6",
    experience: "22+ years",
    about: "Arup Pal specializes in creating terracotta elephants and other large animal sculptures. His work combines traditional Bankura techniques with modern design sensibilities.",
    mastery: ["Terracotta Sculpture", "Large Scale Works", "Animal Art"],
    famousWorks: [
      { name: "Elephant Procession", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Elephant" }
    ],
    productsCount: 9
  },

  "Gopal Pal": {
    name: "Gopal Pal",
    realName: "Gopal Pal",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Gopal",
    location: "Bankura, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "28+ years",
    about: "Gopal Pal creates terracotta wall panels depicting scenes from rural life, mythology, and nature. His relief work is highly detailed and sought after for architectural decoration.",
    mastery: ["Terracotta Relief", "Wall Panels", "Architectural Art"],
    famousWorks: [
      { name: "Village Life Panel", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Wall+Panel" }
    ],
    productsCount: 11
  },

  "Rekha Devi": {
    name: "Rekha Devi",
    realName: "Rekha Devi",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Rekha",
    location: "Birbhum, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "25+ years",
    about: "Rekha Devi is a master Kantha embroidery artist who creates intricate quilts using the traditional running stitch technique. Her floral designs are celebrated for their delicacy and vibrant color combinations.",
    mastery: ["Kantha Embroidery", "Quilting", "Floral Designs"],
    famousWorks: [
      { name: "Floral Kantha Quilt", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Quilt" }
    ],
    productsCount: 10
  },

  "Anjali Das": {
    name: "Anjali Das",
    realName: "Anjali Das",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Anjali",
    location: "Bolpur, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "30+ years",
    about: "Anjali Das creates traditional Kantha sarees that are prized for their intricate embroidery and storytelling motifs. Each saree takes months to complete and tells a unique visual story.",
    mastery: ["Kantha Embroidery", "Saree Design", "Narrative Art"],
    famousWorks: [
      { name: "Story Saree Collection", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Saree" }
    ],
    productsCount: 8
  },

  "Mina Karmakar": {
    name: "Mina Karmakar",
    realName: "Mina Karmakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Mina",
    location: "Santiniketan, West Bengal",
    state: "West Bengal",
    rating: "4.6",
    experience: "20+ years",
    about: "Mina Karmakar specializes in Kantha wall hangings featuring traditional Bengali motifs and contemporary designs. Her work bridges traditional craft with modern home decor.",
    mastery: ["Kantha Embroidery", "Wall Art", "Contemporary Design"],
    famousWorks: [
      { name: "Modern Kantha Series", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Hanging" }
    ],
    productsCount: 7
  },

  "Bikash Karmakar": {
    name: "Bikash Karmakar",
    realName: "Bikash Karmakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Bikash",
    location: "Dariapur, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "28+ years",
    about: "Bikash Karmakar is a renowned Dokra metal casting artist who has revitalized this 4000-year-old craft. Using the lost-wax casting technique, he creates intricate brass and bronze sculptures depicting tribal life, mythology, and nature. He received the National Award for Master Craftsperson.",
    mastery: ["Dokra Metal Casting", "Lost-Wax Technique", "Tribal Art", "Bronze Sculpture"],
    famousWorks: [
      { name: "Dancing Tribal Girl", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Dancing" },
      { name: "Musician Series", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Musician" }
    ],
    productsCount: 15
  },

  "Rajesh Karmakar": {
    name: "Rajesh Karmakar",
    realName: "Rajesh Karmakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Rajesh+K",
    location: "Bikna, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "24+ years",
    about: "Rajesh Karmakar creates Dokra sculptures depicting tribal musicians and dancers. His work preserves the cultural heritage of India's indigenous communities through metal art.",
    mastery: ["Dokra Casting", "Tribal Art", "Cultural Documentation"],
    famousWorks: [
      { name: "Tribal Musician", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Musician" }
    ],
    productsCount: 10
  },

  "Soumen Karmakar": {
    name: "Soumen Karmakar",
    realName: "Soumen Karmakar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Soumen",
    location: "Dariapur, West Bengal",
    state: "West Bengal",
    rating: "4.5",
    experience: "19+ years",
    about: "Soumen Karmakar specializes in functional Dokra pieces including lamps, candle holders, and decorative items. His work combines traditional techniques with contemporary utility.",
    mastery: ["Dokra Casting", "Functional Art", "Home Decor"],
    famousWorks: [
      { name: "Owl Lamp", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Owl+Lamp" }
    ],
    productsCount: 8
  },

  "Sudarshan Sutradhar": {
    name: "Sudarshan Sutradhar",
    realName: "Sudarshan Sutradhar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Sudarshan",
    location: "Purulia, West Bengal",
    state: "West Bengal",
    rating: "4.8",
    experience: "32+ years",
    about: "Sudarshan Sutradhar is a master Chhau mask maker from Purulia. His masks are used in traditional Chhau dance performances and are known for their dramatic expressions and vibrant colors.",
    mastery: ["Mask Making", "Chhau Art", "Performance Art"],
    famousWorks: [
      { name: "Mahisasura Mask", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Mahisasura" }
    ],
    productsCount: 12
  },

  "Jadu Sutradhar": {
    name: "Jadu Sutradhar",
    realName: "Jadu Sutradhar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Jadu",
    location: "Charida, West Bengal",
    state: "West Bengal",
    rating: "4.7",
    experience: "26+ years",
    about: "Jadu Sutradhar creates deity masks for Chhau dance, specializing in representations of Hindu gods and goddesses. His Ganesha masks are particularly famous for their benevolent expressions.",
    mastery: ["Mask Making", "Religious Art", "Chhau Dance"],
    famousWorks: [
      { name: "Ganesha Mask", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Ganesha+Mask" }
    ],
    productsCount: 9
  },

  "Ram Sutradhar": {
    name: "Ram Sutradhar",
    realName: "Ram Sutradhar",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Ram",
    location: "Purulia, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "35+ years",
    about: "Ram Sutradhar is renowned for creating demon and villain masks for Chhau performances. His Ravana mask is considered one of the finest examples of the art form, capturing both terror and majesty.",
    mastery: ["Mask Making", "Character Art", "Traditional Craft"],
    famousWorks: [
      { name: "Ravana Mask", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Ravana" }
    ],
    productsCount: 11
  },

  "Shree Lal Joshi": {
    name: "Shree Lal Joshi",
    realName: "Shree Lal Joshi",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Shree+Lal",
    location: "Shahpura, Rajasthan",
    state: "Rajasthan",
    rating: "5.0",
    experience: "50+ years",
    about: "Shree Lal Joshi is a legendary Phad painting artist whose family has been creating these epic scrolls for over 300 years. Phad paintings are used by Bhopa priest-singers to narrate the heroic deeds of folk deities. He received the Padma Shri in 2021.",
    mastery: ["Phad Painting", "Epic Narratives", "Vegetable Colors", "Gold Work"],
    famousWorks: [
      { name: "Pabuji ki Phad", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Pabuji" }
    ],
    productsCount: 5
  },

  "KM Singh": {
    name: "KM Singh",
    realName: "KM Singh",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=KM+Singh",
    location: "Nathdwara, Rajasthan",
    state: "Rajasthan",
    rating: "4.9",
    experience: "40+ years",
    about: "KM Singh is a master Pichwai painter specializing in devotional paintings of Lord Krishna. His work adorns temple walls and private collections worldwide, known for intricate detailing and use of gold leaf.",
    mastery: ["Pichwai Painting", "Religious Art", "Gold Leaf Work"],
    famousWorks: [
      { name: "Krishna with Gopis", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Pichwai" }
    ],
    productsCount: 8
  },

  "Kripal Singh": {
    name: "Kripal Singh",
    realName: "Kripal Singh",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Kripal",
    location: "Jaipur, Rajasthan",
    state: "Rajasthan",
    rating: "4.7",
    experience: "38+ years",
    about: "Kripal Singh is a celebrated blue pottery artist from Jaipur. He has modernized this Persian-origin craft while maintaining traditional techniques, creating functional and decorative pieces with distinctive turquoise glaze.",
    mastery: ["Blue Pottery", "Ceramic Art", "Traditional Glazing"],
    famousWorks: [
      { name: "Blue Pottery Vase Collection", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Pottery" }
    ],
    productsCount: 15
  },

  "Abdul Gafur": {
    name: "Abdul Gafur",
    realName: "Abdul Gafur",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Abdul",
    location: "Bhuj, Rajasthan",
    state: "Rajasthan",
    rating: "4.6",
    experience: "30+ years",
    about: "Abdul Gafur is a master Bandhani (tie-dye) artist from Gujarat. His intricate patterns and vibrant color combinations make his work highly sought after for weddings and festivals.",
    mastery: ["Bandhani", "Tie-Dye", "Textile Art"],
    famousWorks: [
      { name: "Wedding Bandhani Collection", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Bandhani" }
    ],
    productsCount: 12
  },

  "Sita Devi": {
    name: "Sita Devi",
    realName: "Sita Devi (1914-2005)",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Sita+Devi",
    location: "Madhubani, Bihar",
    state: "Bihar",
    rating: "5.0",
    experience: "60+ years (legacy)",
    about: "Sita Devi was a pioneering Madhubani artist who brought this ancient art form from the walls of homes to paper and canvas. She received the Padma Shri in 1981 and her legacy continues through her students and family members.",
    mastery: ["Madhubani Painting", "Bharni Style", "Mythological Themes", "Natural Dyes"],
    famousWorks: [
      { name: "Radha Krishna", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Radha+Krishna" }
    ],
    productsCount: 8
  },

  "Ganga Devi": {
    name: "Ganga Devi",
    realName: "Ganga Devi",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Ganga",
    location: "Ranti, Bihar",
    state: "Bihar",
    rating: "4.8",
    experience: "35+ years",
    about: "Ganga Devi is celebrated for her vibrant Madhubani paintings featuring fish motifs and aquatic themes. Her work represents the Bharni style with bold colors and filled forms.",
    mastery: ["Madhubani Painting", "Fish Motifs", "Bharni Style"],
    famousWorks: [
      { name: "Fish Motif Series", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Fish" }
    ],
    productsCount: 10
  },

  "Baua Devi": {
    name: "Baua Devi",
    realName: "Baua Devi",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Baua",
    location: "Jitwarpur, Bihar",
    state: "Bihar",
    rating: "4.9",
    experience: "32+ years",
    about: "Baua Devi is known for her Katchni style Madhubani paintings with fine line work and cross-hatching. Her sun and moon motifs are internationally recognized symbols of cosmic balance.",
    mastery: ["Madhubani Painting", "Katchni Style", "Celestial Themes"],
    famousWorks: [
      { name: "Sun Moon Balance", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Sun+Moon" }
    ],
    productsCount: 9
  },

  "Jivya Soma Mashe": {
    name: "Jivya Soma Mashe",
    realName: "Jivya Soma Mashe (1934-2018)",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Jivya",
    location: "Thane, Maharashtra",
    state: "Maharashtra",
    rating: "5.0",
    experience: "55+ years (legacy)",
    about: "Jivya Soma Mashe was the artist who brought Warli art from tribal huts to international art scene. He received the Padma Shri in 2011 and his art is displayed in museums worldwide.",
    mastery: ["Warli Painting", "Tribal Art", "Geometric Patterns", "Rice Paste Medium"],
    famousWorks: [
      { name: "Tarpa Dance", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Tarpa" }
    ],
    productsCount: 12
  },

  "Balu Mashe": {
    name: "Balu Mashe",
    realName: "Balu Mashe",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Balu",
    location: "Ganjad, Maharashtra",
    state: "Maharashtra",
    rating: "4.8",
    experience: "28+ years",
    about: "Balu Mashe continues his family's Warli tradition, focusing on agricultural scenes and rural life. His work documents the changing landscape of tribal communities in Maharashtra.",
    mastery: ["Warli Painting", "Agricultural Themes", "Rural Documentation"],
    famousWorks: [
      { name: "Farming Scenes", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Farming" }
    ],
    productsCount: 10
  },

  "Raghunath Mohapatra": {
    name: "Raghunath Mohapatra",
    realName: "Raghunath Mohapatra",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Raghunath",
    location: "Puri, Odisha",
    state: "Odisha",
    rating: "4.9",
    experience: "45+ years",
    about: "Raghunath Mohapatra is a master Pattachitra artist specializing in Jagannath temple traditions. His work preserves the sacred iconography of Lord Jagannath with traditional natural colors.",
    mastery: ["Pattachitra", "Temple Art", "Jagannath Iconography"],
    famousWorks: [
      { name: "Jagannath Trinity", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Jagannath" }
    ],
    productsCount: 15
  },

  "Apanna Mahapatra": {
    name: "Apanna Mahapatra",
    realName: "Apanna Mahapatra",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Apanna",
    location: "Raghurajpur, Odisha",
    state: "Odisha",
    rating: "5.0",
    experience: "40+ years",
    about: "Apanna Mahapatra creates elaborate Dasavatara Pattachitra depicting the ten incarnations of Lord Vishnu. His sequential narrative panels are masterpieces of traditional Odia art.",
    mastery: ["Pattachitra", "Dasavatara", "Narrative Art"],
    famousWorks: [
      { name: "Complete Dasavatara", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Dasavatara" }
    ],
    productsCount: 8
  },

  // Continue with more artists to reach 200...
  // Adding remaining artists with generic template

  "Bishnupur Weavers": {
    name: "Bishnupur Weavers",
    realName: "Bishnupur Weavers Collective",
    photo: "https://via.placeholder.com/180x180/A1887F/FFF?text=Bishnupur",
    location: "Bishnupur, West Bengal",
    state: "West Bengal",
    rating: "4.9",
    experience: "300+ years (collective)",
    about: "The Bishnupur Weavers are a collective of master artisans specializing in Baluchari sarees with intricate mythological motifs woven in silk.",
    mastery: ["Baluchari Weaving", "Silk Sarees", "Mythological Motifs"],
    famousWorks: [
      { name: "Red Baluchari Saree", image: "https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Red+Saree" }
    ],
    productsCount: 20
  }
};

// Generate remaining artists to reach 200 total
const remainingArtists = generateRemainingArtists(165); // 35 detailed + 165 generated = 200
Object.assign(artists, remainingArtists);

function generateRemainingArtists(count) {
  const artistsObj = {};
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
    const artistName = `Artist ${i + 36}`;
    
    artistsObj[artistName] = {
      name: artistName,
      realName: `${artistName} (Full Name)`,
      photo: `https://via.placeholder.com/180x180/A1887F/FFF?text=Artist+${i+36}`,
      location: `${city}, ${state}`,
      state: state,
      rating: (4.0 + Math.random()).toFixed(1),
      experience: `${Math.floor(15 + Math.random() * 30)}+ years`,
      about: `${artistName} is a dedicated artisan from ${city}, ${state}, specializing in traditional ${artForms[i % artForms.length]}. With over ${Math.floor(15 + Math.random() * 30)} years of experience, they have mastered intricate techniques passed down through generations. Their work reflects the rich cultural heritage of ${state} and has been exhibited in various national and regional exhibitions.`,
      mastery: [artForms[i % artForms.length], "Traditional Techniques", "Natural Materials"],
      famousWorks: [
        { name: `Masterpiece ${i*2+1}`, image: `https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Work+${i*2+1}` },
        { name: `Masterpiece ${i*2+2}`, image: `https://via.placeholder.com/200x150/FFF4DC/5D4037?text=Work+${i*2+2}` }
      ],
      productsCount: Math.floor(3 + Math.random() * 12)
    };
  }
  
  return artistsObj;
}

console.log("Artists database loaded:", Object.keys(artists).length, "artists");

// ========== PRODUCTS DATABASE ==========
const products = [
  { id: 1, name: "Kalighat Goddess Kali", artist: "Jamini Roy", state: "West Bengal", location: "Kolkata", price: 8500, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Kali" },
  { id: 2, name: "Kalighat Cat with Fish", artist: "Kalam Patua", state: "West Bengal", location: "Kolkata", price: 4200, rating: "4.6", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Cat" },
  { id: 3, name: "Kalighat Dancing Woman", artist: "Niranjan Chitrakar", state: "West Bengal", location: "Kolkata", price: 5500, rating: "4.7", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Dance" },
  { id: 4, name: "Kalighat Hanuman", artist: "Swarna Chitrakar", state: "West Bengal", location: "Kolkata", price: 6200, rating: "4.9", category: "Divine Supplies", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Hanuman" },
  { id: 5, name: "Kalighat Courtesan", artist: "Manisha Chitrakar", state: "West Bengal", location: "Kolkata", price: 7800, rating: "4.5", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Courtesan" },
  { id: 6, name: "Kalighat Krishna Leela", artist: "Gurupada Chitrakar", state: "West Bengal", location: "Kolkata", price: 9200, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Krishna" },
  { id: 7, name: "Kalighat Tiger", artist: "Bapi Chitrakar", state: "West Bengal", location: "Kolkata", price: 5800, rating: "4.6", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Tiger" },
  { id: 8, name: "Kalighat Durga", artist: "Monimala Chitrakar", state: "West Bengal", location: "Kolkata", price: 8900, rating: "4.8", category: "Divine Supplies", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Durga" },
  { id: 9, name: "Patachitra Ramayana Scroll", artist: "Dukhushyam Chitrakar", state: "West Bengal", location: "Pingla", price: 12000, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Ramayana" },
  { id: 10, name: "Patachitra Village Life", artist: "Manu Chitrakar", state: "West Bengal", location: "Pingla", price: 9500, rating: "4.7", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Village" },
  { id: 11, name: "Patachitra Tree of Life", artist: "Rani Chitrakar", state: "West Bengal", location: "Naya", price: 11000, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Tree" },
  { id: 12, name: "Bankura Horse Large", artist: "Rajesh Kumar Pal", state: "West Bengal", location: "Bankura", price: 3500, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Horse" },
  { id: 13, name: "Terracotta Durga Idol", artist: "Subhas Pal", state: "West Bengal", location: "Kumartuli", price: 5500, rating: "4.7", category: "Divine Supplies", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Durga+Idol" },
  { id: 14, name: "Terracotta Owl", artist: "Nayan Pal", state: "West Bengal", location: "Bankura", price: 1800, rating: "4.5", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Owl" },
  { id: 15, name: "Terracotta Elephant", artist: "Arup Pal", state: "West Bengal", location: "Bankura", price: 2200, rating: "4.6", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Elephant" },
  { id: 16, name: "Terracotta Wall Panel", artist: "Gopal Pal", state: "West Bengal", location: "Bankura", price: 6800, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Wall+Panel" },
  { id: 17, name: "Kantha Quilt Floral", artist: "Rekha Devi", state: "West Bengal", location: "Birbhum", price: 4500, rating: "4.7", category: "Home & Furniture", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Quilt" },
  { id: 18, name: "Kantha Saree Traditional", artist: "Anjali Das", state: "West Bengal", location: "Bolpur", price: 7200, rating: "4.9", category: "Clothes", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Saree" },
  { id: 19, name: "Kantha Wall Hanging", artist: "Mina Karmakar", state: "West Bengal", location: "Santiniketan", price: 3800, rating: "4.6", category: "Home & Furniture", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Hanging" },
  { id: 20, name: "Dokra Dancing Girl", artist: "Bikash Karmakar", state: "West Bengal", location: "Dariapur", price: 5500, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Dokra" },
  { id: 21, name: "Dokra Tribal Musician", artist: "Rajesh Karmakar", state: "West Bengal", location: "Bikna", price: 4800, rating: "4.7", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Musician" },
  { id: 22, name: "Dokra Owl Lamp", artist: "Soumen Karmakar", state: "West Bengal", location: "Dariapur", price: 3200, rating: "4.5", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Owl+Lamp" },
  { id: 23, name: "Chhau Mask Mahisasura", artist: "Sudarshan Sutradhar", state: "West Bengal", location: "Purulia", price: 3500, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Mask" },
  { id: 24, name: "Chhau Mask Ganesha", artist: "Jadu Sutradhar", state: "West Bengal", location: "Charida", price: 2800, rating: "4.7", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Ganesha+Mask" },
  { id: 25, name: "Chhau Mask Ravana", artist: "Ram Sutradhar", state: "West Bengal", location: "Purulia", price: 4200, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Ravana" },
  { id: 26, name: "Baluchari Saree Red", artist: "Bishnupur Weavers", state: "West Bengal", location: "Bishnupur", price: 18000, rating: "4.9", category: "Clothes", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Red+Saree" },
  { id: 27, name: "Phad Painting Pabuji", artist: "Shree Lal Joshi", state: "Rajasthan", location: "Shahpura", price: 18000, rating: "5.0", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Phad" },
  { id: 28, name: "Pichwai Krishna", artist: "KM Singh", state: "Rajasthan", location: "Nathdwara", price: 25000, rating: "4.9", category: "Divine Supplies", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Pichwai" },
  { id: 29, name: "Blue Pottery Vase", artist: "Kripal Singh", state: "Rajasthan", location: "Jaipur", price: 3500, rating: "4.7", category: "Home & Furniture", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Pottery" },
  { id: 30, name: "Bandhani Dupatta", artist: "Abdul Gafur", state: "Rajasthan", location: "Bhuj", price: 2800, rating: "4.6", category: "Clothes", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Bandhani" },
  { id: 31, name: "Madhubani Radha Krishna", artist: "Sita Devi", state: "Bihar", location: "Madhubani", price: 12000, rating: "5.0", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Madhubani" },
  { id: 32, name: "Madhubani Fish Motif", artist: "Ganga Devi", state: "Bihar", location: "Ranti", price: 8500, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Fish" },
  { id: 33, name: "Madhubani Sun Moon", artist: "Baua Devi", state: "Bihar", location: "Jitwarpur", price: 9200, rating: "4.9", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Sun+Moon" },
  { id: 34, name: "Warli Tarpa Dance", artist: "Jivya Soma Mashe", state: "Maharashtra", location: "Thane", price: 11000, rating: "5.0", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Warli" },
  { id: 35, name: "Warli Farming Scene", artist: "Balu Mashe", state: "Maharashtra", location: "Ganjad", price: 8500, rating: "4.8", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Farming" },
  { id: 36, name: "Pattachitra Jagannath", artist: "Raghunath Mohapatra", state: "Odisha", location: "Puri", price: 10000, rating: "4.9", category: "Divine Supplies", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Jagannath" },
  { id: 37, name: "Pattachitra Dasavatara", artist: "Apanna Mahapatra", state: "Odisha", location: "Raghurajpur", price: 14000, rating: "5.0", category: "Decor", image: "https://via.placeholder.com/220x140/FFF4DC/5D4037?text=Dasavatara" }
];

// ========== GET ARTIST FROM URL ==========
function getArtistFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  if (productId) {
    const product = products.find(p => p.id == productId);
    if (product && product.artist) {
      console.log("Found artist from product ID:", product.artist);
      return product.artist;
    }
  }
  
  const artistParam = urlParams.get('artist');
  console.log("Artist from URL parameter:", artistParam);
  return artistParam;
}

// ========== RENDER ARTIST PROFILE ==========
function renderArtistProfile(artistName) {
  console.log("Rendering profile for:", artistName);
  console.log("Artist exists:", !!artists[artistName]);
  
  const artist = artists[artistName];
  
  if (!artist) {
    document.querySelector('.artist-profile-card').innerHTML = `
      <p style="text-align:center; color:#7a542c; padding:40px;">
        Artist profile "${artistName}" not found. 
        <br><br>
        <a href="artist-info.html" style="color:#A1887F; font-weight:bold;">Browse all artists</a>
      </p>
    `;
    return;
  }
  
  // Basic Info
  document.getElementById('artist-photo').src = artist.photo;
  document.getElementById('artist-name').textContent = artist.name;
  document.getElementById('artist-location').textContent = `📍 ${artist.location}`;
  document.getElementById('artist-rating').textContent = `⭐ ${artist.rating} / 5.0`;
  document.getElementById('artist-experience').textContent = `📅 ${artist.experience}`;
  document.getElementById('artist-products-count').textContent = `🎨 ${artist.productsCount} Products`;
  
  // About
  document.getElementById('artist-about').textContent = artist.about;
  
  // Mastery
  const masteryContainer = document.getElementById('artist-mastery');
  masteryContainer.innerHTML = artist.mastery.map(skill => 
    `<span class="mastery-tag">${skill}</span>`
  ).join('');
  
  // Famous Artworks
  const famousContainer = document.getElementById('famous-artworks');
  famousContainer.innerHTML = artist.famousWorks.map(work => `
    <div class="famous-artwork-card">
      <img src="${work.image}" alt="${work.name}">
      <div class="artwork-name">${work.name}</div>
    </div>
  `).join('');
  
  // Artist's Products
  const artistProducts = products.filter(p => p.artist === artistName);
  console.log("Found", artistProducts.length, "products for this artist");
  
  const topProducts = artistProducts.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 3);
  
  renderProducts(topProducts, 'top-products');
  renderProducts(artistProducts, 'all-products');
}

// ========== RENDER PRODUCTS ==========
function renderProducts(productsList, containerId) {
  const container = document.getElementById(containerId);
  
  if (productsList.length === 0) {
    container.innerHTML = '<p style="color:#7a542c;">No products available.</p>';
    return;
  }
  
  container.innerHTML = productsList.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-name">${product.name}</div>
      <div class="product-price">₹${product.price.toLocaleString()}</div>
      <div class="product-rating">⭐ ${product.rating} / 5.0</div>
      <button class="view-product-btn" onclick="window.location.href='products.html?search=${encodeURIComponent(product.name)}'">View Product</button>
    </div>
  `).join('');
}

// ========== PAGE LOAD ==========
window.addEventListener('DOMContentLoaded', () => {
  console.log("Page loaded");
  const artistName = getArtistFromURL();
  console.log("Artist name to load:", artistName);
  
  if (artistName) {
    renderArtistProfile(artistName);
  } else {
    document.querySelector('.artist-profile-card').innerHTML = `
      <p style="text-align:center; color:#7a542c; padding:40px;">
        No artist specified. 
        <br><br>
        <a href="artist-info.html" style="color:#A1887F; font-weight:bold;">Browse all artists</a>
      </p>
    `;
  }
});
