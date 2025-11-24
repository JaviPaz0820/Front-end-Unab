import { createApp } from 'vue'
import App from './App.vue'
import './styles/base.css'

import useScrollObserver from './composables/useScrollObserver'
const app = createApp(App)
const { observe } = useScrollObserver()

app.directive('intersect', {
  mounted(el){
    observe(el)
  }
})

app.mount('#app')
