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
  X,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'import',
    icon: Car,
    title: 'Импорт/покупка под ключ',
    category: 'Импорт',
    description: 'Покупка автомобилей из Китая, Европы, Японии и РФ. Полное сопровождение сделки, проверка, оформление документов.',
    details: 'Мы работаем с проверенными поставщиками и дилерами по всему миру. Наша команда проверяет каждый автомобиль перед покупкой, ведёт переговоры и оформляет все необходимые документы. Вы получаете готовый к использованию автомобиль без лишних хлопот.',
  },
  {
    id: 'localization',
    icon: Globe,
    title: 'Русификация и адаптация под РФ',
    category: 'Адаптация',
    description: 'Полная адаптация автомобиля под российские стандарты: русификация интерфейса, настройка навигации, соответствие требованиям.',
    details: 'Наши специалисты адаптируют мультимедиа-систему, навигацию, голосового помощника под русский язык. Настраиваем все системы под российские стандарты и требования безопасности.',
  },
  {
    id: 'improvements',
    icon: Sparkles,
    title: 'Доработки/улучшения',
    category: 'Улучшения',
    description: 'PPF, оптика, шумоизоляция, сигнализация, антикоррозийная обработка, керамика, детейлинг — всё для идеального состояния.',
    details: 'Защитная плёнка PPF, улучшенная оптика, профессиональная шумоизоляция, современные системы безопасности, антикоррозийная обработка, керамическое покрытие и детейлинг — мы делаем ваш автомобиль идеальным.',
  },
  {
    id: 'service',
    icon: Wrench,
    title: 'ТО и ремонт',
    category: 'Сервис',
    description: 'Техническое обслуживание и ремонт: электрика, подвеска, HV-системы, обновление ПО, запчасти — всё в одном месте.',
    details: 'Наш сервисный центр оснащён современным оборудованием для диагностики и ремонта. Мы работаем с электрикой, подвеской, гибридными системами, обновляем программное обеспечение и всегда имеем необходимые запчасти.',
  },
  {
    id: 'guarantee',
    icon: Shield,
    title: 'Гарантия на авто и работы',
    category: 'Гарантия',
    description: 'Полная гарантия на автомобиль и все выполненные работы. Долгосрочное сопровождение и поддержка.',
    details: 'Мы предоставляем гарантию на все автомобили и выполненные работы. Наша команда всегда на связи для решения любых вопросов и поддержки на протяжении всего срока эксплуатации.',
  },
  {
    id: 'sale',
    icon: TrendingUp,
    title: 'Комиссионная продажа',
    category: 'Продажа',
    description: 'Помощь в продаже вашего автомобиля: оценка, подготовка, размещение, переговоры, оформление сделки.',
    details: 'Мы поможем продать ваш автомобиль по максимальной цене. Проводим оценку, готовим автомобиль к продаже, размещаем на всех площадках, ведём переговоры и оформляем сделку.',
  },
]

const categories = ['Все', 'Импорт', 'Адаптация', 'Улучшения', 'Сервис', 'Гарантия', 'Продажа']

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const filteredServices = selectedCategory === 'Все' 
    ? services 
    : services.filter(s => s.category === selectedCategory)

  return (
    <section id="services" ref={ref} className="section-padding bg-neutral-100 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance">
            Наши услуги
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Полный спектр услуг для вашего автомобиля в одном месте
          </p>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-medium'
                  : 'bg-neutral-100/80 backdrop-blur-glass text-neutral-700 hover:bg-neutral-100 shadow-soft'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  delay: index * 0.1, 
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
                onClick={() => setSelectedService(service.id)}
                className="glass-card rounded-xl md:rounded-2xl p-5 md:p-8 cursor-pointer group relative overflow-hidden perspective-1000 touch-interactive"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 via-primary-500/5 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary-500/20 transition-colors relative"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-500 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-primary-500/20 rounded-xl md:rounded-2xl blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2 md:mb-3 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">{service.description}</p>
                  <motion.div
                    className="flex items-center text-primary-500 font-medium text-sm md:text-base"
                    whileHover={{ x: 4 }}
                  >
                    <span>Подробнее</span>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Service detail modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card-strong rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {(() => {
              const service = services.find(s => s.id === selectedService)
              if (!service) return null
              const Icon = service.icon
              return (
                <>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                        <span className="text-sm text-primary-500 font-medium">{service.category}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5 text-neutral-600" />
                    </button>
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">{service.details}</p>
                  <button
                    onClick={() => {
                      setSelectedService(null)
                      document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-primary w-full"
                  >
                    Получить расчёт
                  </button>
                </>
              )
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

