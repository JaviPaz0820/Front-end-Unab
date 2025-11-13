<template>
  <div>
    <h1>Listado de posts (fetch server-side)</h1>
    <div v-if="pending">Cargando...</div>
    <ul v-else>
      <li v-for="post in data" :key="post.id">
        <strong>{{ post.title }}</strong>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
if (error.value) {
  console.error('Fetch error', error.value)
}
</script>
