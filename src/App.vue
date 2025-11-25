<template>
  <Header />

  <main>
    <!-- HERO + SIDEGRAPHICS -->
    <section class="container" id="inicio">
      <div class="hero-grid">
        <!-- ORDEN CONTROLADO CON CSS -->
        <HeroSection class="hero-section" />
        <SideGraphics class="sidegraphics" />
      </div>
    </section>

    <!-- PROYECTOS -->
    <section class="container" id="proyectos">
      <Projects :items="projects" />
    </section>

    <!-- SKILLSET -->
    <section class="container" id="skillset">
      <Skillset />
    </section>

    <!-- CONTACTO -->
    <section class="container" id="contacto">
      <ContactForm />
    </section>
  </main>

  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import SideGraphics from './components/SideGraphics.vue'
import Projects from './components/Projects.vue'
import Skillset from './components/Skillset.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'

/* Importar imágenes correctamente usando exactamente tus nombres y rutas */
const projects = [
  {
    id: 1,
    image: new URL('/src/assets/Technochile.jpg', import.meta.url).href,
    title: 'Techno Chile',
    desc: 'Demo de una tienda tecnológica desarrollada con Vue 3 y Vite, que presenta un catálogo de productos en un carrusel de tarjetas.',
    tech: ['Vue 3', 'Vite', 'JavaScript', 'CSS', 'Jest', 'Node.js'],
    repo: 'https://github.com/JaviPaz0820/Front-end-Unab/tree/M7-AE4_ABP'
  },
  {
    id: 2,
    image: new URL('/src/assets/pokemon.jpeg', import.meta.url).href,
    title: 'Pokeguía',
    desc: 'Aplicación web desarrollada con Vue 3 + Vite que permite explorar y gestionar una guía de Pokémon, integrando autenticación y almacenamiento en la nube mediante Firebase.',
    tech: ['Vue 3', 'Vite', 'Firebase', 'Tailwind CSS'],
    repo: 'https://github.com/JaviPaz0820/Front-end-Unab/tree/M7-AE2_ABP2'
  },
  {
    id: 3,
    image: new URL('/src/assets/recetas.webp', import.meta.url).href,
    title: 'Web de Recetas',
    desc: 'La plataforma permite explorar recetas sin recargar la página, gracias al uso de Vue Router y rutas dinámicas.',
    tech: ['Vue 3', 'JavaScript', 'Vite', 'CSS'],
    repo: 'https://github.com/JaviPaz0820/Front-end-Unab/tree/M6AE5---ABPRO5'
  },
  {
    id: 4,
    image: new URL('/src/assets/feriados.jpg', import.meta.url).href,
    title: 'Feriados de Chile',
    desc: 'Web que muestra los feriados oficiales de Chile para el año actual.',
    tech: ['HTML', 'CSS + Bootstrap 5', 'JavaScript', 'jQuery', 'API'],
    repo: 'https://github.com/JaviPaz0820/Front-end-Unab/tree/m5ae5-abp5'
  }
]
</script>

<style>
/* ---- HERO + SIDEGRAPHICS GRID ---- */
.hero-grid {
  display: grid;
  gap: 32px;
}

/* Desktop → dos columnas (Hero left + Sidegraphics right) */
@media (min-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr 320px;
    align-items: center;
  }

  .hero-section {
    order: 1;
  }

  .sidegraphics {
    order: 2;
  }
}

/* Mobile → una columna (Sidegraphics ARRIBA) */
@media (max-width: 899px) {
  .hero-grid {
    display: flex;
    flex-direction: column;
  }

  /* ORDEN FINAL EN MOBILE */
  .sidegraphics {
    order: 1; /* Imagen arriba */
    width: 95%;
    max-width: 350px;
    margin-inline: auto;
  }

  .hero-section {
    order: 2; /* Hero abajo */
  }
}

/* Contenedores globales */
.container {
  margin-inline: auto;
  width: min(1200px, 90%);
  padding-block: 60px;
}
</style>

