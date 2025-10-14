<template>
  <div class="container py-5">
    <h1 class="text-center mb-4">Lista de Pokemones</h1>

    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar un Pokémon..."
        v-model="searchTerm"
        @input="handleSearch"
      />
    </div>

    <PokemonList :pokemones="filteredPokemons" :search-term="searchTerm" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PokemonList from './components/PokemonList.vue'
import data from './data/pokemons.json'

const pokemones = ref(data[0].pokemones)
const searchTerm = ref('')

const filteredPokemons = computed(() => {
  if (!searchTerm.value) return pokemones.value
  return pokemones.value.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

const handleSearch = () => {
  // Se podría agregar validación aquí si se quisiera
}
</script>

