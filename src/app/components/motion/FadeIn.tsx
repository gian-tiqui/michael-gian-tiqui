'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const FadeIn = ({ children, delay = 0, className }: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.3,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
