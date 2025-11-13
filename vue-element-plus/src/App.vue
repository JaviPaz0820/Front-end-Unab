<template>
  <el-container>
    <el-header>
      <div class="header-content">
        <h3>Mi App - Element Plus</h3>
        <el-button type="primary" @click="showModal = true">Abrir modal</el-button>
      </div>
    </el-header>

    <el-main>
      <el-row :gutter="20" class="main-row">
        <el-col :xs="24" :md="16">
          <el-row :gutter="20">
            <el-col
              v-for="card in cards"
              :key="card.id"
              :xs="24"
              :sm="12"
              :md="8"
            >
              <el-card shadow="hover" class="h-100">
                <img :src="card.img" alt="imagen" class="card-img" />
                <h4>{{ card.title }}</h4>
                <p class="card-text">{{ card.text }}</p>
                <el-button type="primary" plain>Ver</el-button>
              </el-card>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :md="8">
          <el-card>
            <template #header>
              <h4>Contacto</h4>
            </template>
            <el-form @submit.prevent="submit">
              <el-form-item label="Nombre">
                <el-input v-model="form.name" />
              </el-form-item>
              <el-form-item label="Email">
                <el-input v-model="form.email" type="email" />
              </el-form-item>
              <el-button type="success" native-type="submit">Enviar</el-button>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </el-main>

    <el-dialog v-model="showModal" title="Confirmación">
      <span>¿Deseas continuar?</span>
      <template #footer>
        <el-button @click="showModal = false">Cerrar</el-button>
        <el-button type="primary" @click="confirm">Confirmar</el-button>
      </template>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      cards: [
        {
          id: 1,
          title: 'Gestión de Proyectos',
          text: 'Organiza tus tareas, asigna responsables y monitorea el progreso de tus proyectos en tiempo real.',
          img: 'https://www.yunbitsoftware.com/blog/wp-content/uploads/2021/02/21430-scaled-e1614339566329.jpg'
        },
        {
          id: 2,
          title: 'Análisis de Datos',
          text: 'Visualiza métricas clave y toma decisiones informadas con paneles interactivos y reportes dinámicos.',
          img: 'https://www.webmark.cl/site22/wp-content/uploads/2022/03/analisis-de-datos.jpg'
        },
        {
          id: 3,
          title: 'Automatización de Procesos',
          text: 'Optimiza tus flujos de trabajo con herramientas que reducen tareas repetitivas y aumentan la eficiencia.',
          img: 'https://start.docuware.com/hs-fs/hubfs/blog-images/Process%20Automation/Illustration%20of%20business%20processes%20on%20a%20blue%20background.jpg?width=600&height=400&name=Illustration%20of%20business%20processes%20on%20a%20blue%20background.jpg'
        }
      ],
      form: { name: '', email: '' }
    }
  },
  methods: {
    submit() {
      alert(`Enviado: ${this.form.name} - ${this.form.email}`)
    },
    confirm() {
      this.showModal = false
      alert('Confirmado')
    }
  }
}
</script>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.card-text {
  min-height: 80px;
}

.h-100 {
  height: 100%;
}

.card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
