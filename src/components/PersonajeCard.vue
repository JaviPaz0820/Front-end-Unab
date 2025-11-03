<template>
  <div class="card">
    <img :src="imagen" :alt="nombre" class="card-img" />
    <div class="card-content">
      <h3>{{ nombre }}</h3>
      <p>{{ descripcion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonajeCard',
  props: {
    nombre: String,
    descripcion: String,
    imagen: String
  }
}
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s;
  width: 220px;
  text-align: center;
}
.card:hover {
  transform: translateY(-5px);
}
.card-img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  background-color: #f8f9fa;
}
.card-content {
  padding: 1rem;
}
h3 {
  margin: 0;
  color: #333;
  font-weight: 600;
}
p {
  font-size: 0.9rem;
  color: #666;
}
</style>
