const container = document.getElementById("products");

products.forEach((item, index) => {
  const div = document.createElement("div");

  div.innerHTML = `
    <img src="${item.image}" width="150">
    <h3>${item.name}</h3>
    <p>₹${item.finalPrice}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;

  container.appendChild(div);
});

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
container.innerHTMLconst container = document.getElementById("products");

products.forEach((item, index) => {
  const div = document.createElement("div");

  div.innerHTML = `
    <img src="${item.image}" width="150">
    <h3>${item.name}</h3>
    <p>₹${item.finalPrice}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;

  container.appendChild(div);
});

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products');

    data.forEach(product => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button>Add to Cart</button>
      `;
      container.appendChild(div);
    });
  });
const container = document.getElementById("products");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  container.innerHTML = "";

  products.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${item.image}" onclick="zoomImage('${item.image}')">
      <h3>${item.name}</h3>
      <p><del>₹${item.originalPrice}</del> ₹${item.finalPrice}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.finalPrice;

    const div = document.createElement("div");
    div.innerHTML = `<p>${item.name} - ₹${item.finalPrice}</p>`;
    cartItems.appendChild(div);
  });

  document.getElementById("total").innerText = total;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

/* 🔍 Image Zoom */
function zoomImage(src) {
  const img = document.createElement("img");
  img.src = src;
  img.style.position = "fixed";
  img.style.top = "50%";
  img.style.left = "50%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.width = "300px";
  img.style.zIndex = "1000";

  img.onclick = () => img.remove();

  document.body.appendChild(img);
}

displayProducts();
updateCart();
function goToCheckout() {
  window.location.href = "checkout.html";
}
<div class="stars"></div>
products.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.style.animationDelay = `${index * 0.2}s`; // 👈 smooth stagger

  div.innerHTML = `
    <img src="${item.image}" onclick="zoomImage('${item.image}')">
    <h3>${item.name}</h3>
    <p><del>₹${item.originalPrice}</del> ₹${item.finalPrice}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;

  container.appendChild(div);
});
function orderOnWhatsApp() {
  let message = "🛍️ *Shree Collection Order* %0A%0A";

  let total = 0;

  cart.forEach((item, index) => {
    message += `👉 ${item.name} - ₹${item.finalPrice} %0A`;
    total += item.finalPrice;
  });

  message += `%0A💰 *Total:* ₹${total}`;
  message += `%0A🔥 Special Offer Applied!`;
  message += `%0A📦 Please confirm my order`;

  let phoneNumber = "919845606417"; // 👉 your number

  let url = `https://wa.me/${9845606417}?text=${confirm your orders}`;

  window.open(url, "_blank");
}
message += `%0A🎉 *Limited Time Offer!*`;
message += `%0A⚡ Low Price – Hurry Up!`;
message += `%0A💖 Exclusive from Shree Collection`;let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(index) {
  wishlist.push(products[index]);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  alert("❤️ Added to Wishlist!");
}
<h4 style="color:red;">🔥 20% OFF</h4>
  <h4 style="color:red;">🔥 Save ₹${item.profit}</h4>
div.innerHTML = `
  <span class="badge">🔥 Best Price</span>

  <img src="${item.image}" onclick="zoomImage('${item.image}')">

  <h3>${item.name}</h3>

  <p>
    <span class="old-price">₹${item.originalPrice}</span><br>
    <span class="price">₹${item.finalPrice}</span>
  </p>

  <p style="color:green;">💸 Save ₹${item.profit}</p>

  <button onclick="addToCart(${index})">🛒 Add to Cart</button>
  <button onclick="addToWishlist(${index})">❤️ Wishlist</button>
`;
message += `%0A🔥 *Best Price Deal Just for You!*`;
message += `%0A💸 Lower than market price`;
message += `%0A⚡ Limited stock available`;
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showWishlist() {
  alert("Wishlist feature coming soon ❤️");
}
