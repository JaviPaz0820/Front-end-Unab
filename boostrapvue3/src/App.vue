<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="mb-4">
      <b-navbar-brand href="#">Mi App - BootstrapVue3</b-navbar-brand>
      <b-navbar-nav class="ms-auto">
        <b-button variant="primary" @click="showModal = true">Abrir modal</b-button>
      </b-navbar-nav>
    </b-navbar>

    <b-container>
      <b-row>
        <b-col cols="12" md="8">
          <b-row class="g-3">
            <b-col cols="12" md="4" v-for="card in cards" :key="card.id">
              <b-card
                :title="card.title"
                :img-src="card.img"
                img-alt="Imagen ilustrativa"
                img-top
                class="h-100"
              >
                <p class="card-text">{{ card.text }}</p>
                <b-button variant="outline-primary">Ver</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" md="4">
          <b-card title="Contacto">
            <b-form @submit.prevent="submit">
              <b-form-group label="Nombre">
                <b-form-input v-model="form.name" required />
              </b-form-group>
              <b-form-group label="Email">
                <b-form-input v-model="form.email" type="email" required />
              </b-form-group>
              <b-button type="submit" variant="success">Enviar</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <b-modal v-model="showModal" title="Confirmación">
      <div>¿Deseas continuar?</div>
      <template #modal-footer>
        <b-button variant="secondary" @click="showModal = false">Cerrar</b-button>
        <b-button variant="primary" @click="confirm">Confirmar</b-button>
      </template>
    </b-modal>
  </div>
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
      form: {
        name: '',
        email: ''
      }
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
.card-text {
  min-height: 80px;
}
b-card img {
  object-fit: cover;
  height: 150px;
}
</style>
