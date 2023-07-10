import React from 'react';
import styled from 'styled-components';
import { BigBlackTitle, PurpleTitle } from 'Components/Fonts';
import { ClassButton } from '../Components/ClassButton';
import { CTAButtonSUF } from '../Components/CTAButton';

const SUFSection = styled.section`
padding-top: 35px;
padding-bottom: 35px;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
border: 4px solid #8c78af;

@media (min-width: 1024px) {
  width: 50%;
  padding-top: 0px;
  padding-bottom: 0px;
}

input[type=text] {
  outline: none;
  box-sizing: border-box;
    width: 340px;
    height: 48px;
    border: 1px solid #c0b3d6;
    border-radius: 20px;
    color: #c0b3d6;
    font-family: Outfit;
    font-size: 16px;
    font-weight: 500;
    padding-left: 24px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    &:hover {
       border: 2px solid #c0b3d6;
     }

     @media (max-width: 400px) {
      width: 290px;
     }
}`

const Label = styled.label`
  font-size: 16px;
  position: relative;
   font-weight: 500; 
   top: 20px;
   left: 14px;
   padding: 0 8px;
   background: #FFFFFF;
   color: #c0b3d6;
   `

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
        <PurpleTitle>Enter personal details*</PurpleTitle>
        <Label>Name</Label>
        <input type="text" />
        <Label>Email</Label>
        <input type="text" />
        <Label>Phone Number</Label>
        <input type="text" />
      </form>
      <ClassButtonDiv>
        <PurpleTitle>Choose a class*</PurpleTitle>
        <ClassButton>Power Yoga 60</ClassButton>
        <ClassButton>Power Yoga 75</ClassButton>
        <ClassButton>Yoga Strong</ClassButton>
        <CTAButtonSUF>Sign up for class</CTAButtonSUF>
      </ClassButtonDiv>
    </SUFSection>
  )
}