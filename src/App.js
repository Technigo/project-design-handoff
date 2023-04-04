import React, { useState } from 'react'
import Footer from 'components/Footer'
import OnlineYoga from 'components/OnlineYoga'
import Testimonials from 'components/Testimonials'
import { CTA } from 'components/CTA'
import Benefits from 'components/Benefits'
import Hero from 'components/Hero'
import Nutrition from 'components/Nutrition'
import Pricing from 'components/Pricing'
import Popup from 'components/Popup'

export const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  console.log(isPopupOpen);

  return (
    <div>
      <Hero />
      <Benefits />
      <CTA alone>Start your 7-day FREE trial</CTA>
      <CTA test onClick={() => setIsPopupOpen(!isPopupOpen)}>Start your 7-day FREE trial</CTA>
      <Testimonials />
      <CTA alone>Start your 7-day FREE trial</CTA>
      <OnlineYoga />
      <CTA alone>Start your 7-day FREE trial</CTA>
      <Nutrition />
      <Pricing />
      <Footer />
      {isPopupOpen && <Popup close={() => {
        setIsPopupOpen(false)
        console.log('blur')
      }} />}
    </div>
  )
}
