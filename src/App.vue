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
  background-color: #f4f6f8;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

.container {
  max-width: 900px;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-weight: 600;
  color: #0d6efd;
}

.table {
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
}

.table-dark th {
  background-color: #0d6efd !important;
  color: white !important;
}

tr:nth-child(even) {
  background-color: #f9fbfd;
}

tr:hover {
  background-color: #e9f3ff;
  transition: background-color 0.3s ease;
}
</style>


