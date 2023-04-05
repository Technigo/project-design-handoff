import React from 'react'
import { Benefits } from 'components/Benefits'
import { Navbar } from 'components/Navbar'
import { Contacts } from 'components/Contact';
import { createGlobalStyle } from 'styled-components';

export const App = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Libre Franklin', sans-serif;
  }`
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Benefits />
      <Contacts />
    </>
  )
}
