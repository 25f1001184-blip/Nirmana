console.log("Help page loading...");

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
  'products-btn': 'products.html'
};

Object.keys(menuButtons).forEach(btnId => {
  const btn = document.getElementById(btnId);
  if (btn) {
    btn.onclick = () => window.location.href = menuButtons[btnId];
  }
});

// ========== FAQ DATABASE ==========
const faqs = [
  // Orders & Shipping
  {
    category: "orders",
    question: "How do I track my order?",
    answer: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can also track your order by going to Orders page from the menu and clicking on 'Track Order' next to your purchase."
  },
  {
    category: "orders",
    question: "What are the delivery timelines?",
    answer: "Standard delivery takes 5-7 business days for metro cities and 7-10 business days for other locations. Express delivery (2-3 days) is available for select products at an additional cost."
  },
  {
    category: "orders",
    question: "Can I cancel my order?",
    answer: "Yes, you can cancel your order within 24 hours of placing it. Go to Orders page, select the order, and click 'Cancel Order'. If the order has already been shipped, you'll need to initiate a return once you receive it."
  },
  {
    category: "orders",
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within India. However, we're working on expanding our services internationally. Subscribe to our newsletter to stay updated!"
  },
  
  // Payments & Refunds
  {
    category: "payments",
    question: "What payment methods do you accept?",
    answer: "We accept Credit/Debit Cards, Net Banking, UPI, Wallets (Paytm, PhonePe, Google Pay), and Cash on Delivery (COD) for orders below ₹50,000."
  },
  {
    category: "payments",
    question: "Is it safe to use my card on NIRMANA?",
    answer: "Absolutely! We use industry-standard SSL encryption and secure payment gateways. Your card details are never stored on our servers and all transactions are PCI-DSS compliant."
  },
  {
    category: "payments",
    question: "How long does it take to receive a refund?",
    answer: "Refunds are processed within 5-7 business days after we receive and verify the returned product. The amount will be credited to your original payment method or NIRMANA Wallet, as per your preference."
  },
  {
    category: "payments",
    question: "Can I pay in installments?",
    answer: "Yes! We offer EMI options for orders above ₹10,000 through select credit cards and partners like ZestMoney and LazyPay. You can choose your preferred EMI plan during checkout."
  },
  
  // Account & Profile
  {
    category: "account",
    question: "How do I create an account?",
    answer: "Click on 'Account' from the menu and select 'Sign Up'. You can register using your email, phone number, or through Google/Facebook login. It only takes a minute!"
  },
  {
    category: "account",
    question: "I forgot my password. What should I do?",
    answer: "Click on 'Account' > 'Login' > 'Forgot Password'. Enter your registered email or phone number, and we'll send you a password reset link/OTP."
  },
  {
    category: "account",
    question: "Can I change my registered email/phone number?",
    answer: "Yes, go to Account > Profile Settings > Contact Information. Verify your identity through OTP and update your details."
  },
  {
    category: "account",
    question: "How do I delete my account?",
    answer: "We'd be sad to see you go! Go to Account > Settings > Delete Account. Note that this action is permanent and will erase all your data, order history, and wallet balance."
  },
  
  // Products & Artists
  {
    category: "products",
    question: "Are all products handmade and authentic?",
    answer: "Yes! Every product on NIRMANA is handcrafted by verified artisans. We work directly with 200+ artists across India to ensure authenticity and quality. Each product comes with a certificate of authenticity."
  },
  {
    category: "products",
    question: "Can I request a custom product from an artist?",
    answer: "Absolutely! Visit the artist's profile, click 'Contact Artist', and describe your requirements. The artist will get back to you with pricing and timeline. Custom orders typically take 2-4 weeks."
  },
  {
    category: "products",
    question: "How do I know if a product is in stock?",
    answer: "Product availability is shown on the product page. If a product is out of stock, you can click 'Notify Me' to receive an alert when it's back in stock."
  },
  {
    category: "products",
    question: "Do you offer gift wrapping?",
    answer: "Yes! We offer premium gift wrapping at ₹99 per item. You can select this option during checkout and even add a personalized message card."
  },
  {
    category: "products",
    question: "What if the product looks different from the images?",
    answer: "Since all our products are handmade, minor variations in color, pattern, and size are natural and add to their uniqueness. However, if you're unsatisfied, our 7-day return policy has you covered."
  },
  
  // Returns & Exchanges
  {
    category: "returns",
    question: "What is your return policy?",
    answer: "We offer a 7-day return policy from the date of delivery. Products must be unused, in original packaging with tags intact. Some categories like personalized items and custom orders are non-returnable."
  },
  {
    category: "returns",
    question: "How do I initiate a return?",
    answer: "Go to Orders > Select the order > Click 'Return Item' > Choose reason > Schedule pickup. Our courier partner will collect the product from your address at no extra cost."
  },
  {
    category: "returns",
    question: "Can I exchange a product?",
    answer: "Currently, we don't offer direct exchanges. Please return the original product for a refund and place a new order for the item you want. We're working on introducing exchange options soon!"
  },
  {
    category: "returns",
    question: "What if my product arrived damaged?",
    answer: "We're sorry to hear that! Please email us at support@nirmana.in with your order number and photos of the damaged product within 48 hours of delivery. We'll arrange a free replacement or full refund immediately."
  },
  {
    category: "returns",
    question: "Are there any return shipping charges?",
    answer: "No! For quality issues or incorrect items, return shipping is completely free. For change of mind returns, we deduct ₹99 from your refund amount to cover pickup costs."
  }
];

// ========== RENDER FAQs ==========
function renderFAQs(faqsToRender) {
  const container = document.getElementById('faq-container');
  container.innerHTML = '';
  
  if (faqsToRender.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#7a542c; padding:40px;">No FAQs found. Try different keywords.</p>';
    return;
  }
  
  faqsToRender.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
      <div class="faq-question">
        <span>${faq.question}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <span class="faq-category-tag">${getCategoryName(faq.category)}</span>
        <p>${faq.answer}</p>
      </div>
    `;
    
    // Toggle FAQ on click
    const question = faqItem.querySelector('.faq-question');
    question.addEventListener('click', () => {
      faqItem.classList.toggle('active');
    });
    
    container.appendChild(faqItem);
  });
}

// Get category display name
function getCategoryName(category) {
  const names = {
    orders: "Orders & Shipping",
    payments: "Payments & Refunds",
    account: "Account & Profile",
    products: "Products & Artists",
    returns: "Returns & Exchanges"
  };
  return names[category] || category;
}

// ========== FILTER BY CATEGORY ==========
function filterByCategory(category) {
  if (category === 'all') {
    renderFAQs(faqs);
  } else {
    const filtered = faqs.filter(faq => faq.category === category);
    renderFAQs(filtered);
  }
}

// Category button listeners
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    categoryButtons.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    // Filter FAQs
    const category = btn.getAttribute('data-category');
    filterByCategory(category);
  });
});

// ========== SEARCH FAQs ==========
function searchFAQs(keyword) {
  if (!keyword || keyword.trim() === '') {
    renderFAQs(faqs);
    return;
  }
  
  const searchTerm = keyword.toLowerCase().trim();
  const filtered = faqs.filter(faq => {
    return (
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm)
    );
  });
  
  renderFAQs(filtered);
}

// Search listeners
const searchInput = document.getElementById('faq-search');
const searchButton = document.getElementById('search-faq-btn');

searchButton.addEventListener('click', () => {
  searchFAQs(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchFAQs(searchInput.value);
  }
});

searchInput.addEventListener('input', (e) => {
  if (e.target.value === '') {
    renderFAQs(faqs);
  }
});

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };
  
  console.log("Form submitted:", formData);
  
  alert('Thank you for contacting us! We\'ll get back to you within 24 hours.');
  contactForm.reset();
});

// ========== LIVE CHAT ==========
function startLiveChat() {
  alert('Live chat feature coming soon! For immediate assistance, please call us at +91 1800-123-4567');
  // Future: Integrate with chat service like Intercom, Drift, or Crisp
}

window.startLiveChat = startLiveChat;

// ========== PAGE LOAD ==========
window.addEventListener('DOMContentLoaded', () => {
  console.log("Help page loaded");
  renderFAQs(faqs);
});
