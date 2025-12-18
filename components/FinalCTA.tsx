'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Calculator, Sparkles } from 'lucide-react'

interface FinalCTAProps {
  onOpenQuiz: () => void
}

export default function FinalCTA({ onOpenQuiz }: FinalCTAProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="final-cta" ref={ref} className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Enhanced ambient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(14, 165, 233, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 50%, rgba(14, 165, 233, 0.25) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 50%, rgba(14, 165, 233, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary-400/40"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card-strong rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 max-w-4xl mx-auto text-center relative overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
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
                repeatDelay: 2,
                ease: 'linear',
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-500/10 mb-4 md:mb-6 relative"
              whileHover={{ 
                rotate: [0, -15, 15, 0],
                scale: 1.15
              }}
              transition={{ duration: 0.5 }}
            >
              <Calculator className="w-8 h-8 md:w-10 md:h-10 text-primary-600 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-primary-500/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance"
            >
              Получите расчёт под ключ
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-xl text-neutral-600 mb-6 md:mb-8 max-w-2xl mx-auto text-balance"
            >
              Заполните форму или пройдите быстрый квиз — мы подготовим детальный расчёт 
              стоимости и сроков выполнения работ специально для вас
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <button
                onClick={onOpenQuiz}
                className="btn-primary flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                Пройти квиз
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary w-full sm:w-auto"
              >
                Связаться напрямую
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-neutral-600"
            >
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400" />
                <span>Ответ в течение 1 часа</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400" />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-400" />
                <span>Без обязательств</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

