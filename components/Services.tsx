'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Car, 
  Globe, 
  Sparkles, 
  Wrench, 
  Shield, 
  TrendingUp,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'import',
    icon: Car,
    title: 'Импорт',
    description: 'Покупка автомобилей из Китая, Европы, Японии и Кореи. Полное сопровождение сделки, проверка, оформление документов.',
    bullets: [
      'Проверка автомобиля перед покупкой',
      'Ведение переговоров и оформление документов',
      'Работа с проверенными поставщиками',
      'Готовый к использованию автомобиль',
    ],
  },
  {
    id: 'localization',
    icon: Globe,
    title: 'Адаптация',
    description: 'Полная адаптация автомобиля под российские стандарты: русификация интерфейса, настройка навигации, соответствие требованиям.',
    bullets: [
      'Русификация мультимедиа-системы',
      'Настройка навигации под РФ',
      'Адаптация голосового помощника',
      'Соответствие стандартам безопасности',
    ],
  },
  {
    id: 'improvements',
    icon: Sparkles,
    title: 'Улучшения',
    description: 'PPF, оптика, шумоизоляция, сигнализация, антикоррозийная обработка, керамика, детейлинг — всё для идеального состояния.',
    bullets: [
      'Защитная плёнка PPF',
      'Профессиональная шумоизоляция',
      'Антикоррозийная обработка',
      'Керамическое покрытие и детейлинг',
    ],
  },
  {
    id: 'service',
    icon: Wrench,
    title: 'Сервис',
    description: 'Техническое обслуживание и ремонт: электрика, подвеска, HV-системы, обновление ПО, запчасти — всё в одном месте.',
    bullets: [
      'Диагностика и ремонт электрики',
      'Работа с гибридными системами',
      'Обновление программного обеспечения',
      'Всегда в наличии необходимые запчасти',
    ],
  },
  {
    id: 'guarantee',
    icon: Shield,
    title: 'Гарантия',
    description: 'Полная гарантия на автомобиль и все выполненные работы. Долгосрочное сопровождение и поддержка.',
    bullets: [
      'Гарантия на все автомобили',
      'Гарантия на выполненные работы',
      'Долгосрочное сопровождение',
      'Поддержка на весь срок эксплуатации',
    ],
  },
  {
    id: 'sale',
    icon: TrendingUp,
    title: 'Продажа',
    description: 'Помощь в продаже вашего автомобиля: оценка, подготовка, размещение, переговоры, оформление сделки.',
    bullets: [
      'Оценка автомобиля',
      'Подготовка к продаже',
      'Размещение на всех площадках',
      'Ведение переговоров и оформление',
    ],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState('import')

  const activeService = services.find(s => s.id === activeTab) || services[0]

  return (
    <section id="services" ref={ref} className="section-padding bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Чем мы занимаемся
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Полный спектр услуг для вашего автомобиля в одном месте
          </p>
        </motion.div>

        {/* Табы */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            const isActive = activeTab === service.id
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white border border-neutral-300 shadow-sm text-neutral-900'
                    : 'bg-neutral-100/70 hover:bg-neutral-100 text-neutral-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{service.title}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Контент справа */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8 items-start"
        >
          {/* Левая часть - описание */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                {(() => {
                  const Icon = activeService.icon
                  return <Icon className="w-6 h-6 text-red-600" />
                })()}
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900">
                {activeService.title}
              </h3>
            </div>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              {activeService.description}
            </p>
          </div>

          {/* Правая часть - буллеты */}
          <div className="bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
            <h4 className="font-semibold text-neutral-900 mb-4">Что входит:</h4>
            <ul className="space-y-3">
              {activeService.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-600" />
                  </div>
                  <span className="text-sm text-neutral-600 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mt-6 w-full btn-primary flex items-center justify-center gap-2"
            >
              Получить расчёт
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
