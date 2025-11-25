<template>
  <section class="skillset-wrapper">
    <h2>Skillset</h2>

    <!-- HARD SKILLS -->
    <div class="skill-section">
      <div class="section-head">
        <h3>Hard Skills</h3>
        <p class="muted small">Conocimientos técnicos y herramientas que manejo</p>
      </div>

      <div class="carousel-area">
        <button class="ctrl" @click="scroll('hard', -1)">‹</button>

        <div class="carousel" ref="hardCarousel">
          <article 
            v-for="s in hardSkills" 
            :key="s.key" 
            class="skill-card" 
            v-intersect
          >
            <div class="icon" v-html="s.icon"></div>
            <h4 class="skill-title">{{ s.title }}</h4>
            <p class="skill-desc">{{ s.desc }}</p>
          </article>
        </div>

        <button class="ctrl" @click="scroll('hard', 1)">›</button>
      </div>
    </div>

    <!-- SOFT SKILLS -->
    <div class="skill-section">
      <div class="section-head">
        <h3>Soft Skills</h3>
        <p class="muted small">Habilidades personales y de trabajo en equipo</p>
      </div>

      <div class="carousel-area">
        <button class="ctrl" @click="scroll('soft', -1)">‹</button>

        <div class="carousel" ref="softCarousel">
          <article 
            v-for="s in softSkills" 
            :key="s.key" 
            class="skill-card" 
            v-intersect
          >
            <div class="icon" v-html="s.icon"></div>
            <h4 class="skill-title">{{ s.title }}</h4>
            <p class="skill-desc">{{ s.desc }}</p>
          </article>
        </div>

        <button class="ctrl" @click="scroll('soft', 1)">›</button>
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
  if (!el) return

  const card = el.querySelector(".skill-card")
  if (!card) return

  el.scrollBy({
    left: dir * card.offsetWidth,
    behavior: "smooth"
  })
}

/* === SKILLS DATA === */
const hardSkills = [
  { key:'vue', title:'Vue.js 3', desc:'Componentes reusables, Composition API, optimización de rendimiento', icon:`<svg width="40" height="40"><path d="M12 2 3 21h6l3-6 3 6h6L12 2z" fill="#7c5cff"/></svg>` },
  { key:'git', title:'Git', desc:'Control de versiones, branches y buenas prácticas', icon:`<svg width="40" height="40"><circle cx="12" cy="12" r="10" fill="#f05032"/></svg>` },
  { key:'seo', title:'SEO', desc:'Optimización de accesibilidad y rendimiento', icon:`<svg width="40" height="40"><rect width="20" height="20" x="2" y="2" rx="4" fill="#6ee7b7"/></svg>` },
  { key:'ux', title:'UX', desc:'Diseño centrado en el usuario y prototipado', icon:`<svg width="40" height="40"><path d="M4 12h16M12 4v16" stroke="#7c5cff" stroke-width="2"/></svg>` },
  { key:'webdev', title:'Web Development', desc:'HTML5, CSS3, JS ES6+ y accesibilidad', icon:`<svg width="40" height="40"><rect width="20" height="14" x="2" y="5" rx="2" fill="#9aa3ad"/></svg>` }
]

const softSkills = [
  { key:'com', title:'Comunicación', desc:'Claridad al transmitir ideas y feedback efectivo', icon:`<svg width="40" height="40"><circle cx="12" cy="12" r="10" fill="#7c5cff"/></svg>` },
  { key:'team', title:'Trabajo en equipo', desc:'Empatía, cooperación y responsabilidad', icon:`<svg width="40" height="40"><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" fill="#6ee7b7"/></svg>` },
  { key:'problem', title:'Resolución de problemas', desc:'Pensamiento analítico y soluciones prácticas', icon:`<svg width="40" height="40"><path d="M12 2v6" stroke="#6ee7b7" stroke-width="2"/></svg>` },
  { key:'adapt', title:'Adaptabilidad', desc:'Flexibilidad ante cambios y aprendizaje rápido', icon:`<svg width="40" height="40"><path d="M12 2c2 2 4 4 6 6" stroke="#9aa3ad" stroke-width="2"/></svg>` }
]
</script>

<style scoped>
.skillset-wrapper{
  display:flex;
  flex-direction:column;
  gap:32px;
}

/***************************
  TITULOS
****************************/
.section-head{
  display:flex;
  flex-direction:column;
  gap:4px;
}

/***************************
  CARRUSEL
****************************/
.carousel-area{
  display:flex;
  align-items:center;
  gap:12px;
}

.ctrl{
  width:42px;
  height:42px;
  border-radius:50%;
  background:var(--glass);
  border:1px solid rgba(255,255,255,0.1);
  font-size:22px;
  cursor:pointer;
}

/* Scroll */
.carousel{
  display:flex;
  gap:16px;
  overflow-x:auto;
  padding:8px;
  scroll-behavior:smooth;
  scrollbar-width:none;
  scroll-snap-type:x mandatory;
}
.carousel::-webkit-scrollbar{ display:none; }

/***************************
  TARJETAS
****************************/
.skill-card{
  background:var(--card);
  border-radius:12px;
  padding:16px;
  display:flex;
  flex-direction:column;
  gap:10px;
  box-shadow:0 6px 18px rgba(0,0,0,0.35);
  scroll-snap-align:center;
}

/***************************
  MOBILE — SOLO UNA TARJETA
****************************/
@media(max-width: 700px){
  .skill-card{
    min-width: 100%;
    max-width: 100%;
  }

  .ctrl{
    width:36px;
    height:36px;
    font-size:18px;
  }
}

/***************************
  DESKTOP
****************************/
@media(min-width: 701px){
  .skill-card{
    min-width: 240px;
    max-width: 240px;
  }
}
</style>


