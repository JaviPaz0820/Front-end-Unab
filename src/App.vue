<template>
  <main class="container">
    <header class="header">
      <div>
        <h1>Pokemons</h1>
        <p class="hint">
         Lista de los mejores 5 Pokemons junto a una breve descripción.
        </p>
      </div>
    </header>

    <section v-if="state.personajes.length" class="list-wrap">
      <ul class="card-list">
        <li v-for="p in state.personajes" :key="p.id" class="card">
          <div class="card-head">
            <span class="chip">#{{ p.id }}</span>
            <div>
              <img :src="p.imagen" :alt="p.nombre" />
            </div>
            <h2>{{ p.nombre }}</h2>
          </div>
          <p>{{ p.descripcion }}</p>
        </li>
      </ul>
    </section>

    <p v-else class="empty">No hay Pokemons para mostrar.</p>
  </main>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  personajes: [
    {
      id: 1,
      nombre: 'Pikachu',
      descripcion: 'Ratón eléctrico que almacena energía en sus mejillas y la libera en potentes descargas.',
      imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
    },
    {
      id: 2,
      nombre: 'Kakuna',
      descripcion: 'Etapa capullo de Weedle. Permanece casi inmóvil para conservar energía.',
      imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png'
    },
    {
      id: 3,
      nombre: 'Beedrill',
      descripcion: 'Avispa territorial con tres aguijones venenosos.',
      imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png'
    },
    {
      id: 4,
      nombre: 'Metapod',
      descripcion: 'Capullo que ha endurecido al máximo su concha.',
      imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png'
    },
    {
      id: 5,
      nombre: 'Rattata',
      descripcion: 'Roedor veloz y muy tenaz.',
      imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png'
    }
  ]
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

.card {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card-head {
  text-align: center;
}

.card img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.chip {
  display: inline-block;
  background: #ffcc00;
  color: #333;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.empty {
  text-align: center;
  color: #777;
  margin-top: 2rem;
}
</style>

