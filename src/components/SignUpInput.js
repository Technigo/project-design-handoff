import React from 'react';
import styled from 'styled-components';

const Inputs = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
input {
align-items: center;
width: 340px;
height: 40px;
border-radius: 20px;
border-style: black;
background-color: white;
padding-left: 10px;
}
`

const SignUpInput = () => {
  return (
    <Inputs>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phonenumber" />
    </Inputs>
  )
}

export default SignUpInput;