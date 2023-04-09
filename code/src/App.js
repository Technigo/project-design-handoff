import React from 'react'
import { HeroSection } from 'components/Hero'
import { Navbar } from 'components/Navbar'
import Section from 'components/Carousel'
import Contact from 'components/Contact'
import Footer from 'components/Footer'

export const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section />
      <Contact />
      <Footer />
    </div>
  );
}
