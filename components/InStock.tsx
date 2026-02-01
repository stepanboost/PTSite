'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Car, Calendar, MapPin, CheckCircle, Sparkles, ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'

const cars = [
  {
    id: 1,
    brand: 'Zeekr',
    model: '001',
    year: 2024,
    price: 'По запросу',
    location: 'Москва',
    status: 'В наличии',
    features: ['Полная адаптация', 'PPF защита', 'Гарантия 2 года'],
    images: [
      '/image/case/zeeker/zeekr-01.jpeg',
      '/image/case/zeeker/zeekr-02.jpeg',
      '/image/case/zeeker/zeekr-03.jpeg',
    ],
  },
  {
    id: 2,
    brand: 'Zeekr',
    model: 'X',
    year: 2024,
    price: 'По запросу',
    location: 'Москва',
    status: 'В наличии',
    features: ['Русификация', 'Керамика', 'Полное ТО'],
    images: [
      '/image/case/zeeker/zeekr-04.jpeg',
      '/image/case/zeeker/zeekr-05.jpeg',
      '/image/case/zeeker/zeekr-06.jpeg',
    ],
  },
  {
    id: 3,
    brand: 'Zeekr',
    model: '009',
    year: 2024,
    price: 'По запросу',
    location: 'Москва',
    status: 'Под заказ',
    features: ['Импорт из Китая', 'Адаптация', 'Детейлинг'],
    images: [
      '/image/case/zeeker/zeekr-07.jpeg',
      '/image/case/zeeker/zeekr-01.jpeg',
      '/image/case/zeeker/zeekr-02.jpeg',
    ],
  },
]

export default function InStock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCar, setSelectedCar] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})

  const nextImage = (carId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [carId]: ((prev[carId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (carId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [carId]: ((prev[carId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  return (
    <section ref={ref} className="section-padding bg-neutral-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 font-semibold text-sm mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
            Доступно сейчас
          </motion.div>
          <h2 className="text-h2 md:text-h1 lg:text-display-sm font-bold text-neutral-900 mb-3 md:mb-4 text-balance">
            Автомобили в наличии
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Готовые автомобили с полной адаптацией и гарантией. Можно забрать сегодня
          </p>
        </motion.div>

        {/* Mobile: horizontal carousel with enhanced design */}
        <div className="lg:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4">
            {cars.map((car, index) => {
              const currentImg = currentImageIndex[car.id] || 0
              const isAvailable = car.status === 'В наличии'
              
              return (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card rounded-2xl overflow-hidden min-w-[90vw] snap-center relative touch-interactive"
                >
                  {/* Status badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
                        isAvailable 
                          ? 'bg-green-500/90 text-white' 
                          : 'bg-orange-500/90 text-white'
                      }`}
                      animate={isAvailable ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {car.status}
                    </motion.div>
                  </div>

                  {/* Image carousel */}
                  <div className="relative h-64 bg-gradient-to-br from-neutral-200 to-neutral-300 overflow-hidden">
                    <Image
                      src={car.images[currentImg]}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      className="object-cover"
                      sizes="90vw"
                    />
                    
                    {/* Navigation buttons */}
                    <div className="absolute inset-0 flex items-center justify-between p-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          prevImage(car.id, car.images.length)
                        }}
                        className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                      >
                        ‹
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          nextImage(car.id, car.images.length)
                        }}
                        className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                      >
                        ›
                      </button>
                    </div>

                    {/* Image indicators */}
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                      {car.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(prev => ({ ...prev, [car.id]: i }))
                          }}
                          className={`h-1.5 rounded-full transition-all ${
                            i === currentImg 
                              ? 'bg-white w-6' 
                              : 'bg-white/50 w-1.5'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                          {car.brand} {car.model}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-neutral-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-primary-500" />
                            <span>{car.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-primary-500" />
                            <span>{car.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-500">{car.price}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {car.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const phone = '+79999999999' // Replace with actual phone
                          window.open(`tel:${phone}`, '_self')
                        }}
                        className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm py-3"
                      >
                        <Phone className="w-4 h-4" />
                        Позвонить
                      </button>
                      <button
                        onClick={() => setSelectedCar(car.id)}
                        className="flex-1 btn-secondary flex items-center justify-center gap-2 text-sm py-3"
                      >
                        Подробнее
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className="text-center mt-3 text-xs text-neutral-500">
            Свайп для просмотра всех автомобилей →
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {cars.map((car, index) => {
            const currentImg = currentImageIndex[car.id] || 0
            const isAvailable = car.status === 'В наличии'
            
            return (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl overflow-hidden relative group"
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${
                      isAvailable 
                        ? 'bg-green-500/90 text-white' 
                        : 'bg-orange-500/90 text-white'
                    }`}
                  >
                    {car.status}
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-neutral-200 to-neutral-300 overflow-hidden">
                  <Image
                    src={car.images[currentImg]}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  
                  {/* Navigation on hover */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage(car.id, car.images.length)
                      }}
                      className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      ‹
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage(car.id, car.images.length)
                      }}
                      className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      ›
                    </button>
                  </div>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {car.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(prev => ({ ...prev, [car.id]: i }))
                        }}
                        className={`h-2 rounded-full transition-all ${
                          i === currentImg 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 w-2'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {car.brand} {car.model}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-neutral-600">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-primary-500" />
                          <span>{car.year}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-primary-500" />
                          <span>{car.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-500">{car.price}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {car.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        const phone = '+79999999999' // Replace with actual phone
                        window.open(`tel:${phone}`, '_self')
                      }}
                      className="flex-1 btn-primary flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Позвонить
                    </button>
                    <button
                      onClick={() => setSelectedCar(car.id)}
                      className="flex-1 btn-secondary flex items-center justify-center gap-2"
                    >
                      Подробнее
                      <ArrowRight className="w-5 h-5" />
                    </button>
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
