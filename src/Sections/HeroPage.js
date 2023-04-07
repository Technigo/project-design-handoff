import React from 'react';
import styled from 'styled-components';
import { Slogan } from 'components/Slogan';
import Navbar from 'components/Menu';
import heroBg from '../assets/hero.svg'
import logoHero from '../assets/logo-hero.svg';
// import { Hamburger } from '../components/Hamburger';
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
  padding-right:7.4%;
  padding-top:4.7%;
  border:solid red;
`

export const HeroPage = () => {
  return (
    <HeroContainer>
      <Topwrapper>
        <Logo src={`${logoHero}`} alt="logo of the page" />
        <Navbar />
      </Topwrapper>
      <ButtonHover
        btnOnHover={joinBtnHover}
        btn={joinBtn}
        position="absolute"
        width="41.2%"
        left="58.7%"
        top="57.3%" />
      <Slogan />
    </HeroContainer>
  )
}
