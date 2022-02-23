<template>
  <header class="h-20 bg-blue-600 flex items-center justify-between text-white">
    <section class="ml-3">
      <p>RH</p>
    </section>
    <section class="flex mr-3">
      <p>{{ user.email }}</p>
      <button
        class="text-lg font-black ml-2"
        @click="() => (showLogOut = !showLogOut)"
      >
        &#9660;
      </button>
      <div
        class="bg-white shadow-lg absolute top-14 right-1 text-black px-3 border border-black"
        v-show="showLogOut"
      >
        <button @click="logOut">cerrar sesion</button>
      </div>
    </section>
  </header>
</template>

<script>
import { currentUser } from '../helpers/localStorage';
import { logout } from '../api/auth';

export default {
  data() {
    return {
      user: currentUser,
      showLogOut: false,
    };
  },
  methods: {
    async logOut() {
      await logout();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
