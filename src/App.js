import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Karla', sans-serif;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        Find me in src/app.js!
      </div>
    </>
  )
}
