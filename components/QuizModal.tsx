'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { X, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

interface QuizStep {
  question: string
  type: 'select' | 'input' | 'contact'
  options?: string[]
  placeholder?: string
  fields?: Array<{
    name: string
    label: string
    type: 'text' | 'tel' | 'email' | 'textarea'
    required: boolean
  }>
  condition?: (answers: string[]) => boolean
  skipIf?: (answers: string[]) => boolean
}

const allQuizSteps: QuizStep[] = [
  {
    question: 'Какая услуга вас интересует?',
    type: 'select',
    options: [
      'Импорт/покупка автомобиля',
      'Русификация и адаптация',
      'Доработки и улучшения',
      'ТО и ремонт',
      'Гарантия и поддержка',
      'Комиссионная продажа',
      'Несколько услуг',
    ],
  },
  {
    question: 'Откуда планируете импортировать?',
    type: 'select',
    options: [
      'Китай',
      'Европа',
      'Япония',
      'Корея',
      'Ещё не определился',
    ],
    condition: (answers: string[]) => answers[0]?.includes('Импорт') || answers[0]?.includes('Несколько'),
  },
  {
    question: 'Какая марка/модель вас интересует?',
    type: 'input',
    placeholder: 'Например: Tesla Model Y, BYD Han...',
    condition: (answers: string[]) => {
      const firstAnswer = answers[0]
      return firstAnswer?.includes('Импорт') || 
             firstAnswer?.includes('Русификация') || 
             firstAnswer?.includes('Доработки') ||
             firstAnswer?.includes('Несколько')
    },
  },
  {
    question: 'Какой у вас бюджет?',
    type: 'select',
    options: [
      'До 2 млн руб.',
      '2-5 млн руб.',
      '5-10 млн руб.',
      'Свыше 10 млн руб.',
      'Нужна консультация',
    ],
    skipIf: (answers: string[]) => {
      // Пропускаем вопрос о бюджете для ТО и ремонта
      return answers[0]?.includes('ТО и ремонт')
    },
  },
  {
    question: 'Какие сроки важны для вас?',
    type: 'select',
    options: [
      'Как можно скорее',
      '1-2 месяца',
      '2-4 месяца',
      'Не критично',
    ],
  },
  {
    question: 'Оставьте контакты для связи',
    type: 'contact',
    fields: [
      { name: 'name', label: 'Ваше имя', type: 'text', required: true },
      { name: 'phone', label: 'Телефон', type: 'tel', required: true },
      { name: 'email', label: 'Email (необязательно)', type: 'email', required: false },
      { name: 'comment', label: 'Комментарий', type: 'textarea', required: false },
    ],
  },
]

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [contactData, setContactData] = useState({
    name: '',
    phone: '+7 ',
    email: '',
    comment: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Фильтруем шаги на основе условий
  const visibleSteps = useMemo(() => {
    const steps: QuizStep[] = []
    const tempAnswers: string[] = []
    
    for (const step of allQuizSteps) {
      // Проверяем условие показа шага
      if (step.condition && !step.condition(tempAnswers)) {
        continue
      }
      
      // Проверяем условие пропуска шага
      if (step.skipIf && step.skipIf(tempAnswers)) {
        continue
      }
      
      steps.push(step)
      
      // Если это не последний шаг, добавляем ответ в tempAnswers для проверки следующих шагов
      if (step.type !== 'contact') {
        const answerIndex = allQuizSteps.indexOf(step)
        if (answers[answerIndex] !== undefined) {
          tempAnswers.push(answers[answerIndex])
        }
      }
    }
    
    return steps
  }, [answers])

  const currentQuestion = visibleSteps[currentStep]
  const isLastStep = currentStep === visibleSteps.length - 1
  const totalSteps = visibleSteps.length

  // Синхронизируем currentStep с видимыми шагами
  useEffect(() => {
    if (currentStep >= visibleSteps.length && visibleSteps.length > 0) {
      setCurrentStep(visibleSteps.length - 1)
    }
  }, [visibleSteps.length, currentStep])

  const handleNext = () => {
    if (isLastStep) {
      handleSubmit()
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      // Удаляем последний ответ при возврате назад
      const lastAnswerIndex = allQuizSteps.findIndex((step, index) => {
        if (step === visibleSteps[currentStep - 1]) {
          return true
        }
        return false
      })
      if (lastAnswerIndex >= 0 && answers[lastAnswerIndex] !== undefined) {
        const newAnswers = [...answers]
        newAnswers[lastAnswerIndex] = ''
        setAnswers(newAnswers)
      }
    }
  }

  const handleSelect = (value: string) => {
    // Находим индекс шага в оригинальном массиве
    const originalIndex = allQuizSteps.findIndex(step => step === currentQuestion)
    if (originalIndex >= 0) {
      const newAnswers = [...answers]
      newAnswers[originalIndex] = value
      setAnswers(newAnswers)
    }
    setTimeout(() => handleNext(), 300)
  }

  const handleInputChange = (value: string) => {
    const originalIndex = allQuizSteps.findIndex(step => step === currentQuestion)
    if (originalIndex >= 0) {
      const newAnswers = [...answers]
      newAnswers[originalIndex] = value
      setAnswers(newAnswers)
    }
  }

  const handlePhoneChange = (value: string) => {
    // Автоматически добавляем +7 если его нет
    let formattedValue = value
    if (!formattedValue.startsWith('+7')) {
      formattedValue = '+7 ' + formattedValue.replace(/^\+7\s?/, '')
    }
    setContactData({ ...contactData, phone: formattedValue })
  }

  const handleSubmit = () => {
    // Здесь должна быть отправка данных на сервер
    console.log('Quiz answers:', answers)
    console.log('Contact data:', contactData)
    setIsSubmitted(true)
    setTimeout(() => {
      onClose()
      setCurrentStep(0)
      setAnswers([])
      setContactData({ name: '', phone: '+7 ', email: '', comment: '' })
      setIsSubmitted(false)
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white border border-neutral-200/60 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
        >
          {isSubmitted ? (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center"
              >
                <CheckCircle className="w-10 h-10 text-green-500" />
              </motion.div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Спасибо!</h3>
              <p className="text-neutral-600">Мы свяжемся с вами в течение часа</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1">
                  <div className="text-sm text-neutral-600 mb-1">
                    Шаг {currentStep + 1} из {totalSteps}
                  </div>
                  <div className="w-full h-2 bg-white border border-neutral-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-red-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200/60 hover:bg-neutral-50 flex items-center justify-center transition-colors ml-4"
                >
                  <X className="w-5 h-5 text-neutral-600" />
                </button>
              </div>

              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  {currentQuestion.question}
                </h3>

                {currentQuestion.type === 'select' && (
                  <div className="space-y-3">
                    {currentQuestion.options?.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleSelect(option)}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white border border-neutral-200/60 rounded-xl p-4 text-left hover:bg-white/80 transition-colors"
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'input' && (
                  <input
                    type="text"
                    placeholder={currentQuestion.placeholder}
                    value={answers[allQuizSteps.findIndex(s => s === currentQuestion)] || ''}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="input-field w-full"
                  />
                )}

                {currentQuestion.type === 'contact' && (
                  <div className="space-y-4">
                    {currentQuestion.fields?.map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {field.label}
                          {field.required && <span className="text-red-500">*</span>}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={contactData[field.name as keyof typeof contactData] as string}
                            onChange={(e) =>
                              setContactData({ ...contactData, [field.name]: e.target.value })
                            }
                            rows={4}
                            className="w-full glass-card rounded-2xl p-4 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                            placeholder={field.label}
                          />
                        ) : field.type === 'tel' ? (
                          <input
                            type="tel"
                            value={contactData.phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            required={field.required}
                            className="input-field w-full"
                            placeholder="+7 (XXX) XXX-XX-XX"
                          />
                        ) : (
                          <input
                            type={field.type}
                            value={contactData[field.name as keyof typeof contactData] as string}
                            onChange={(e) =>
                              setContactData({ ...contactData, [field.name]: e.target.value })
                            }
                            required={field.required}
                            className="input-field w-full"
                            placeholder={field.label}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              <div className="flex gap-4">
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Назад
                  </button>
                )}
                {currentQuestion.type !== 'select' && (
                  <button
                    onClick={handleNext}
                    disabled={
                      currentQuestion.type === 'contact' &&
                      (!contactData.name || !contactData.phone || contactData.phone === '+7 ')
                    }
                    className="btn-primary flex items-center gap-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLastStep ? 'Отправить' : 'Далее'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
