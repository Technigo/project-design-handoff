import React from 'react'
import { createGlobalStyle } from 'styled-components';
import Navbar from 'components/Navbar'
import Contacts from 'components/Contacts';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Libre Franklin', sans-serif;
  background-color: lightgrey;
  color: #025323;
}`
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Contacts />
    </>
  )
}
