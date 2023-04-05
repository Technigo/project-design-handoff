import React from 'react'
import { GlobalStyle } from 'style/Texts'
import { Form } from 'components/Communnity'
import { Benefits } from 'components/Benefits'
import { Container } from 'style/Container'
import { Workout } from 'components/Workouts'
import { Header } from './components/Header'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Benefits />
        <Workout />
        <Form />
      </Container>
    </>

  )
}
