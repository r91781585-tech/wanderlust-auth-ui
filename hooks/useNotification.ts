'use client'

import { useNotificationContext } from '@/components/providers/NotificationProvider'

export function useNotification() {
  const { showNotification, hideNotification } = useNotificationContext()
  
  return {
    showNotification,
    hideNotification,
  }
}