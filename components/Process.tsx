'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, FileText, Calculator, CheckCircle, Car, Wrench, Shield } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Консультация',
    description: 'Связываетесь с нами, мы узнаём ваши пожелания и цели',
  },
  {
    icon: FileText,
    title: 'Расчёт и план',
    description: 'Подготавливаем детальный расчёт и план работ',
  },
  {
    icon: Calculator,
    title: 'Согласование',
    description: 'Согласовываем все детали, сроки и стоимость',
  },
  {
    icon: CheckCircle,
    title: 'Договор',
    description: 'Заключаем договор с фиксированными условиями',
  },
  {
    icon: Car,
    title: 'Выполнение работ',
    description: 'Выполняем все работы согласно плану и договору',
  },
  {
    icon: Wrench,
    title: 'Контроль качества',
    description: 'Проводим контроль качества на каждом этапе',
  },
  {
    icon: Shield,
    title: 'Гарантия и поддержка',
    description: 'Предоставляем гарантию и долгосрочную поддержку',
  },
]

export default function Process() {
  const ref = useRef(null)
  const timelineRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={ref} className="section-padding bg-neutral-100 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance">
            Процесс работы
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Простой и прозрачный процесс от первого контакта до результата
          </p>
        </motion.div>

        {/* Mobile: vertical timeline with progress */}
        <div ref={timelineRef} className="lg:hidden relative max-w-xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-neutral-200" />
          <motion.div
            className="absolute left-8 top-0 w-1 bg-primary-500 origin-top"
            style={{ height: lineHeight }}
          />
          
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative pl-20"
                >
                  <motion.div
                    className="absolute left-0 w-16 h-16 rounded-2xl bg-white border-4 border-neutral-100 shadow-medium flex items-center justify-center z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="relative">
                      <Icon className="w-7 h-7 text-primary-500" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="glass-card rounded-2xl p-5 relative overflow-hidden group touch-interactive"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-full" />
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Desktop: horizontal with progress line */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2" />
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-primary-500 -translate-y-1/2 origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          <div className="grid grid-cols-7 gap-4 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.8, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative touch-interactive"
                >
                  <div className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center h-full relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative mb-3 md:mb-4 z-10">
                      <motion.div
                        className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-2xl bg-primary-500/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-500" />
                      </motion.div>
                      <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs md:text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-neutral-900 mb-1 md:mb-2 group-hover:text-primary-500 transition-colors relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 relative z-10">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

