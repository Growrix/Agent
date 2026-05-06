'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { t } from '@/lib/content'

interface SupportFabClusterProps {
  onOpenAssistant: () => void
}

export default function SupportFabCluster({ onOpenAssistant }: SupportFabClusterProps) {
  const [open, setOpen] = useState(false)
  const shouldReduce = useReducedMotion()

  const buttonVariants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 12, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: shouldReduce ? 0 : i * 0.05,
        duration: shouldReduce ? 0 : 0.2,
        ease: [0, 0, 0.2, 1],
      },
    }),
    exit: { opacity: 0, y: shouldReduce ? 0 : 8, scale: 0.9, transition: { duration: 0.12 } },
  }

  const actions = [
    {
      label: t('cta.open_ai_assistant'),
      icon: <AssistantIcon />,
      onClick: () => { onOpenAssistant(); setOpen(false) },
      className: 'bg-brand-primary text-text-inverse hover:bg-brand-primary-hover',
    },
    {
      label: t('cta.open_whatsapp'),
      icon: <WhatsAppIcon />,
      onClick: () => window.open('https://wa.me/61299990000', '_blank'),
      className: 'bg-state-success text-text-inverse hover:opacity-90',
    },
    {
      label: t('cta.book_call'),
      icon: <PhoneIcon />,
      onClick: () => (window.location.href = 'tel:+61299990000'),
      className: 'bg-surface-base border border-border-subtle text-text-strong hover:bg-surface-raised',
    },
  ]

  return (
    <div
      className="fixed bottom-6 right-6 hidden lg:flex flex-col items-end gap-3"
      style={{ zIndex: 'var(--z-overlay)' }}
      aria-label="Support options"
    >
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.div
              key={action.label}
              custom={i}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-2"
            >
              <span className="trust-chip text-xs shadow-md bg-surface-base border-border-subtle">
                {action.label}
              </span>
              <motion.button
                type="button"
                aria-label={action.label}
                onClick={action.onClick}
                whileHover={shouldReduce ? {} : { scale: 1.05 }}
                whileTap={shouldReduce ? {} : { scale: 0.95 }}
                className={[
                  'w-12 h-12 rounded-pill flex items-center justify-center shadow-lg transition-fast',
                  action.className,
                ].join(' ')}
              >
                {action.icon}
              </motion.button>
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Main toggle */}
      <motion.button
        type="button"
        aria-label={open ? 'Close support options' : 'Open support options'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        whileHover={shouldReduce ? {} : { scale: 1.05 }}
        whileTap={shouldReduce ? {} : { scale: 0.95 }}
        className="w-14 h-14 rounded-pill bg-brand-accent text-text-on-accent flex items-center justify-center shadow-lg"
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: shouldReduce ? 0 : 0.2 }}
        >
          <PlusIcon />
        </motion.span>
      </motion.button>
    </div>
  )
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-6 h-6" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function AssistantIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
