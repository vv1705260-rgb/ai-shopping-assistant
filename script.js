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
