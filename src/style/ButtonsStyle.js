import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,500;0,700;1,500;1,700&display=swap');
`

export const Button = styled.button`
    width: 205px;
    border-radius: 100px;
    font-family: 'Karla*, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
`

export const DownloadBtnStyle = styled(Button)`
    background-color: #DCD2F1;
    color: #222322;
`