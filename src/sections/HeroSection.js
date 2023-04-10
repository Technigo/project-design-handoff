import React from 'react'
import styled from 'styled-components'
import HeroImage from '../assets/hero-image.jpg'

const StyledSection = styled.section`
 height: 528px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${HeroImage});
  background-size: cover;`

const StyledHeroTitle = styled.h1`
font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 130%;
  margin-left: 20px;
  color: #210440;
  margin-top: 168px;
`

const HeroSection = () => {
  return (
    <StyledSection>
      <StyledHeroTitle>Raise the Barre With Us!</StyledHeroTitle>
    </StyledSection>

  )
}

export default HeroSection;