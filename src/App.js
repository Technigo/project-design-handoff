import React from 'react'
import { Hero } from 'components/Hero'
import { Classes } from 'components/Classes'
import { Footer } from 'components/Footer'
import { ReviewSignUp } from 'components/ReviewsSignUp'

export const App = () => {
  return (
    <div>
      <Hero />
      <Classes />
      <ReviewSignUp />
      <Footer />
    </div>
  )
}
