const burger = document.querySelector(".nav-btn");
const nav_bg = document.querySelector(".nav-wrapper");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  nav_bg.classList.toggle("is-active");
});
