<template>
  <div class="home-container">
    <header>
      <h1>PokéGuía</h1>
      <button @click="logoutUser">Salir</button>
    </header>

    <pokemon-info />
  </div>
</template>

<script setup>
import PokemonInfo from '../components/PokemonInfo.vue'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const auth = getAuth()
const router = useRouter()

const logoutUser = async () => {
  await signOut(auth)
  router.push('/login')
}
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(180deg, #ffcb05, #f8f8f8);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

h1 {
  color: #2a75bb;
  text-shadow: 1px 1px 2px #fff;
}
</style>
