/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

// @media (min-width: 545px) {
//     height: 80px;
//   }
//   @media (min-width: 686px) {
//     height: 138px;
//   }

const WelcomeOuterWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (min-width: 686px) {
  align-items: start;
  justify-content: start;
 } 
`
const WelcomeInnerWrapper = styled.div`
  height: 306px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  @media (min-width: 686px) {
    width: 522px;
    margin-top: 140px; /* Maybe change this */
    margin-left: 80px;
 } 
`

const Name = styled.p`
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
`

const Heading = styled.h2`
  font-family: 'Outfit', sans-serif;
  color: white;
  font-weight: 700;
  font-size: 48px;
  line-height: 51px;
  margin-bottom: 56px;
  text-align: center;
  @media (min-width: 686px) {
    margin-bottom: 24px;
 } 
`

const Description = styled.p`
  font-family: 'Outfit', sans-serif;
  color: #89D6E8;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  text-align: center;
  display: none;
  margin-bottom: 48px;
  @media (min-width: 686px) {
  display: block;
 } 
`

const ButtonWrapper = styled.div`
 width: 324px;
 cursor: pointer;
 @media (min-width: 686px) {
  width: 522px;
 } 
`

const Question = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  margin-top: 15px;
  text-align: center;
  @media (min-width: 686px) {
    margin-top: 24px;
 } 
`

export const Welcome = () => {
  return (
    <WelcomeOuterWrapper>
      <WelcomeInnerWrapper>
        <Name>Santulan Power Yoga Stockholm</Name>
        <Heading>Move your body<br />Rest your mind</Heading>
        <Description>
    Build strength, agility and endurance whilst in a calm and serene studio, tucked away in Kungsholmen, Stockholm.
        </Description>
        <ButtonWrapper>
          <Button type="button"><a href="#sign-up-section">Sign up for a class</a></Button>
        </ButtonWrapper>
        <Question>Want to know more about us?</Question>
      </WelcomeInnerWrapper>
    </WelcomeOuterWrapper>
  )
}