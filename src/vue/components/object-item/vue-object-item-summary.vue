<template>
  <section class="vue-object-item-summary section-summary section">
    <h2 class="visually-hidden">Инфо</h2>
    <div class="section-summary__block">
      <div class="section-summary__price-container">
        <p class="section-summary__price h6">
          <span>{{ object.price | priceSeparator }}</span> ₽
        </p>
        <p v-if="object.priceOld" class="section-summary__price-old c1">
          <span>{{ object.priceOld | priceSeparator }}</span> ₽
        </p>
      </div>
      <p class="section-summary__price-per-meter s2">
        <span>{{ object.pricePerMeter | priceSeparator }}</span> ₽/м²
      </p>
      <div class="section-summary__mortgage" v-if="object.mortgage">
        <p>
          В ипотеку от
          <span>{{ object.mortgage.perMonth | priceSeparator }}</span> ₽/меc
        </p>
        <div
          class="section-summary__tooltip tooltip"
          data-tippy-content="Бесплатно оформим ипотеку при покупке этой недвижимости"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <use xlink:href="#icon-question"></use>
          </svg>
        </div>
      </div>
    </div>

    <div class="section-summary__block">
      <p class="section-summary__address p1">
        {{ object.city }}, {{ object.location }}, <wbr />
        {{ object.street }} ул, {{ object.building }}
      </p>

      <div class="section-summary__info c1">
        <p class="section-summary__posted">
          <svg
            class="section-summary__icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <use xlink:href="#icon-calendar"></use>
          </svg>
          <span>{{ object.posted }}</span>
        </p>

        <p class="section-summary__views">
          <svg
            class="section-summary__icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <use xlink:href="#icon-eye"></use>
          </svg>
          <span>{{ object.views }}</span>
          &nbsp;просмотров
        </p>
      </div>

      <div class="section-summary__buttons">
        <button
          class="section-summary__button button button_neutral button_sm"
          data-tab="map"
          @click="onMapButton"
        >
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
        <button
          :class="{ 'is-active': isFav }"
          class="
            js-fav
            section-summary__button section-summary__button_fav
            button_neutral button button_sm
          "
        >
          <svg
            class="section-summary__icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <use xlink:href="#icon-heart"></use>
          </svg>
          добавить в избранное
        </button>
      </div>
    </div>

    <table class="section-summary__table" v-if="summary.length">
      <tbody>
        <tr
          class="section-summary__table-row"
          v-for="(item, index) in summary"
          :key="index"
        >
          <th class="section-summary__table-th p1">
            {{ Object.keys(item).toString() }}
          </th>
          <td class="section-summary__table-td h6">
            {{ Object.values(item).toString() }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import priceSeparator from "../..//filters/priceSeparator";

export default {
  name: "vue-object-summary",
  props: {
    object: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    priceSeparator,
  },
  methods: {
    onMapButton(event) {
      this.$emit("onShowMapButton", event.currentTarget);
    },
  },
  computed: {
    isFav() {
      return this.object.isFav;
    },
    summary() {
      return this.object.summary || [];
    },
  },

  mounted() {
    if (document.querySelector(".section-summary__table")) {
      document
        .querySelector(".section-summary__table")
        .style.setProperty("--coll", this.object.summary.length);
    }
  },
};
</script>