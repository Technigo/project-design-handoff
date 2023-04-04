/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import yoga from 'yoga.png';
import Blob from 'Blob.png';

const BenefitsWrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;

    @media (min-width: 744px) {
        width: 300px;
    }

`

const Text = styled.div`
    color: green;
    
`
const Heading = styled.h1`
    color: green;
`

export const Benefits = () => {
  return (
    <BenefitsWrapper>
      <Heading>Benefits of Yoga</Heading>
      <Text>There is a wide range of yoga and meditation classes here.
            Here you want to create community and there is always good
            tea and someone you can talk to if you feel like it after class.
            You are warmly welcome regardless of experience.
            It also has many psychological and physical effects, including lowering
            stress levels and blood pressure while improving concentration and memory.
      </Text>
      <img src={Blob} />
      <img src={yoga} />
    </BenefitsWrapper>
  )
}