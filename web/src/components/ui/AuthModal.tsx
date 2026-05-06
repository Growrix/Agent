'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useAuthModal } from '@/components/providers/AuthModalProvider'
import AuthFormCard from '@/components/ui/AuthFormCard'

export default function AuthModal() {
  const { isOpen, mode, close, switchMode } = useAuthModal()
  const shouldReduce = useReducedMotion()

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    },
    [close]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: shouldReduce ? 0 : 0.18 } },
    exit: { opacity: 0, transition: { duration: shouldReduce ? 0 : 0.14 } },
  }

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.96, y: shouldReduce ? 0 : 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: shouldReduce ? 0 : 0.22, ease: [0, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      y: shouldReduce ? 0 : 8,
      transition: { duration: shouldReduce ? 0 : 0.14 },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={mode === 'sign-in' ? 'Sign in' : 'Create account'}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ zIndex: 'var(--z-modal)', backgroundColor: 'var(--color-surface-overlay)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md"
          >
            {/* Close button */}
            <div className="flex justify-end mb-2">
              <button
                type="button"
                aria-label="Close dialog"
                onClick={close}
                className="p-2 rounded-full bg-surface-base text-text-muted hover:text-text-strong hover:bg-surface-raised transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <CloseIcon />
              </button>
            </div>
            <AuthFormCard mode={mode} onSwitchMode={switchMode} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
