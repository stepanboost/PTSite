'use client'

import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Shield, Clock, CheckCircle2, Sparkles } from 'lucide-react'

interface HeroProps {
  onOpenQuiz: () => void
}

export default function Hero({ onOpenQuiz }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isMobile, setIsMobile] = useState(false)
  const [touchY, setTouchY] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  
  const springConfig = { damping: 25, stiffness: 200 }
  const xTransform = useTransform(mouseX, [-0.5, 0.5], [-30, 30])
  const yTransform = useTransform(mouseY, [-0.5, 0.5], [-30, 30])
  const x = useSpring(xTransform, springConfig)
  const y = useSpring(yTransform, springConfig)
  
  // Mobile transforms (must be called unconditionally)
  const xMobile = useTransform(mouseX, [-0.5, 0.5], [-15, 15])
  const yMobile = useTransform(mouseY, [-0.5, 0.5], [-15, 15])
  
  // Enhanced parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || isMobile) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set((e.clientX - centerX) / rect.width)
      mouseY.set((e.clientY - centerY) / rect.height)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!ref.current || !isMobile) return
      const touch = e.touches[0]
      if (touch) {
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set((touch.clientX - centerX) / rect.width)
        mouseY.set((touch.clientY - centerY) / rect.height)
        setTouchY(touch.clientY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [mouseX, mouseY, isMobile])

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Enhanced animated gradient background with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY, opacity, rotate }}
      >
        <div className="absolute inset-0 bg-neutral-100" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(173, 26, 32, 0.05) 0%, transparent 60%)',
              'radial-gradient(circle at 80% 50%, rgba(173, 26, 32, 0.08) 0%, transparent 60%)',
              'radial-gradient(circle at 50% 20%, rgba(11, 11, 11, 0.03) 0%, transparent 60%)',
              'radial-gradient(circle at 20% 50%, rgba(173, 26, 32, 0.05) 0%, transparent 60%)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        {/* Additional animated layers */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(173, 26, 32, 0.04) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Enhanced floating particles effect - more on mobile */}
      {[...Array(isMobile ? 12 : 6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full"
          style={{
            left: `${10 + (i % 6) * 15}%`,
            top: `${15 + Math.floor(i / 6) * 30}%`,
            backgroundColor: i % 3 === 0 ? 'rgba(173, 26, 32, 0.3)' : 'rgba(11, 11, 11, 0.2)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Glowing orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full blur-3xl opacity-15"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
            background: i % 2 === 0 
              ? `radial-gradient(circle, rgba(173, 26, 32, 0.3), transparent)`
              : `radial-gradient(circle, rgba(11, 11, 11, 0.2), transparent)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        />
      ))}

      <div ref={containerRef} className="container-custom relative z-10">
        <motion.div
          style={{ 
            x: isMobile ? xMobile : x, 
            y: isMobile ? yMobile : y, 
            scale, 
            opacity,
            transformStyle: 'preserve-3d'
          }}
          className="glass-card-strong rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Enhanced shimmer effect */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{
                width: '200%',
                x: '-100%',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: 'linear',
              }}
            />
            {/* Additional glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-neutral-900/20 via-transparent to-transparent"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              className="mb-4 md:mb-6 relative flex justify-center"
              initial={{ opacity: 0, y: 30, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative inline-block">
                {/* Logo SVG */}
                <svg
                  className="w-full max-w-sm md:max-w-xl lg:max-w-2xl h-auto"
                  viewBox="0 0 500 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ff6b35" />
                      <stop offset="100%" stopColor="#ad1a20" />
                    </linearGradient>
                  </defs>
                  
                  {/* Top line: 5 TEAM SERVICE */}
                  <g>
                    {/* Stylized red "5" - blocky and angular */}
                    <path
                      d="M 5 25 L 5 45 L 25 45 L 25 55 L 5 55 L 5 75 L 45 75 L 45 55 L 25 55 L 25 45 L 45 45 L 45 25 Z"
                      fill="#ad1a20"
                    />
                    {/* TEAM SERVICE text */}
                    <text
                      x="60"
                      y="65"
                      fontSize="28"
                      fontWeight="bold"
                      fill="#0b0b0b"
                      fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif"
                      letterSpacing="-0.5"
                    >
                      TEAM SERVICE
                    </text>
                  </g>
                  
                  {/* Red separator line */}
                  <line
                    x1="0"
                    y1="95"
                    x2="500"
                    y2="95"
                    stroke="#ad1a20"
                    strokeWidth="2.5"
                  />
                  
                  {/* Bottom line: PROVOLTA with lightning bolt */}
                  <g>
                    {/* PRO text */}
                    <text
                      x="5"
                      y="155"
                      fontSize="42"
                      fontWeight="bold"
                      fill="#0b0b0b"
                      fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif"
                      letterSpacing="-1"
                    >
                      PRO
                    </text>
                    
                    {/* Lightning bolt (replaces V) - more dynamic */}
                    <path
                      d="M 155 105 L 170 105 L 165 130 L 185 130 L 170 155 L 155 155 L 165 130 L 145 130 Z"
                      fill="url(#lightningGradient)"
                    />
                    
                    {/* OLTA text - O slightly integrated with lightning */}
                    <text
                      x="200"
                      y="155"
                      fontSize="42"
                      fontWeight="bold"
                      fill="#0b0b0b"
                      fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif"
                      letterSpacing="-1"
                    >
                      OLTA
                    </text>
                  </g>
                </svg>
                
                <motion.span
                  className="absolute -inset-2 bg-primary-500/20 blur-2xl -z-10"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
            
            <motion.p
              className="text-base md:text-xl lg:text-2xl text-neutral-800 mb-4 md:mb-8 leading-relaxed text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Полный цикл услуг с автомобилем: от покупки до эксплуатации.
              <br className="hidden md:block" />
              <motion.span
                className="font-semibold text-primary-500 inline-block"
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Всё под ключ. Один центр. Одна команда. Полная ответственность.
              </motion.span>
            </motion.p>

            {/* Enhanced trust badges with animation */}
            <motion.div
              className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                { icon: CheckCircle2, text: 'Работаем с 2020' },
                { icon: Shield, text: 'Гарантия на всё' },
                { icon: Clock, text: 'Экономия времени' },
              ].map((badge, index) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-neutral-600 glass-card rounded-xl px-3 py-2 relative overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.15, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-neutral-900/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary-500 relative z-10" />
                    </motion.div>
                    <span className="relative z-10">{badge.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.button
                onClick={onOpenQuiz}
                className="btn-primary flex items-center justify-center gap-2 group w-full sm:w-auto relative overflow-hidden touch-interactive"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                    </motion.div>
                    <span className="relative z-10">Получить расчёт</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>
              <motion.button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary w-full sm:w-auto touch-interactive"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Узнать больше
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 md:w-6 md:h-10 border-2 border-neutral-900/30 rounded-full flex items-start justify-center p-1.5 md:p-2 backdrop-blur-sm bg-neutral-100/30 shadow-lg"
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 md:h-3 bg-neutral-900 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
