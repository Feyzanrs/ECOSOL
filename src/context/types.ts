import { LoginParams } from 'src/types/frontend/auth'

export type ErrCallbackType = (err: Error) => void

export type RegisterParams = {
  email: string
  username: string
  password: string
}

export type UserDataType = {
  id: string
  role: string
  email: string
  fullName: string
  username: string
  password: string
  avatar?: string | null
}

export interface AuthValuesType {
  loading: boolean
  logout: () => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  login: (params: LoginParams) => Promise<{ success: boolean; message: string }>
  register: (params: RegisterParams) => Promise<{ success: boolean; message: string }>
  resetPassword: (email: string) => Promise<{ success: boolean; message: string }>
}
