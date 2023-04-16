import React from 'react'
import NavBar from 'components/NavBar'
import HeroSection from 'components/HeroSection'
import JoinUsSection from 'components/JoinUsSection'
import QuizSection from 'components/QuizSection'
import QuoteSection from 'components/QuoteSection'
import FormSection from 'components/FormSection'
import Footer from 'components/Footer'

export const App = () => {
  return (
    <main className="main-container">
      <NavBar />
      <HeroSection />
      <JoinUsSection />
      <QuizSection />
      <QuoteSection />
      <FormSection />
      <Footer />
    </main>
  )
}
