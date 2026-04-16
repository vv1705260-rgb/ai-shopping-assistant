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
