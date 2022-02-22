<template>
  <label
    :for="id"
    class="bg-blue-600 rounded-md text-white text-base
    font-bold flex justify-center items-center h-10 cursor-pointer"
  >
    <input
      class="hidden"
      type="file"
      accept="image/*"
      @change="(event) => $emit('change', event.target.files[0])"
      :name="id"
      :id="id"
    >
    <img
      class="mr-3.5 h-6 w-6"
      src=""
      alt="icon"
    >
    Agregar archivo
  </label>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
  },
};
</script>
