<template>
  <div class="vue-object-item-modal modal">
    <button class="modal__close" @click="onCloseButton">
      <span class="visually-hidden"> Закрыть </span>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>

    <div class="modal__wrapper">
      <div class="modal__body">
        <div class="modal__header">
          <div class="modal__header-contnent">
            <p class="modal__header-title h5">{{ object.title }}</p>
            <p class="modal__header-price h6">
              {{ object.price | priceSeparator }} ₽
            </p>
            <p class="modal__header-address c1">
              {{ object.city }}, {{ object.location }}, {{ object.street }} ул,
              {{ object.building }}
            </p>
            <p class="modal__header-price-per-meter c1">
              {{ object.pricePerMeter | priceSeparator }} ₽/м²
            </p>
          </div>
          <div class="modal__buttons">
            <button
              :class="{ button_primary: activeTab === 'map' }"
              class="modal__button modal__button_map button button_sm"
              data-tab="map"
              @click="onTabButton"
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <use xlink:href="#icon-map"></use>
              </svg>
              карта
            </button>
            <button
              :class="{ button_primary: activeTab === 'gallery' }"
              class="modal__button modal__button_photo button button_sm"
              data-tab="gallery"
              @click="onTabButton"
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <use xlink:href="#icon-image"></use>
              </svg>
              фото
            </button>
          </div>
        </div>

        <div class="modal__tabs">
          <div
            class="modal__tabs-item"
            :class="{ 'modal__tabs-item_active': activeTab === 'map' }"
          >
            <vue-object-item-map :object="object"></vue-object-item-map>
          </div>
          <div
            class="modal__tabs-item"
            :class="{ 'modal__tabs-item_active': activeTab === 'gallery' }"
          >
            <vue-object-item-modal-gallery
              :images="object.images"
              :targetIndex="openImageIndex"
            ></vue-object-item-modal-gallery>
          </div>
        </div>
      </div>

      <!-- менеджер -->
      <div class="modal__manager-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import VueObjectItemMap from "./vue-object-item-map.vue";
import priceSeparator from "../..//filters/priceSeparator";
import VueObjectItemModalGallery from "./vue-object-item-modal-gallery.vue";

export default {
  components: {
    VueObjectItemMap,
    VueObjectItemModalGallery,
  },
  name: "vue-object-item-modal",
  props: {
    object: {
      type: Object,
      default() {
        return {};
      },
    },
    activeTab: {
      type: String,
      default() {
        return "";
      },
    },
    openImageIndex: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  filters: {
    priceSeparator,
  },
  computed: {},
  methods: {
    onCloseButton() {
      this.$emit("closeModal");
    },
    onTabButton(event) {
      this.$emit("onModalTabButton", event.currentTarget);
    },
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    document.addEventListener("keydown", (event) => {
      if (event.which === 27) {
        vm.$emit("onEsc");
      }
    });
  },
  destroyed() {
    let vm = this;
    document.removeEventListener("keydown", (event) => {
      if (event.which === 27) {
        vm.$emit("onEsc");
      }
    });
  },
};
</script>