import React from 'react'
import { Hero } from 'components/Hero'
import { Classes } from 'components/Classes'
import { Footer } from 'components/Footer'
import { ReviewSignUp } from 'components/ReviewsSignUp'
import { InfoYogaStudio } from 'components/InfoYogaStudio'
import { FindUs } from 'components/FindUs'
import { IntroPowerYoga } from 'components/IntroPowerYoga'

export const App = () => {
  return (
    <div>
      <Hero />
      <IntroPowerYoga />
      <Classes />
      <InfoYogaStudio />
      <FindUs />
      <ReviewSignUp />
      <Footer />
    </div>
  )
}
