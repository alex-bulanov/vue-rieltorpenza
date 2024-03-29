/**
* vue карточка объекта
* Принимает входные данные:
* @property Object{} item - объект с параметрами для карточки.
* {Number} item.id - id  
* {Object} item.coordinates - координаты на карте
* {String} item.location - район расположения 
* {String} item.street - улица расположения 
* {String} item.building - номер строения
* {Boolean} item.isFav - отмечен ли объект как избранный
* {Number} item.price - цена 
* {Number} item.priceOld - старая цена
* {Number} item.pricePerMeter - цена за метр
* {Number} item.totalArea - общая площадь
* {String} item.floor - этаж 
* {Object} item.images - массив с фото
**
*/

<template>
  <div class="object-card">
    <a class="object-card__link" href="object.html">
      <div class="object-card__gallery">
        <div class="object-card__gallery-container" ref="slider">
          <div class="object-card__gallery-wrapper">
            <div
              class="object-card__gallery-slide"
              v-for="(image, index) in images"
              :key="index"
            >
              <div class="object-card__img">
                <img
                  :src="image.src"
                  width="100%"
                  height="100%"
                  :alt="image.alt"
                />

                <div
                  class="object-card__img-overlay"
                  v-if="item.images.length > 5 && index === 4"
                >
                  <span>{{ item.images.length - 5 }} фото</span>
                </div>
              </div>
            </div>
          </div>

          <div class="object-card__pagination"></div>
        </div>
      </div>
    </a>

    <div class="object-card__body">
      <div class="object-card__top">
        <div class="object-card__price">
          <div class="price-wrap">
            <div class="price s1">{{ item.price | priceSeparator }} ₽</div>
            <div class="price price_old c1">
              {{ item.priceOld | priceSeparator }} ₽
            </div>
          </div>
        </div>
        <div class="object-card__fav">
          <div class="fav js-fav">
            <svg class="icon" width="24" height="24" viewBox="0 0 24 24">
              <use xlink:href="#icon-heart"></use>
            </svg>
          </div>
        </div>
      </div>

      <div class="object-card__per-meter c1">
        {{ item.pricePerMeter | priceSeparator }} ₽/м<sup>2</sup>
      </div>

      <div class="object-card__description">
        <div class="object-card__options">
          <div class="object-card__apartment-category c2">
            {{ item.category }}
          </div>
          <div class="object-card__area c1">
            {{ item.totalArea }} м<sup>2</sup>
          </div>
          <div class="object-card__floor c1" v-if="item.floor">
            {{ item.floor }} эт
          </div>
        </div>
        <div class="object-card__street c1">
          ул. {{ item.street }}, {{ item.building }}
        </div>
        <div class="object-card__location c2">{{ item.location }}</div>
      </div>
    </div>

    <div class="object-card__button">
      <div
        class="button button_neutral button_md"
        v-if="!isShowContacts"
        @click="onShowPhoneButton"
      >
        <div class="button__icon">
          <svg class="icon"><use xlink:href="#icon-phone"></use></svg>
        </div>
        <div class="button__caption">Показать телефон</div>
      </div>

      <div class="object-card__contact" v-else>
        <a class="c2" href="tel:+79677017140">+7 (967) 701-71-40</a>
        <p class="p2">Шаманина Елена Анатольевна</p>
      </div>
    </div>
  </div>
</template>

<script>
import priceSeparator from "../../filters/priceSeparator";

export default {
  name: "vue-object-card-apart",
  props: {
    item: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isShowContacts: false,
      slider: null,
    };
  },
  filters: {
    priceSeparator,
  },
  methods: {
    onShowPhoneButton() {
      this.isShowContacts = true;
    },

    createCover() {
      const vm = this;
      const coverElements = document.createElement("div");
      coverElements.classList.add("object-card__cover");
      vm.$refs.slider
        .querySelectorAll(".object-card__pagination-item")
        .forEach((item, index) => {
          const elem = document.createElement("div");
          elem.classList.add("object-card__img-cover");
          elem.dataset.index = index;
          coverElements.append(elem);
        });
      return coverElements;
    },

    createSlider() {
      const vm = this;
      this.slider = new Swiper(this.$refs.slider, {
        loop: false,
        spaceBetween: 0,
        wrapperClass: "object-card__gallery-wrapper",
        slideClass: "object-card__gallery-slide",
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
          el: ".object-card__pagination",
          bulletElement: "div",
          clickable: true,
          bulletClass: "object-card__pagination-item",
          bulletActiveClass: "object-card__pagination-item_active",
          renderBullet: function (index, className) {
            return vm.item.images.length > 1
              ? `<div class="${className}" data-index="${index}"></div>`
              : "";
          },
        },
      });

      if (!this.isTouchDevice) {
        vm.$refs.slider.prepend(this.createCover());
        vm.$refs.slider
          .querySelectorAll(".object-card__img-cover")
          .forEach((item) => {
            item.addEventListener("mouseover", (event) => {
              this.slider.slideTo(event.target.dataset.index, 0);
            });
          });
        vm.$refs.slider
          .querySelector(".object-card__cover")
          .addEventListener("mouseleave", () => {
            this.slider.slideTo(0, -100);
          });
      }
    },
  },
  computed: {
    images() {
      return this.item.images.filter((item, index) =>
        index < 5 ? item : false
      );
    },
    isTouchDevice() {
      return typeof window.ontouchstart !== "undefined";
    },
  },

  mounted() {
    this.$nextTick(function () {
      this.createSlider();
    });
  },
};
</script>
