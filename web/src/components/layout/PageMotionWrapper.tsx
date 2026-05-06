'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageMotionWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const shouldReduce = useReducedMotion()

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        id="main-content"
        initial={{ opacity: 0, y: shouldReduce ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: shouldReduce ? 0 : 0.22,
          ease: [0, 0, 0.2, 1],
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}
