// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Config

// ** Types
import { AuthValuesType, UserDataType, RegisterParams } from './types'
import { FirebaseError } from 'firebase/app'
import { LoginParams } from 'src/types/frontend/auth'
import { LoginResponse, RegisterResponse, ResetPasswordResponse } from 'src/types/backend/auth'

// ** Varsayılanlar
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve({ success: false, message: '' }),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve({ success: false, message: '' }),
  resetPassword: () => Promise.resolve({ success: false, message: '' })
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

// ** Config
import authConfig from 'src/configs/auth'

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    // Todo: kullanıcı bilgierini firebase tarafından kontrol edilecek
    const initAuth = async (): Promise<void> => {
      setLoading(true)
      console.log('initAuth loading true')
      const userData = localStorage.getItem('userData')
      if (userData) {
        setUser(JSON.parse(userData))
      }
      setLoading(false)
      console.log('initAuth loading false')
    }

    initAuth()
  }, [])

  const handleLogin = async (params: LoginParams) => {
    try {
      const response = await fetch(authConfig.loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: params.email, password: params.password })
      })

      const data: LoginResponse = await response.json()

      if (data.error) {
        throw new FirebaseError(data.error.code, data.error.message)
      }

      // Todo: ileride userdatatype değişicek
      const userData: UserDataType = {
        id: data.user?.id || '',
        email: data.user?.email || '',
        fullName: data.user?.username || '',
        role: 'admin', // Varsayılan rol, gerekirse API'den alınabilir
        username: data.user?.username || '',
        password: '' // Güvenlik nedeniyle boş bırakılıyor
      }

      setUser(userData)

      if (params.rememberMe) {
        window.localStorage.setItem('userData', JSON.stringify(userData))
      }

      const returnUrl = router.query.returnUrl
      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
      router.replace(redirectURL as string)

      return { success: true, message: '' }
    } catch (error) {
      let errorMessage = 'Kayıt işlemi başarısız oldu. Lütfen tekrar deneyin.'

      if (error instanceof FirebaseError) {
        errorMessage = error.code
      } else {
        errorMessage = `API hatası: ${(error as Error).message}`
      }

      console.log((error as FirebaseError).code, 'error')

      return {
        success: false,
        message: errorMessage
      }
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    router.push('/login')
  }

  const handleRegister = async (params: RegisterParams): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await fetch(authConfig.registerEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: params.email, password: params.password, username: params.username })
      })

      const data: RegisterResponse = await response.json()

      if (data.error) {
        throw new FirebaseError(data.error.code, data.error.message)
      }

      const userData: UserDataType = {
        id: data.user?.id || '',
        email: data.user?.email || '',
        fullName: data.user?.username || '',
        role: 'admin',
        username: data.user?.username || '',
        password: ''
      }

      setUser(userData)

      window.localStorage.setItem('userData', JSON.stringify(userData))

      return { success: true, message: 'Kayıt işlemi başarıyla tamamlandı.' }
    } catch (error) {
      let errorMessage = 'Kayıt işlemi başarısız oldu. Lütfen tekrar deneyin.'

      if (error instanceof FirebaseError) {
        errorMessage = error.code
      } else {
        errorMessage = `API hatası: ${(error as Error).message}`
      }

      return {
        success: false,
        message: errorMessage
      }
    }
  }

  const handleResetPassword = async (email: string): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await fetch(authConfig.resetPasswordEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      const data: ResetPasswordResponse = await response.json()

      if (data.error) {
        throw new FirebaseError(data.error.code, data.error.message)
      }

      return { success: true, message: 'Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.' }
    } catch (error) {
      let errorMessage = 'Şifre sıfırlama işlemi başarısız oldu. Lütfen tekrar deneyin.'

      if (error instanceof FirebaseError) {
        if (error.code === 'auth/user-not-found') {
          errorMessage = 'Bu e-posta adresiyle kayıtlı bir kullanıcı bulunamadı.'
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Geçersiz e-posta adresi.'
        } else {
          errorMessage = error.message
        }
      } else {
        errorMessage = `API hatası: ${(error as Error).message}`
      }

      return { success: false, message: errorMessage }
    }
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    resetPassword: handleResetPassword
  } as AuthValuesType

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
