import React from 'react'
import Navbar from 'components/NavBar'
import Footer from 'components/Footer'
import HealthyHabits from 'components/HealthyHabits'
import SocialProof from 'components/SocialProof'
import Experts from 'components/Experts'

export const App = () => {
  return (
    <>
      <Navbar />
      <HealthyHabits />
      <SocialProof />
      <Experts />
      <Footer />
    </>

  )
}
