<template>
  <section
    class="vue-object-item-characteristics section-characteristics section"
  >
    <table class="section-characteristics__table table">
      <caption class="table__caption h6">
        Характеристики
      </caption>
      <tbody>
        <tr v-for="(characteristic, index) in characteristicsList" :key="index">
          <th class="c1">{{ Object.keys(characteristic).toString() }}</th>
          <td class="c2">{{ Object.values(characteristic).toString() }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "vue-object-item-characteristics",
  props: {
    characteristicsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>