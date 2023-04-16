import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SignUpImage from '../images/signup-img.jpg'
import SignUpLogo from '../images/signup-logo.svg'
import { Pregular, IntroButtonP } from './Typography'
import { IntroButton } from './Button'

const SignUpsection = styled.section`
height: 100vh;

@media (min-width: 1024px) {
  display: flex;
  align-items: center;
  justify-content: center;
}
`
const SignUpWrapper = styled.div`
height: 100%;

@media (min-width: 667px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  height: 67.7%;
  flex-direction: row;
  gap: 7.7%;
}
`
const SignUpImg = styled.img`
display: none;

@media (min-width: 667px) {
  width: 100%;
  height: 42%;
  object-fit: cover;
  object-position: bottom;
  display: block;
}

@media (min-width: 1024px) {
  height: 100%;
  width: 41.7%;
}
`
const SignUpFormWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 13.25% 16px;
gap: 3.2%;

@media (min-width: 667px) {
  width: 59%;
}

  @media (min-width: 1024px) {
    width: 41.7%;
    padding-left: 64px;
    
`
const Styledlogo = styled.img`
width: 50%
`
const StyledForm = styled.form`
width: 100%%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 16px;
margin-bottom: 3.6%;

input {
  height: 39px;
  width: 100%;
  padding: 10px 0px 10px 10px;
}

@media (min-width: 667px) {
  input {
    height: 3.9%;
  }
  input:first-child, input:nth-child(2) {
    width: 43%;
  }
}
    
`

export const SignUp = () => {
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    if (window.innerWidth <= 666) {
      setButtonText('Continue to sign up!');
    } else {
      setButtonText('Continue');
    }
  }, []);

  return (
    <SignUpsection>
      <SignUpWrapper>
        <SignUpImg src={SignUpImage} />
        <SignUpFormWrapper>
          <Styledlogo src={SignUpLogo} alt="logo" />
          <Pregular>
            As a member you get access to all of our workouts
            and can make reservations to our workout session.
          </Pregular>
          <StyledForm>
            <input type="text" placeholder="FIRST NAME" />
            <input type="text" placeholder="LAST NAME" />
            <input type="text" placeholder="E-MAIL" />
            <input type="text" placeholder="PASSWORD" />
            <input type="text" placeholder="CONFIRM PASSWORD" />
          </StyledForm>
          <IntroButton><IntroButtonP>{buttonText}</IntroButtonP></IntroButton>
        </SignUpFormWrapper>
      </SignUpWrapper>
    </SignUpsection>
  )
}