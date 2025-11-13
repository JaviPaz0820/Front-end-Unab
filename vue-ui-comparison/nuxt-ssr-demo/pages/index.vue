<template>
  <div class="container">
    <h1>Mi Aplicación SSR con Nuxt 3</h1>
    <p>Esta página está renderizada en el servidor 🖥️</p>

    <h2>Usuarios obtenidos desde una API (SSR)</h2>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
    </ul>

    <button @click="refreshData">Actualizar datos</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFetch } from '#app'

// Llamada SSR: se ejecuta en el servidor antes de enviar HTML al cliente
const { data: users, refresh } = await useFetch('https://jsonplaceholder.typicode.com/users')

// También puedes forzar un refresco desde el cliente
const refreshData = () => {
  refresh()
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}
h1 {
  color: #00c58e;
}
button {
  background-color: #00c58e;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}
button:hover {
  background-color: #009c72;
}
</style>
