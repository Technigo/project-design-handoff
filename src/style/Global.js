import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Libre+Baskerville:ital@1&display=swap');

* {
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Libre Baskerville', serif;
  background: #E5E5E5;
  scroll-behavior: smooth;
  color: #02393F;
}
`

export default GlobalStyle