import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Testimonials } from 'components/Testimonials';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ButtonFreeTrial } from './components/ButtonFreeTrial';

const GlobalStyle = createGlobalStyle`
  font-family: 'Libre Baskerville', serif;
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Hero />
        <Benefits />
        <ButtonFreeTrial />
        <Testimonials />
      </div>
    </>
  );
};
