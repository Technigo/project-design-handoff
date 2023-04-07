import React from 'react'
import InfoPage from './components/InfoPage'
import ClientReviewsCarousel from './components/ClientReviews'
import PageTwo from './components/PageTwo'
import HeroPage from './components/HeroPage'
import NavBar from './components/NavBar/NavBar'
import CoachesCarousel from './components/Coaches'
import FAQuestions from './components/FaqPage2/FaqText2'
import SignupPage from './components/Signup'
// import styled from 'styled-components'

export const App = () => {
  return (
    <div className="entire-wrapper">
      <NavBar />
      <HeroPage />
      <PageTwo />
      <InfoPage />
      <ClientReviewsCarousel />
      <CoachesCarousel />
      <FAQuestions />
      <SignupPage />
    </div>
  )
}
