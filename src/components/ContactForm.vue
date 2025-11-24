<template>
  <section class="card">
    <h2>Contacto</h2>

    <form @submit.prevent="submit" style="display:grid; gap:10px; margin-top:12px">
      <input v-model="form.name" placeholder="Nombre" required>
      <input v-model="form.email" type="email" placeholder="Email" required>
      <textarea v-model="form.msg" placeholder="Mensaje" rows="4"></textarea>

      <button class="btn" type="submit">Enviar</button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ name:'', email:'', msg:'' })

function submit(){
  const subject = encodeURIComponent(`Contacto: ${form.name}`)
  const body = encodeURIComponent(`${form.msg}\n\nEmail: ${form.email}`)
  window.location.href = `mailto:tu-email@ejemplo.com?subject=${subject}&body=${body}`
}
</script>

<style scoped>
input,textarea{
  background:transparent;
  border:1px solid var(--glass);
  padding:10px;
  border-radius:8px;
  color:white;
}
</style>
