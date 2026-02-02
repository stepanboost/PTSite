'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Award, CheckCircle, Users } from 'lucide-react'

const stats = [
  { 
    icon: TrendingUp,
    value: '420+', 
    label: 'Авто импортировано из Китая',
    suffix: '',
  },
  { 
    icon: Award,
    value: '7', 
    label: 'Лет работаем с автоимпортом',
    suffix: 'лет',
  },
  { 
    icon: CheckCircle,
    value: '180+', 
    label: 'Автомобилей в 2025 году',
    suffix: '',
  },
  { 
    icon: Users,
    value: '68%', 
    label: 'Клиентов возвращаются',
    suffix: '',
  },
]

export default function ProofBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section 
      ref={ref}
      className="relative bg-neutral-900 py-8 md:py-12 border-y border-neutral-800 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                {/* Icon */}
                <motion.div 
                  className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-500/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-6 h-6 text-primary-500" />
                </motion.div>

                {/* Value with counter animation */}
                <motion.div 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-2"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    delay: index * 0.1 + 0.3, 
                    type: 'spring', 
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <div className="text-sm md:text-base text-neutral-400 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    </section>
  )
}
