import React from 'react'
import JoinSection from 'sections/JoinSection'
import Header from './components/Header'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import QuizSection from './sections/QuizSection'
import SocialProofSection from './sections/SocialProofSection'
import RegisterFormSection from './sections/RegisterFormSection'
import Footer from './components/Footer'

export const App = () => {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <JoinSection />
      <AboutSection />
      <QuizSection />
      <SocialProofSection />
      <RegisterFormSection />
      <Footer />
    </div>
  )
}
