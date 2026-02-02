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
    <section id="final-cta" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white border border-neutral-200/60 rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto text-center relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
        >
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-50 mb-4 md:mb-6"
              whileHover={{ scale: 1.1 }}
            >
              <Calculator className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="section-title mb-4"
            >
              Получите расчёт под ключ
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-xl text-neutral-600 mb-6 md:mb-8 max-w-2xl mx-auto text-balance"
            >
              Заполните форму или пройдите быстрый квиз — мы подготовим детальный расчёт 
              стоимости и сроков выполнения работ специально для вас
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
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
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary w-full sm:w-auto"
              >
                Связаться напрямую
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-neutral-600"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500" />
                <span>Ответ в течение 1 часа</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-600" />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-neutral-500" />
                <span>Без обязательств</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

