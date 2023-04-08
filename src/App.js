/* eslint-disable linebreak-style */
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from 'components/Navbar';
import { Benefits } from 'components/Benefits';
import { Membership } from 'components/Membership';
import { Footer } from 'components/Footer';
import { Contacts } from 'components/Contacts';
import { Article } from 'components/Article';
import { Hero } from './components/Hero';
import { ReviewsSlider } from './components/ReviewsSlider';

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
      <Article />
      <Membership />
      <ReviewsSlider />
      <Contacts />
      <Footer />
    </>
  )
}
