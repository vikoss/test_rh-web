<template>
  <div
    class="transition-opacity ease-in-out duration-300 fixed w-full h-full top-0 left-0
      flex items-center justify-center"
    :class="`${show ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'}`"
  >
    <div class="absolute w-full h-full opacity-50" style="background-color: currentColor;" />
    <div class="bg-white w-11/12 max-w-max mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div class="py-4 px-6">
        <div class="text-right mb-2">
          <button
            class="text-right py-1 px-3"
            @click="({ target }) => $emit('change', target.files[0])">
            x
          </button>
        </div>
        <div>
          <h5>
            Su correo es:
            <strong>{{ user.email }}</strong>
          </h5>
          <h5 class="mt-4">Recuerda que la contraseña para accesar es su DNI.</h5>
          <button-base
            class="max-w-xs mx-auto mt-16"
            label="OK"
            :click="redirect"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBase from './ButtonBase.vue';

export default {
  components: { ButtonBase },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
