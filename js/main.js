import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

let swiper = null;

function toggleSwiper() {
  if (window.innerWidth < 768) {
    if (swiper) return;

    swiper = new Swiper(".swiper", {
      slidesPerView: 1.2,
      loop: true,
      spaceBetween: 20,

      breakpoints: {
        425: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },

        535: {
          slidesPerView: 1.8,
          spaceBetween: 5,
        },

        650: {
          slidesPerView: 2.5,
          spaceBetween: 5,
        },
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return;
  }

  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

toggleSwiper();
window.addEventListener("resize", toggleSwiper);
