'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  amount?: number
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  amount = 50
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [amount, 0, 0, -amount])
      case 'down':
        return useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-amount, 0, 0, amount])
      case 'left':
        return useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [amount, 0, 0, -amount])
      case 'right':
        return useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-amount, 0, 0, amount])
      default:
        return useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [amount, 0, 0, -amount])
    }
  }

  const y = direction === 'up' || direction === 'down' ? getTransform() : 0
  const x = direction === 'left' || direction === 'right' ? getTransform() : 0

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        y,
        x,
        scale,
        rotate,
      }}
    >
      {children}
    </motion.div>
  )
}



