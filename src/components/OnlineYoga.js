import React from 'react';
import styled from 'styled-components'
import Carousel from './Carousel';

const StyledSection = styled.section`
background: #D0C4B8;
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

const StyledCarouselParent = styled.div`
  max-width: 1200;
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
`

const StyledCard = styled.div`
padding: 8px;
max-width: 266px;
`

const StyledPreview = styled.img`
max-width: 266px;
`

const OnlineYoga = () => {
  return (
    <StyledSection>
      <StyledH2>Our Online Yoga Offering</StyledH2>
      <StyledYogaP>Practice yoga conveniently and comfortably from home with our online yoga classes. 
        Our experienced yoga teachers will guide you through a variety of classes and styles, from beginner to advanced,
         with clear and easy-to-follow instructions.</StyledYogaP>
      <StyledCarouselParent>
        <Carousel show={3} loop>
          <StyledCard>Yinyoga to calm down<StyledPreview  src="/img/anna-pelzer-IGfIGP5ONV0-unsplash.jpg" alt="placeholder" /></StyledCard>
          <StyledCard>Yinyoga to calm down<StyledPreview  src="https://via.placeholder.com/1600x300" alt="placeholder" /></StyledCard>
          <StyledCard>Yinyoga to calm down<StyledPreview  src="https://via.placeholder.com/1600x300" alt="placeholder" /></StyledCard>
          <StyledCard>Yinyoga to calm down<StyledPreview  src="https://via.placeholder.com/1600x300" alt="placeholder" /></StyledCard>
          <StyledCard>Yinyoga to calm down<StyledPreview  src="https://via.placeholder.com/1600x300" alt="placeholder" /></StyledCard>
          <StyledCard>Yinyoga to calm down<StyledPreview  src="https://via.placeholder.com/1600x300" alt="placeholder" /></StyledCard>
          <StyledCard>Yinyoga to calm down<StyledPreview  src="https://via.placeholder.com/1600x300" alt="placeholder" /></StyledCard>
        </Carousel>
      </StyledCarouselParent>
    </StyledSection>
  )
}

export default OnlineYoga