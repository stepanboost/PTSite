'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer ref={ref} className="bg-white border-t border-neutral-200/60 text-neutral-600 py-8 md:py-12">
      <div className="container-custom px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8"
        >
          <div>
            <h3 className="text-neutral-900 font-bold text-base md:text-lg mb-3 md:mb-4">PROVOLTA & TEAM SERVICE</h3>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
              Полный цикл услуг с автомобилем: от покупки до эксплуатации. 
              Всё под ключ. Один центр. Одна команда. Полная ответственность.
            </p>
          </div>
          
          <div>
            <h4 className="text-neutral-900 font-semibold text-sm md:text-base mb-3 md:mb-4">Услуги</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors block py-1 touch-interactive text-left w-full">
                  Импорт/покупка
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors block py-1 touch-interactive text-left w-full">
                  Русификация
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors block py-1 touch-interactive text-left w-full">
                  Доработки
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors block py-1 touch-interactive text-left w-full">
                  ТО и ремонт
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('guarantee')} className="hover:text-red-600 transition-colors block py-1 touch-interactive text-left w-full">
                  Гарантия
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors block py-1 touch-interactive text-left w-full">
                  Продажа
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-neutral-900 font-semibold text-sm md:text-base mb-3 md:mb-4">Информация</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <button onClick={() => scrollToSection('contacts')} className="hover:text-red-600 transition-colors block py-1 touch-interactive text-left w-full">
                  Контакты
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-we-work')} className="hover:text-red-600 transition-colors block py-1 touch-interactive text-left w-full">
                  Процесс работы
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('guarantee')} className="hover:text-red-600 transition-colors block py-1 touch-interactive text-left w-full">
                  Гарантия
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-red-600 transition-colors block py-1 touch-interactive text-left w-full">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="border-t border-neutral-200 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-neutral-500"
        >
          <p className="text-center md:text-left">© 2026 PROVOLTA & TEAM SERVICE. Все права защищены.</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 text-center md:text-right">
            <a href="#" className="hover:text-red-600 transition-colors touch-interactive py-1">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-red-600 transition-colors touch-interactive py-1">
              Пользовательское соглашение
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
