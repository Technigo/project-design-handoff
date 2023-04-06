import React from 'react'
import { createGlobalStyle } from 'styled-components';
import Navbar from 'components/Navbar'
import { Benefits } from 'components/Benefits';
import Contacts from 'components/Contacts';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Libre Franklin', sans-serif;
  color: #025323;
}`
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Benefits />
      <Contacts />
    </>
  )
}
