import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicio from '../views/PaginaInicio.vue'
import PaginaCategorias from '../views/PaginaCategorias.vue'
import CategoriaPostres from '../views/CategoriaPostres.vue'
import CategoriaBebidas from '../views/CategoriaBebidas.vue'
import PerfilAutor from '../views/PerfilAutor.vue'
import DetalleReceta from '../views/DetalleReceta.vue' 

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: PaginaInicio,
    alias: '/inicio'
  },
  {
    path: '/categorias',
    component: PaginaCategorias,
    children: [
      { path: 'postres', component: CategoriaPostres },
      { path: 'bebidas', component: CategoriaBebidas }
    ]
  },
  {
    path: '/autor/:nombre',
    name: 'PerfilAutor',
    component: PerfilAutor,
    props: true
  },
   {
    path: '/receta/:id',
    name: 'DetalleRecetas',
    component: DetalleReceta,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
