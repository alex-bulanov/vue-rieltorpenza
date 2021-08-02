<template>
  <section class="vue-category category section">
    <div class="container">
      <div class="category__header">
        <h1 class="category__title">Квартиры</h1>

        <button class="category__map-button button button_neutral button_sm">
          <svg
            class="section-summary__icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <use xlink:href="#icon-map"></use>
          </svg>
          показать на карте
        </button>
      </div>
      <div class="category__wrapper">
        <div class="category__list-container">
          <div class="category__list">
            <div
              class="category__item"
              v-for="(item, index) in items"
              :key="index"
            >
              <vue-object-card-apart :item="item"></vue-object-card-apart>
            </div>
          </div>

          <div class="category__pagination"></div>
        </div>

        <div class="category__category-map">
          <div class="category-map" id="map"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueObjectCardApart from "../object-card/vue-object-card-apart.vue";

export default {
  name: "vue-category",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    VueObjectCardApart,
  },
  computed: {},
  methods: {},
  data() {
    return {
      coordinates: [],
      map: null,
    };
  },
  mounted() {
    this.items.forEach((item) => {
      this.coordinates.push(item.coordinates);
    });

    const vm = this;
    DG.then(function () {
      vm.map = DG.map("map", {
        center: [53.21306, 45.061406],
        zoom: 17,
        zoomControl: true,
        fullscreenControl: true,
      });
      vm.coordinates.forEach((item) => {
        DG.marker(item).addTo(vm.map);
      });
    });
  },
};
</script>
