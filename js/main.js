import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: "1.2",
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
