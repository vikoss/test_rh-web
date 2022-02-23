<template>
  <main>
    <header-base />
    <button-base
      v-if="isAdmin"
      class="max-w-xs mx-auto mr-5 mt-7"
      style="background-color: white; color: #2563eb; border-color: #2563eb; border-width: 2px;"
      label="Contratar"
      :click="redirect"
    />
    <div class="sm:p-12">
      <h1
        class="text-xl mb-5"
      >
        <strong>
          Felicidades
        </strong>
        estos son los puestos de trabajo que estas desempeñando en RH
      </h1>
      <div v-for="job in jobs" :key="job.id">
        <span class="h-1 bg-blue-900 block my-1"></span>
        <div class="sm:px-11">
          <h2>
            Puesto:
            <strong>{{ job.name }}</strong>
          </h2>
          <h2>
            Codigo:
            <strong>{{ job.code }}</strong>
          </h2>
          <h2>
            Nivel:
            <strong>{{ job.level }}</strong>
          </h2>
          <h2>
            Eres jefe:
            <strong>{{ job.is_boss ? 'Si': 'No' }}</strong>
          </h2>
          <h2>
            Nos complace saber que estas con nosotros desde:
            <strong>{{ new Date(job.created_at) }}</strong>
          </h2>
        </div>
        <span class="h-1 bg-blue-900 block"></span>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderBase from '../components/HeaderBase.vue';
import ButtonBase from '../components/ButtonBase.vue';
import { getJobs } from '../api/user';
import { currentUser } from '../helpers/localStorage';

export default {
  name: 'Home',
  components: {
    HeaderBase,
    ButtonBase,
  },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    isAdmin() {
      return currentUser().role === 'admin';
    },
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Hire' });
    },
  },
  async created() {
    this.jobs = await getJobs();
  },
};
</script>
