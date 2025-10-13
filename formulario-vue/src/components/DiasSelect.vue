<template>
  <section class="form-section">
    <h2>Día de la semana</h2>

    <select v-model="diaSeleccionado">
      <option disabled value="">Seleccione un día</option>
      <option v-for="dia in dias" :key="dia" :value="dia">
        {{ dia }}
      </option>
    </select>

    <p v-if="diaSeleccionado" class="resultado">
      Día seleccionado: <strong>{{ diaSeleccionado }}</strong>
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const diaSeleccionado = ref('')
</script>

<style scoped>
select {
  margin-top: .5rem;
  padding: .3rem .5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.resultado {
  margin-top: .8rem;
  font-style: italic;
}
</style>

