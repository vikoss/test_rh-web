<template>
  <main>
    <header-base />
    <input-base
      id="email"
      v-model="email"
      class="mb-3.5"
      label="Usuario:"
      placeholder="Ingresa tu usuario"
    />
    <button-base
      class="max-w-xs mx-auto"
      :loading="true"
      :disabled="true"
      label="Ingresar"
      @click="login"
    />

  </main>
</template>

<script>
import InputBase from '../components/InputBase.vue';
import HeaderBase from '../components/HeaderBase.vue';
import ButtonBase from '../components/ButtonBase.vue';

export default {
  name: 'Home',
  components: {
    InputBase,
    HeaderBase,
    ButtonBase,
  },
  data() {
    return {
      email: 0,
    };
  },
  methods: {
    login() {
      console.log('helooo');
    },
  },
};
</script>
