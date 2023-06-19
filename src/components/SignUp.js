import React from 'react';
import styled from 'styled-components';
import SignUpInput from './SignUpInput'

const SignUpSection = styled.div`
height: 654px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const SignUpHeader = styled.h1`
font-size: 20px;
color: black;
margin-bottom: -40px;
`
const PersonalText = styled.p`
font-size: 24px;
color: #FF9F0A;
margin-bottom: -20px;
`
const ChooseClassText = styled.p`
font-size: 24px;
color: #FF9F0A;
margin-bottom: -17px;
`
const ClassBtn = styled.button`
align-items: center;
width: 340px;
height: 48px;
border-radius: 20px;
padding: 10px;
border-style: none;
font-size: 15px;
color: white;
background-color: #888585;
margin-bottom: 10px;
`
const SignUpBtn = styled.button`
align-items: center;
width: 340px;
height: 48px;
border-radius: 20px;
padding: 10px;
border-style: none;
font-size: 15px;
color: white;
background-color: #FF9F0A;
margin-bottom: 10px;
margin-top: 20px;
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
      <ClassBtn type="button">Poweryoga 60 </ClassBtn>
      <ClassBtn type="button">Poweryoga 75</ClassBtn>
      <ClassBtn type="button">Strong yoga</ClassBtn>
      <SignUpBtn type="button">Sign up for class</SignUpBtn>
    </SignUpSection>
  )
}

export default SignUp;