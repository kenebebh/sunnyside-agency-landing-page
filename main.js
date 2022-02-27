const toggleButton = document.querySelector(".toggle__button");
console.log(toggleButton);
const navbarLinks = document.querySelector(".navbar__links");
console.log(navbarLinks);
toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});
