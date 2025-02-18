'use client'

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

export function EnsureProfile() {
  const { isSignedIn } = useUser()

  useEffect(() => {
    if (isSignedIn) {
      fetch('/api/profile', { method: 'POST' })
        .catch(error => console.error('Error ensuring profile:', error))
    }
  }, [isSignedIn])

  return null
} 