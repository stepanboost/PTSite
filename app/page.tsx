'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import OneCenter from '@/components/OneCenter'
import Services from '@/components/Services'
import Lifecycle from '@/components/Lifecycle'
import WhyChoose from '@/components/WhyChoose'
import Guarantee from '@/components/Guarantee'
import Cases from '@/components/Cases'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import QuizModal from '@/components/QuizModal'
import StickyCTA from '@/components/StickyCTA'
import MobileEffects from '@/components/MobileEffects'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  return (
    <main className="relative overflow-hidden">
      <MobileEffects />
      <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
      <OneCenter />
      <Services />
      <Lifecycle />
      <WhyChoose />
      <ContactForm />
      <Guarantee />
      <Cases />
      <Process />
      <FAQ />
      <FinalCTA onOpenQuiz={() => setIsQuizOpen(true)} />
      <Contacts />
      <Footer />
      <StickyCTA onOpenQuiz={() => setIsQuizOpen(true)} />
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </main>
  )
}


