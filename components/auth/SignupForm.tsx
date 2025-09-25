'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Lock, User, Plane } from 'lucide-react'
import { motion } from 'framer-motion'
import { signupSchema, type SignupFormData } from '@/lib/validations'
import { useAuth } from '@/hooks/useAuth'
import { useNotification } from '@/hooks/useNotification'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import SocialButton from '@/components/ui/SocialButton'

interface SignupFormProps {
  onSwitchToLogin: () => void
}

export default function SignupForm({ onSwitchToLogin }: SignupFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { signup } = useAuth()
  const { showNotification } = useNotification()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    try {
      await signup(data.name, data.email, data.password)
      showNotification('Account created successfully! Welcome to Travellista Tours.', 'success')
    } catch (error) {
      showNotification('Failed to create account. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignup = async (provider: 'google' | 'facebook' | 'apple') => {
    try {
      showNotification(`${provider} signup initiated...`, 'info')
      // In a real app, this would redirect to the OAuth provider
    } catch (error) {
      showNotification(`${provider} signup failed. Please try again.`, 'error')
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
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Join Us</h2>
        <p className="text-gray-600">Create your account</p>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input
            {...register('name')}
            type="text"
            placeholder="Full Name"
            icon={User}
            error={errors.name?.message}
            className="w-full"
          />
        </div>

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

        <div>
          <Input
            {...register('confirmPassword')}
            type="password"
            placeholder="Confirm Password"
            icon={Lock}
            error={errors.confirmPassword?.message}
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg"
        >
          CREATE ACCOUNT
        </Button>
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="px-4 text-gray-500 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Social Signup */}
      <div className="space-y-3">
        <SocialButton
          provider="google"
          onClick={() => handleSocialSignup('google')}
          className="w-full"
        />
        <div className="flex space-x-3">
          <SocialButton
            provider="facebook"
            onClick={() => handleSocialSignup('facebook')}
            className="flex-1"
          />
          <SocialButton
            provider="apple"
            onClick={() => handleSocialSignup('apple')}
            className="flex-1"
          />
        </div>
      </div>

      {/* Login Link */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Login Here
          </button>
        </p>
      </div>
    </motion.div>
  )
}