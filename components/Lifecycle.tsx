'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Car, Globe, Sparkles, Wrench, Shield, TrendingUp, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Car,
    title: 'Покупка',
    description: 'Выбор и покупка автомобиля из Китая, Европы, Японии или РФ',
    details: 'Мы полностью берём на себя процесс поиска, проверки и покупки автомобиля. Ведём переговоры с продавцами, проверяем историю автомобиля, оформляем все документы. Вы получаете готовый автомобиль без головной боли с таможней, документами и логистикой.',
  },
  {
    icon: Globe,
    title: 'Адаптация',
    description: 'Русификация и адаптация под российские стандарты',
    details: 'Полная русификация интерфейса, адаптация под российские стандарты безопасности и экологии. Мы решаем все вопросы с регистрацией, получением ПТС и постановкой на учёт. Всё делаем за вас, вы просто получаете готовый к использованию автомобиль.',
  },
  {
    icon: Sparkles,
    title: 'Улучшения',
    description: 'Доработки: PPF, оптика, шумоизоляция, сигнализация',
    details: 'Комплексная защита и улучшение: установка PPF-плёнки, керамическое покрытие, улучшенная оптика, профессиональная шумоизоляция, современная сигнализация. Мы знаем, что нужно вашему автомобилю, и делаем это качественно и быстро.',
  },
  {
    icon: Wrench,
    title: 'Сервис',
    description: 'Техническое обслуживание и ремонт на всех этапах',
    details: 'Профессиональное ТО и ремонт с использованием оригинальных запчастей и современного оборудования. Диагностика, ремонт гибридных систем, обновление ПО, замена расходников. Мы поддерживаем ваш автомобиль в идеальном состоянии на протяжении всего срока эксплуатации.',
  },
  {
    icon: Shield,
    title: 'Гарантия',
    description: 'Полная гарантия на автомобиль и все выполненные работы',
    details: 'Мы предоставляем полную гарантию на автомобиль и все выполненные работы. Долгосрочная поддержка 24/7, решение любых вопросов, консультации по эксплуатации. Вы всегда можете обратиться к нам за помощью.',
  },
  {
    icon: TrendingUp,
    title: 'Продажа',
    description: 'Комиссионная продажа при необходимости',
    details: 'Если вы решили продать автомобиль, мы поможем получить максимальную цену. Проведём оценку, подготовим автомобиль к продаже, разместим на всех площадках, проведём переговоры с покупателями. Вы экономите время и получаете лучшую цену.',
  },
]

export default function Lifecycle() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heightPercent = useTransform(progress, (p) => `${p}%`)

  return (
    <section ref={ref} className="section-padding bg-neutral-100 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance">
            Жизненный цикл вашего автомобиля
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            От покупки до продажи — мы сопровождаем вас на каждом этапе
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line — на мобильном слева вертикальная линия */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-neutral-300 md:bg-neutral-200 -translate-x-1/2" />
          <motion.div
            className="absolute left-[19px] md:left-1/2 top-0 w-0.5 md:w-1 bg-primary-500 -translate-x-1/2 origin-top"
            style={{ height: heightPercent }}
          />

          {/* Steps */}
          <div className="space-y-4 md:space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-8 pl-12 md:pl-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Точка таймлайна на мобильном */}
                  <div className="absolute left-0 top-6 w-10 h-10 flex items-center justify-center md:hidden z-10">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-white border-3 border-primary-500 flex items-center justify-center shadow-strong relative"
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <Icon className="w-5 h-5 text-primary-500 relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-primary-500/30 rounded-full blur-lg"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>
                  </div>
                  {/* Content */}
                  <div className={`flex-1 min-w-0 ${isEven ? 'md:text-right' : ''}`}>
                    <motion.div
                      className="glass-card rounded-xl md:rounded-2xl p-4 md:p-8 w-full md:inline-block md:w-auto relative overflow-hidden group"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity md:hidden" />
                      <div className="flex items-start gap-3 md:flex-col md:items-start relative z-10">
                        {isEven && (
                          <motion.div
                            className="hidden md:flex w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary-500/10 items-center justify-center flex-shrink-0 relative"
                            whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
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
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: index * 0.2,
                              }}
                            />
                          </motion.div>
                        )}
                        <div className={isEven ? 'md:text-right md:ml-auto' : ''}>
                          <div className="flex items-center gap-2 mb-2 md:justify-start">
                            {!isEven && (
                              <motion.div
                                className="hidden md:flex w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary-500/10 items-center justify-center flex-shrink-0 relative"
                                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
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
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: index * 0.2,
                                  }}
                                />
                              </motion.div>
                            )}
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-900 group-hover:text-primary-500 transition-colors">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">{step.description}</p>
                          <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">{step.details}</p>
                        </div>
                        {!isEven && (
                          <div className="hidden md:block" />
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot — только десктоп */}
                  <div className="hidden md:flex relative z-10 flex-shrink-0 justify-center">
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-neutral-100 border-4 border-primary-500 flex items-center justify-center shadow-glass-strong relative"
                      whileInView={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.8, type: 'spring' }}
                    >
                      <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-primary-500 relative z-10" />
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
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="md:hidden w-full" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
