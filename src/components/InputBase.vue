<template>
  <label
    :for="id"
    class="text-blue-600 text-base font-medium block relative"
  >
    {{ label }}
    <input
      :id="id"
      class="h-11 py-3 px-3.5 rounded-md border border-blue-600 border-solid outline-none
        text-black text-base font-medium mt-1 w-full focus:border-2 focus:shadow"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @input="({ target }) => $emit('update', type === 'checkbox' ?
        `${target.checked}` : target.value)"
    >
  </label>
</template>

<script>
export default {
  name: 'InputBase',
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'value',
    event: 'update',
  },
  // emits: ['update:value'],
};
</script>

<style scoped>
input:checked {
  width: 44px;
  display: block;
  appearance: none;
  background-color: #2563eb;
  cursor: pointer;
}
input[type=checkbox]:not(checked) {
  appearance: none;
  width: 44px;
  display: block;
  cursor: pointer;
}
</style>
