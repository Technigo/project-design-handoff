/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import Review1 from './images/review1.png'

const Wrapper = styled.div`
  margin: 8px auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 30px;
  @media (min-width: 545px) {
    padding-top: 30px;
  @media (min-width: 685px) {
    padding-top: 60px;
    padding-bottom: 40px;
    height: 728px;
  } 
  }
  `

const Heading = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-size: 24px;
  font-family: 700;
  line-height: 42px;
  color: black;
  @media (min-width: 685px) {
    font-size: 40px;
  } 
`

const Description = styled.p`
  color: white;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-family: 400;
  line-height: 20px;
  margin: 10px auto 34px auto;
  width: 80%;
  max-width: 378px;
  text-align: center;
  @media (min-width: 685px) {
    font-size: 24px;
    line-height: 26px;
    margin: 41px auto 200px auto;
  } 
`

/* Placeholder for review-carousel */
/* Either get carousel to work, do a placeholder for hand-in */

const ReviewWrapper = styled.div`
  width: 451px;
  height: 232px;
  background-color: #4796A8;
  border-radius: 20px;
`

const ReviewText = styled.p`
  color: white;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-family: 600;
  line-height: 26px;
  margin: 30px 33px auto 41px;
`

const ReviewerWrapper = styled.div`
  display: flex;
  width: fit-content;
  margin: 44px auto 30px 41px;
  align-items: center;
`

const ReviewerImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 16px;
  `

const ReviewerName = styled.p`
color: white;
font-family: 'Outfit', sans-serif;
font-weight: 600;
font-size: 16px;
line-height: 26px;
`

export const Reviews = () => {
  return (
    <Wrapper>
      <Heading>Come join us!</Heading>
      <Description>
      Discover all  the benefits of Power Yoga and become a part of our amazing community!
      </Description>
      <ReviewWrapper>
        <ReviewText>
        Anyone who thinks of joining a class, do it! Its such a great mix of physical exercise and a calm break from the everyday life.
        </ReviewText>
        <ReviewerWrapper>
          <ReviewerImage src={Review1} />
          <ReviewerName>John B.</ReviewerName>
        </ReviewerWrapper>
      </ReviewWrapper>
    </Wrapper>
  )
}