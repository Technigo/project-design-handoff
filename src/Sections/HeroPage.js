import React from 'react';
import styled from 'styled-components';
import { Slogan } from 'components/Slogan';
import { HeroText } from 'components/HeroText';
import heroBg from '../assets/hero.svg'
import logoHero from '../assets/logo-hero.svg';
import { Hamburger } from '../components/Hamburger';
import { ButtonJoin } from '../components/ButtonJoin';

const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Logo = styled.img`
  height: 6%;
  width: 21.5%;
  margin-top: 4%;
  margin-left: 4.5%;
`
const Topwrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`

export const HeroPage = () => {
  return (
    <HeroContainer>
      <Topwrapper>
        <Logo src={`${logoHero}`} alt="logo of the page" />
        <Hamburger />
      </Topwrapper>
      <ButtonJoin />
      <Slogan />
      <HeroText />
    </HeroContainer>
  )
}
