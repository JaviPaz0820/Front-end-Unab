<template>
  <div class="row">
    <div class="col-md-4" v-for="b in bebidas" :key="b.id">
      <div class="card mb-4 shadow-sm">
        <img :src="b.img" class="card-img-top" alt="imagen de bebida">
        <div class="card-body">
          <h5 class="card-title">{{ b.nombre }}</h5>
          <p class="card-text text-muted">{{ b.descripcion }}</p>
          <router-link :to="`/receta/${b.id}`" class="btn btn-success btn-sm">
            Ver receta
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const bebidas = [
  {
    id: 201,
    nombre: 'Jugo natural de mango',
    descripcion: 'Refrescante y tropical, ideal para el verano.',
    img: 'https://media.istockphoto.com/id/904617420/es/foto/batido-de-mango-fresco-en-el-cristal.jpg?s=612x612&w=0&k=20&c=OcQdYv8GzMU6EWoZqOKIEJUlUk_XXCyNaoFery8Uauw='
  },
  {
    id: 202,
    nombre: 'Café helado',
    descripcion: 'Ideal para días calurosos.',
    img: 'https://imag.bonviveur.com/portada-cafe-helado.jpg'
  },
  {
    id: 203,
    nombre: 'Té verde con limón',
    descripcion: 'Una bebida ligera y antioxidante.',
    img: 'https://cdn0.uncomo.com/es/posts/1/7/5/beneficios_del_te_verde_con_limon_en_ayunas_46571_orig.jpg'
  }
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

