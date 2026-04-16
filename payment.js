let method = "";

function selectMethod(type) {
  method = type;

  const form = document.getElementById("payment-form");

  if (type === "UPI") {
    form.innerHTML = `
      <input type="text" placeholder="Enter UPI ID">
    `;
  } else {
    form.innerHTML = `
      <input type="text" placeholder="Card Number">
      <input type="text" placeholder="Expiry Date">
      <input type="text" placeholder="CVV">
    `;
  }
}

function payNow() {
  if (!method) {
    alert("Please select payment method");
    return;
  }

  alert("Processing Payment...");

  setTimeout(() => {
    localStorage.removeItem("cart");
    window.location.href = "success.html";
  }, 1500);
}
