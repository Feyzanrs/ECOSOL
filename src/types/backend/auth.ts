import { FirebaseError } from 'firebase/app'
import { auth, db } from 'src/configs/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

// Kullanıcı giriş bilgileri için tip tanımı
export interface LoginRequest {
  email: string
  password: string
}

// Giriş yanıtı için tip tanımı
export interface LoginResponse {
  user?: {
    id: string
    username: string
    email: string
  }
  error?: FirebaseError
}

export interface RegisterRequest {
  email: string
  password: string
  username: string
}

export interface RegisterResponse {
  user?: {
    id: string
    username: string
    email: string
    walletAddress: string
  }
  error?: FirebaseError
}

export interface ResetPasswordRequest {
  email: string
}

export interface ResetPasswordResponse {
  success?: boolean
  error?: FirebaseError
}

// Kullanıcı verisi tipi
export interface UserData {
  uid: string
  email: string | null
  displayName: string | null
  emailVerified: boolean
  disabled: boolean
  walletAddress: string | null
}

// API cevabı tipi
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
}

export const registerUser = async (data: RegisterRequest) => {
  try {
    // Önce Solana cüzdanı oluştur
    const createWallet = require('src/utils/createWallet')
    const wallet = createWallet()

    // Firebase Auth'a kullanıcıyı kaydet
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
    
    // Firestore'a kullanıcı bilgilerini ve cüzdan adresini kaydet
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      username: data.username,
      email: data.email,
      walletAddress: wallet.publicKey,  // Otomatik oluşturulan cüzdan adresi
      createdAt: new Date().toISOString()
    })

    return {
      user: {
        id: userCredential.user.uid,
        username: data.username,
        email: data.email,
        walletAddress: wallet.publicKey
      }
    }
  } catch (error) {
    return { error }
  }
}
