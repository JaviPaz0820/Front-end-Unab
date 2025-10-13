<template>
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

    <p class="resultado">
      Seleccionado: <strong>{{ estudios }}</strong>
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const estudios = ref('Universitarios')
</script>

<style scoped>
.form-section {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 1rem;
}
.radio-group {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
.resultado {
  margin-top: .8rem;
  font-style: italic;
}
</style>

