/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import heroImage from './heroImage.jpg';

export const Hero = () => {
  const Heading = styled.h1`
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    position: absolute;

    color: #025323;`
  return (
    <div className="hero-container">
      <img className="hero-img" src={heroImage} alt="Person doing yoga" />
      <Heading>Breath in breath out</Heading>
      <p>Yogistudio offers an overall concept in self-healing with a focus on calm and therapeutic forms of yoga.</p>
      <label>
        <btn type="button" id="bookAClass">Book a class</btn>
      </label>
    </div>
  )
}