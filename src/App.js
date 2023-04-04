import React from 'react'
import { Benefits } from 'components/Benefits'
import { createGlobalStyle } from 'styled-components';

export const App = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Libre Franklin', sans-serif;
  }`
  return (
    <>
      <GlobalStyle />
      <Benefits />
    </>
  )
}
