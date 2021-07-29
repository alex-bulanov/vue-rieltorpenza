// eslint-disable-next-line no-unused-vars
const slider = document.querySelector('.popup-gallery__container');
const thumbs = document.querySelector('.popup-gallery__thumbs-container');
// eslint-disable-next-line no-unused-vars
let mySwiper = null;
// eslint-disable-next-line no-unused-vars
let myThumbs = null;

function sliderInit() {
  if (window.innerWidth < 1240) {
    mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      freeMode: false,
      loop: false,
      threshold: 5,
      spaceBetween: 0,
    });
  }

  if (window.innerWidth >= 1240) {
    myThumbs = new Swiper(thumbs, {
      spaceBetween: 10,
      slidesPerView: 'auto',
      allowTouchMove: false,
    });

    mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      freeMode: false,
      loop: false,
      threshold: 5,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: myThumbs,
      },
    });
  }
}

if (slider) {
  sliderInit();
}

window.addEventListener('resize', () => {
  sliderInit();
});

