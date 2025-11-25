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
          <article v-for="s in hardSkills" :key="s.key" class="skill-card" v-intersect>
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
          <article v-for="s in softSkills" :key="s.key" class="skill-card" v-intersect>
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
  if(!el) return
  el.scrollBy({
    left: dir * (el.clientWidth * 0.65),
    behavior: 'smooth'
  })
}

/* DATOS */
const hardSkills = [
  { key:'vue',     title:'Vue.js 3',            desc:'Componentes reusables, Composition API, optimización de rendimiento', icon:`<svg width="40" height="40" viewBox="0 0 24 24"><path d="M12 2 3 21h6l3-6 3 6h6L12 2z" fill="url(#g)"/><defs><linearGradient id="g"><stop offset="0" stop-color="#6ee7b7"/><stop offset="1" stop-color="#7c5cff"/></linearGradient></defs></svg>` },
  { key:'git',     title:'Git',                 desc:'Control de versiones, branches y buenas prácticas', icon:`<svg width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#f05032"/></svg>` },
  { key:'seo',     title:'Optimización SEO',    desc:'Meta tags, accesibilidad y rendimiento web', icon:`<svg width="40" height="40"><rect x="3" y="3" width="18" height="18" rx="4" fill="#6ee7b7"/></svg>` },
  { key:'ux',      title:'UX',                  desc:'Diseño centrado en el usuario y prototipado', icon:`<svg width="40" height="40"><path d="M4 12h16M12 4v16" stroke="#7c5cff" stroke-width="2"/></svg>` },
  { key:'webdev',  title:'Web Development',     desc:'HTML5, CSS3, JS ES6+ y accesibilidad', icon:`<svg width="40" height="40"><rect x="3" y="4" width="18" height="16" rx="2" fill="#9aa3ad"/></svg>` }
]

const softSkills = [
  { key:'com',      title:'Comunicación',          desc:'Claridad al transmitir ideas y feedback efectivo', icon:`<svg width="40" height="40"><circle cx="12" cy="12" r="10" fill="#7c5cff"/></svg>` },
  { key:'team',     title:'Trabajo en equipo',      desc:'Cooperación, empatía y responsabilidad compartida', icon:`<svg width="40" height="40"><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" fill="#6ee7b7"/></svg>` },
  { key:'problem',  title:'Resolución de problemas',desc:'Enfoque lógico y soluciones prácticas', icon:`<svg width="40" height="40"><path d="M12 2v6" stroke="#6ee7b7" stroke-width="2"/></svg>` },
  { key:'adapt',    title:'Adaptabilidad',         desc:'Aprendizaje rápido y manejo de cambios', icon:`<svg width="40" height="40"><path d="M12 2c2 2 4 4 6 6" stroke="#9aa3ad" stroke-width="2"/></svg>` }
]
</script>

<style scoped>
.skillset-wrapper{
  display:flex;
  flex-direction:column;
  gap:32px;
  width: 100%;
}

/* --- SECCIÓN GENERAL --- */
.skill-section{
  display:flex;
  flex-direction:column;
  gap:14px;
}

.section-head{
  display:flex;
  flex-direction:column;
  gap:4px;
}

/* --- CARRUSEL --- */
.carousel-area{
  display:flex;
  align-items:center;
  gap:10px;
}

/* Botones */
.ctrl{
  width:42px;
  height:42px;
  border-radius:50%;
  background:var(--glass);
  border:1px solid rgba(255,255,255,0.1);
  font-size:22px;
  color:var(--muted);
  cursor:pointer;
  transition:.2s;
}

.ctrl:hover{
  transform:scale(1.08);
}

/* Contenedor desplazable */
.carousel{
  display:flex;
  gap:14px;
  overflow-x:auto;
  scroll-behavior:smooth;
  padding:8px;
  scrollbar-width:none;
}
.carousel::-webkit-scrollbar{ display:none; }

/* Tarjetas */
.skill-card{
  min-width:210px;
  max-width:210px;
  background:var(--card);
  border-radius:12px;
  padding:16px;
  display:flex;
  flex-direction:column;
  gap:10px;
  align-items:flex-start;
  box-shadow:0 6px 18px rgba(0,0,0,0.35);
  transition:.2s;
}

.skill-card:hover{
  transform:translateY(-4px);
}

/* Icono */
.icon{
  width:48px;
  height:48px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:4px;
}

/* Textos */
.skill-title{
  margin:0;
  font-size:15px;
  font-weight:600;
}

.skill-desc{
  margin:0;
  font-size:13px;
  color:var(--muted);
  line-height:1.3;
}

/* --- MOBILE --- */
@media(max-width: 700px){

  .carousel-area{
    gap:6px;
  }

  .ctrl{
    width:38px;
    height:38px;
    font-size:18px;
  }

  .skill-card{
    min-width:180px;
    max-width:180px;
    padding:14px;
  }

  .icon{
    width:42px;
    height:42px;
  }

  .skill-title{ font-size:14px; }
  .skill-desc{ font-size:12px; }
}

/* --- DESKTOP --- */
@media(min-width:900px){
  .skill-card{
    min-width:240px;
    max-width:240px;
  }
}
</style>

