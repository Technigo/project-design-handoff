import React from 'react';
import styled from 'styled-components';
import SignUpInput from './SignUpInput'

const SignUpSection = styled.div`
height: 654px;
background-color: white;
`
const SignUpHeader = styled.h1`
font-size: 20px;
color: black;
`
const PersonalText = styled.p`
font-size: 24px;
color: #FF9F0A;
`
const ChooseClassText = styled.p`
font-size: 24px;
color: #FF9F0A;
`

const SignUp = () => {
  return (
    <SignUpSection>
      <SignUpHeader>
        <h1>Sign up for a class</h1>
      </SignUpHeader>
      <PersonalText>
        <p>Enter personal details*</p>
      </PersonalText>
      <SignUpInput />
      <ChooseClassText>
        <p>Choose a class*</p>
      </ChooseClassText>
    </SignUpSection>
  )
}

export default SignUp;