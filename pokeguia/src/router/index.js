import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth)
  onAuthStateChanged(auth, user => {
    if (requiresAuth && !user) next('/login')
    else if (to.path === '/login' && user) next('/home')
    else next()
  })
})

export default router
