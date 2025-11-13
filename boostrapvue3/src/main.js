import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css' // ← Asegúrate de incluir esto

const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')
