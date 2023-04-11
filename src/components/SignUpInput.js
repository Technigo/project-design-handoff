import React from 'react';
import styled from 'styled-components';

const Inputs = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 340px;
height: 48px;
border-radius: 20px;
border-style: black;
background-color: white;
`

const SignUpInput = () => {
  return (
    <Inputs>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </Inputs>
  )
}

export default SignUpInput;