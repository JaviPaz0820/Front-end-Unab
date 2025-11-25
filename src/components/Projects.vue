<template>
  <section class="projects-wrapper">
    <h2>Proyectos</h2>

    <div class="carousel-container">
      <div class="carousel" ref="carousel">
        <ProjectCard 
          v-for="p in items" 
          :key="p.id" 
          :project="p" 
        />
      </div>
    </div>

    <!-- Botones flecha -->
    <div class="controls">
      <button class="ctrl-btn" @click="scrollLeft">‹</button>
      <button class="ctrl-btn" @click="scrollRight">›</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

defineProps({ items:Array })

const carousel = ref(null)

function scrollLeft(){
  carousel.value.scrollBy({ left: -350, behavior:'smooth' })
}

function scrollRight(){
  carousel.value.scrollBy({ left: 350, behavior:'smooth' })
}
</script>

<style scoped>
.projects-wrapper{
  display:flex;
  flex-direction:column;
  gap:20px;
}

.carousel-container{
  overflow:hidden;
  width:100%;
}

.carousel{
  display:flex;
  gap:20px;
  overflow-x:auto;
  scroll-behavior:smooth;
  padding:10px 5px;
  scrollbar-width:none; /* Firefox */
}

.carousel::-webkit-scrollbar{
  display:none; /* Chrome */
}

/* Botones del carrusel */
.controls{
  display:flex;
  justify-content:center;
  gap:20px;
  margin-top:10px;
}

.ctrl-btn{
  width:40px;
  height:40px;
  border-radius:50%;
  background:var(--glass);
  border:1px solid var(--accent);
  color:white;
  font-size:22px;
  cursor:pointer;
  transition:.3s;
}

.ctrl-btn:hover{
  background:var(--accent);
  color:black;
}
</style>




