/* eslint-disable linebreak-style */
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from 'components/Navbar';
import { Benefits } from 'components/Benefits';
import { Hero } from './components/Hero';

export const App = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Libre Franklin', sans-serif;
  }`
  return (
    <>
      <GlobalStyle />
      <section className="parent-container">
        <Navbar />
        <Hero />
      </section>
      <Benefits />
    </>
  )
}
