const toggleButton = document.querySelector(".toggle__button");
const navbarLinks = document.querySelector(".navbar__links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
