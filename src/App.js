/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Hero from 'components/Hero'
import Benefits from 'components/Benefits'
import Community from 'components/Community'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Karla', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <Hero />
      <GlobalStyle />
      <Benefits />
      <Community />
    </>
  )
}

export default App
