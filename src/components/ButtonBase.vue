<template>
  <button
    @click="click"
    class="bg-blue-600 text-white block h-11 w-full font-bold text-base
      rounded-md cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray"
  >
    <svg-circle
      v-show="loading"
    />
    <span v-show="!loading">
      {{ label }}
    </span>
  </button>
</template>

<script>
import svgCircle from './SVG/Circle.vue';

export default {
  name: 'ButtonBase',
  components: { svgCircle },
  props: {
    label: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
      default: () => ({}),
    },
  },
};
</script>
