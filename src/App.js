import React from 'react';
import { createGlobalStyle } from 'styled-components';
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
      <GlobalStyle />
      <Benefits />
      <Workouts />
      <Activity />
      <Community />
    </>
  )
}
