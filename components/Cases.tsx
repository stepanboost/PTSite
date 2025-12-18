'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Car, Calendar, DollarSign, CheckCircle } from 'lucide-react'

const cases = [
  {
    title: 'Импорт и адаптация Tesla Model Y',
    description: 'Полный цикл: покупка в Китае, доставка, русификация, установка PPF и керамики',
    before: 'Автомобиль в Китае, без документов, без адаптации',
    after: 'Готовый к использованию автомобиль с полной адаптацией',
    duration: '45 дней',
    cost: 'Экономия 30% за счёт прямых поставок',
    services: ['Импорт', 'Русификация', 'PPF', 'Керамика'],
  },
  {
    title: 'Доработка и улучшение BYD Han',
    description: 'Комплексная доработка: шумоизоляция, улучшенная оптика, сигнализация, антикор',
    before: 'Базовый автомобиль без дополнительных опций',
    after: 'Премиум-уровень комфорта и защиты',
    duration: '12 дней',
    cost: 'Оптимальное соотношение цена/качество',
    services: ['Шумоизоляция', 'Оптика', 'Сигнализация', 'Антикор'],
  },
  {
    title: 'ТО и ремонт гибридной системы',
    description: 'Диагностика и ремонт HV-системы, обновление ПО, замена компонентов',
    before: 'Проблемы с гибридной системой, ошибки в ПО',
    after: 'Полностью рабочая система, обновлённое ПО',
    duration: '5 дней',
    cost: 'Гарантия на работы 2 года',
    services: ['Диагностика', 'Ремонт HV', 'Обновление ПО', 'Гарантия'],
  },
  {
    title: 'Комиссионная продажа',
    description: 'Оценка, подготовка, размещение и продажа автомобиля по максимальной цене',
    before: 'Автомобиль требует продажи, нет времени заниматься',
    after: 'Автомобиль продан по максимальной цене',
    duration: '21 день',
    cost: 'На 15% выше рыночной стоимости',
    services: ['Оценка', 'Подготовка', 'Размещение', 'Продажа'],
  },
]

export default function Cases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-neutral-50 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance">
            Наши кейсы
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Реальные примеры нашей работы с конкретными результатами
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                rotateY: 5,
                transition: { type: 'spring', stiffness: 300 }
              }}
              whileTap={{ scale: 0.95, rotateY: 0 }}
              className="glass-card rounded-xl md:rounded-2xl p-5 md:p-8 relative overflow-hidden group perspective-1000 touch-interactive"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 flex-1 group-hover:text-primary-600 transition-colors">
                    {caseItem.title}
                  </h3>
                  <motion.div
                    whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Car className="w-5 h-5 md:w-6 md:h-6 text-primary-600 flex-shrink-0 ml-3 md:ml-4" />
                  </motion.div>
                </div>
                
                <p className="text-sm md:text-base text-neutral-600 mb-4 md:mb-6">{caseItem.description}</p>

                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-neutral-700 mb-1">До:</div>
                      <div className="text-sm text-neutral-600">{caseItem.before}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-neutral-700 mb-1">После:</div>
                      <div className="text-sm text-neutral-600">{caseItem.after}</div>
                    </div>
                  </div>
                </div>

              <div className="flex flex-wrap gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-neutral-600">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-primary-500" />
                  <span>{caseItem.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-neutral-600">
                  <DollarSign className="w-3 h-3 md:w-4 md:h-4 text-primary-500" />
                  <span>{caseItem.cost}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {caseItem.services.map((service, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

