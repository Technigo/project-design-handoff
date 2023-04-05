import styled from 'styled-components';
import React from 'react';
import { HeaderTitle, WhiteParagraph, CTABtnText } from './Fonts'

export const HeroText = () => {
  return (
    <HeroTextDiv>
      <WhiteParagraph>Santulan Power Yoga Stockholm</WhiteParagraph>
      <HeaderTitle>Move your body <br />Rest your mind</HeaderTitle>
      <CTABtnText>Sign up for a class</CTABtnText>
      <WhiteParagraph>Want to know more about us?</WhiteParagraph>
    </HeroTextDiv>
  )
}

const HeroTextDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 400px;
align-items: center;

`