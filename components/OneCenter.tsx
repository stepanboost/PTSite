'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Car, Wrench, Shield, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  { icon: Car, title: 'Импорт/покупка', color: 'primary' },
  { icon: Wrench, title: 'Русификация', color: 'primary' },
  { icon: Wrench, title: 'Доработки', color: 'primary' },
  { icon: Wrench, title: 'ТО и ремонт', color: 'primary' },
  { icon: Shield, title: 'Гарантия', color: 'primary' },
  { icon: Car, title: 'Продажа', color: 'primary' },
]

export default function OneCenter() {
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
            Один центр — полная ответственность
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Весь жизненный цикл вашего автомобиля в одном месте. От покупки до продажи — мы полностью отвечаем за каждый этап.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6, type: 'spring', stiffness: 120 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="glass-card rounded-xl md:rounded-2xl p-3 md:p-6 text-center cursor-pointer group relative overflow-hidden touch-interactive"
              >
                <motion.div
                  className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-xl md:rounded-2xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-5 h-5 md:w-8 md:h-8 text-primary-500" />
                </motion.div>
                <h3 className="text-xs md:text-base font-semibold text-neutral-900 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="glass-card-strong rounded-2xl md:rounded-3xl p-6 md:p-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
              <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-primary-500" />
              <h3 className="text-lg md:text-2xl font-bold text-neutral-900">Полный жизненный цикл</h3>
            </div>
            <p className="text-sm md:text-lg text-neutral-600 mb-4 md:mb-6">
              Мы сопровождаем ваш автомобиль на всех этапах: от выбора и покупки до обслуживания и продажи. 
              Одна команда, один центр, полная ответственность за результат.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-neutral-600">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary-500" />
                <span>Прозрачность процессов</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-neutral-600">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary-500" />
                <span>Долгосрочное сопровождение</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-neutral-600">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary-500" />
                <span>Гарантия на все работы</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

