import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { SocialProvider } from '@/types/auth'

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: SocialProvider
  isLoading?: boolean
}

const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, provider, isLoading, ...props }, ref) => {
    const getProviderConfig = (provider: SocialProvider) => {
      switch (provider) {
        case 'google':
          return {
            icon: (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            ),
            bgColor: 'bg-white hover:bg-gray-50',
            textColor: 'text-gray-700',
            borderColor: 'border-gray-300'
          }
        case 'facebook':
          return {
            icon: (
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            ),
            bgColor: 'bg-white hover:bg-gray-50',
            textColor: 'text-gray-700',
            borderColor: 'border-gray-300'
          }
        case 'apple':
          return {
            icon: (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 8.025.044 8.025.044c0 .467.02.94.058 1.4.038.46.096.92.175 1.37.079.45.178.89.297 1.32.119.43.258.85.417 1.26.159.41.338.8.537 1.18.199.38.418.74.657 1.08.239.34.498.66.777.96.279.3.578.58.897.84.319.26.658.49 1.017.69.359.2.738.37 1.137.51.399.14.818.25 1.257.33.439.08.898.12 1.377.12s.938-.04 1.377-.12c.439-.08.858-.19 1.257-.33.399-.14.778-.31 1.137-.51.359-.2.698-.43 1.017-.69.319-.26.618-.54.897-.84.279-.3.538-.62.777-.96.239-.34.458-.7.657-1.08.199-.38.378-.77.537-1.18.159-.41.298-.83.417-1.26.119-.43.218-.87.297-1.32.079-.45.137-.91.175-1.37.038-.46.058-.933.058-1.4 0 0-.371-.044-3.992-.044z"/>
              </svg>
            ),
            bgColor: 'bg-white hover:bg-gray-50',
            textColor: 'text-gray-900',
            borderColor: 'border-gray-300'
          }
      }
    }

    const config = getProviderConfig(provider)

    return (
      <button
        className={cn(
          'w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-200',
          'hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
          config.bgColor,
          config.textColor,
          config.borderColor,
          className
        )}
        disabled={isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          config.icon
        )}
      </button>
    )
  }
)

SocialButton.displayName = 'SocialButton'

export default SocialButton