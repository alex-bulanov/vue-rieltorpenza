const swiperObjectArray = $('.swiper-object > .swiper-container');

swiperObjectArray.each((index, el) => {
  // eslint-disable-next-line no-unused-vars
  const newsSwiper = new Swiper(el, {
    direction: 'horizontal',
    // autoplay: {
    //   delay: 7000,
    // },
    slidesPerView: 'auto',
    freeMode: true,
    // loop: true,
    loop: false,
    loopAdditionalSlides: 3,
    threshold: 5,
    spaceBetween: 16,
    navigation: {
      prevEl: $(el).closest('.swiper-object').find('.swiper-button-prev'),
      nextEl: $(el).closest('.swiper-object').find('.swiper-button-next'),
    },
    pagination: {
      el: $(el).closest('.swiper-object').find('.swiper-pagination'),
      clickable: true,
    },
    breakpoints: {
      1240: {
        spaceBetween: 30,
        slidesPerView: 3,
        freeMode: false,
      },
      1900: {
        spaceBetween: 30,
        slidesPerView: 5,
        freeMode: false,
      },
    },
  });
});
