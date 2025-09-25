'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, ArrowLeft, Plane } from 'lucide-react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { useNotification } from '@/hooks/useNotification'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address')
})

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>

interface ForgotPasswordFormProps {
  onSwitchToLogin: () => void
}

export default function ForgotPasswordForm({ onSwitchToLogin }: ForgotPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const { showNotification } = useNotification()

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema)
  })

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true)
    try {
      // Simulate password reset email sending
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsEmailSent(true)
      showNotification('Password reset email sent successfully!', 'success')
    } catch (error) {
      showNotification('Failed to send reset email. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendEmail = async () => {
    const email = getValues('email')
    if (!email) return
    
    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      showNotification('Reset email sent again!', 'success')
    } catch (error) {
      showNotification('Failed to resend email. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  if (isEmailSent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center"
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Plane className="w-8 h-8 text-blue-500 mr-2" />
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
          </div>
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Check Your Email</h2>
          <p className="text-gray-600">We've sent a password reset link to your email</p>
        </div>

        {/* Success Message */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-gray-700 mb-4">
            If an account with that email exists, we've sent you a password reset link.
          </p>
          <p className="text-sm text-gray-500">
            Didn't receive the email? Check your spam folder or try again.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Button
            onClick={handleResendEmail}
            isLoading={isLoading}
            variant="outline"
            className="w-full"
          >
            Resend Email
          </Button>
          
          <button
            onClick={onSwitchToLogin}
            className="flex items-center justify-center w-full text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </button>
        </div>
      </motion.div>
    )
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
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Reset Password</h2>
        <p className="text-gray-600">Enter your email to receive a reset link</p>
      </div>

      {/* Reset Form */}
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

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg"
        >
          SEND RESET LINK
        </Button>
      </form>

      {/* Back to Login */}
      <div className="mt-8 text-center">
        <button
          onClick={onSwitchToLogin}
          className="flex items-center justify-center w-full text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </button>
      </div>
    </motion.div>
  )
}