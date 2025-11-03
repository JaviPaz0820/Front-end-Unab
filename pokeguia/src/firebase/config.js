import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCTQdhtu5iohKZ_E4x3UbmMHcifS9El4a4",
  authDomain: "pokeguia-app.firebaseapp.com",
  projectId: "pokeguia-app",
  storageBucket: "pokeguia-app.firebasestorage.app",
  messagingSenderId: "186174446963",
  appId: "1:186174446963:web:0c73411604f3078771f906",
  measurementId: "G-QRKNY39ZGG"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
