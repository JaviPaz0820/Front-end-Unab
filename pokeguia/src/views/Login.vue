<template>
  <div class="login-container">
    <div class="card">
      <h1>PokéGuía</h1>
      <form @submit.prevent="loginUser">
        <input v-model="email" type="email" placeholder="Correo" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
      <p class="note">Usa el usuario creado en Firebase Authentication</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

const email = ref('')
const password = ref('')
const router = useRouter()

const loginUser = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/home')
  } catch (error) {
    alert('Error al iniciar sesión: ' + error.message)
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff0000, #ffcb05);
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  text-align: center;
  width: 320px;
}

input {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.note {
  font-size: 0.8rem;
  color: #555;
  margin-top: 1rem;
}
</style>
