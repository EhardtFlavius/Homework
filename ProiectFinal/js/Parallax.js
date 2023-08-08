let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (stars) {
    stars.style.left = value * 0.25 + "px";
  }

  if (moon) {
    moon.style.top = value * 1.05 + "px";
  }

  if (mountains_behind) {
    mountains_behind.style.top = value * 0.5 + "px";
  }

  if (mountains_front) {
    mountains_front.style.top = value * 0 + "px";
  }

  if (text) {
    text.style.marginRight = value * 4 + "px";
    text.style.marginTop = value * 1.5 + "px";
  }

  if (btn) {
    btn.style.marginTop = value * 1.5 + "px";
  }

  if (header) {
    header.style.top = value * 0.5 + "px";
  }
});
