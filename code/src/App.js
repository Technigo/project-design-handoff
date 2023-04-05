import React from 'react'
import StickyMenu from './components/Header'
import LoadingPage from './components/LoadingPage'
import InfoPage from './components/InfoPage'
import SwipeableCarouselClientReviews from './components/ClientReviews'
// import styled from 'styled-components'

export const App = () => {
  return (
    <div className="entire-wrapper">
      <StickyMenu />
      <LoadingPage />
      <InfoPage />
      <SwipeableCarouselClientReviews />
    </div>
  )
}
