import React from 'react'
import { createGlobalStyle } from 'styled-components';
import Navbar from 'components/Navbar'
import Hero from 'components/Hero'
import { Benefits } from 'components/Benefits';
import Contacts from 'components/Contacts';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Libre Franklin', sans-serif;
  color: #025323;
  margin: 0 auto;
  max-width: 1400px;
  font-size:22px;
}`
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Benefits />
      <Contacts />
    </>
  )
}
