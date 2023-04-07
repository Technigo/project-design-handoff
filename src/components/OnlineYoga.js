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
margin: 1.5rem
`
const StyledH2 = styled.h2`
font-weight: 700;
font-size: 40px;
color: #02393F;
line-height: 160%;
`

const StyledYogaP = styled.p`
color: #02393F;
font-size: 16px;
line-height: 160%;
`

const OnlineYoga = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <StyledH2>Our Online Yoga Offering</StyledH2>
        <StyledYogaP>Practice yoga conveniently and comfortably from home with our online yoga classes. 
        Our experienced yoga teachers will guide you through a variety of classes and styles, from beginner to advanced,
         with clear and easy-to-follow instructions.</StyledYogaP>
      </StyledWrapper>
      <YogaSlider />
     
    </StyledSection>
  )
}

export default OnlineYoga