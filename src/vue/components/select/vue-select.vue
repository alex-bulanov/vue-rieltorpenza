<template>
  <div
    class="vue-select select"
    :class="{
      select_open: areOptionsVisible,
    }"
    :selected="selected"
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

    <svg class="select__icon" width="24" height="24" viewBox="0 0 24 24">
      <use xlink:href="#icon-caret"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "vue-select",
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
        return "Выбрать";
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
