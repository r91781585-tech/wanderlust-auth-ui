import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <div className={cn(
          'relative flex items-center bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 transition-all duration-200',
          'focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-400/20',
          error && 'border-red-400 focus-within:border-red-400 focus-within:ring-red-400/20',
          className
        )}>
          {icon && (
            <div className="mr-3 text-gray-500 flex-shrink-0">
              {icon}
            </div>
          )}
          <input
            className={cn(
              'flex-1 bg-transparent border-0 outline-none text-gray-900 placeholder-gray-500',
              'focus:ring-0 focus:border-0'
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-red-600 px-1">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input