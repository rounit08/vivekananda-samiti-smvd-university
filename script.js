const navToggle = document.getElementById("nav-toggle");
const navItems = document.getElementById("nav-items");
const closeButton = document.getElementById("close-icon");

navToggle.addEventListener("click", () => {
  navItems.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  navItems.classList.toggle("hidden");
});
