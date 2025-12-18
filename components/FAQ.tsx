'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Сколько времени занимает импорт автомобиля?',
    answer: 'Сроки зависят от страны происхождения и выбранного способа доставки. В среднем, импорт из Китая занимает 30-45 дней, из Европы — 20-30 дней, из Японии — 25-35 дней. Мы всегда информируем о точных сроках на этапе расчёта.',
  },
  {
    question: 'Какие гарантии вы предоставляете?',
    answer: 'Мы предоставляем полную гарантию на все приобретённые автомобили и выполненные работы. Гарантия на автомобиль — согласно условиям производителя, на работы — от 1 до 3 лет в зависимости от типа работ. Все условия прописаны в договоре.',
  },
  {
    question: 'Можно ли купить автомобиль в рассрочку?',
    answer: 'Да, мы работаем с различными вариантами финансирования. Подберём оптимальный вариант рассрочки или кредита с нашими партнёрами. Свяжитесь с нами для получения детальной информации.',
  },
  {
    question: 'Что входит в услугу "под ключ"?',
    answer: 'Услуга "под ключ" включает: выбор автомобиля, проверку, покупку, оформление всех документов, доставку, таможенное оформление, русификацию, адаптацию под российские стандарты, регистрацию. Вы получаете полностью готовый к использованию автомобиль.',
  },
  {
    question: 'Работаете ли вы с электромобилями?',
    answer: 'Да, мы специализируемся на работе с электромобилями и гибридными автомобилями. У нас есть опыт работы с Tesla, BYD, NIO и другими брендами. Мы выполняем полную адаптацию, обслуживание и ремонт электромобилей.',
  },
  {
    question: 'Как происходит процесс комиссионной продажи?',
    answer: 'Мы проводим оценку автомобиля, готовим его к продаже (мойка, фотосессия, описание), размещаем на всех основных площадках, ведём переговоры с покупателями и оформляем сделку. Комиссия обсуждается индивидуально.',
  },
  {
    question: 'Предоставляете ли вы услуги по ремонту после гарантии?',
    answer: 'Да, мы предоставляем полный спектр услуг по ремонту и обслуживанию даже после окончания гарантийного срока. Наши специалисты имеют большой опыт работы с различными марками и моделями.',
  },
  {
    question: 'Можно ли отслеживать процесс работы?',
    answer: 'Да, мы предоставляем полную прозрачность процесса. Вы получаете регулярные отчёты о ходе работ, фотографии, документы. Все этапы можно отслеживать через наш личный кабинет или мессенджеры.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance">
            Часто задаваемые вопросы
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass-card rounded-xl md:rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 md:p-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
              >
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3 md:pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-neutral-600" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 md:px-6 md:pb-6 text-sm md:text-base text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

