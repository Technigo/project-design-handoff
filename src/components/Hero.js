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

@media (min-width: 1024px) {
  flex-direction: column; 
  align-items: flex-start; 
  align-content: flex-start;
}
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

@media (min-width:1024px) {
  margin-top: -15rem;
  padding-left: 120px;
}`

export const Title = styled.h2`
font-size: ${(props) => (props.smallrem ? '2.5rem;' : '3rem;')};
font-weight: 700;
color: ${(props) => (props.black ? 'black;' : 'white;')};
text-align: center;
`

export const SmallText = styled.p`
font-size: 1rem; 
color: white;
height: ${(props) => (props.h78 ? '78px;' : '')};
max-width: ${(props) => (props.w310 ? '310px;' : '591px;')};
text-align: center;
font-weight: ${(props) => (props.fw500 ? 500 : 600)};
word-wrap: break-word;
padding: ${(props) => (props.p20 ? '20px;' : '0px;')};
`

const ButtonTextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center; 
gap: 8px;
@media (min-width:1024px) {
  padding-left: 45px;
}`

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImageContainer>

        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <HeroTextContainer>
          <SmallText fw500>Santulan Power Yoga Stockholm</SmallText>
          <Title>Move your body</Title>
          <Title>Rest your mind</Title>
        </HeroTextContainer>

        <ButtonTextWrapper>
          <SignUpButton>Sign up for a class</SignUpButton>
          <SmallText fw500>Want to know more about us?</SmallText>
        </ButtonTextWrapper>

      </HeroImageContainer>
    </HeroWrapper>
  );
};