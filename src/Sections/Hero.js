import React from 'react';
import styled from 'styled-components';
import HeroBackground from '../Assets/Photos/HeroBackground.png'
import { Navbar } from './Navbar'
import { HeroText } from '../Components/HeroText'

export const Hero = () => {
  return (
    <HeroSection>
      <Navbar />
      <HeroText />
    </HeroSection>
  )
}

const HeroSection = styled.section`
background-image: url(${HeroBackground});
height: 982px;
background-size: cover;
background-position: 65%;

`