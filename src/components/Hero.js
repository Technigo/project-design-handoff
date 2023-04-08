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

@media (max-width: 768px) {
  font-size: 48px;
  line-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  width: 334px;
  height: 334px;
}

`

const Text = styled.p`
width: 528px;
height: 111px;
font-family: 'Libre Franklin';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 168.52%;

margin-left: 2em;

color: #025323;

@media (max-width: 768px) {
  font-size: 16px;
  line-height: 24px;
  margin-left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  width: 334px;
  height: 334px;
}
`
const BookButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 47px;
gap: 10px;

margin-left: 2em;

color: white;
font-weight: 600;
background: #025323;
border-radius: 15px;

&:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
    margin-left: 0;
`
export const Hero = () => {
  return (
    <HeroWrapper>
      <Navbar />
      <Text><Heading>Breath in breath out</Heading>
        <p>Yogistudio offers an overall concept in self-healing with a
              focus on calm and therapeutic forms of yoga.
        </p>
        <BookButton type="button" id="bookAClass">Book a class
        </BookButton>
      </Text>
    </HeroWrapper>
  )
}