import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Header } from 'components/Header'
import { Intro } from 'components/Intro'
import { Classes } from 'components/Classes'
import { SignUp } from 'components/SignUp'
import { Booking } from 'components/Booking'
import { Review } from 'components/Review'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Intro />
      <Classes />
      <SignUp />
      <Booking />
      <Review />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  overflow-y: auto;
}

h1, h2, h3, h4, h5, p {
  margin: 0;
  padding: 0;
}
`