<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Mi App - Vuetify</v-toolbar-title>
      <v-spacer />
      <v-btn color="secondary" @click="showModal = true">Abrir modal</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="py-10">
        <v-row>
          <v-col cols="12" md="8">
            <v-row align="stretch">
              <v-col cols="12" md="4" v-for="card in cards" :key="card.id">
                <v-card class="h-100">
                  <v-img :src="card.img" height="150" cover />
                  <v-card-title>{{ card.title }}</v-card-title>
                  <v-card-text class="min-h-80">{{ card.text }}</v-card-text>
                  <v-card-actions>
                    <v-btn variant="outlined" color="primary">Ver</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="pa-4">
              <v-card-title>Contacto</v-card-title>
              <v-form @submit.prevent="submit">
                <v-text-field v-model="form.name" label="Nombre" required />
                <v-text-field v-model="form.email" label="Email" type="email" required />
                <v-btn type="submit" color="success" class="mt-2">Enviar</v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-dialog v-model="showModal" max-width="400">
      <v-card>
        <v-card-title>Confirmación</v-card-title>
        <v-card-text>¿Deseas continuar?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="showModal = false">Cerrar</v-btn>
          <v-btn color="primary" @click="confirm">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
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
.min-h-80 {
  min-height: 80px;
}
</style>
