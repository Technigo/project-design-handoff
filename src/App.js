import React from 'react'
import { createGlobalStyle } from 'styled-components';
import Navbar from 'components/Navbar'

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Libre Franklin', sans-serif;
  background-color: lightgrey;
}`
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  )
}
