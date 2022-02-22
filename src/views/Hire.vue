<template>
  <main>
    <header-base />
    <div class="p-7 grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <h3>Ingresa los datos del trabajador</h3>
        <input-base
          id="employee-name"
          v-model="employee.name"
          class="mb-3.5"
          label="Nombre:"
          placeholder="Ingresa tu correo"
        />
        <input-base
          id="surname"
          v-model="employee.surname"
          class="mb-3.5"
          label="Apellido:"
          placeholder="Ingresa tu correo"
        />
        <input-base
          id="dni"
          v-model="employee.dni"
          class="mb-3.5"
          label="DNI:"
          placeholder="Ingresa tu correo"
        />
        <input-base
          id="date-of-birth"
          v-model="employee.date_of_birth"
          class="mb-3.5"
          label="Fecha de nacimiento:"
          placeholder="Ingresa tu correo"
          type="date"
        />
        <input-base
          id="photo"
          v-model="employee.photo"
          class="mb-3.5"
          label="Foto:"
          placeholder="Ingresa tu correo"
          type="file"
        />
      </div>
      <div>
        <h3>Ingresa los datos del puesto de trabajo que llevara acabo</h3>
        <input-base
          id="job-name"
          v-model="job.name"
          class="mb-3.5"
          label="Nombre:"
          placeholder="Ingresa tu correo"
        />
        <input-base
          id="code"
          v-model="job.code"
          class="mb-3.5"
          label="Codigo:"
          placeholder="Ingresa tu correo"
        />
        <input-base
          id="level"
          v-model="job.level"
          class="mb-3.5"
          label="Nivel:"
          placeholder="Ingresa tu correo"
        />
        <input-base
          id="is-boss"
          v-model="job.is_boss"
          class="mb-3.5"
          label="Es jefe:"
          placeholder="Ingresa tu correo"
        />
      </div>
    </div>
    <p>{{ employee }}</p>
    <p>{{ job }}</p>
     <button-base
      class="max-w-xs mx-auto mt-16"
      :loading="loading"
      :disabled="disabled"
      label="Ingresar"
      :click="save"
    />
  </main>
</template>

<script>
import InputBase from '../components/InputBase.vue';
import HeaderBase from '../components/HeaderBase.vue';
import ButtonBase from '../components/ButtonBase.vue';
import { storeEmployee, attachJobToEmployee } from '../api/employee';
import { storeJob } from '../api/jobs';

export default {
  name: 'HireView',
  components: {
    InputBase,
    HeaderBase,
    ButtonBase,
  },
  data() {
    return {
      employee: {
        name: '',
        surname: '',
        dni: '',
        date_of_birth: '',
        photo: '',
      },
      job: {
        name: '',
        code: '',
        level: '',
        is_boss: '',
      },
      loading: false,
      error: '',
    };
  },
  computed: {
    disabled() {
      return !(
        this.employee.name
        && this.employee.surname
        && this.employee.dni
        && this.employee.date_of_birth
        && this.employee.photo
        && this.job.name
        && this.job.code
        && this.job.level
        && this.job.is_boss
      );
    },
  },
  methods: {
    async save() {
      const employee = await storeEmployee(this.employee);
      const job = await storeJob(this.job);
      await attachJobToEmployee({ employeeId: employee.id, jobId: job.id });
      console.log('helooo');
    },
  },
};
</script>

<style>

</style>
