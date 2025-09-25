'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Lock, Plane } from 'lucide-react'
import { motion } from 'framer-motion'
import { loginSchema, type LoginFormData } from '@/lib/validations'
import { useAuth } from '@/hooks/useAuth'
import { useNotification } from '@/hooks/useNotification'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import SocialButton from '@/components/ui/SocialButton'

interface LoginFormProps {
  onSwitchToSignup: () => void
  onSwitchToForgotPassword: () => void
}

export default function LoginForm({ onSwitchToSignup, onSwitchToForgotPassword }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const { showNotification } = useNotification()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      await login(data.email, data.password)
      showNotification('Login successful! Welcome back.', 'success')
    } catch (error) {
      showNotification('Invalid email or password. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider: 'google' | 'facebook' | 'apple') => {
    try {
      // Simulate social login
      showNotification(`${provider} login initiated...`, 'info')
      // In a real app, this would redirect to the OAuth provider
    } catch (error) {
      showNotification(`${provider} login failed. Please try again.`, 'error')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Plane className="w-8 h-8 text-blue-500 mr-2" />
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
        </div>
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Welcome</h2>
        <p className="text-gray-600">Login with Email</p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input
            {...register('email')}
            type="email"
            placeholder="thisuser@email.com"
            icon={Mail}
            error={errors.email?.message}
            className="w-full"
          />
        </div>

        <div>
          <Input
            {...register('password')}
            type="password"
            placeholder="••••••••••••••"
            icon={Lock}
            error={errors.password?.message}
            className="w-full"
          />
        </div>

        <div className="text-right">
          <button
            type="button"
            onClick={onSwitchToForgotPassword}
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            Forgot your password?
          </button>
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg"
        >
          LOGIN
        </Button>
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="px-4 text-gray-500 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Social Login */}
      <div className="space-y-3">
        <SocialButton
          provider="google"
          onClick={() => handleSocialLogin('google')}
          className="w-full"
        />
        <div className="flex space-x-3">
          <SocialButton
            provider="facebook"
            onClick={() => handleSocialLogin('facebook')}
            className="flex-1"
          />
          <SocialButton
            provider="apple"
            onClick={() => handleSocialLogin('apple')}
            className="flex-1"
          />
        </div>
      </div>

      {/* Sign Up Link */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Don't have account?{' '}
          <button
            onClick={onSwitchToSignup}
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Register Now
          </button>
        </p>
      </div>
    </motion.div>
  )
}