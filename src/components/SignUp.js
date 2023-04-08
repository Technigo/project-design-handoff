import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from './Hero'
import { YellowText } from './Classes'
import { SignUpButton } from './SignUpButton';

const SignUpWrapper = styled.div`
background-color: #ffffff;
border: 4px solid #66A1AE;
display: flex; 
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 45px;
  padding: 45px 45px;

  @media (min-width: 1024px) {
  width: 50%;

}`

const SignUpSection = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
gap: 8px;
`

const PersonalInput = styled.input`
background-color: #FFFFFF;
border: 2px solid #888585;
border-radius: 1.25rem;
width: 300px;
height: 55px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-family: 'Outfit', sans-serif;
font-weight: 600;
font-size: 1rem;
padding: 0 10px;
`

const ClassButton = styled.button`
background-color: ${({ clicked }) => (clicked ? '#66A1AE' : '#888585')};
color: white;
border-radius: 1.25rem;
border: none;
padding: 14px, 65px; 
width: 300px;
height: 55px;
font-size: 1rem;
font-weight: 500;
display: flex; 
justify-content: center;
align-items: center; 
font-family: 'Outfit', sans-serif;
font-weight: 600;`

export const SignUp = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButtonIndex(buttonIndex);
  };

  const ClassAlert = () => {
    return (
      alert('You have signed up!')
    )
  }

  return (
    <SignUpWrapper>
      <Title smallrem black>Sign up for a class</Title>

      <SignUpSection>
        <YellowText fw600 lh30>Enter personal details*</YellowText>
        <PersonalInput placeholder="Name" />
        <PersonalInput placeholder="Email" />
        <PersonalInput placeholder="Phonenumber" />
      </SignUpSection>
      <SignUpSection>
        <YellowText fw600 lh30>Choose a class*</YellowText>
        <ClassButton
          clicked={selectedButtonIndex === 0}
          onClick={() => handleButtonClick(0)}>Power Yoga 60
        </ClassButton>
        <ClassButton
          clicked={selectedButtonIndex === 1}
          onClick={() => handleButtonClick(1)}>Power Yoga 75
        </ClassButton>
        <ClassButton
          clicked={selectedButtonIndex === 2}
          onClick={() => handleButtonClick(2)}>Yoga Strong
        </ClassButton>
      </SignUpSection>
      <SignUpButton onClick={ClassAlert}>Sign up for a class</SignUpButton>
    </SignUpWrapper>
  )
}