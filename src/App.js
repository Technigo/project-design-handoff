import React from 'react'
import { HeroSite } from 'components/HeroSite'
import { WhyArial } from 'components/WhyArial'
import { ClassesSite } from 'components/ClassesSite'
import { createGlobalStyle } from 'styled-components'
import { FormSite } from 'components/FormSite'
import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <HeroSite />
      <WhyArial />
      <ClassesSite />
      <FormSite />
      <Footer />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #131313;
}
`
