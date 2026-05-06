'use client'

import { createContext, useContext, useState, useCallback } from 'react'

type AuthModalMode = 'sign-in' | 'sign-up'

interface AuthModalContextValue {
  isOpen: boolean
  mode: AuthModalMode
  openSignIn: () => void
  openSignUp: () => void
  close: () => void
  switchMode: () => void
}

const AuthModalContext = createContext<AuthModalContextValue>({
  isOpen: false,
  mode: 'sign-in',
  openSignIn: () => {},
  openSignUp: () => {},
  close: () => {},
  switchMode: () => {},
})

export function useAuthModal() {
  return useContext(AuthModalContext)
}

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<AuthModalMode>('sign-in')

  const openSignIn = useCallback(() => {
    setMode('sign-in')
    setIsOpen(true)
  }, [])

  const openSignUp = useCallback(() => {
    setMode('sign-up')
    setIsOpen(true)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  const switchMode = useCallback(() => {
    setMode((prev) => (prev === 'sign-in' ? 'sign-up' : 'sign-in'))
  }, [])

  return (
    <AuthModalContext.Provider value={{ isOpen, mode, openSignIn, openSignUp, close, switchMode }}>
      {children}
    </AuthModalContext.Provider>
  )
}
