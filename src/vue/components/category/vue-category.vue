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
              v-for="(card, index) in cards"
              :key="index"
            >
              <vue-object-card-apart :item="card"></vue-object-card-apart>
            </div>
          </div>

          <div class="category__pagination pagination">
            <vue-paginate
              :page-count="pageCount"
              :click-handler="pageChangeHandler"
              :prev-text="'<'"
              :next-text="'>'"
              :container-class="'pagination__container'"
              :page-class="'pagination__item'"
              :active-class="'pagination__item_active'"
              :prev-class="'pagination__item pagination__item_prev'"
              :next-class="'pagination__item pagination__item_next'"
              :page-link-class="'pagination__link'"
              :disabled-class="'pagination__item_disabled'"
            >
            </vue-paginate>
          </div>
        </div>

        <div class="category__category-map">
          <div class="category-map" id="map"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import paginationMixin from "../mixins/pagination.mixin.js";
import VuePaginate from "vuejs-paginate";
import VueObjectCardApart from "../object-card/vue-object-card-apart.vue";

export default {
  name: "vue-category",
  props: {},
  components: {
    VueObjectCardApart,
    VuePaginate,
  },
  computed: {},
  methods: {
    pageChangeHandler() {
      console.log("click");
    },
  },
  mixins: [paginationMixin],
  data() {
    return {
      coordinates: [],
      map: null,
      cards: null,
    };
  },
  async mounted() {
    // const data = await axios("http://localhost:3000/items", {
    //   method: "GET",
    // })
    //   .then((items) => {
    //     return items;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return error;
    //   });
  },
};
</script>
