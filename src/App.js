import React from 'react'

import { GlobalStyle } from 'components/styles/GlobalStyle'
import { Hero } from 'components/pages/Hero'
import { Benefits } from 'components/pages/Benefits'
import { Workouts } from 'components/pages/Workouts'
import { Activity } from 'components/pages/Activity'
import { Community } from 'components/pages/Community'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Benefits />
      <Workouts />
      <Activity />
      <Community />
    </>
  )
}
