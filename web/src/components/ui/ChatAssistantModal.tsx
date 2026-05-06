'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { t } from '@/lib/content'

interface ChatAssistantModalProps {
  open: boolean
  onClose: () => void
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatAssistantModal({ open, onClose }: ChatAssistantModalProps) {
  const shouldReduce = useReducedMotion()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduce ? 1 : 0.95,
      y: shouldReduce ? 0 : 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: shouldReduce ? 0 : 0.22, ease: [0, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: shouldReduce ? 1 : 0.97,
      y: shouldReduce ? 0 : 8,
      transition: { duration: shouldReduce ? 0 : 0.16 },
    },
  }

  // Focus input on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    setMessages((prev) => [...prev, { role: 'user', content: text }])
    setInput('')
    setLoading(true)

    // Stub response — wire to real AI endpoint via NEXT_PUBLIC_API_BASE_URL
    await new Promise((r) => setTimeout(r, 900))
    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        content:
          'Great question! For a system sized for your usage, we typically recommend between 6.6 kW and 13.2 kW. I can connect you with one of our engineers for a precise estimate. Would you like to start an instant quote?',
      },
    ])
    setLoading(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduce ? 0 : 0.18 }}
            className="fixed inset-0 bg-surface-overlay"
            style={{ zIndex: 'var(--z-modal)' }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="assistant-title"
            aria-describedby="assistant-subtitle"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-4 bottom-0 sm:inset-auto sm:right-6 sm:bottom-6 sm:w-96 bg-surface-base rounded-t-2xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden"
            style={{ zIndex: 'var(--z-modal)', maxHeight: '80vh' }}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b border-border-subtle">
              <div>
                <h2 id="assistant-title" className="font-display font-bold text-text-strong">
                  {t('assistant.modal.title')}
                </h2>
                <p id="assistant-subtitle" className="text-sm text-text-muted mt-0.5">
                  {t('assistant.modal.subtitle')}
                </p>
              </div>
              <button
                type="button"
                aria-label={t('cta.close')}
                onClick={onClose}
                className="p-1.5 rounded-md hover:bg-surface-raised transition-fast text-text-muted"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-5 flex flex-col gap-4"
              aria-live="polite"
              aria-label="Chat conversation"
            >
              {messages.length === 0 && (
                <p className="text-sm text-text-muted text-center py-6">
                  {t('assistant.modal.subtitle')}
                </p>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={[
                    'max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed',
                    msg.role === 'user'
                      ? 'ml-auto bg-brand-primary text-text-inverse rounded-br-sm'
                      : 'mr-auto bg-surface-raised text-text-default rounded-bl-sm',
                  ].join(' ')}
                >
                  {msg.content}
                </div>
              ))}
              {loading && (
                <div className="mr-auto bg-surface-raised px-4 py-3 rounded-2xl rounded-bl-sm text-sm text-text-muted">
                  <span aria-live="polite">{t('assistant.thinking')}</span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-border-subtle flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('assistant.input.placeholder')}
                aria-label={t('assistant.input.placeholder')}
                disabled={loading}
                className="input-solar text-sm"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="btn btn-primary text-sm px-4 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <SendIcon />
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}
