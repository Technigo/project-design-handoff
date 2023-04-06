import React from 'react'
import LoadingPage from './components/LoadingPage'
import InfoPage from './components/InfoPage'
import ClientReviewsCarousel from './components/ClientReviews'
import PageTwo from './components/PageTwo'
import NavBar from './components/NavBar/NavBar'
// import styled from 'styled-components'

export const App = () => {
  return (
    <div className="entire-wrapper">
      <NavBar />
      <LoadingPage />
      <PageTwo />
      <InfoPage />
      <ClientReviewsCarousel />
    </div>
  )
}
