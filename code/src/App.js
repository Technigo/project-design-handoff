import React from 'react'
import { HeroSection } from 'components/Hero'
import { Navbar } from 'components/Navbar'
import Section from 'components/Carousel'

export const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section />
    </div>
  );
}
