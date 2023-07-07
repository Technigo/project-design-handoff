import styled from 'styled-components';
import React from 'react';
import { HeaderTitle, BlueParagraph, Paragraph } from './Fonts'
import { CTAButton } from './CTAButton'

export const HeroText = () => {
  return (
    <HeroTextDiv>
      <NameTextDiv><Paragraph>Santulan Power Yoga Stockholm</Paragraph></NameTextDiv>
      <HeaderTitle>Move your body <br />Rest your mind</HeaderTitle>
      <BlueParagraph>Build strength, agility and endurance<br />
whilst in a calm and serene studio, tucked away in Kungsholmen, Stockholm.
      </BlueParagraph>
      <CTAButton>Sign up for a class</CTAButton>
      <Paragraph>Want to know more about us?</Paragraph>
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