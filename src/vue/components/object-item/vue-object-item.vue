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
          :images="item.images"
        ></vue-object-item-gallery>
        <section class="section-description section">
          <h2 class="section-description__title h6">Описание</h2>
          <p class="section-description__text p1">
            <slot name="description">отсутствует</slot>
          </p>
        </section>

        <slot name="certificates"></slot>
      </div>

      <div class="object__manager-container">
        <slot name="manager"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import VueObjectItemGallery from "./vue-object-item-gallery.vue";
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
  components: {
    VueObjectItemGallery,
  },
  computed: {},
  methods: {},
  data() {
    return {};
  },
};
</script>
