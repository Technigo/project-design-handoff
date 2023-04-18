/* eslint-disable no-undef */
import { createGlobalStyle } from 'styled-components';
/* import styled, { createGlobalStyle, css } from 'styled-components' */
/* Might add more here later with inspiration from below link: */
/* https://www.codevertiser.com/styled-components-folder-structure/ */

const GlobalStyles = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
    margin: 0;
    padding: 0;
    background: beige;
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
  }
`

export default GlobalStyles;