import React from 'react'
import styled from 'styled-components'
import Blob from '../images/Blob.png'
import Yoga from '../images/Benefits_back.png'
import Frame from '../images/Vector.png'

const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
  padding: 1rem;
  margin-top: 2rem;
  @media (min-width: 1000px) {
    flex-direction: row;
    padding: 0;
    margin-top: 3rem;
    margin-bottom: 8rem;
  }
`

const TextContainer = styled.div`
height: 300px;
position: relative;
`

const ImgWrapper = styled.div`
width: 80vw;
height: fit-content;
@media (min-width: 1000px) {
width: 44vw;
}
`

const BackgroundImg = styled.div`
  background-image: url(${Blob});
  background-size: contain;
  height: 300px;
  max-width: 80vw;
  background-repeat: no-repeat;
  background-position: center;
 

  @media (min-width: 744px) {
   height: 400px;
    text-align: center;
}`

const Paragraph = styled.p`
    font-size: 13px;
    line-height: 1.5;
    position: absolute;
    margin-top: -12rem;
    width: 80vw;
@media (min-width: 744px) {
      font-size: 20px;
      max-width: 800px;
      margin-top: -18rem;
}
@media (min-width: 1000px) {
  width: 40vw;
}`

const Heading = styled.h1`
  color: #025323;
  text-align: center;
  position: absolute;
  font-weight: 600;
  font-size: 30px;
  display: inline-block;
  white-space: nowrap;

  @media (min-width: 390px) {
    font-size: 42px;
}
`

const ImageDiv = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 4rem;
  margin-bottom: 4rem;
  height: 50%; 
  width: 80vw; 
  @media (min-width: 744px) {
    margin-top: 6rem;
    margin-right: 2rem;
    width: 353px;
    height: auto;
  }
`

const YogaWrapper = styled.img`
  max-width: 90%;
  height: auto;
  box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.25);
  border-radius: 20px;

  @media (min-width: 744px) {
    margin-top: 0;
    margin-right: 0;
    height: 465px;
    width: 353px;
  }
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
      <TextContainer>
        <Heading>Benefits of Yoga</Heading>
        <ImgWrapper>
          <BackgroundImg />
        </ImgWrapper>
        <Paragraph>There is a wide range of yoga and meditation classes here.
            Here you want to create community and there is always good tea
            and someone you can talk to if you feel like it after class. You
            are warmly welcome regardless of experience. It also has many
            psychological and physical effects, including lowering stress levels
            and blood pressure while improving concentration and memory.
        </Paragraph>
      </TextContainer>
      <ImageDiv>
        <YogaWrapper src={Yoga} alt="yoga" />
        <VectorWrapper src={Frame} alt="vector" />
      </ImageDiv>
    </BenefitsWrapper>
  )
}