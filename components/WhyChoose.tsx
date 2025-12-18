'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Shield, Eye, CheckCircle, Heart } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Экономия времени',
    description: 'Всё в одном месте — не нужно искать разных подрядчиков и координировать их работу. Мы берём на себя все процессы.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Shield,
    title: 'Ответственность',
    description: 'Работаем с 2020 года. Мы полностью отвечаем за каждый этап работы и результат. Гарантируем качество.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Eye,
    title: 'Прозрачность',
    description: 'Чёткие сроки, фиксированные цены, полная отчётность на каждом этапе. Никаких скрытых платежей.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: CheckCircle,
    title: 'Гарантия',
    description: 'Предоставляем гарантию на автомобиль и все выполненные работы. Долгосрочное сопровождение.',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    icon: Heart,
    title: 'Долгосрочное сопровождение',
    description: 'Мы не просто выполняем работу — мы становимся вашими партнёрами на долгие годы.',
    color: 'from-rose-500/20 to-pink-500/20',
  },
]

export default function WhyChoose() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 via-transparent to-primary-100/50" />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.h2
            className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            Почему выбирают нас
          </motion.h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Мы создали сервис, который решает все задачи с автомобилем в одном месте
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                whileTap={{ scale: 0.95, rotateY: 0 }}
                className="glass-card rounded-xl md:rounded-2xl p-5 md:p-8 relative overflow-hidden perspective-1000 group touch-interactive"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-100`}
                  transition={{ duration: 0.3 }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary-500/10 flex items-center justify-center mb-4 md:mb-6 relative"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.15
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-primary-500/30 rounded-xl md:rounded-2xl blur-xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 2 + index * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2 md:mb-3 group-hover:text-primary-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
