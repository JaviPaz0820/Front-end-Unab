import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap y estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'

createApp(App).use(router).mount('#app')
