/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import HeroImage from 'assets/HeroImage.png';
import { Navbar } from 'components/Navbar'

const HeroWrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
`

const Heading = styled.h1`
width: 748px;
height: 96px;

font-family: 'Libre Franklin';
font-style: normal;
font-weight: 600;
font-size: 79px;
line-height: 96px;

color: #025323;
`

const Text = styled.p`
width: 528px;
height: 111px;
font-family: 'Libre Franklin';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 168.52%;

color: #025323;
`
const BookButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 47px;
gap: 10px;

position: absolute;
width: 244px;
height: 59px;
left: 0px;
top: 292px;

background: #025323;
border-radius: 15px;

&:hover {
    cursor: pointer;
  }
`
export const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <Navbar />
        <Text><Heading>Breath in breath out</Heading>
          <p>Yogistudio offers an overall concept in self-healing with a
              focus on calm and therapeutic forms of yoga.
          </p>
        </Text>
      </HeroWrapper>
      <BookButton type="button" id="bookAClass">Book a class
      </BookButton>
    </>
  )
}