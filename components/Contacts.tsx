'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const contacts = [
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (964) 342-16-44',
    link: 'tel:+79643421644',
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'sales@teamserviceprovolta.ru',
    link: 'mailto:sales@teamserviceprovolta.ru',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    value: 'Санкт-Петербург, ул. Парашютная, 51, стр. 1, секция А6',
    link: 'https://yandex.ru/maps/?text=Санкт-Петербург,+ул.+Парашютная,+51',
  },
  {
    icon: Clock,
    title: 'Режим работы',
    value: '10:00–20:00 каждый день',
    link: '#',
  },
]

const messengers = [
  { name: 'Telegram', icon: '✈️', link: 'https://t.me/teamserviceprovolta' },
  { name: 'WhatsApp', icon: '💬', link: 'https://wa.me/79643421644' },
]

export default function Contacts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    comment: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contacts" ref={ref} className="section-padding bg-neutral-50 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Заполните форму или свяжитесь любым удобным способом
          </p>
        </motion.div>

        {/* 2 колонки: форма слева, контакты справа */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Левая колонка - форма */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white border border-neutral-200/60 rounded-2xl p-8 shadow-[0_8px_20px_rgba(0,0,0,0.05)]"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-field w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-900 mb-2">
                  Что нужно
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="input-field w-full"
                  required
                >
                  <option value="">Выберите услугу</option>
                  <option value="import">Импорт</option>
                  <option value="adaptation">Русификация</option>
                  <option value="service">Сервис</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-neutral-900 mb-2">
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  rows={4}
                  className="input-field w-full resize-none"
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Получить консультацию
              </button>

              <p className="text-xs text-neutral-500 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </motion.div>

          {/* Правая колонка - контакты */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Контактные карточки */}
            <div className="space-y-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={index}
                    href={contact.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="flex items-center gap-4 bg-white border border-neutral-200/60 rounded-xl p-4 hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 mb-0.5">{contact.title}</h3>
                      <p className="text-sm text-neutral-600">{contact.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Мессенджеры */}
            <div className="bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-semibold text-neutral-900">Мессенджеры</h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                Напишите нам в удобном мессенджере — мы ответим в течение часа
              </p>
              <div className="flex gap-3">
                {messengers.map((messenger, index) => (
                  <motion.a
                    key={index}
                    href={messenger.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center text-xl transition-colors"
                  >
                    {messenger.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Яндекс карта */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.05)]"
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?text=Санкт-Петербург,+ул.+Парашютная,+51,+стр.+1,+секция+А6&z=16"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            style={{ border: 0 }}
            className="w-full"
            title="Карта расположения офиса"
          />
        </motion.div>
      </div>
    </section>
  )
}
