/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import styled from 'styled-components'
import { YogaSlider } from "./YogaSlider";

const StyledSection = styled.section`
background: #D0C4B8;
padding-top: 1.5rem;
padding-bottom: 3.75rem;
`
const StyledWrapper = styled.div`
margin: 1.5rem;

@media(min-width: 768px) and (max-width: 1024px) {
  width: 627px;
  margin-left: 2rem;
}

@media(min-width: 1025px) {
  width: 686px;
  margin-left: 7rem;
}
`
const StyledH2 = styled.h2`
font-weight: 700;
font-size: 40px;
color: #02393F;
line-height: 160%;
}
`

const StyledYogaP = styled.p`
color: #02393F;
font-size: 16px;
line-height: 160%;

@media(min-width: 768px) {
  font-size: 20px;
  padding-bottom: 3.5rem;
`

const Mark = styled.mark`
font-weight: 700;
background-color: transparent;
color: #02393F;
`

const OnlineYoga = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <StyledH2>Our Online Yoga Offering</StyledH2>
        <StyledYogaP>Practice yoga conveniently and comfortably from home with our <Mark>online yoga classes</Mark>. 
        Our experienced yoga teachers will guide you through a variety of classes and styles, from beginner to advanced,
         with clear and easy-to-follow instructions.</StyledYogaP>
      </StyledWrapper>
      <YogaSlider />
     
    </StyledSection>
  )
}

export default OnlineYoga