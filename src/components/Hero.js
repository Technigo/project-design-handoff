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
padding-bottom: 3.5rem;
color: white; 
text-align: center;

@media (min-width: 1024px) {
  padding-bottom: 24px;
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
`

const HeaderTextButtonContainer = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center; 
padding-top: 30rem;


@media (min-width: 1024px) {
  padding-left: 72px;
  margin-top: -200px;
}`

const BlueText = styled.p`
color: #89D6E8;
font-size: 1.5rem;
text-align:center;
line-height: 27px;
max-width: 522px;
padding-bottom: 48px;

@media (max-width: 1023px) {
  display: none;
  
}`

export const Hero = () => {
  const ClassAlert = () => {
    return (
      alert('You have signed up!')
    )
  }

  return (
    <HeroWrapper>
      <HeroImageContainer>

        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <HeaderTextButtonContainer>
          <HeroTextContainer>
            <SmallText fw500>Santulan Power Yoga Stockholm</SmallText>
            <Title>Move your body</Title>
            <Title>Rest your mind</Title>
          </HeroTextContainer>
          <BlueText>
          Build strength, agility and endurance
          whilst in a calm and serene studio, tucked away in Kungsholmen, Stockholm.
          </BlueText>
          <ButtonTextWrapper>
            <SignUpButton onClick={ClassAlert}>Sign up for a class</SignUpButton>
            <SmallText fw500>Want to know more about us?</SmallText>
          </ButtonTextWrapper>
        </HeaderTextButtonContainer>
      </HeroImageContainer>
    </HeroWrapper>
  );
};