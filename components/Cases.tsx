'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Car, Calendar, CheckCircle, MapPin, Coins } from 'lucide-react'
import Image from 'next/image'

const cases = [
  {
    title: 'Lynk&Co 900, Ultra',
    description: 'Полный цикл импорта из Китая с комплексной подготовкой',
    before: 'Заказ автомобиля из Китая',
    after: 'Готовый премиум-автомобиль с полной защитой и русификацией',
    duration: '14 дней',
    cost: '7 200 000₽',
    origin: 'Китай',
    services: [
      'Импорт из Китая',
      'Оклейка кузова защитной пленкой',
      'Шумоизоляция',
      'Антикоррозийная обработка кузова',
      'Русификация',
    ],
    images: [
      '/image/case/lynk&co/photo_2026-02-02 16.50.40.jpeg',
      '/image/case/lynk&co/photo_2026-02-02 16.50.43.jpeg',
      '/image/case/lynk&co/photo_2026-02-02 16.50.46.jpeg',
      '/image/case/lynk&co/photo_2026-02-02 16.50.50.jpeg',
    ],
  },
  {
    title: 'Voyah Free 2024, пробег 13000 км',
    description: 'Импорт из Китая с полной подготовкой. Автомобиль застрахован и оформлена расширенная гарантия',
    before: 'Автомобиль в Китае, пробег 13000 км',
    after: 'Готовый автомобиль с полной защитой, русификацией и страховкой',
    duration: '29 дней',
    cost: '3 700 000₽',
    origin: 'Китай',
    services: [
      'Импорт из Китая',
      'Оклейка передней части кузова защитной пленкой',
      'Шумоизоляция',
      'ТО 0',
      'Русификация и приложения',
      'Установка защиты днища',
      'КАСКО + ОСАГО',
      'Расширенная гарантия',
    ],
    images: [
      '/image/case/voyah/voyah-01.jpg',
      '/image/case/voyah/voyah-02.jpg',
      '/image/case/voyah/voyah-03.jpg',
      '/image/case/voyah/voyah-04.jpg',
      '/image/case/voyah/voyah-05.jpg',
      '/image/case/voyah/voyah-06.jpg',
    ],
  },
  {
    title: 'Mercedes-AMG G 63 6x6, 2021',
    description: 'Импорт премиального внедорожника из Германии с полной подготовкой',
    before: 'Автомобиль в Германии',
    after: 'Готовый премиум-внедорожник с полной подготовкой',
    duration: '30 дней',
    cost: '870 000€',
    origin: 'Германия',
    services: [
      'Импорт из Германии',
      'Таможенное оформление',
      'Полная подготовка',
      'Полный пакет документов',
    ],
    images: [
      '/image/case/mers/photo_2026-02-02 16.54.10.jpeg',
      '/image/case/mers/photo_2026-02-02 16.54.11.jpeg',
      '/image/case/mers/photo_2026-02-02 16.54.12.jpeg',
    ],
  },
  {
    title: 'Zeekr 9X MAX',
    description: 'Полный цикл импорта из Китая с комплексной подготовкой',
    before: 'Заказ автомобиля из Китая',
    after: 'Готовый премиум-автомобиль с полной защитой и гарантией',
    duration: '14 дней',
    cost: '12 500 000₽',
    origin: 'Китай',
    services: [
      'Импорт из Китая',
      'Оклейка PPF',
      'Шумоизоляция',
      'Антикор',
      'ТО 0',
      'Русификация',
      'Защита днища',
      'КАСКО + ОСАГО',
      'Расширенная гарантия',
    ],
    images: [
      '/image/case/zeeker/zeekr-01.jpeg',
      '/image/case/zeeker/zeekr-02.jpeg',
      '/image/case/zeeker/zeekr-03.jpeg',
      '/image/case/zeeker/zeekr-04.jpeg',
      '/image/case/zeeker/zeekr-05.jpeg',
      '/image/case/zeeker/zeekr-06.jpeg',
      '/image/case/zeeker/zeekr-07.jpeg',
    ],
  },
]

export default function Cases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const nextImage = (caseIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [caseIndex]: ((prev[caseIndex] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (caseIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [caseIndex]: ((prev[caseIndex] || 0) - 1 + totalImages) % totalImages
    }))
  }

  return (
    <section id="cases" ref={ref} className="section-padding bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Наши кейсы
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Реальные примеры нашей работы с конкретными результатами
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll with preview */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            {cases.map((caseItem, index) => {
              const currentImg = currentImageIndex[index] || 0
              const hasImages = caseItem.images && caseItem.images.length > 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileTap={{ scale: 0.95 }}
                  className="card rounded-2xl overflow-hidden relative group min-w-[90vw] snap-center touch-interactive p-0"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-[100px] z-10" />
                  
                  {/* Image section */}
                  <div className="relative h-56 bg-gradient-to-br from-neutral-200 to-neutral-300 overflow-hidden">
                    {hasImages ? (
                      <>
                        <Image
                          src={caseItem.images![currentImg]}
                          alt={caseItem.title}
                          fill
                          className="object-cover"
                          sizes="90vw"
                        />
                        
                        {/* Navigation buttons */}
                        {caseItem.images!.length > 1 && (
                          <div className="absolute inset-0 flex items-center justify-between p-3 z-10">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                prevImage(index, caseItem.images!.length)
                              }}
                              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors text-xl font-bold"
                            >
                              ‹
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                nextImage(index, caseItem.images!.length)
                              }}
                              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors text-xl font-bold"
                            >
                              ›
                            </button>
                          </div>
                        )}
                        
                        {/* Image indicators */}
                        {caseItem.images!.length > 1 && (
                          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                            {caseItem.images!.map((_, i) => (
                              <button
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setCurrentImageIndex(prev => ({ ...prev, [index]: i }))
                                }}
                                className={`h-1.5 rounded-full transition-all ${
                                  i === currentImg 
                                    ? 'bg-white w-6' 
                                    : 'bg-white/50 w-1.5'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Car className="w-16 h-16 text-neutral-400" />
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        if (scrollContainerRef.current) {
                          const cardWidth = scrollContainerRef.current.offsetWidth / cases.length
                          scrollContainerRef.current.scrollTo({
                            left: index * (cardWidth + 16), // 16px gap
                            behavior: 'smooth'
                          })
                        }
                      }}
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-neutral-700 z-20 hover:bg-white transition-colors cursor-pointer"
                    >
                      {index + 1}/{cases.length}
                    </button>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 relative z-10">
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 flex-1">
                      {caseItem.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{caseItem.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-red-700 mb-1">ДО</div>
                        <div className="text-xs text-neutral-600">{caseItem.before}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-neutral-50 border border-neutral-200/60 rounded-lg p-3">
                      <div className="w-2 h-2 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-neutral-700 mb-1">ПОСЛЕ</div>
                        <div className="text-xs text-neutral-600">{caseItem.after}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white border border-neutral-200/60 rounded-xl p-3">
                      <Calendar className="w-4 h-4 text-primary-500 mb-1" />
                      <div className="text-xs font-semibold text-neutral-900">{caseItem.duration}</div>
                    </div>
                    <div className="bg-white border border-neutral-200/60 rounded-xl p-3">
                      <Coins className="w-4 h-4 text-primary-500 mb-1" />
                      <div className="text-xs font-semibold text-neutral-900 leading-tight">{caseItem.cost}</div>
                    </div>
                    {caseItem.origin && (
                      <div className="bg-white border border-neutral-200/60 rounded-xl p-3">
                        <MapPin className="w-4 h-4 text-primary-500 mb-1" />
                        <div className="text-xs font-semibold text-neutral-900">{caseItem.origin}</div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caseItem.services.map((service, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-medium border border-red-200/60"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className="text-center mt-3 text-xs text-neutral-500 flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {cases.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
              ))}
            </div>
            <span>Свайп для просмотра →</span>
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 md:gap-6">
          {cases.map((caseItem, index) => {
            const currentImg = currentImageIndex[index] || 0
            const hasImages = caseItem.images && caseItem.images.length > 0
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.8, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="card rounded-xl md:rounded-2xl overflow-hidden relative group touch-interactive p-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                
                {/* Image section */}
                <div className="relative h-64 bg-gradient-to-br from-neutral-200 to-neutral-300 overflow-hidden">
                  {hasImages ? (
                    <>
                      <Image
                        src={caseItem.images![currentImg]}
                        alt={caseItem.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Navigation on hover */}
                      {caseItem.images!.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              prevImage(index, caseItem.images!.length)
                            }}
                            className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors text-2xl font-bold"
                          >
                            ‹
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              nextImage(index, caseItem.images!.length)
                            }}
                            className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors text-2xl font-bold"
                          >
                            ›
                          </button>
                        </div>
                      )}
                      
                      {/* Image indicators */}
                      {caseItem.images!.length > 1 && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                          {caseItem.images!.map((_, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation()
                                setCurrentImageIndex(prev => ({ ...prev, [index]: i }))
                              }}
                              className={`h-2 rounded-full transition-all ${
                                i === currentImg 
                                  ? 'bg-white w-8' 
                                  : 'bg-white/50 w-2'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Car className="w-24 h-24 text-neutral-400" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6 relative z-10">
                
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors">
                  {caseItem.title}
                </h3>
                
                <p className="text-sm md:text-base text-neutral-600 mb-4">{caseItem.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-neutral-700 mb-1">До:</div>
                      <div className="text-sm text-neutral-600">{caseItem.before}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-neutral-700 mb-1">После:</div>
                      <div className="text-sm text-neutral-600">{caseItem.after}</div>
                    </div>
                  </div>
                </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white border border-neutral-200/60 rounded-xl p-3">
                  <Calendar className="w-4 h-4 text-primary-500 mb-1" />
                  <div className="text-sm font-semibold text-neutral-900">{caseItem.duration}</div>
                </div>
                <div className="bg-white border border-neutral-200/60 rounded-xl p-3">
                  <Coins className="w-4 h-4 text-primary-500 mb-1" />
                  <div className="text-sm font-semibold text-neutral-900">{caseItem.cost}</div>
                </div>
                {caseItem.origin && (
                  <div className="bg-white border border-neutral-200/60 rounded-xl p-3">
                    <MapPin className="w-4 h-4 text-primary-500 mb-1" />
                    <div className="text-sm font-semibold text-neutral-900">{caseItem.origin}</div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {caseItem.services.map((service, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-medium border border-red-200/60"
                  >
                    {service}
                  </span>
                ))}
              </div>
              </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

