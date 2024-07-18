const navToggle = document.getElementById("nav-toggle");
const navItems = document.getElementById("nav-items");
const closeButton = document.getElementById("close-icon");

navToggle.addEventListener("click", () => {
  navItems.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  navItems.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const totalImages = images.length;
  const indicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;

  function showSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showSlide(currentIndex);
  }

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
  }

  document.getElementById("next").addEventListener("click", showNextSlide);
  document.getElementById("prev").addEventListener("click", showPrevSlide);
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      showSlide(parseInt(indicator.dataset.index));
    });
  });

  setInterval(showNextSlide, 4000);
});
