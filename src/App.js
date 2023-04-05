import { Benefits } from 'components/Benefits'
import { CallButton } from 'components/CallButton'
import { Footer } from 'components/Footer'
import { Hero } from 'components/Hero'
import { Nutrition } from 'components/Nutrition'
import { Plans } from 'components/Plans'
import { Reviews } from 'components/Reviews'
import { Yoga } from 'components/Yoga'
import { theme } from 'libraries/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Hero />
      <Benefits />
      <CallButton />
      <Reviews />
      <CallButton />
      <Yoga />
      <CallButton />
      <Nutrition />
      <Plans />
      <Footer />
    </ThemeProvider>
  )
}
