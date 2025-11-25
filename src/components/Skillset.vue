<template>
  <section class="skillset-wrapper">
    <h2>Skillset</h2>

    <!-- Hard Skills -->
    <div class="skill-section">
      <div class="section-head">
        <h3>Hard Skills</h3>
        <p class="muted small">Conocimientos técnicos y herramientas que manejo</p>
      </div>

      <div class="carousel-area">
        <button class="ctrl" @click="scroll('hard', -1)" aria-label="Scroll left">‹</button>

        <div class="carousel" ref="hardCarousel">
          <article v-for="s in hardSkills" :key="s.key" class="skill-card" v-intersect>
            <div class="icon" v-html="s.icon"></div>
            <h4 class="skill-title">{{ s.title }}</h4>
            <p class="skill-desc">{{ s.desc }}</p>
          </article>
        </div>

        <button class="ctrl" @click="scroll('hard', 1)" aria-label="Scroll right">›</button>
      </div>
    </div>

    <!-- Soft Skills -->
    <div class="skill-section">
      <div class="section-head">
        <h3>Soft Skills</h3>
        <p class="muted small">Habilidades personales y de trabajo en equipo</p>
      </div>

      <div class="carousel-area">
        <button class="ctrl" @click="scroll('soft', -1)" aria-label="Scroll left">‹</button>

        <div class="carousel" ref="softCarousel">
          <article v-for="s in softSkills" :key="s.key" class="skill-card" v-intersect>
            <div class="icon" v-html="s.icon"></div>
            <h4 class="skill-title">{{ s.title }}</h4>
            <p class="skill-desc">{{ s.desc }}</p>
          </article>
        </div>

        <button class="ctrl" @click="scroll('soft', 1)" aria-label="Scroll right">›</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const hardCarousel = ref(null)
const softCarousel = ref(null)

function scroll(which, dir){
  const el = which === 'hard' ? hardCarousel.value : softCarousel.value
  if(!el) return
  const step = el.clientWidth * 0.6
  el.scrollBy({ left: dir * step, behavior: 'smooth' })
}

const hardSkills = [
  {
    key: 'vue',
    title: 'Vue.js 3',
    desc: 'Componentes reusables, Composition API, optimización de rendimiento',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24"><path d="M12 2 3 21h6l3-6 3 6h6z" fill="#7c5cff"/></svg>`
  },
  {
    key: 'git',
    title: 'Git',
    desc: 'Control de versiones, branches, pull requests y buenas prácticas de commit',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#f05032"/></svg>`
  },
  {
    key: 'seo',
    title: 'Optimización SEO',
    desc: 'Meta tags, rendimiento, accesibilidad y buenas prácticas on-page',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="#6ee7b7"/></svg>`
  },
  {
    key: 'ux',
    title: 'UX',
    desc: 'Diseño centrado en el usuario, prototipado y pruebas de usabilidad',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24"><path d="M4 12h16M12 4v16" stroke="#7c5cff" stroke-width="1.6" /></svg>`
  },
  {
    key: 'webdev',
    title: 'Web Development',
    desc: 'HTML5, CSS3 (Grid/Flex), JS ES6+, rendimiento y accesibilidad',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="#9aa3ad"/></svg>`
  }
]

const softSkills = [
  {
    key: 'com',
    title: 'Comunicación',
    desc: 'Claridad al transmitir ideas y feedback constructivo',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#7c5cff"/></svg>`
  },
  {
    key: 'team',
    title: 'Trabajo en equipo',
    desc: 'Cooperación, empatía y responsabilidad en entregas',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24"><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" fill="#6ee7b7"/></svg>`
  },
  {
    key: 'problem',
    title: 'Resolución de problemas',
    desc: 'Enfoque analítico y búsqueda de soluciones prácticas',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24"><path d="M12 2v6" stroke="#6ee7b7" stroke-width="1.6"/></svg>`
  },
  {
    key: 'adapt',
    title: 'Adaptabilidad',
    desc: 'Aprendizaje rápido y flexibilidad ante cambios de requerimientos',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24"><path d="M12 2c2 2 4 4 6 6" stroke="#9aa3ad" stroke-width="1.6"/></svg>`
  }
]
</script>

<style scoped>
.skillset-wrapper{
  display:flex;
  flex-direction:column;
  gap:28px;
}

.skill-section{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.section-head{
  display:flex;
  flex-direction:column;
  gap:6px;
}

.carousel-area{
  display:flex;
  align-items:center;
  gap:12px;
}

.ctrl{
  width:40px;
  height:40px;
  border-radius:50%;
  background:var(--glass);
  border:1px solid rgba(255,255,255,0.04);
  color:var(--muted);
  font-size:20px;
}

.carousel{
  display:flex;
  gap:14px;
  overflow-x:auto;
  scroll-behavior:smooth;
  padding:8px 6px;
  scrollbar-width:none;
  -webkit-overflow-scrolling:touch;
  flex:1 1 auto;
}
.carousel::-webkit-scrollbar{ display:none; }

.skill-card{
  min-width:220px;
  max-width:220px;
  background:var(--card);
  border-radius:12px;
  padding:14px;
  display:flex;
  flex-direction:column;
  gap:8px;
  align-items:flex-start;
  box-shadow:0 6px 18px rgba(0,0,0,0.45);
  flex-shrink:0;
}

.icon{
  width:48px;
  height:48px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.skill-title{ margin:0; font-size:15px }
.skill-desc{ margin:0; color:var(--muted); font-size:13px }

/* ----------------------------- */
/*   RESPONSIVE SOLO PARA MOBILE */
/* ----------------------------- */

@media (max-width: 700px){

  /* Quitar padding que rompe Safari */
  .carousel{
    padding:0 !important;
  }

  /* 1 tarjeta exacta por pantalla */
  .skill-card{
    min-width: calc(100% - 32px);
    max-width: calc(100% - 32px);
    margin-inline: 16px;
    scroll-snap-align: center;
  }

  .carousel{
    scroll-snap-type:x mandatory;
  }

  /* Ocultar flechas en mobile */
  .ctrl{
    display:none;
  }
}

/* Desktop normal */
@media(min-width:900px){
  .skill-card{
    min-width:240px;
    max-width:240px;
  }
}
</style>




