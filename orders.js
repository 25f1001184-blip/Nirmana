// Role selection toggle
const buyerBtn = document.getElementById('buyer-btn');
const sellerBtn = document.getElementById('seller-btn');
const buyerOrders = document.querySelector('.buyer-orders');
const sellerOrders = document.querySelector('.seller-orders');
const roleSection = document.querySelector('.order-role');
const buyerBackBtn = document.getElementById('buyer-back-btn');
const sellerBackBtn = document.getElementById('seller-back-btn');

// Dummy orders for demo (replace with backend for real use)
const buyerUpcoming = [
  { name: "Handwoven Cotton Scarf", status: "Arriving soon", date: "Nov 30, 2025" },
  { name: "Ceramic Vase", status: "Shipped", date: "Nov 29, 2025" }
];
const buyerPast = [
  { name: "Clay Diyas Set", status: "Delivered", date: "Oct 17, 2025" }
];
const sellerUpcoming = [
  { name: "Kalamkari Canvas", status: "Order Received", date: "Dec 1, 2025", price: 899 },
  { name: "Thread Bracelet", status: "Order Processing", date: "Nov 28, 2025", price: 199 }
];
const sellerPast = [
  { name: "Stone Pendant", status: "Delivered", date: "Nov 11, 2025", price: 499 },
  { name: "Decor Lamp", status: "Delivered", date: "Nov 8, 2025", price: 799 }
];

buyerBtn.onclick = () => {
  roleSection.style.display = 'none';
  buyerOrders.style.display = 'block';
  sellerOrders.style.display = 'none';
  populateOrders("buyer-upcoming-orders", buyerUpcoming);
  populateOrders("buyer-past-orders", buyerPast);
};
sellerBtn.onclick = () => {
  roleSection.style.display = 'none';
  buyerOrders.style.display = 'none';
  sellerOrders.style.display = 'block';
  populateOrders("seller-upcoming-orders", sellerUpcoming, true);
  populateOrders("seller-past-orders", sellerPast, true);
  updateGrossEarning();
};

buyerBackBtn.onclick = () => {
  roleSection.style.display = 'block';
  buyerOrders.style.display = 'none';
};
sellerBackBtn.onclick = () => {
  roleSection.style.display = 'block';
  sellerOrders.style.display = 'none';
};

function populateOrders(id, orders, isSeller = false) {
  const container = document.getElementById(id);
  container.innerHTML = "";
  orders.forEach(order => {
    const card = document.createElement('div');
    card.className = 'order-card';
    card.innerHTML = `
      <div class="order-item-name">${order.name}</div>
      <div class="order-date">Date: ${order.date}</div>
      <div class="order-item-status">${order.status}</div>
      ${isSeller && order.price ? `<div class="order-item-price">Price: ₹${order.price}</div>` : ""}
    `;
    container.appendChild(card);
  });
}

function updateGrossEarning() {
  const grossVal = sellerPast.reduce((sum, order) => sum + (order.price || 0), 0);
  document.getElementById('gross-earning').textContent = `₹${grossVal}`;
}
