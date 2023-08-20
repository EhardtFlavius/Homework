// Define the Product class
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Define the Cart class
function Cart() {
  this.products = [];
}

Cart.prototype.addProduct = function (product) {
  this.products.push(product);
};

Cart.prototype.getTotalPrice = function () {
  var totalPrice = 0;
  for (var i = 0; i < this.products.length; i++) {
    totalPrice += this.products[i].price;
  }
  return totalPrice;
};

// Create an instance of the Cart class
var cart = new Cart();

// Function to display the product image
function displayProduct(productId) {
  var productImage = document.getElementById("product" + productId + "Image");
  productImage.style.display = "block";
}

// Event listeners for the "VIEW" buttons
var viewButtons = document.querySelectorAll(".button-view");
viewButtons.forEach(function (viewButton) {
  viewButton.addEventListener("click", function () {
    var productId = this.getAttribute("data-product-id");
    displayProduct(parseInt(productId));
  });
});

// Event listeners for the "CART" buttons
var cartButtons = document.querySelectorAll(".button-cart");
cartButtons.forEach(function (cartButton) {
  cartButton.addEventListener("click", function () {
    var productName = this.getAttribute("data-product-name");
    var productPrice = parseFloat(this.getAttribute("data-product-price"));
    var product = new Product(productName, productPrice);
    cart.addProduct(product);
    updateCartItems();
    updateTotalPrice();
  });
});

// Update the cart items list
function updateCartItems() {
  var cartItemsList = document.getElementById("cartItems");
  cartItemsList.innerHTML = "";

  cart.products.forEach(function (product) {
    var listItem = document.createElement("li");
    listItem.textContent = product.name + " - €" + product.price.toFixed(2);
    cartItemsList.appendChild(listItem);
  });
}

// Update the total price
function updateTotalPrice() {
  var totalPriceElement = document.getElementById("totalPrice");
  var totalPrice = cart.getTotalPrice();
  totalPriceElement.textContent = "Total Price: €" + totalPrice.toFixed(2);
}

var modal = document.getElementById("myModal");
var closeButton = document.querySelector(".close");
var discountCodeInput = document.getElementById("discountCodeInput");
var applyDiscountButton = document.getElementById("applyDiscountButton");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// Event listeners for the modal
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
var totalPriceElement = document.getElementById("totalPrice");
// Event listener for the "Apply" button in the modal
applyDiscountButton.addEventListener("click", applyDiscount);

function applyDiscount() {
  var discountPercentage = parseFloat(discountCodeInput.value);
  if (discountPercentage >= 0 && discountPercentage <= 100) {
    var totalPrice = cart.getTotalPrice();
    var discountAmount = totalPrice * (discountPercentage / 100);
    var discountedPrice = totalPrice - discountAmount;
    totalPriceElement.textContent =
      "Total Price: €" + discountedPrice.toFixed(2);
    closeModal();
  } else {
    alert("Please enter a valid discount percentage (0-100).");
  }
}
