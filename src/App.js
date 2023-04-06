import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Header } from 'components/Header'
import { Intro } from 'components/Intro'
import { Classes } from 'components/Classes'
import { SignUp } from 'components/SignUp'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Intro />
      <Classes />
      <SignUp />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, h5, p {
  margin: 0;
  padding: 0;
}
`