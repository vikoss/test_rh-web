<template>
  <main class="flex flex-wrap min-h-screen"
  >
    <section
      class="bg-gradient-to-b from-blue-200 to-blue-700
        flex-grow px-6 pt-12 pb-4 sm:pt-9 sm:px-12"
      style="flex-basis: 540px"
    >
      <h1 class="text-white font-medium text-4xl mt-5 mb-1.5 sm:text-6xl lg:absolute sm:bottom-32">
        Bienvenido
        <br> a
        <strong class="text-orange font-bold">
          RH
        </strong>
      </h1>
      <h2 class="text-white text-base sm:text-xl lg:absolute sm:bottom-24">
        Sistema de gestión de
        <strong class="font-bold">recursos humanos.</strong>
      </h2>
    </section>
    <section
      class="py-7 px-6 sm:px-16 sm:pt-36 flex-grow"
      style="flex-basis: 450px"
    >
      <h1 class="text-3xl text-blue font-medium mb-2">
        Inicia sesión
      </h1>
      <h2 class="text-base text-black font-normal mb-6">
        Ingresa los datos necesarios para iniciar sesión.
      </h2>
      <input-base
        id="email"
        v-model="credentials.username"
        class="mb-3.5"
        label="Correo:"
        placeholder="Ingresa tu correo"
      />
      <input-base
        id="password"
        v-model="credentials.password"
        class="mb-3.5"
        label="Contraseña:"
        placeholder="Ingresa tu contraseña"
        type="password"
      />
      <p class="text-red text-base" v-show="error" >{{ error }}</p>
      <button-base
        class="max-w-xs mx-auto mt-16 sm:mr-0"
        :loading="loading"
        :disabled="disabled"
        label="Ingresar"
        @click="login"
      />
    </section>
  </main>
</template>

<script>
import InputBase from '../components/InputBase.vue';
import ButtonBase from '../components/ButtonBase.vue';

export default {
  name: 'LoginView',
  components: {
    InputBase,
    ButtonBase,
  },
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
      loading: false,
      disabled: false,
      error: '',
    };
  },
  methods: {
    login() {
      console.log('hello');
    },
  },
};
</script>

<style>

</style>
