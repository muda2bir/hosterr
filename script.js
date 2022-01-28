const nav_list = document.querySelector(".nav-list");
const hamburger = document.querySelector(".ham-icon");

hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("active");
});
