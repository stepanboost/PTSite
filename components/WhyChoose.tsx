'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Shield, Eye, CheckCircle, Heart } from 'lucide-react'

const reasons = [
  { icon: Clock, title: 'Экономия времени' },
  { icon: Shield, title: 'Полная ответственность' },
  { icon: Eye, title: 'Прозрачность процессов' },
  { icon: CheckCircle, title: 'Гарантия на всё' },
  { icon: Heart, title: 'Долгосрочная поддержка' },
]

export default function WhyChoose() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const progressWidth = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%'])

  return (
    <section ref={ref} className="section-padding bg-neutral-100 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-6 text-balance">
            Почему выбирают нас
          </h2>
          
          {/* Animated progress line */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="h-1 bg-neutral-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary-500 origin-left"
                style={{ width: progressWidth }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Simple icon grid for all devices */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-neutral-200 rounded-2xl p-4 md:p-6 text-center shadow-soft hover:shadow-medium hover:border-primary-500/30 transition-all"
              >
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl bg-primary-500/10 flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-500" />
                </motion.div>
                <h3 className="text-sm md:text-base font-bold text-neutral-900">
                  {reason.title}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
