'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, CheckCircle, Clock, FileCheck } from 'lucide-react'

const guarantees = [
  {
    icon: Shield,
    title: 'Гарантия на автомобиль',
    description: 'Полная гарантия на все приобретённые автомобили',
  },
  {
    icon: FileCheck,
    title: 'Гарантия на работы',
    description: 'Гарантия на все выполненные работы и установленное оборудование',
  },
  {
    icon: Clock,
    title: 'Долгосрочная поддержка',
    description: 'Мы всегда на связи для решения любых вопросов',
  },
  {
    icon: CheckCircle,
    title: 'Прозрачные условия',
    description: 'Чёткие условия гарантии, без скрытых пунктов',
  },
]

export default function Guarantee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary-500/10 mb-4 md:mb-6">
            <Shield className="w-8 h-8 md:w-12 md:h-12 text-primary-600" />
          </div>
          <h2 className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance">
            Гарантия — это наша ответственность
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Мы уверены в качестве нашей работы и готовы это гарантировать
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-12">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-primary-500/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-neutral-900 mb-1 md:mb-2">{guarantee.title}</h3>
                <p className="text-xs md:text-sm text-neutral-600">{guarantee.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-card-strong rounded-2xl md:rounded-3xl p-6 md:p-12 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 md:mb-4">
            Работаем с 2020 года
          </h3>
          <p className="text-sm md:text-lg text-neutral-600 mb-4 md:mb-6">
            За годы работы мы накопили огромный опыт и создали надёжную систему гарантий. 
            Мы полностью отвечаем за качество нашей работы и готовы это подтвердить документально.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">4+</div>
              <div className="text-xs md:text-sm text-neutral-600">Года работы</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">100%</div>
              <div className="text-xs md:text-sm text-neutral-600">Гарантия качества</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">24/7</div>
              <div className="text-xs md:text-sm text-neutral-600">Поддержка</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

