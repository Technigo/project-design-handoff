import React from 'react'
import FAQuestions from '@components/Faq/FAQText'
import InfoPage from './components/InfoPage'
import ClientReviewsCarousel from './components/ClientReviews'
import PageTwo from './components/PageTwo'
import HeroPage from './components/HeroPage'
import NavBar from './components/NavBar/NavBar'
import CoachesCarousel from './components/Coaches'
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
    </div>
  )
}
