<template>
  <section class="vue-object-item-gallery section-gallery">
    <h2 class="visually-hidden">Фотографии</h2>

    <div class="section-gallery__container" ref="slider" data-mobile="false">
      <div class="section-gallery__wrapper">
        <div
          class="section-gallery__slide"
          v-for="(image, index) in images"
          :key="index"
          data-tab="gallery"
          @click="onGalleryItem($event, index)"
        >
          <div class="section-gallery__img">
            <img :src="image.src" :alt="image.alt" />

            <div
              class="section-gallery__img-overlay"
              v-if="object.images.length > 5 && index === 4"
            >
              <span>{{ object.images.length - 5 }} фото</span>
            </div>
          </div>
        </div>
      </div>

      <div class="section-gallery__pagination"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "vue-object-item-gallery",
  props: {
    object: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      swiper: null,
    };
  },
  computed: {
    images() {
      return this.object.images.filter((item, index) =>
        index < 5 ? item : false
      );
    },
  },
  methods: {
    sliderInitialization() {
      if (
        window.innerWidth < 1024 &&
        this.$refs.slider.dataset.mobile === "false"
      ) {
        this.swiper = new Swiper(this.$refs.slider, {
          loop: false,
          spaceBetween: 0,
          wrapperClass: "section-gallery__wrapper",
          slideClass: "section-gallery__slide",
          slidesPerView: 1,
          centeredSlides: true,
          pagination: {
            el: ".section-gallery__pagination",
            bulletElement: "div",
            clickable: true,
            bulletClass: "section-gallery__pagination-item",
            bulletActiveClass: "section-gallery__pagination-item_active",
          },
        });

        this.$refs.slider.dataset.mobile = true;
      }
      if (window.innerWidth >= 1024) {
        this.$refs.slider.dataset.mobile = false;

        if (
          this.$refs.slider.classList.contains("swiper-container-initialized")
        ) {
          this.swiper.destroy();
        }
      }
    },
    onGalleryItem(event, index) {
      this.$emit("onGalleryItem", event.currentTarget, index);
    },
  },
  created() {
    window.addEventListener("resize", () => {
      this.sliderInitialization();
    });
  },
  mounted() {
    this.sliderInitialization();
  },
};
</script>