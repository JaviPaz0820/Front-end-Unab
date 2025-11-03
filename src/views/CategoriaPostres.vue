<template>
  <div class="row">
    <div class="col-md-4" v-for="p in postres" :key="p.id">
      <div class="card mb-4 shadow-sm">
        <img :src="p.img" class="card-img-top" alt="imagen de postre">
        <div class="card-body">
          <h5 class="card-title">{{ p.nombre }}</h5>
          <p class="card-text text-muted">{{ p.descripcion }}</p>
          <router-link :to="`/receta/${p.id}`" class="btn btn-danger btn-sm">
            Ver receta
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const postres = [
  { id: 101, nombre: 'Brownie de chocolate', descripcion: 'Suave y húmedo, ideal para acompañar con helado.', img: 'https://www.recetasderechupete.com/wp-content/uploads/2019/11/Brownie-1200x828.jpg' },
  { id: 102, nombre: 'Tiramisú clásico', descripcion: 'Un postre italiano con mascarpone y café.', img: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2022/08/tiramisu-postre-italiano.jpg' },
  { id: 103, nombre: 'Cheesecake de maracuyá', descripcion: 'Fresco y cremoso, con base crocante.', img: 'https://www.recetasnestle.cl/sites/default/files/srh_recipes/6a60d55d0a1ccf2f24b4cc6b961adb5f.jpg' }
]
</script>

<style scoped>
.card {
  border: none;
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
}
.card-img-top {
  height: 200px;
  object-fit: cover;
  width: 100%;
}
</style>

