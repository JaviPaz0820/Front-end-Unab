<template>
  <div class="container py-5">
    <h1 class="mb-4 text-center">Bienvenido a RecetasPro</h1>
    <p class="lead text-center">Descubre recetas deliciosas, fáciles y rápidas</p>
    <div class="row mt-5">
      <div v-for="receta in recetas" :key="receta.id" class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="receta.img" class="card-img-top" alt="receta">
          <div class="card-body">
            <h5 class="card-title">{{ receta.nombre }}</h5>
            <router-link :to="`/receta/${receta.id}`" class="btn btn-primary">Ver receta</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const recetas = [
  { id: 1, nombre: 'Tarta de Manzana', img: 'https://www.recetassinlactosa.com/wp-content/uploads/2023/11/Tarta-de-manzana-americana.jpg' },
  { id: 2, nombre: 'Smoothie de Fresa', img: 'https://d36fw6y2wq3bat.cloudfront.net/recipes/smoothie-de-fresa-y-pina/900/smoothie-de-fresa-y-pina_version_1670408069.jpg' },
  { id: 3, nombre: 'Empanadas Chilenas', img: 'https://gourmet.iprospect.cl/wp-content/uploads/2016/09/Empanadas-web-1.jpg' }
]
</script>

