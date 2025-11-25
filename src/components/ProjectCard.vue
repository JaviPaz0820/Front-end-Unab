<template>
  <article class="card project-card" v-intersect>
    <div class="thumb-wrap">
      <img :src="project.image" class="thumb" :alt="project.title" />
    </div>

    <div class="content">
      <h3 class="title">{{ project.title }}</h3>

      <p class="desc">{{ project.desc }}</p>

      <div class="tech-list">
        <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
      </div>
    </div>

    <div class="cta">
      <a :href="project.repo" target="_blank" class="btn">Repositorio</a>
    </div>
  </article>
</template>

<script setup>
defineProps({ project: Object })
</script>

<style scoped>
.project-card{
  width:320px;
  min-width:320px;
  height:460px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:14px;
  gap:12px;
  background:var(--card);
  border-radius:12px;
  box-shadow:0 8px 24px rgba(2,6,8,0.6);
  flex-shrink:0; /* FIX para safari */
}

.thumb-wrap{
  width:100%;
  height:170px;
  border-radius:10px;
  overflow:hidden;
  background:#081215;
}

.thumb{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:transform .6s cubic-bezier(.2,.9,.2,1);
}
.thumb-wrap:hover .thumb{
  transform:scale(1.03);
}

.content{
  display:flex;
  flex-direction:column;
  gap:8px;
  flex:1 1 auto;
}

.title{
  margin:0;
  font-size:16px;
  line-height:1.2;
}

.desc{
  margin:0;
  color:var(--muted);
  font-size:13px;
  line-height:1.4;
  display:-webkit-box;
  -webkit-line-clamp:4;
  -webkit-box-orient:vertical;
  overflow:hidden;
}

.tech-list{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
  margin-top:6px;
}

.tag{
  background:var(--glass);
  color:var(--muted);
  padding:6px 8px;
  border-radius:8px;
  font-size:12px;
}

.cta{
  display:flex;
  justify-content:flex-end;
}

article{
  opacity:0;
  transform:translateY(18px);
  transition:all .6s cubic-bezier(.2,.9,.2,1);
}
article.inview{
  opacity:1;
  transform:translateY(0);
}

/* ----------------------- */
/* FIX RESPONSIVE MOBILE   */
/* ----------------------- */

@media (max-width: 750px){

  .project-card{
    width: calc(100% - 32px);
    min-width: calc(100% - 32px);
    height:auto;
    margin-inline:16px;
    scroll-snap-align:center;
  }
}
</style>

