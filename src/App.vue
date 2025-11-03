<template>
  <div id="app">
    <PersonajesList />
  </div>
</template>

<script>
import PersonajesList from './components/PersonajesList.vue'

export default {
  name: 'App',
  components: { PersonajesList }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f7f9fc, #e3f2fd);
  color: #333;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
