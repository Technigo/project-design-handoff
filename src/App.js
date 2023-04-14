import React from 'react'
import NavBar from 'components/NavBar'
import FirstSection from 'components/FirstSection'
import SecondSection from 'components/SecondSection'
import ThirdSection from 'components/ThirdSection'
import FourthSection from 'components/FourthSection'
import FormSection from 'components/FormSection'

export const App = () => {
  return (
    <main className="main-container">
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FormSection />
    </main>
  )
}
