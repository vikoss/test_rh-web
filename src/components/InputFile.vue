<template>
  <div>
    <label
      :for="id"
      class="bg-blue-600 rounded-md text-white text-base
      font-bold flex justify-center items-center h-10 cursor-pointer"
    >
      <input
        class="hidden"
        type="file"
        accept="image/*"
        @change="change"
        :name="id"
        :id="id"
      >
      <img
        class="mr-3.5 h-6 w-6"
        src="@/assets/SVG/cloud-upload.svg"
        alt="icon"
      >
      {{ label }}
    </label>
    <p class="text-red-900 mt-1" v-show="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      error: null,
    };
  },
  methods: {
    change(event) {
      const file = event.target.files[0];
      if (file.size > 2097152) {
        this.error = 'El archivo excede el tamano limite(2MB)';
        this.$emit('change', null);
      }
      this.$emit('change', file);
    },
  },
};
</script>
