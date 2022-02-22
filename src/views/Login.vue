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
        v-model="credentials.email"
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
      <p class="text-base text-red-900" v-show="error" >{{ error }}</p>
      <button-base
        class="max-w-xs mx-auto mt-16 sm:mr-0"
        :loading="loading"
        :disabled="disabled"
        label="Ingresar"
        :click="login"
      />
    </section>
  </main>
</template>

<script>
import InputBase from '../components/InputBase.vue';
import ButtonBase from '../components/ButtonBase.vue';
import { authenticate, me } from '../api/auth';

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
      error: '',
    };
  },
  computed: {
    disabled() {
      return !(this.credentials.email && this.credentials.password);
    },
  },
  methods: {
    async login() {
      this.loading = true;
      this.error = '';
      try {
        await authenticate(this.credentials);
        const data = await me();
        if (data.role === 'admin') {
          this.$router.push({ name: 'Hire' });
        } else {
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        if (error.status === 401) {
          this.error = 'Correo ó contraseña inválidos';
        } else {
          this.error = 'Por el momento los servios no estan dispobles';
        }
      }
      this.loading = false;
    },
  },
};
</script>

<style>

</style>
