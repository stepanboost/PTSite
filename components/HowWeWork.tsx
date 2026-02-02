'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MessageCircle, 
  FileCheck, 
  Wrench, 
  Key,
  LucideIcon 
} from 'lucide-react'

interface Step {
  icon: LucideIcon
  title: string
  description: string
  bullets: string[]
}

const steps: Step[] = [
  {
    icon: MessageCircle,
    title: 'Консультация',
    description: 'Обсуждаем ваши пожелания, бюджет и сроки. Подбираем оптимальное решение.',
    bullets: [
      'Анализ потребностей',
      'Подбор вариантов',
      'Ответы на вопросы',
    ],
  },
  {
    icon: FileCheck,
    title: 'Смета и договор',
    description: 'Фиксируем стоимость, сроки и список работ. Прозрачный договор без скрытых платежей.',
    bullets: [
      'Фиксированная смета',
      'Прозрачный договор',
      'Чёткие сроки',
    ],
  },
  {
    icon: Wrench,
    title: 'Выполнение работ',
    description: 'Импорт, адаптация, улучшения, сервис — всё на нашем сервисе. Контроль качества на каждом этапе.',
    bullets: [
      'Импорт и доставка',
      'Адаптация под РФ',
      'Контроль качества',
    ],
  },
  {
    icon: Key,
    title: 'Контроль + гарантия',
    description: 'Получаете готовый автомобиль с полным пакетом документов, гарантией и постоянной поддержкой.',
    bullets: [
      'Финальный осмотр',
      'Гарантия на всё',
      'Постоянная поддержка',
    ],
  },
]

export default function HowWeWork() {
  const ref = useRef(null)
  const timelineRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  })
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Процесс работы
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            От первой консультации до получения ключей — прозрачный процесс без сюрпризов
          </p>
        </motion.div>

        {/* Компактный вертикальный таймлайн */}
        <div ref={timelineRef} className="relative max-w-3xl mx-auto" style={{ position: 'relative' }}>
          {/* Линия фона */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-neutral-300" />
          {/* Анимированная линия прогресса */}
          <motion.div
            className="absolute left-6 md:left-8 top-0 w-0.5 bg-red-600 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Точка на линии */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-4 border-red-600 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
                    </div>
                  </div>

                  {/* Контент - компактная карточка */}
                  <div className="flex-1 bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-3xl font-bold text-neutral-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {/* Буллеты */}
                    <ul className="space-y-2">
                      {step.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Итоговая информация */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 px-8 py-6 bg-white border border-neutral-200/60 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
            <div className="text-center md:text-left">
              <div className="text-sm text-neutral-500 mb-1">Средний срок под ключ</div>
              <div className="text-3xl font-semibold text-red-600">14–21 день</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-neutral-300" />
            <div className="text-center md:text-left">
              <div className="text-sm text-neutral-500 mb-1">Гарантия на всё</div>
              <div className="text-3xl font-semibold text-neutral-900">До 3 лет</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
