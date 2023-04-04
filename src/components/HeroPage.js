import React from 'react';
import styled from 'styled-components';
import heroBg from '../assets/hero.svg'
import logoHero from '../assets/logo-hero.svg';
import { Hamburger } from './Hamburger';
import { Button } from './Button';

const ParentDiv = styled.div`
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
    <ParentDiv>
      <Topwrapper>
        <Logo src={`${logoHero}`} alt="logo of the page" />
        <Hamburger />
      </Topwrapper>
      <Button />
    </ParentDiv>
  )
}
