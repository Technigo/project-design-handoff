import React from 'react';
import styled from 'styled-components';
import { BigBlackTitle, YellowTitle } from 'Components/Fonts';
import { ClassButton } from '../Components/ClassButton';
import { CTAButtonSUF } from '../Components/CTAButton';

const SUFSection = styled.section`
padding-top: 35px;
padding-bottom: 35px;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
border: 4px solid #66A1AE;

@media (min-width: 1024px) {
  width: 50%;
  padding-top: 0px;
  padding-bottom: 0px;
}

input[type=text] {
    width: 340px;
    height: 48px;
    border: 1px solid #888585;
    border-radius: 20px;
    color: #888585;
    font-family: Outfit;
    font-size: 16px;
    font-weight: 500;
    padding-left: 24px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}`

const ClassButtonDiv = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
padding-top: 35px;
`

export const SignupForm = () => {
  return (
    <SUFSection>
      <BigBlackTitle>Sign up for a class</BigBlackTitle>
      <form>
        <YellowTitle>Enter personal details*</YellowTitle>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
      </form>
      <ClassButtonDiv>
        <YellowTitle>Choose a class*</YellowTitle>
        <ClassButton>Power Yoga 60</ClassButton>
        <ClassButton>Power Yoga 75</ClassButton>
        <ClassButton>Yoga Strong</ClassButton>
        <CTAButtonSUF>Sign up for class</CTAButtonSUF>
      </ClassButtonDiv>
    </SUFSection>
  )
}