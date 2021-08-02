<template>
  <div
    class="vue-select-phone select select_phone"
    :class="{
      select_open: areOptionsVisible,
    }"
  >
    <p
      class="select__value"
      @click.self="areOptionsVisible = !areOptionsVisible"
    >
      {{ selected }}
    </p>

    <div class="select__options" v-if="areOptionsVisible">
      <span
        class="select__option"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        >{{ option.name }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-select-phone",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>
