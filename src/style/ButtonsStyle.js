import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,500;0,700;1,500;1,700&display=swap');
`

export const Button = styled.button`
    width: 205px;
    border-radius: 100px;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    border: none;
    background-color: ${({ bg }) => bg};
    color: ${({ color }) => color};
    padding: 18px;
`
export const ButtonOutline = styled.button`
    width: 205px;
    border-radius: 100px;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    border: solid 1px white;
    background-color: transparent;
    color: ${({ color }) => color};
    padding: 18px;
`
export const SubmitButton = styled(Button)`
    border-radius: 8px;
    width: 100%;
    margin: 20px 0;
    padding: 22px 10px;
`

export const ViewMoreButton = styled(Button)`
    width: 70vw;
    position: absolute;
    bottom: 20px;
    left: 15%;
`