import React from 'react';
import styled from 'styled-components';

const SignBtn = styled.button`
padding: 11px, 83px, 11px, 83px;
border-radius: 20px;
border-style: none;
width: 324px;
height: 55px;
background-color: #FF9F0A;
color: black;
font-size: 24px;
`

const SignUpBtn = () => {
  return (
    <SignBtn type="button">Sign up for a class</SignBtn>
  )
}

export default SignUpBtn;
