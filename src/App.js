/* eslint-disable linebreak-style */
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Hero } from './components/Hero';

export const App = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Libre Franklin', sans-serif;
  }`
  return (
    <>
      <GlobalStyle />
      <Hero />
    </>
  )
}
