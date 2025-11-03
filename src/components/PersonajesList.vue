<template>
  <section class="list-container">
    <h2>Personajes Pokémon</h2>
    <div class="cards-grid">
      <PersonajeCard
        v-for="p in personajes"
        :key="p.id"
        :nombre="p.nombre"
        :descripcion="p.descripcion"
        :imagen="p.imagen"
      />
    </div>
  </section>
</template>

<script>
import PersonajeCard from './PersonajeCard.vue'

export default {
  name: 'PersonajesList',
  components: { PersonajeCard },
  data() {
    return {
      personajes: [
        {
          id: 1,
          nombre: 'Pikachu',
          descripcion: 'Pokémon eléctrico de mejillas amarillas con energía chispeante.',
          imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        },
        {
          id: 2,
          nombre: 'Kakuna',
          descripcion: 'Capullo rígido que prepara su evolución, casi inmóvil.',
          imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png'
        },
        {
          id: 3,
          nombre: 'Beedrill',
          descripcion: 'Abeja venenosa con aguijones afilados y agresiva.',
          imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png'
        },
        {
          id: 4,
          nombre: 'Metapod',
          descripcion: 'Capullo verde que endurece su cuerpo para evolucionar.',
          imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'
        },
        {
          id: 5,
          nombre: 'Rattata',
          descripcion: 'Ratón rápido y tenaz que muerde todo lo que ve.',
          imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.list-container {
  padding: 2rem;
  text-align: center;
}
h2 {
  color: #2b2b2b;
  margin-bottom: 2rem;
  font-weight: 700;
}
.cards-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}
</style>
