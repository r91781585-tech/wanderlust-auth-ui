import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function getPasswordStrength(password: string): {
  score: number
  feedback: string
} {
  let score = 0
  let feedback = 'Very weak'

  if (password.length >= 6) score += 1
  if (password.length >= 8) score += 1
  if (/[A-Z]/.test(password)) score += 1
  if (/[a-z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[^A-Za-z0-9]/.test(password)) score += 1

  switch (score) {
    case 0:
    case 1:
      feedback = 'Very weak'
      break
    case 2:
    case 3:
      feedback = 'Weak'
      break
    case 4:
      feedback = 'Good'
      break
    case 5:
    case 6:
      feedback = 'Strong'
      break
  }

  return { score, feedback }
}