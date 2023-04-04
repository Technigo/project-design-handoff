import React from 'react'
import Footer from 'components/Footer'
import OnlineYoga from 'components/OnlineYoga'
import Testimonials from 'components/Testimonials'
import CTA from 'components/CTA'
import Benefits from 'components/Benefits'
import Hero from 'components/Hero'
import Nutrition from 'components/Nutrition'
import Pricing from 'components/Pricing'

export const App = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <CTA />
      <Testimonials />
      <CTA />
      <OnlineYoga />
      <Nutrition />
      <Pricing />
      <Footer />
    </div>
  )
}
