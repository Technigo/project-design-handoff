import React from 'react';
import styled from 'styled-components'
import { CTA } from './CTA';
import Img from '../dane-wetton-t1NEMSm1rgI-unsplash.png';

const StyledHeader = styled.header`
background-image: url(${Img});
background-position: center;
background-size: cover;
color: #F5F5F5;
padding-bottom: 5rem;
padding-top: 1.5rem;

@media(min-width: 768px) and (max-width: 1024px) {
background-size: 130%;
}

@media (min-width: 1025px) {
max-height: 900px;
}
`
const StyledHeaderWrapper = styled.div`
padding: 0 1.5rem;
`
const StyledLogoWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media (min-width: 1025px) {
  padding: 5.5rem;
}
`

const StyledLogo = styled.img`
width: 64px;
`
const StyledBurger = styled.img`
height: 40px;
`
const StyledOverlayWrapper = styled.div`
margin-top: 10rem;

@media(min-width: 768px) and (max-width: 1024px) {
  max-width: 600px;
  }

@media(min-width: 1025px) {
  max-width: 605px;
  display: flex;
  flex-direction: column;
  align-content: left;
  margin-left: 7rem;
  margin-top: 15rem;
  }
`
const StyledH1 = styled.h1`
font-size: 2rem;
font-weight: 700;

@media (min-width: 768px) and (max-width: 1024px) {
  max-width: 600px;
  font-size: 50px;
  line-height: 160%;
  }
`
const StyledP = styled.p`
font-weight: 700;
font-size: 21px;
color: #F5F5F5;
line-height: 150%;

@media (min-width: 768px) and (max-width: 1024px) {
  max-width: 600px;
  font-weight: 400;
  } 

@media (min-width: 1025px) {
  font-size: 20px;
}
`

const StyledBtnWrapper = styled.div`
display: flex;
justify-content: center;

@media (min-width: 768px) and (max-width: 1024px) {
  margin: 2rem;
  justify-content: flex-start;
  } 

  @media (min-width: 1025px) {
    margin-left: 7rem;
    justify-content: flex-start;
  }
  `

// onClick is the prop for opening the Popup
const Header = ({ onClick }) => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <StyledLogoWrapper>
          <StyledLogo
            src="../icons/logo.svg"
            alt="" />
          <StyledBurger
            src="../icons/hamburger.svg"
            alt="" />
        </StyledLogoWrapper>
        <StyledOverlayWrapper>
          <StyledH1>The health revolution starts with you</StyledH1>
          <StyledP>Access 100+ yoga classes and receive a personalized nutrition
             plan - for holistic health anytime, anywhere.  Achieve optimal health and
             balance through our comprehensive wellness program.
          </StyledP>
          <StyledBtnWrapper>
            <CTA onClick={onClick}>Start your 7-day FREE trial</CTA>
          </StyledBtnWrapper>
        </StyledOverlayWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}

export default Header