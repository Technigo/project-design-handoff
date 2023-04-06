import React from 'react'
import Header from 'components/Header.styled'
import GlobalStyle from 'components/GlobalStyle'
import { BenefitSection } from 'components/BenefitSection'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BenefitSection />
    </>
  )
}
