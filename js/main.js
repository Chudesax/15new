import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: "1.1",
  spaceBetween: 16,

  breakpoints: {
    475: {
      slidesPerView: 1.8,
      spaceBetween: 30,
    },

    700: {
      slidesPerView: 2.7,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
