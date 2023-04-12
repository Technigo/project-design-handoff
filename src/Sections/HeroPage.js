import React from 'react';
import styled from 'styled-components';
import { Slogan } from 'components/Slogan';
import { HeroTextContent } from 'components/HeroText';
import Navbar from 'components/Navbar';
import heroBg from '../assets/background/hero.svg';
import heroBgLarge from '../assets/background/hero-large.svg';
import logoHero from '../assets/logo/logo-hero.svg';
import { ButtonHover } from '../components/ButtonHover';
import joinBtn from '../assets/button-join.svg';
import joinBtnHover from '../assets/button-join-hover.svg';

const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    background-image: url(${heroBgLarge});
  }
`

const Logo = styled.img`
  height: 6%;
  width: 21.5%;
  margin-top: 4%;
  margin-left: 4.5%;

  @media (min-width: 1024px) {
    width: 10%;
    margin-top: 1%;
  }
`
const Topwrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
 `;

const ButtonDiv = styled.div`
display:flex;
justify-content: flex-end;
width:100vw;
height:6%;
position:absolute;
top: 60%;

@media (min-width: 768px) {
    top:90%;
  }
`;

const HeroTextContainer = styled.div`
display:none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const HeroPage = () => {
  return (
    <HeroContainer>
      <Topwrapper>
        <Logo src={`${logoHero}`} alt="logo of the page" />
        <Navbar />
      </Topwrapper>
      <HeroTextContainer>
        <HeroTextContent>
          Physical activity is vital for the body.
          Learn how to master unique skills where you’ll develop strength,
          confidence and you&apos;ll defy yourself.
        </HeroTextContent>
      </HeroTextContainer>
      <ButtonDiv>
        <ButtonHover
          btnOnHover={joinBtnHover}
          btn={joinBtn}
          position="relative"
          width="41.2%" />
      </ButtonDiv>
      <Slogan />
    </HeroContainer>
  )
}
