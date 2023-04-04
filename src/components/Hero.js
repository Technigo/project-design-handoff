/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components'

export const Hero = () => {
  const Title = styled.h1`
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;

    color: #025323;`
  return (
    <>
      <Title>Breath in breath out</Title>
      <p>Yogistudio offers an overall concept in self-healing with a focus on calm and therapeutic forms of yoga.</p>
      <label>
        <btn type="button" id="bookAClass">Book a class</btn>
      </label>
    </>
  )
}