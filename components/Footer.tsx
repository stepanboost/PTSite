'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer ref={ref} className="bg-neutral-900 text-neutral-300 py-8 md:py-12">
      <div className="container-custom px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8"
        >
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">PROVOLTA & TEAM SERVICE</h3>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
              Полный цикл услуг с автомобилем: от покупки до эксплуатации. 
              Всё под ключ. Один центр. Одна команда. Полная ответственность.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Услуги</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors block py-1 touch-interactive">
                  Импорт/покупка
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors block py-1 touch-interactive">
                  Русификация
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors block py-1 touch-interactive">
                  Доработки
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors block py-1 touch-interactive">
                  ТО и ремонт
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors block py-1 touch-interactive">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors block py-1 touch-interactive">
                  Продажа
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Информация</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="#contacts" className="hover:text-white transition-colors block py-1 touch-interactive">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors block py-1 touch-interactive">
                  Процесс работы
                </a>
              </li>
              <li>
                <a href="#guarantee" className="hover:text-white transition-colors block py-1 touch-interactive">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors block py-1 touch-interactive">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="border-t border-neutral-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-neutral-500"
        >
          <p className="text-center md:text-left">© 2024 PROVOLTA & TEAM SERVICE. Все права защищены.</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 text-center md:text-right">
            <a href="#" className="hover:text-white transition-colors touch-interactive py-1">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors touch-interactive py-1">
              Пользовательское соглашение
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
