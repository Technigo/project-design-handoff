/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import yogaPic from '../assets/YogaPic.png';
import Blob from '../assets/Blob.png';
import Vector from '../assets/Vector.png'

const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2rem;
  }
`

const Text = styled.div`
  background-image: url(${Blob});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: green;
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #025323;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 2rem;
    height: auto;
    width: 50%;
    text-align: center;
    p {
      font-size: 1.25rem;
      line-height: 1.5;
      max-width: 500px;
      margin-top: 2rem;
    }
  }
`
const Heading = styled.h1`
  color: #025323;
  text-align: center;
  margin-top: 1rem;
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
`

const ImageDiv = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 1rem;
  height: 50%; 
  width: 50%; 
  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 2rem;
    height: auto;
    width: 50%; 
  }
`;

const Overlay = styled.div`
  position: relative; 
  z-index: 1; 
  width: 100%;
  height: 100%;
`

const YogaWrapper = styled.img`
  max-width: 90%;
  height: auto;
  box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.25);
  border-radius: 20px;
`

const VectorWrapper = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Benefits = () => {
  return (
    <BenefitsWrapper>
      <Text>
        <Heading>Benefits of Yoga</Heading>
        <p>There is a wide range of yoga and meditation classes here.
            Here you want to create community and there is always good tea
            and someone you can talk to if you feel like it after class. You
            are warmly welcome regardless of experience. It also has many
            psychological and physical effects, including lowering stress levels
            and blood pressure while improving concentration and memory.
        </p>
      </Text>
      <ImageDiv>
        <Overlay>
          <YogaWrapper src={yogaPic} alt="yoga" />
          <VectorWrapper src={Vector} alt="vector" />
        </Overlay>
      </ImageDiv>
    </BenefitsWrapper>
  )
}