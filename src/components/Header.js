import React from 'react';
import styled from 'styled-components';
import { Navbar } from './NavBar';
import hero from '../Images/hero.svg';
import { Hero } from './Hero';

export const Header = () => {
  return (
    <Container>
      <ImageBoom src={hero} />
      <Navbar />
      <Hero />
    </Container>
  )
}

export const Container = styled.div`
box-sizing: border-box;
width: 100%;
display:flex;
flex-direction:column;
justify-content: flex-start;
position:relative;
align-items:center;
background:#045661;
padding-top: 1%;
padding-left:5%;
padding-bottom:5%;
padding-right:5%;
z-index:0;
align-self: center;
`

export const ImageBoom = styled.img`
position:absolute;
right: 5%;
bottom: 5%;
z-index:-1;
`