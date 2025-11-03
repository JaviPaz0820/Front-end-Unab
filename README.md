# Plataforma Web de Recetas — ABPRO5

Este proyecto es una aplicación web desarrollada como parte del módulo **M6AE5 - ABPRO5**. La plataforma permite a los usuarios explorar recetas de cocina de forma fluida, sin recargar la página, gracias al uso de **Vue Router** y rutas dinámicas.

## Objetivo

Desarrollar una SPA (Single Page Application) que permita:

- Navegar entre secciones sin recargar la página
- Acceder a recetas específicas mediante URLs dinámicas
- Visualizar perfiles de autores de recetas

## 📁 Estructura del proyecto
src/ 
├── assets/
├── components/
│ ├── Navbar.vue
├── views/
│ ├── Inicio.vue
│ ├── Categorias.vue
│ ├── DetalleReceta.vue
│ ├── PerfilAutor.vue
│ └── categorias/
│ ├── Postres.vue
│ └── Bebidas.vue
├── App.vue
├── router/
│ └── index.js

## Funcionalidades destacadas

- Navegación fluida con `<router-link>` desde `Navbar.vue`
- Rutas dinámicas con props (`:id`, `:nombre`)
- Rutas anidadas para subcategorías
- Redirección automática de `/inicio` a `/`
- Transiciones suaves entre vistas usando `<transition>`

## ▶️ Cómo ejecutar el proyecto

1. Clona el repositorio y cambia a la rama del proyecto:
   ```bash
   git clone https://github.com/JaviPaz0820/Front-end-Unab.git
   cd Front-end-Unab
   git checkout M6AE5---ABPRO5

2. Instala las dependencias:
  npm install

3. Inicia el servidor de desarrollo:
    npm run serve

4. Abre tu navegador en http://localhost:8080

 Autor
Javiera Ampuero

