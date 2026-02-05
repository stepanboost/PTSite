'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Calculator, Menu, X } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  onOpenQuiz: () => void
}

export default function Header({ onOpenQuiz }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'Авто в наличии', id: 'in-stock' },
    { label: 'Услуги', id: 'services' },
    { label: 'Кейсы', id: 'cases' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Контакты', id: 'contacts' },
  ]

  return (
    <>
      {/* Desktop Header - всегда видимый и закреплённый */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-neutral-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)]`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="PROVOLTA & TEAM SERVICE"
                  width={200}
                  height={60}
                  className="h-auto w-auto max-w-[180px]"
                  priority
                />
              </button>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-neutral-700 hover:text-red-600 transition-colors py-2 px-1 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  window.open('tel:+79643421644', '_self')
                }}
                className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-red-600 transition-colors flex items-center gap-2 rounded-lg hover:bg-red-50"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Позвонить</span>
              </button>
              <button
                onClick={onOpenQuiz}
                className="btn-primary flex items-center gap-2 text-sm px-4 xl:px-5 py-2.5"
              >
                <Calculator className="w-4 h-4" />
                <span className="hidden xl:inline">Получить расчёт</span>
                <span className="xl:hidden">Расчёт</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - всегда видимый и закреплённый */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200/60 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center"
            >
              <Image
                src="/logo.png"
                alt="PROVOLTA & TEAM SERVICE"
                width={150}
                height={45}
                className="h-auto w-auto max-w-[140px]"
                priority
              />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-neutral-700" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white border-t border-neutral-200/60 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="container-custom py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-neutral-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors active:bg-red-100"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 mt-3 border-t border-neutral-200/60 space-y-2">
                <button
                  onClick={() => {
                    window.open('tel:+79643421644', '_self')
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-sm py-3"
                >
                  <Phone className="w-4 h-4" />
                  Позвонить
                </button>
                <button
                  onClick={() => {
                    onOpenQuiz()
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full btn-secondary flex items-center justify-center gap-2 text-sm py-3"
                >
                  <Calculator className="w-4 h-4" />
                  Получить расчёт
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  )
}
