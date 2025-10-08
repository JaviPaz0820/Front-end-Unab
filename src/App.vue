<template>
  <div class="container py-4">
    <h1 class="mb-4 text-center">Tabla de Usuarios</h1>

    <table class="table table-striped table-bordered table-hover">
      <thead class="table-dark">
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(u, i) in users" :key="i">
          <td>{{ u.nombre }}</td>
          <td>{{ u.apellido }}</td>
          <td>{{ formatDate(u.fechaNacimiento) }}</td>
          <td>{{ u.edad }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { nombre: 'María', apellido: 'González', fechaNacimiento: '1990-05-14', edad: null },
        { nombre: 'Juan',  apellido: 'Pérez',     fechaNacimiento: '1985-11-02', edad: null },
        { nombre: 'Ana',   apellido: 'Ramírez',   fechaNacimiento: '2000-08-30', edad: null }
      ]
    }
  },
  methods: {
    calculateAge(dob) {
      const today = new Date()
      const birth = new Date(dob)
      let age = today.getFullYear() - birth.getFullYear()
      const m = today.getMonth() - birth.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
      return age
    },
    formatDate(dob) {
      return new Date(dob).toLocaleDateString()
    }
  },
  mounted() {
    this.users.forEach(u => u.edad = this.calculateAge(u.fechaNacimiento))
  }
}
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>


