
window.onload = function () {
  alert("Welcome to Quill & Co.!");
  setFooterYear();
};

function setFooterYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

function checkAvailability(spanId, status, button) {
  const statusEl = document.getElementById(spanId);
  statusEl.textContent = status;
  if (status === "In Stock") {
    statusEl.classList.add("in-stock");
  } else {
    statusEl.classList.add("out-stock");
  }

  button.style.display = "none";
}
let currentProduct = ""; 


function openOrderForm(productName) {
  currentProduct = productName;
  document.getElementById("orderModalTitle").textContent = "Order: " + productName;
  document.getElementById("orderModal").classList.add("open");
}

function closeOrderForm() {
  document.getElementById("orderModal").classList.remove("open");
  document.getElementById("orderForm").reset();
}


function submitOrder(event) {
  event.preventDefault(); 

  const name = document.getElementById("orderName").value.trim();
  const email = document.getElementById("orderEmail").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in your name and email to place the order.");
    return false;
  }

  alert(
    "Thanks, " + name + "! Your order for \"" + currentProduct +
    "\" has been placed. A confirmation will be sent to " + email + "."
  );

  closeOrderForm();
  return false;
}
function validateForm() {

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const name = nameField.value.trim();
  const email = emailField.value.trim();

  if (name === "" || email === "") {
    alert("Please fill in both your name and email before submitting.");
    return false; 
  }

  alert("Thanks, " + name + "! Your message has been received.");
  document.getElementById("contactForm").reset();
  return false; 
}
