const featuredProducts = [
  {
    name: "Ceramic Vase",
    img: "https://images.unsplash.com/photo-1512238701577-f182d9ef8af7?auto=format&fit=crop&w=200&q=80",
    rating: 5.0
  },
  {
    name: "Hand-painted Pot",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80",
    rating: 4.0
  },
  {
    name: "Block Print Scarf",
    img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=200&q=80",
    rating: 5.0
  }
];

// Dynamically inject featured products
const grid = document.getElementById("gallery-grid");
featuredProducts.forEach(product => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.innerHTML = `
    <img src="${product.img}" alt="${product.name}" />
    <div class="item-name">${product.name}</div>
    <div class="item-rating">${'⭐'.repeat(Math.round(product.rating))} (${product.rating.toFixed(1)})</div>
  `;
  grid.appendChild(item);
});

// Example: You can further customize by fetching artist details via API or using template placeholders.
