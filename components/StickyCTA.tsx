'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, Calculator, ArrowRight } from 'lucide-react'

interface StickyCTAProps {
  onOpenQuiz: () => void
}

export default function StickyCTA({ onOpenQuiz }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [300, 500], [0, 1])
  const y = useTransform(scrollY, [300, 500], [20, 0])

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 300)
    })
    return () => unsubscribe()
  }, [scrollY])

  if (!isVisible) return null

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className="bg-white border border-neutral-200/60 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <div className="font-semibold text-neutral-900 text-sm">Получить расчёт</div>
              <div className="text-xs text-neutral-600">Быстро и бесплатно</div>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="w-8 h-8 rounded-full bg-white border border-neutral-200/60 hover:bg-neutral-50 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-neutral-600" />
          </button>
        </div>
        <button
          onClick={onOpenQuiz}
          className="w-full btn-primary flex items-center justify-center gap-2 text-sm py-3"
        >
          Начать
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </motion.div>
  )
}



