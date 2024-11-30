import { FirebaseError } from 'firebase/app'

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
}

// API cevabı tipi
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
}
