import React from 'react'
import { GlobalStyle } from 'style/Texts'
import { Form } from 'components/Communnity'
import { Header } from './components/Header'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Form />
    </>

  )
}
