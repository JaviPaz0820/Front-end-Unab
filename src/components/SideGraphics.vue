<template>
  <aside class="side-graphics" v-intersect>
    
    <!-- Imagen dentro del rectángulo -->
    <div class="image-box">
      <img src="/src/assets/foto.jpeg" alt="Foto de Javiera Ampuero" class="profile-pic">
    </div>

    <!-- Puedes agregar elementos decorativos si quieres -->
    <div class="accent-bar"></div>

  </aside>
</template>

<script setup>
</script>

<style scoped>
.side-graphics{
  width:100%;
  height:100%;
  background:var(--glass);
  border-radius:14px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:20px;
  gap:20px;
  box-shadow:0 0 25px rgba(0,0,0,.25);
}

/* Contenedor visual */
.image-box{
  width:100%;
  height:260px;
  border-radius:12px;
  overflow:hidden;
  border:3px solid var(--accent);
  display:flex;
  justify-content:center;
  align-items:center;
}

/* Foto cuadrada dentro del recuadro */
.profile-pic{
  width:100%;
  height:100%;
  object-fit:cover;
}

/* Barra decorativa opcional */
.accent-bar{
  width:60%;
  height:6px;
  background:var(--accent);
  border-radius:3px;
  opacity:.8;
}

@media(max-width:800px){
  .side-graphics{
    display:none; /* se oculta en pantallas pequeñas */
  }
}
</style>

