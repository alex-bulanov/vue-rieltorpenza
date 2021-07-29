<template>
  <div class="vue-object-item object-item">
    <div class="object-item__header">
      <div class="object-item__header-container">
        <h1 class="object-item__title h3">{{ item.title }}</h1>

        <span
          v-if="item.mortgage"
          class="object-item__mortgage-discount tooltip с1"
          data-tippy-content="Скидка 0,3% на ставку по ипотеке от Сбербанка. Оставьте заявку специалисту по недвижимости и узнайте, как получить"
          >скидка на ипотеку {{ item.mortgage.discount }} %
        </span>
      </div>
      <span class="object-item__code c1">Код объекта: {{ item.code }}</span>
    </div>

    <div class="object-item__wrapper">
      <div class="object-item__content">
        <vue-object-item-gallery
          :object="item"
          @onGalleryItem="openModal"
        ></vue-object-item-gallery>

        <vue-object-item-summary
          :object="item"
          @onShowMapButton="openModal"
        ></vue-object-item-summary>

        <section class="section-description section">
          <h2 class="section-description__title h6">Описание</h2>
          <p class="section-description__text p1">
            <slot name="description">отсутствует</slot>
          </p>
        </section>

        <slot name="certificates"></slot>

        <vue-object-item-characteristics
          :characteristicsList="item.characteristics"
        ></vue-object-item-characteristics>
      </div>

      <div class="object-item__manager-container">
        <slot name="manager"></slot>
      </div>
    </div>

    <slot name="plate"></slot>

    <transition name="fade">
      <vue-object-item-modal
        v-if="isModalOpen"
        :object="item"
        :activeTab="openedTab"
        :openImageIndex="sliderImgIndex"
        @onEsc="closeModal"
        @closeModal="closeModal"
        @onModalTabButton="setOpenedTab"
      >
        <slot name="manager"></slot>
      </vue-object-item-modal>
    </transition>
  </div>
</template>

<script>
import VueObjectItemModal from "./vue-object-item-modal.vue";
import VueObjectItemGallery from "./vue-object-item-gallery.vue";
import VueObjectItemSummary from "./vue-object-item-summary.vue";
import VueObjectItemCharacteristics from "./vue-object-item-characteristics.vue";
export default {
  name: "vue-object-item",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      openedTab: "gallery",
      isModalOpen: false,
      sliderImgIndex: 0,
    };
  },
  components: {
    VueObjectItemModal,
    VueObjectItemGallery,
    VueObjectItemSummary,
    VueObjectItemCharacteristics,
  },
  computed: {},
  methods: {
    openModal(tabTarget, index = 0) {
      this.sliderImgIndex = index;
      this.isModalOpen = true;
      this.openedTab = tabTarget.dataset.tab;
      document.querySelector("body").classList.add("lock");
    },
    closeModal() {
      this.isModalOpen = false;
      document.querySelector("body").classList.remove("lock");
    },
    setOpenedTab(tabTarget) {
      this.openedTab = tabTarget.dataset.tab;
    },
  },
};
</script>
