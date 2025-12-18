'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

const contacts = [
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (XXX) XXX-XX-XX',
    link: 'tel:+7XXXXXXXXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@provolta-service.ru',
    link: 'mailto:info@provolta-service.ru',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    value: 'Москва, ул. Примерная, д. 1',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Режим работы',
    value: 'Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00',
    link: '#',
  },
]

const messengers = [
  { name: 'WhatsApp', icon: '💬', link: '#' },
  { name: 'Telegram', icon: '✈️', link: '#' },
  { name: 'Viber', icon: '📱', link: '#' },
]

export default function Contacts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contacts" ref={ref} className="section-padding bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance">
            Контакты
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Свяжитесь с нами любым удобным способом
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={index}
                href={contact.link}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center block"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-primary-500/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-neutral-900 mb-1 md:mb-2">{contact.title}</h3>
                <p className="text-xs md:text-sm text-neutral-600">{contact.value}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Messengers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-card-strong rounded-2xl md:rounded-3xl p-6 md:p-12 max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />
            <h3 className="text-lg md:text-2xl font-bold text-neutral-900">Мессенджеры</h3>
          </div>
          <p className="text-sm md:text-base text-neutral-600 mb-4 md:mb-6">
            Напишите нам в удобном мессенджере — мы ответим в течение часа
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {messengers.map((messenger, index) => (
              <motion.a
                key={index}
                href={messenger.link}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary-500/10 hover:bg-primary-500/20 flex items-center justify-center text-xl md:text-2xl transition-colors"
              >
                {messenger.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 md:mt-12 rounded-2xl md:rounded-3xl overflow-hidden shadow-glass-strong"
        >
          <div className="w-full h-64 md:h-96 bg-neutral-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 md:w-16 md:h-16 text-neutral-400 mx-auto mb-3 md:mb-4" />
              <p className="text-sm md:text-base text-neutral-500">Карта будет здесь</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

