<template>
  <div class="vue-object-item-modal-gallery modal-gallery">
    <div class="modal-gallery__container swiper-container">
      <div class="modal-gallery__wrapper swiper-wrapper">
        <div
          class="modal-gallery__slide swiper-slide"
          v-for="(item, index) in images"
          :key="index"
        >
          <div class="modal-gallery__img">
            <img :src="item.src" :alt="item.alt" />
          </div>
        </div>
      </div>

      <div
        class="
          modal-gallery__button modal-gallery__button_prev
          swiper-button-prev
        "
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <use xlink:href="#icon-caret-right"></use>
        </svg>
      </div>
      <div
        class="
          modal-gallery__button modal-gallery__button_next
          swiper-button-next
        "
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <use xlink:href="#icon-caret-right"></use>
        </svg>
      </div>
      <div class="modal-gallery__pagination swiper-pagination"></div>
    </div>
    <!-- thumbs -->
    <div class="modal-gallery__thumbs-container swiper-container">
      <div class="modal-gallery__thumbs-wrapper swiper-wrapper">
        <div
          class="modal-gallery__thumbs-slide swiper-slide"
          v-for="(item, index) in images"
          :key="index"
        >
          <div class="modal-gallery__thumbs-img">
            <img :src="item.src" :alt="item.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-object-item-modal-gallery",
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
    targetIndex: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  components: {},
  computed: {},
  methods: {
    swiperTopInit() {
      this.swiperTop = new Swiper(".modal-gallery__container", {
        loop: false,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".modal-gallery__pagination",
          type: "fraction",
        },
        thumbs: {
          swiper: this.swiperThumbs,
        },
      });

      this.swiperTop.slideTo(this.targetIndex, 0);
    },

    swiperThumbsInit() {
      this.swiperThumbs = new Swiper(".modal-gallery__thumbs-container", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: "auto",
      });
    },
  },
  data() {
    return {
      swiperTop: null,
      swiperThumbs: null,
    };
  },
  mounted() {
    this.swiperThumbsInit();
    this.swiperTopInit();
  },
};
</script>