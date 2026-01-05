'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, User, Phone, Mail, MessageSquare } from 'lucide-react'

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    phone: '+7 ',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handlePhoneChange = (value: string) => {
    // Автоматически добавляем +7 если его нет
    let formattedValue = value
    if (!formattedValue.startsWith('+7')) {
      formattedValue = '+7 ' + formattedValue.replace(/^\+7\s?/, '')
    }
    setFormData({ ...formData, phone: formattedValue })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь должна быть отправка данных на сервер
    console.log('Contact form data:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '+7 ', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section ref={ref} className="section-padding bg-neutral-100 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance">
            Свяжитесь с нами
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Оставьте заявку, и мы свяжемся с вами в течение часа
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card-strong rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-4 md:space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <User className="w-4 h-4 inline mr-2 text-primary-500" />
                Ваше имя <span className="text-primary-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full glass-card rounded-xl md:rounded-2xl p-4 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2 text-primary-500" />
                Телефон <span className="text-primary-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className="w-full glass-card rounded-xl md:rounded-2xl p-4 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="+7 (XXX) XXX-XX-XX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2 text-primary-500" />
                Email (необязательно)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full glass-card rounded-xl md:rounded-2xl p-4 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="ivan@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2 text-primary-500" />
                Сообщение
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full glass-card rounded-xl md:rounded-2xl p-4 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                placeholder="Расскажите о ваших пожеланиях..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={!formData.name || !formData.phone || formData.phone === '+7 '}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitted ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                  Отправлено!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Отправить заявку
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

