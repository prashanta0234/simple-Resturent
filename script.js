const button = document.getElementsByClassName("bar")[0];
const links = document.getElementsByClassName("navList")[0];
button.addEventListener("click", () => {
  links.classList.toggle("active");
});

const swiper = new Swiper(".mySwiper", {
  // Optional parameters
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
});
