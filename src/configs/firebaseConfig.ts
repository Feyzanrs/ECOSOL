import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAA_BnpiebPGZfAHPHjhxIDqkyzDgGXlcw',
  authDomain: 'ecosol-4ac5f.firebaseapp.com',
  projectId: 'ecosol-4ac5f',
  storageBucket: 'ecosol-4ac5f.firebasestorage.app',
  messagingSenderId: '306725368859',
  appId: '1:306725368859:web:99c634ea5f431c4fc2f4be',
  measurementId: 'G-X4ESHW6D3K'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export default { auth, db }
