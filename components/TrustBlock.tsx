'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Shield, 
  FileCheck, 
  Clock, 
  Eye, 
  CreditCard, 
  Headphones,
} from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Юридическая чистота',
    description: 'Все авто с полным пакетом документов. ПТС, СБКТС, таможенные декларации.',
  },
  {
    icon: FileCheck,
    title: 'Гарантия до 3 лет',
    description: 'Расширенная гарантия на автомобили и выполненные работы. Бесплатное устранение любых дефектов.',
  },
  {
    icon: Clock,
    title: 'Чёткие сроки',
    description: 'Фиксируем дедлайн в договоре. Если опоздали — компенсируем каждый день.',
  },
  {
    icon: Eye,
    title: 'Прозрачность 24/7',
    description: 'Фото- и видеофиксация на всех этапах. Видео с процесса работ, фото, чеки.',
  },
  {
    icon: CreditCard,
    title: 'Оплата частями',
    description: 'Разбиваем платёж на этапы. Платите по факту выполнения каждого шага.',
  },
]

const metrics = [
  { value: '4+ года', label: 'Опыт работы' },
  { value: '24/7', label: 'Поддержка' },
  { value: 'До 3 лет', label: 'Гарантия на авто и работы' },
  { value: 'Договор', label: 'И прозрачная смета' },
]

export default function TrustBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="guarantee" ref={ref} className="section-padding bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Более 4 лет работаем с китайскими автомобилями. Знаем все подводные камни импорта
          </p>
        </motion.div>

        {/* 2 колонки: тезисы слева, метрики справа */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Левая колонка - тезисы с иконками */}
          <div className="space-y-6">
            {trustPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Правая колонка - метрики */}
          <div className="bg-white border border-neutral-200/60 rounded-2xl p-8 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Цифры</h3>
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-semibold text-red-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => {
              const inStock = document.getElementById('in-stock')
              if (inStock) {
                inStock.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-secondary"
          >
            Показать авто в наличии
          </button>
        </motion.div>

      </div>
    </section>
  )
}
