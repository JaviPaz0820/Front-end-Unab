<template>
  <div class="pokemon-info">
    <div class="search">
      <input
        v-model="pokemonName"
        placeholder="Buscar Pokémon (ej: charizard)"
        @keyup.enter="fetchPokemon"
      />
      <button @click="fetchPokemon">Buscar</button>
    </div>

    <div v-if="pokemonData" class="card">
      <h2>{{ pokemonData.name.toUpperCase() }}</h2>
      <img :src="pokemonImage" :alt="pokemonData.name" />

      <p class="description">{{ pokemonDescription }}</p>

      <div class="details">
        <div>
          <h3>Habilidades</h3>
          <ul>
            <li v-for="ability in pokemonAbilities" :key="ability">{{ ability }}</li>
          </ul>
        </div>

        <div>
          <h3>Movimientos principales</h3>
          <ul class="moves">
            <li v-for="move in pokemonMainMoves" :key="move">{{ move }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="suggested">
      <h3>Pokémon sugeridos</h3>
      <div class="grid">
        <div
          v-for="p in popularPokemons"
          :key="p"
          class="poke-card"
          @click="selectSuggested(p)"
        >
          <img :src="`https://img.pokemondb.net/sprites/home/normal/${p}.png`" :alt="p" />
          <p>{{ p.toUpperCase() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, computed, onMounted } from 'vue'

const pokemonName = ref('pikachu')
const pokemonData = ref(null)
const pokemonDescription = ref('')
const pokemonAbilities = ref([])
const pokemonMainMoves = ref([])

const popularPokemons = [
  'bulbasaur', 'charmander', 'squirtle',
  'eevee', 'jigglypuff', 'snorlax',
  'gengar', 'charizard', 'lucario', 'mewtwo'
]

// Función auxiliar para traducir nombres
const getSpanishName = async (url) => {
  try {
    const res = await axios.get(url)
    const nameEntry = res.data.names.find(n => n.language.name === 'es')
    return nameEntry ? nameEntry.name : res.data.name
  } catch {
    return 'Desconocido'
  }
}

// Función principal
const fetchPokemon = async () => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value.toLowerCase()}`)
    pokemonData.value = res.data

    // Descripción del Pokémon
    const speciesRes = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.value.toLowerCase()}`)
    const flavor = speciesRes.data.flavor_text_entries.find(entry => entry.language.name === 'es')
    pokemonDescription.value = flavor ? flavor.flavor_text.replace(/\n|\f/g, ' ') : 'Descripción no disponible.'

    // Traducción de habilidades
    const abilityPromises = res.data.abilities.slice(0, 3).map(a => getSpanishName(a.ability.url))
    pokemonAbilities.value = await Promise.all(abilityPromises)

    // Traducción de movimientos principales
    const movePromises = res.data.moves.slice(0, 10).map(m => getSpanishName(m.move.url))
    pokemonMainMoves.value = await Promise.all(movePromises)

  } catch (error) {
    alert('Pokémon no encontrado. Verifica el nombre.')
  }
}

// Carga inicial
onMounted(() => {
  fetchPokemon()
})

const pokemonImage = computed(() =>
  pokemonData.value?.sprites?.other?.['official-artwork']?.front_default || ''
)

const selectSuggested = name => {
  pokemonName.value = name
  fetchPokemon()
}
</script>

<style scoped>
.pokemon-info {
  text-align: center;
}

.search {
  margin-bottom: 1.5rem;
}

input {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #aaa;
  width: 250px;
  font-size: 1rem;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: inline-block;
  max-width: 500px;
  word-wrap: break-word;
}

.card h2 {
  background: #2a75bb;
  color: white;
  border-radius: 10px;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

.description {
  margin-top: 1rem;
  font-size: 1rem;
  font-style: italic;
  color: #555;
}

.details {
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
  text-align: left;
  gap: 2rem;
}

.moves {
  max-height: 150px;
  overflow-y: auto;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h3 {
  color: #2a75bb;
  margin-bottom: 0.5rem;
}

/* Pokémon sugeridos */
.suggested {
  margin-top: 3rem;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.poke-card {
  background: white;
  border-radius: 10px;
  padding: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 110px;
  transition: 0.2s;
  text-align: center;
  word-wrap: break-word;
}

.poke-card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

.poke-card img {
  width: 80px;
  height: 80px;
}

.poke-card p {
  margin: 0.3rem 0;
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
  overflow-wrap: break-word;
}
</style>
