<template>
  <div class="container py-5">
    <div v-if="receta">
      <h2 class="mb-3 text-center">{{ receta.nombre }}</h2>
      <div class="text-center">
        <img :src="receta.img" class="img-fluid rounded shadow mb-4" alt="imagen de la receta" style="max-height: 400px; object-fit: cover;">
      </div>
      <div class="bg-light p-4 rounded">
        <p class="lead">{{ receta.descripcion }}</p>
        <p><strong>Autor:</strong> {{ receta.autor }}</p>
      </div>
      <div class="text-center mt-4">
        <router-link to="/" class="btn btn-outline-primary">Volver al inicio</router-link>
      </div>
    </div>

    <div v-else class="text-center py-5">
      <h3>Receta no encontrada</h3>
      <router-link to="/" class="btn btn-secondary mt-3">Volver</router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps(['id'])
const receta = ref(null)

const recetasData = [
  { id: 101, nombre: 'Brownie de chocolate', descripcion: 'Un postre húmedo, ideal con helado. Preparado con chocolate amargo, nueces y un toque de vainilla.', autor: 'Chef María', img: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2016/11/brownie-de-chocolate.jpg' },
  { id: 102, nombre: 'Tiramisú clásico', descripcion: 'Cremoso y con sabor a café italiano. Capas de bizcocho empapado en café, crema de mascarpone y cacao.', autor: 'Chef José', img: 'https://www.paulinacocina.net/wp-content/uploads/2020/01/receta-de-tiramisu-facil-y-economico-1740483918.jpg' },
  { id: 201, nombre: 'Café helado', descripcion: 'Refrescante bebida con aroma intenso. Servido con hielo, leche y un toque de vainilla.', autor: 'Barista Ana', img: 'https://imag.bonviveur.com/portada-cafe-helado.jpg' }
]

onMounted(() => {
  receta.value = recetasData.find(r => r.id === Number(props.id))
})
</script>


