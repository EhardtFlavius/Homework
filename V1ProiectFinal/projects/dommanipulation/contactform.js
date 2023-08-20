var contactForm = document.getElementById("contact-form");
var firstNameSpan = document.getElementById("first-name");
var alertMessage = document.getElementById("alert-message");
var closeButton = document.getElementById("closeButton");
var confirmationBanner = document.getElementById("confirmation-banner");

closeButton.addEventListener("click", () => {
  confirmationBanner.style.display = "none";
  location.reload();
});
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var firstName = document.getElementById("firstname").value;

  firstNameSpan.textContent = firstName;

  var confirmationBanner = document.getElementById("confirmation-banner");
  confirmationBanner.classList.remove("hidden");

  var confirmationBanner = document.getElementById("confirmation-banner");
  confirmationBanner.classList.remove("hidden");

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  });
});
