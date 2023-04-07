import React from 'react';
import styled from 'styled-components'
import { CTA } from './CTA';
import Img from '../dane-wetton-t1NEMSm1rgI-unsplash.png';

const StyledHeader = styled.header`
margin: 1.5rem;
background-image: url(${Img});
background-position: center;
background-size: cover;
font-weight: 700;
color: #F5F5F5;
padding-bottom: 5rem;
`
const StyledHeaderWrapper = styled.div`
margin: 1.5rem;
`

const StyledLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLogo = styled.img`
width: 64px;
`
const StyledBurger = styled.img`
height: 40px;
`

const StyledOverlayWrapper = styled.div`
margin-top: 10rem;
`
const StyledH1 = styled.h1`
font-size: 2rem;
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
          <p>Access 100+ yoga classes and receive a personalized nutrition
             plan - for holistic health anytime, anywhere.  Achieve optimal health and
             balance through our comprehensive wellness program.
          </p>
          <CTA onClick={onClick}>Start your 7-day FREE trial</CTA>
        </StyledOverlayWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}

export default Header