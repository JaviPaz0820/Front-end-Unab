<template>
  <div>
    <div v-if="pokemones.length > 0">
      <ul class="list-group">
        <li
          v-for="pokemon in pokemones"
          :key="pokemon.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="fw-bold text-capitalize">{{ pokemon.nombre }}</span>
          <span class="badge bg-primary rounded-pill">#{{ pokemon.id }}</span>
        </li>
      </ul>
    </div>

    <div v-else class="alert alert-danger mt-3" role="alert">
      El pokémon que desea buscar no existe.
    </div>
  </div>
</template>

<script setup>
defineProps({
  pokemones: {
    type: Array,
    required: true
  },
  searchTerm: {
    type: String,
    required: true
  }
})
</script>

