import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,500;0,700;1,500;1,700&display=swap');
`

export const H2 = styled.h2`
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 131%;
    letter-spacing: -0.022em;
    color: ${({ color }) => color};
`

export const H3 = styled.h3`
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 131%;
    letter-spacing: -0.022em;
    color: ${({ color }) => color};
`

export const H4 = styled.h4`
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.022em;
    color: ${({ color }) => color};
`

export const H5 = styled.h5`
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 131%;
    letter-spacing: -0.022em;
    text-align: center;
    color: ${({ color }) => color};
`

export const BodyText = styled.p`
    font-family: 'Karla', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.022em;
    color: ${({ color }) => color};
`

export const TagLine = styled.p`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 118%;
    letter-spacing: -0.022em;
    text-align: center;
    text-transform: uppercase;
    color: ${({ color }) => color};
`
