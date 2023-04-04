import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/Header';
import HeroImage from '../images/hero.jpg';
import { SignUpButton } from './SignUpButton';

const HeroWrapper = styled.div`
  position: relative;
`;

const HeroImageContainer = styled.div`
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 928px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 

`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: white; 
`;

const HeroTextContainer = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 30rem; 
padding-bottom: 3.5rem;
color: white; 
text-align: center;

`
const Title = styled.h2`
font-size: 3rem;
font-weight: bold;
`
const SmallText = styled.p`
font-size: 1rem; 
color: white; 
padding-top: 8px;
`

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImageContainer>

        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <HeroTextContainer>
          <SmallText>Santulan Power Yoga Stockholm</SmallText>
          <Title>Move your body</Title>
          <Title>Rest your mind</Title>
        </HeroTextContainer>

        <SignUpButton>Sign up for a class</SignUpButton>
        <SmallText>Want to know more about us?</SmallText>
      </HeroImageContainer>
    </HeroWrapper>
  );
};