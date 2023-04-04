import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,500;0,700;1,500;1,700&display=swap');

body { 
    margin: 16px;
    width: 100%;
}

h2 {
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 131%;
    letter-spacing: -0.022em;
}

p {
    font-family: 'Karla', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.022em;
}
`
