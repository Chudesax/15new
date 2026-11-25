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
          spaceBetween: 15,
        },

        650: {
          slidesPerView: 2.5,
          spaceBetween: 15,
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
//кнопка
const showMoreButton = document.querySelector(".show-more");
const showMoreIcon = document.querySelector(".show-more__icon");
const showMoreText = document.querySelector(".show-more__text");
//карточки
const brandsList = document.querySelector(".repair__brands");

showMoreButton.addEventListener("click", function () {
  showMoreIcon.classList.toggle("show-more__icon--rotated");
  brandsList.classList.toggle("repair__brands--visible");

  if (showMoreText.textContent === "Показать все") {
    showMoreText.textContent = "Скрыть";
  } else {
    showMoreText.textContent = "Показать все";
  }
});
