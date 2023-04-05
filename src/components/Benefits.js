import React from 'react'
import styled from 'styled-components'
import YogaPic from 'assets/yogaPic.jpg';
import Blob from 'assets/Blob.png';
import Vector from 'assets/Vector.svg'

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
    text-align: left;

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
`

const ImageDiv = styled.div`
  position: relative;
  background-image: url(${YogaPic});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 1rem;
  height: 20rem;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 2rem;
    height: 30rem;
    width: 50%;
  }
`

const Overlay = styled.div`
  position: relative; 
  z-index: 1; 
  width: 100%;
  height: 100%;
`

const YogaPicWrapper = styled.img`
  max-width: 80%;
  height: auto;
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
          <YogaPicWrapper src={YogaPic} alt="yoga" />
          <VectorWrapper src={Vector} alt="vector" />
        </Overlay>
      </ImageDiv>
    </BenefitsWrapper>
  )
}