'use client'

import { createContext, useCallback, useContext, useState } from 'react'

interface QuoteModalContextValue {
  isOpen: boolean
  openQuote: () => void
  closeQuote: () => void
}

const QuoteModalContext = createContext<QuoteModalContextValue>({
  isOpen: false,
  openQuote: () => {},
  closeQuote: () => {},
})

export function useQuoteModal() {
  return useContext(QuoteModalContext)
}

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openQuote = useCallback(() => setIsOpen(true), [])
  const closeQuote = useCallback(() => setIsOpen(false), [])

  return (
    <QuoteModalContext.Provider value={{ isOpen, openQuote, closeQuote }}>
      {children}
    </QuoteModalContext.Provider>
  )
}
