import styled from 'styled-components';
import React from 'react';
import { HeaderTitle, BlueParagraph, WhiteParagraph } from './Fonts'
import { CTAButton } from './CTAButton'

export const HeroText = () => {
  return (
    <HeroTextDiv>
      <NameTextDiv><WhiteParagraph>Santulan Power Yoga Stockholm</WhiteParagraph></NameTextDiv>
      <HeaderTitle>Move your body <br />Rest your mind</HeaderTitle>
      <BlueParagraph>Build strength, agility and endurance<br />
whilst in a calm and serene studio, tucked away in Kungsholmen, Stockholm.
      </BlueParagraph>
      <CTAButton>Sign up for a class</CTAButton>
      <WhiteParagraph>Want to know more about us?</WhiteParagraph>
    </HeroTextDiv>
  )
}

const HeroTextDiv = styled.div`
display: flex;
gap: 15px;
flex-direction: column;
margin-top: 350px;
width: 522px;
text-align: center;
align-items: center;

@media (min-width: 1024px) {
  margin-top: 180px;
  margin-left: 76px;
}
`

const NameTextDiv = styled.div`
margin-bottom: -15px;

@media (min-width: 1024px) {
display: none;
}
`