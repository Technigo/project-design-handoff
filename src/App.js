import { Benefits } from 'components/Benefits/Benefits'
import { CallButton } from 'components/CTAButton/CallButton'
import { Footer } from 'components/Footer/Footer'
import { Hero } from 'components/Hero/Hero'
import { Nutrition } from 'components/Nutrition/Nutrition'
import { Plans } from 'components/Plans/Plans'
import { Reviews } from 'components/Reviews/Reviews'
import { Yoga } from 'components/Yoga/Yoga'
import { theme } from 'libraries/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/Global'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
