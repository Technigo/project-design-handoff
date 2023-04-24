/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Hero from 'components/Hero'
import Benefits from 'components/Benefits'
import Workouts from 'components/Workouts'
import Activity from 'components/Activity'
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
      <Workouts />
      <Activity />
      <Community />
    </>
  )
}

export default App
