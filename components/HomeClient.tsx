'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import InStock from '@/components/InStock'
import HowWeWork from '@/components/HowWeWork'
import TrustBlock from '@/components/TrustBlock'
import Cases from '@/components/Cases'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import QuizModal from '@/components/QuizModal'
import StickyCTA from '@/components/StickyCTA'

export default function HomeClient() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  return (
    <main className="relative overflow-hidden">
      <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
      <Services />
      <InStock />
      <HowWeWork />
      <TrustBlock />
      <Cases />
      <FAQ />
      <FinalCTA onOpenQuiz={() => setIsQuizOpen(true)} />
      <Contacts />
      <Footer />
      <StickyCTA onOpenQuiz={() => setIsQuizOpen(true)} />
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </main>
  )
}
