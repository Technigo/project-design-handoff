import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background: #FFD9BF;
border-radius: 30px;
color: #210440;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 24px;
gap: 8px;
height: 46px;
border: 0;

`

const Button = (props) => {
  return (<StyledButton>{props.text}</StyledButton>);
}

export default Button;