import React from 'react'
import { Hero } from 'components/Hero'
import { Classes } from 'components/Classes'
import { Reviews } from 'components/Reviews'
import { SignUp } from 'components/SignUp'
import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <div>
      <Hero />
      <Classes />
      <Reviews />
      <SignUp />
      <Footer />
    </div>
  )
}
