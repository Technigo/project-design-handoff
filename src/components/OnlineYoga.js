/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import styled from 'styled-components'
import { YogaSlider } from "./YogaSlider";

const StyledSection = styled.section`
background: #D0C4B8;
max-width: 390px;
margin: auto;
padding-bottom: 60px;
`
const StyledWrapper = styled.div`

`
const StyledH2 = styled.h2`
font-weight: 700;
font-size: 40px;
color: #02393F;
`

const StyledYogaP = styled.p`
color: #02393F;
font-size: 20px;
`

const OnlineYoga = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <StyledH2>Our Online Yoga Offering</StyledH2>
        <StyledYogaP>Practice yoga conveniently and comfortably from home with our online yoga classes. 
        Our experienced yoga teachers will guide you through a variety of classes and styles, from beginner to advanced,
         with clear and easy-to-follow instructions.</StyledYogaP>
        <YogaSlider />
      </StyledWrapper>
    </StyledSection>
  )
}

export default OnlineYoga