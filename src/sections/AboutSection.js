/* eslint-disable max-len */

import React from 'react'
import styled from 'styled-components'
import Carousel from '../components/Carousel'
import AboutPicture from '../assets/about-picture.png'
import ShapeOne from '../assets/shape1.png'

const StyledPicture = styled.div`
background: url(${AboutPicture});
height: 160px;
width: 344px;
border-radius: 0px 80px 80px 0px;
transform: rotate(180deg);
display: flex;
flex-direction: row-reverse;
margin: 32px;
margin-right: 0px;
`

const StyledTitle = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 130%;
text-align: center;
margin-bottom: 32px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
`

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

const StyledText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
text-align: center;
`

const StyledBackgroundShape = styled.div`
background-image: url(${ShapeOne});
`

const AboutSection = () => {
  return (
    <section className="about-section">
      <StyledPicture />
      <StyledBackgroundShape>

        <StyledContainer>
          <StyledTitle>Come Sweat It Out<br />
    at the Barre
          </StyledTitle>
          <StyledText>Our Barre Classes are full-body workouts where we’ll pulse, plié, and sweat our way through a series of exercises.<br />
            <b>

No dance experience required!
            </b>
          </StyledText>
        </StyledContainer>
      </StyledBackgroundShape>
      <Carousel />
    </section>
  )
}

export default AboutSection;