import React from 'react'
import styled from 'styled-components'

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
    <section className="hero-section">
      <StyledHeroTitle>Raise the Barre With Us!</StyledHeroTitle>
    </section>

  )
}

export default HeroSection;