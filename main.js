const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

const navBtn = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

navBtn.addEventListener("click", () => {
  nav.classList.remove("show");
});
