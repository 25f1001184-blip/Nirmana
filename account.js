// Get role selectors and sections
const buyerBtn = document.getElementById('buyer-btn');
const sellerBtn = document.getElementById('seller-btn');
const buyerSection = document.querySelector('.buyer-form-section');
const sellerSection = document.querySelector('.seller-form-section');
const roleSection = document.querySelector('.account-role');
const buyerBackBtn = document.getElementById('buyer-back-btn');
const sellerBackBtn = document.getElementById('seller-back-btn');

// Role selection logic
buyerBtn.onclick = () => {
  roleSection.style.display = 'none';
  buyerSection.style.display = 'block';
  sellerSection.style.display = 'none';
};
sellerBtn.onclick = () => {
  roleSection.style.display = 'none';
  buyerSection.style.display = 'none';
  sellerSection.style.display = 'block';
};

// Back buttons logic
buyerBackBtn.onclick = () => {
  roleSection.style.display = 'block';
  buyerSection.style.display = 'none';
};
sellerBackBtn.onclick = () => {
  roleSection.style.display = 'block';
  sellerSection.style.display = 'none';
};

// Buyer form save
const buyerForm = document.getElementById('buyer-form');
const buyerSummary = document.getElementById('buyer-summary');
buyerForm && buyerForm.addEventListener('submit', function(e){
  e.preventDefault();
  const bname = buyerForm.bname.value;
  const bemail = buyerForm.bemail.value;
  const bphone = buyerForm.bphone.value;
  const baddress = buyerForm.baddress.value;
  const blocation = buyerForm.blocation.value;

  buyerSummary.innerHTML = `
    <div><strong>Name:</strong> ${bname}</div>
    <div><strong>Email:</strong> ${bemail}</div>
    <div><strong>Phone:</strong> ${bphone}</div>
    <div><strong>Delivery Address:</strong> ${baddress}</div>
    <div><strong>Location:</strong> ${blocation}</div>
    <div style="margin-top:12px; color:#A1887F;">Details saved!</div>
  `;
  buyerForm.reset();
});

// Seller info save
const sellerForm = document.getElementById('seller-form');
sellerForm && sellerForm.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Seller details saved!');
  sellerForm.reset();
});

// Artwork uploader for seller
const artworkForm = document.getElementById('add-artwork-form');
const artworkList = document.getElementById('artwork-list');
artworkForm && artworkForm.addEventListener('submit', function(e){
  e.preventDefault();
  const aname = artworkForm.aname.value;
  const aprice = artworkForm.aprice.value;
  const aimageInput = artworkForm.aimage;

  let imgUrl = '';
  if (aimageInput.files && aimageInput.files[0]) {
    imgUrl = URL.createObjectURL(aimageInput.files[0]);
  }

  const card = document.createElement('div');
  card.className = 'artwork-card';

  const img = document.createElement('img');
  img.src = imgUrl || 'default-artwork.png';
  img.alt = aname;

  const nameDiv = document.createElement('div');
  nameDiv.className = 'artwork-name';
  nameDiv.textContent = aname;

  const priceDiv = document.createElement('div');
  priceDiv.className = 'artwork-price';
  priceDiv.textContent = `₹${aprice}`;

  card.appendChild(img);
  card.appendChild(nameDiv);
  card.appendChild(priceDiv);

  artworkList.appendChild(card);
  artworkForm.reset();
});
