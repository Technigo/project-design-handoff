import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HeroSection from 'components/HeroSection';
import Benefits from 'components/Benefits.js';
import Workouts from 'components/Workouts';
import Activity from 'components/Activity';
import Community from 'components/Community';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Karla', sans-serif;
  }
`;

export const App = () => {
  return (
    <>
      <HeroSection />
      <GlobalStyle />
      <Benefits />
      <Workouts />
      <Activity />
      <Community />
    </>
  )
}
