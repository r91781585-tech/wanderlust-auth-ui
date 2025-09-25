'use client'

import { useState } from 'react'
import AuthLayout from '@/components/auth/AuthLayout'
import LoginForm from '@/components/auth/LoginForm'
import SignupForm from '@/components/auth/SignupForm'
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm'
import { NotificationProvider } from '@/components/providers/NotificationProvider'

export type AuthMode = 'login' | 'signup' | 'forgot-password'

export default function HomePage() {
  const [authMode, setAuthMode] = useState<AuthMode>('login')

  const renderAuthForm = () => {
    switch (authMode) {
      case 'login':
        return (
          <LoginForm 
            onSwitchToSignup={() => setAuthMode('signup')}
            onSwitchToForgotPassword={() => setAuthMode('forgot-password')}
          />
        )
      case 'signup':
        return (
          <SignupForm 
            onSwitchToLogin={() => setAuthMode('login')}
          />
        )
      case 'forgot-password':
        return (
          <ForgotPasswordForm 
            onSwitchToLogin={() => setAuthMode('login')}
          />
        )
      default:
        return null
    }
  }

  return (
    <NotificationProvider>
      <AuthLayout authMode={authMode}>
        {renderAuthForm()}
      </AuthLayout>
    </NotificationProvider>
  )
}