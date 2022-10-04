const menu = document.querySelector("#hamburger-menu");
const menuLinks = document.querySelector(".navbar-menu ul");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
