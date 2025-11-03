<template>
  <div class="container py-5">
    <h2 class="mb-4 text-center">Categorías</h2>
    <div class="d-flex justify-content-center mb-3">
      <router-link to="/categorias/postres" class="btn btn-outline-danger mx-2">Postres</router-link>
      <router-link to="/categorias/bebidas" class="btn btn-outline-success mx-2">Bebidas</router-link>
    </div>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
y
+
