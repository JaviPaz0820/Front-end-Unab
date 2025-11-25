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
          <article v-for="s in hardSkills" :key="s.key" class="skill-card">
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
          <article v-for="s in softSkills" :key="s.key" class="skill-card">
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
import { ref } from "vue";

const hardCarousel = ref(null);
const softCarousel = ref(null);

function scroll(which, dir) {
  const el = which === "hard" ? hardCarousel.value : softCarousel.value;
  if (!el) return;

  const card = el.querySelector(".skill-card");
  if (!card) return;

  el.scrollBy({
    left: dir * card.offsetWidth,
    behavior: "smooth",
  });
}

/* === SKILLS === */
const hardSkills = [
  { key:'vue', title:'Vue.js 3', desc:'Componentes reusables, Composition API', icon:`<svg width="40"><path d="M12 2 3 21h6l3-6 3 6h6z" fill="#7c5cff"/></svg>` },
  { key:'git', title:'Git', desc:'Control de versiones y buenas prácticas', icon:`<svg width="40"><circle cx="12" cy="12" r="10" fill="#f05032"/></svg>` },
  { key:'seo', title:'SEO', desc:'Rendimiento y accesibilidad', icon:`<svg width="40"><rect width="20" height="20" x="2" y="2" fill="#6ee7b7"/></svg>` },
  { key:'ux', title:'UX', desc:'Prototipado y usabilidad', icon:`<svg width="40"><path d="M4 12h16M12 4v16" stroke="#7c5cff" stroke-width="2"/></svg>` },
  { key:'webdev', title:'Web Dev', desc:'HTML, CSS, JS', icon:`<svg width="40"><rect width="20" height="14" x="2" y="5" fill="#9aa3ad"/></svg>` }
];

const softSkills = [
  { key:'com', title:'Comunicación', desc:'Feedback claro', icon:`<svg width="40"><circle cx="12" cy="12" r="10" fill="#7c5cff"/></svg>` },
  { key:'team', title:'Trabajo en equipo', desc:'Colaboración y empatía', icon:`<svg width="40"><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" fill="#6ee7b7"/></svg>` },
  { key:'problem', title:'Resolución de problemas', desc:'Pensamiento lógico', icon:`<svg width="40"><path d="M12 2v6" stroke="#6ee7b7" stroke-width="2"/></svg>` },
  { key:'adapt', title:'Adaptabilidad', desc:'Aprendizaje rápido', icon:`<svg width="40"><path d="M12 2c2 2 4 4 6 6" stroke="#9aa3ad" stroke-width="2"/></svg>` }
];
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.skillset-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* CARRUSEL */
.carousel-area {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ctrl {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--glass);
  border: 1px solid rgba(255,255,255,0.1);
}

.carousel {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  flex: 1;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar { display: none; }

/***************************
    TARJETAS - DESKTOP
***************************/
.skill-card {
  min-width: 240px;
  max-width: 240px;
  background: var(--card);
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.35);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/***************************
    MOBILE  — 100% RESPONSIVO
***************************/
@media (max-width: 700px) {
  .carousel {
    scroll-snap-type: x mandatory;
    padding: 0;
  }

  .skill-card {
    min-width: calc(100vw - 40px);
    max-width: calc(100vw - 40px);
    scroll-snap-align: center;
    margin-inline: 5px;
  }

  .ctrl {
    display: none; /* botones fuera en mobile */
  }
}
</style>



