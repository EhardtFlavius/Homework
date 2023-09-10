// JavaScript to handle modal interaction
const btnHome = document.getElementById("btnHome");
const modalHome = document.getElementById("modalHome");
const closeModalHome = modalHome.querySelector(".close");

btnHome.addEventListener("click", () => {
  modalHome.style.display = "block";
});

closeModalHome.addEventListener("click", () => {
  modalHome.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalHome) {
    modalHome.style.display = "none";
  }
});

const btnAbout = document.getElementById("btnAbout");
const modalAbout = document.getElementById("modalAbout");
const closeModalAbout = modalAbout.querySelector(".close");

btnAbout.addEventListener("click", () => {
  modalAbout.style.display = "block";
});

closeModalAbout.addEventListener("click", () => {
  modalAbout.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalAbout) {
    modalAbout.style.display = "none";
  }
});

// Repeat the same pattern for Services and Contact
const btnServices = document.getElementById("btnServices");
const modalServices = document.getElementById("modalServices");
const closeModalServices = modalServices.querySelector(".close");

btnServices.addEventListener("click", () => {
  modalServices.style.display = "block";
});

closeModalServices.addEventListener("click", () => {
  modalServices.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalServices) {
    modalServices.style.display = "none";
  }
});

const btnContact = document.getElementById("btnContact");
const modalContact = document.getElementById("modalContact");
const closeModalContact = modalContact.querySelector(".close");

btnContact.addEventListener("click", () => {
  modalContact.style.display = "block";
});

closeModalContact.addEventListener("click", () => {
  modalContact.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalContact) {
    modalContact.style.display = "none";
  }
});

