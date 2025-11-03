<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">🍳 RecetasPro</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/categorias">Categorías</router-link>
          </li>
          <li class="nav-item">
          <router-link class="nav-link" to="/autor/Chef%20Maria">Autor</router-link>

          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  color: #d63447;
}
.nav-link.router-link-active {
  font-weight: bold;
  color: #d63447;
}
</style>


