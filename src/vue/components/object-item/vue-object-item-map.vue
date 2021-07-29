<template>
  <div class="vue-object-item-map modal-map" id="map"></div>
</template>

<script>
export default {
  name: "vue-object-item-map",
  props: {
    object: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  computed: {
    coordinates() {
      return this.object.coordinates;
    },
  },
  methods: {},
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    const vm = this;
    DG.then(function () {
      vm.map = DG.map("map", {
        center: vm.coordinates,
        zoom: 17,
        zoomControl: false,
        fullscreenControl: false,
      });

      const popup = DG.popup({
        className: "modal-map__popup",
        closeButton: false,
      })
        .setLatLng(vm.coordinates)
        .setContent(`ул. ${vm.object.street}, ${vm.object.building}`)
        .openOn(vm.map);

      DG.marker(vm.coordinates).addTo(vm.map).bindPopup(popup);
    });
  },
};
</script>