const burger = document.querySelector(".nav-btn");
const nav_bg = document.querySelector(".nav-wrapper");
const footerDate = document.querySelector("#year");

let year = new Date().getFullYear();
footerDate.innerText = year;

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  nav_bg.classList.toggle("is-active");
});
