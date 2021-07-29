<template>
  <section class="vue-object-item-gallery section-gallery">
    <h2 class="visually-hidden">Фотографии</h2>
  </section>
</template>

<script>
export default {
  name: "vue-object-item-gallery",
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  methods: {},
  data() {
    return {};
  },
};
</script>