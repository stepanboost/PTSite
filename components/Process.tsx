'use client'

import { motion } from 'framer-motion'
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
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2" />
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 h-1 bg-primary-500 -translate-y-1/2 origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -20 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { type: 'spring', stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95, rotateY: 0 }}
                  className="relative perspective-1000 touch-interactive"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center h-full relative overflow-hidden group">
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <div className="relative mb-3 md:mb-4 z-10">
                      <motion.div
                        className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-2xl bg-primary-500/10 flex items-center justify-center relative"
                        whileHover={{ 
                          rotate: [0, -15, 15, 0],
                          scale: 1.2
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-500 relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-primary-500/30 rounded-xl md:rounded-2xl blur-xl"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.7, 0.4],
                          }}
                          transition={{
                            duration: 2 + index * 0.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </motion.div>
                      <motion.div
                        className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs md:text-sm font-bold shadow-lg relative z-20"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {index + 1}
                      </motion.div>
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

