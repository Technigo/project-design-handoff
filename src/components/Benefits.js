/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import Yoga from 'Yoga.png';
import Blob from 'Blob.png';

const BenefitsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    
`

const Text = styled.div`
    background-image: url(${Blob});
    background-size: contain;
    background-repeat: no-repeat;
    color: green;
    background-position: center;
    margin: 20px;
    height: 40em;
    p {
        text-align: center;
    }

    @media (min-width: 968px) {
        height: 
    }
`
const Heading = styled.h1`
    color: green;
    text-align: center;
`
const ImageDiv = styled.div`
    .yogaPic {
        width: 100%;
        height: auto
    }

    .yogaVector {
        
    }
`

export const Benefits = () => {
  return (
    <BenefitsWrapper>
      <Text>
        <Heading>Benefits of Yoga</Heading>
        <p>There is a wide range of yoga and meditation classes here.
            Here you want to create community and there is always good
            tea and someone you can talk to if you feel like it after class.
            You are warmly welcome regardless of experience.
            It also has many psychological and physical effects, including lowering
            stress levels and blood pressure while improving concentration and memory.
        </p>
      </Text>
      <ImageDiv>
        <img className="yogaPic" src={Yoga} />
      </ImageDiv>
    </BenefitsWrapper>
  )
}