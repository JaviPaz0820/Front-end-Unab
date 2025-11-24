<template>
  <section class="card hero" v-intersect>
    <h1>Javiera Ampuero Millaquipai</h1>

    <p class="muted subtitle">
      Kinesióloga | Desarrolladora Front-End Jr | Marketing Digital
    </p>

    <p class="muted about">
      Kinesióloga y Desarrolladora Front-End orientada al diseño funcional, accesible y centrado en la experiencia del usuario. Me apasiona crear interfaces modernas con Vue, optimizar el rendimiento y cuidar cada detalle visual. Combino mi formación en salud, marketing digital y tecnología para aportar soluciones claras, empáticas y eficientes.
    </p>

    <!-- Iconos de contacto -->
    <div class="social-row">
      <a :href="github" target="_blank" class="icon-link" aria-label="GitHub">
        <svg width="26" height="26" fill="#e6eef2" viewBox="0 0 24 24">
          <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.5 1.5 2.5 1.5.4.9.9 1.1 1.4.9v-2.5C7 18.9 5 17.9 5 14.5c0-1.2.4-2.1 1.1-2.9-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.9 1.1a9.3 9.3 0 0 1 5.3 0c2-1.4 2.9-1.1 2.9-1.1.5 1.4.2 2.4.1 2.7.7.8 1.1 1.7 1.1 2.9 0 3.4-2 4.4-5.1 4.6v2.7c0 .4.2.8.8.6A12 12 0 0 0 12 .5"/>
        </svg>
      </a>

      <a :href="linkedin" target="_blank" class="icon-link" aria-label="LinkedIn">
        <svg width="26" height="26" fill="#e6eef2" viewBox="0 0 24 24">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12H3v-12zm7 0h3.7v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v6.2h-4v-5.5c0-1.3 0-3-2-3s-2.3 1.4-2.3 2.9v5.6h-4v-12z"/>
        </svg>
      </a>
    </div>

  </section>
</template>

<script setup>
const github = 'https://github.com/JaviPaz0820'
const linkedin = 'https://www.linkedin.com/in/javiera-ampuero-65247a36b/'
</script>

<style scoped>
.hero{
  text-align:left;
  display:flex;
  flex-direction:column;
  gap:12px;
}

.subtitle{
  margin-top:-10px;
}

.about{
  margin-top:6px;
  line-height:1.5;
}

.social-row{
  margin-top:14px;
  display:flex;
  gap:16px;
}

.icon-link{
  display:inline-flex;
  transition:.3s;
}

.icon-link:hover{
  transform:scale(1.1);
  color:var(--accent);
}
</style>
