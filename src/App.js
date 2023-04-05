import React from 'react'
import { GlobalStyle } from 'style/Texts'
import { Form } from 'components/Communnity'
import { Benefits } from 'components/Benefits'
import { Container } from 'style/Container'
import { Header } from './components/Header'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Benefits />
        <Form />
      </Container>
    </>

  )
}
