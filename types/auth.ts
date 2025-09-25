export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

export interface ForgotPasswordFormData {
  email: string
}

export type SocialProvider = 'google' | 'facebook' | 'apple'

export type NotificationType = 'success' | 'error' | 'info'

export interface Notification {
  id: string
  type: NotificationType
  message: string
  duration?: number
}