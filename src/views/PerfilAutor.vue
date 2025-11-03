<template>
  <div class="container py-5 text-center">
    <h2 class="mb-3">Perfil del Autor: {{ nombre }}</h2>
    <img :src="autorInfo.foto" class="rounded-circle mb-3" width="150" height="150" alt="foto autor">
    <p class="lead">{{ autorInfo.bio }}</p>

    <h4 class="mt-4">Recetas destacadas</h4>
    <div class="row justify-content-center mt-3">
      <div v-for="r in autorInfo.recetas" :key="r.id" class="col-md-3 mb-3">
        <div class="card shadow-sm h-100">
          <img :src="r.img" class="card-img-top" alt="receta del autor">
          <div class="card-body">
            <h6>{{ r.nombre }}</h6>
            <router-link :to="`/receta/${r.id}`" class="btn btn-sm btn-outline-primary">Ver receta</router-link>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/" class="btn btn-secondary mt-4">Volver al inicio</router-link>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps(['nombre'])
const autorInfo = ref({ foto: '', bio: '', recetas: [] })

// Datos simulados de autores
const autoresData = {
  "Chef Maria": {
    foto: 'https://png.pngtree.com/png-clipart/20241203/original/pngtree-a-chef-hat-wearing-woman-with-smile-png-image_17485131.png',
    bio: 'Apasionada por la repostería artesanal y los sabores caseros.',
    recetas: [
      { id: 101, nombre: 'Brownie de chocolate', img: 'https://cdn.blogsthermomix.es/media/Posts/attachments/2b44f5ef4e8c2c0577defbbbe3157cc6.jpg' },
      { id: 103, nombre: 'Cheesecake de maracuyá', img: 'https://velvetbakery.cl/cdn/shop/files/Capturadepantalla2024-05-09ala_s_13.01.38.png?v=1715968292&width=1445' }
    ]
  },
  "Chef Jose": {
    foto: 'https://source.unsplash.com/150x150/?male-chef',
    bio: 'Cocinero italiano experto en postres con café y cacao.',
    recetas: [
      { id: 102, nombre: 'Tiramisú clásico', img: 'https://source.unsplash.com/400x300/?tiramisu' }
    ]
  }
}

// Cargar los datos según el nombre recibido
onMounted(() => {
  autorInfo.value = autoresData[props.nombre] || {
    foto: 'https://img.freepik.com/vector-premium/dibujos-animados-lindo-chef-hombre-dando-pulgar_43605-4207.jpg',
    bio: 'Autor desconocido o sin información disponible.',
    recetas: []
  }
})
</script>

<style scoped>
.card-img-top {
  height: 180px;
  object-fit: cover;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
