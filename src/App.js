import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Benefits from 'components/Benefits.js';
import Workouts from 'components/Workouts';

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
    </>
  )
}
