import styled from 'styled-components'

export const Button = styled.button`
    color: var(--main-dark-color);
    background-color: var(--secondary-color);
    padding: 8px 16px;
    border-radius: 16px;
    border: 2px solid var(--secondary-color);
    box-shadow: 0px 2px 4px 0px #00000040;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;

  
  &:hover { 
    border: 2px solid var(--secondary-color-b);
  }
`