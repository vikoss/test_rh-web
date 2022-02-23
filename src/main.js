import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import { JWT } from './helpers/localStorage';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !JWT()) next({ name: 'Login' });
  else next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
