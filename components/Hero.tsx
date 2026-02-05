'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, FileCheck, Clock, FileText } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  onOpenQuiz: () => void
  onOpenContract: () => void
}

export default function Hero({ onOpenQuiz, onOpenContract }: HeroProps) {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Левая колонка - текст */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-6 text-center"
          >
            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight px-2 md:px-0 mb-2"
            >
              Импорт и сервис автомобилей под ключ
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm md:text-lg text-neutral-600 leading-relaxed px-4 md:px-0 max-w-xl mx-auto mb-2"
            >
              Полный цикл работы с премиальными авто: подбор → проверка → доставка → таможня → адаптация → обслуживание. С договором и прозрачными документами.
            </motion.p>

            {/* Trust badges - премиальный дизайн */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full"
            >
              {/* Мобильная версия - премиум дизайн */}
              <div className="md:hidden">
                <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start justify-between relative">
                    {[
                      { icon: Clock, text: 'Работаем с 2020' },
                      { icon: FileCheck, text: 'Договор и смета' },
                      { icon: Shield, text: 'Гарантия на авто и работы' },
                    ].map((pill, index) => {
                      const Icon = pill.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: 0.4 + index * 0.08, 
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="flex-1 flex flex-col items-center text-center relative"
                        >
                          <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-3">
                            <Icon className="w-5 h-5 text-red-600" strokeWidth={2.5} />
                          </div>
                          <span className="text-xs font-semibold text-neutral-900 leading-tight">
                            {pill.text}
                          </span>
                          {index < 2 && (
                            <div className="absolute right-0 top-0 bottom-0 w-px h-full bg-neutral-200/50" style={{ height: 'calc(100% - 8px)', marginTop: '4px' }} />
                          )}
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Десктопная версия - простая как было */}
              <div className="hidden md:flex flex-row flex-wrap gap-3 justify-center">
                {[
                  { icon: Clock, text: 'Работаем с 2020' },
                  { icon: FileCheck, text: 'Договор и смета' },
                  { icon: Shield, text: 'Гарантия на авто и работы' },
                ].map((pill, index) => {
                  const Icon = pill.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200/60 rounded-xl text-sm text-neutral-700"
                    >
                      <Icon className="w-4 h-4 text-red-600" />
                      <span>{pill.text}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Доверие: Посмотреть пример договора */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex justify-center"
            >
              <button
                onClick={onOpenContract}
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-red-600 transition-colors group"
              >
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Посмотреть пример договора</span>
              </button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 justify-center px-4 md:px-0"
            >
              <button
                onClick={onOpenQuiz}
                className="btn-primary flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Получить расчёт за 10 минут
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document.getElementById('in-stock')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary w-full sm:w-auto"
              >
                Авто в наличии
              </button>
            </motion.div>

          </motion.div>

          {/* Правая колонка - фото */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          >
            <Image
              src="/hero-team.jpg"
              alt="Команда PROVOLTA & TEAM SERVICE"
              width={800}
              height={600}
              className="w-full h-full object-cover aspect-[4/3]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
