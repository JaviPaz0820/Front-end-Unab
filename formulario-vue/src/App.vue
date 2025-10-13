<template>
  <main class="container">
    <h1>Formulario</h1>

    <form @submit.prevent="handleSubmit" class="formulario">
      <section class="form-section">
        <h2>Tipo de estudios</h2>
        <div class="radio-group">
          <label>
            <input type="radio" value="Primarios" v-model="estudios" />
            Primarios
          </label>
          <label>
            <input type="radio" value="Secundarios" v-model="estudios" />
            Secundarios
          </label>
          <label>
            <input type="radio" value="Universitarios" v-model="estudios" />
            Universitarios
          </label>
          <label>
            <input type="radio" value="Postgrado" v-model="estudios" />
            Postgrado
          </label>
        </div>
      </section>

      <section class="form-section">
        <h2>Día de la semana</h2>
        <select v-model="diaSeleccionado">
          <option disabled value="">Seleccione un día</option>
          <option v-for="dia in dias" :key="dia" :value="dia">
            {{ dia }}
          </option>
        </select>
      </section>

      <button type="submit" :disabled="!estudios || !diaSeleccionado">
        Enviar
      </button>
    </form>

    <div v-if="enviado" class="resultado">
      <h3>Resumen del formulario</h3>
      <p><strong>Estudios:</strong> {{ estudios }}</p>
      <p><strong>Día elegido:</strong> {{ diaSeleccionado }}</p>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const estudios = ref('Universitarios')
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const diaSeleccionado = ref('')
const enviado = ref(false)

const handleSubmit = () => {
  enviado.value = true
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  font-family: system-ui, sans-serif;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
.formulario {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form-section {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.radio-group {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
button {
  align-self: flex-start;
  padding: .5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #42b883;
  color: white;
  cursor: pointer;
}
button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.resultado {
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 6px;
}
</style>

