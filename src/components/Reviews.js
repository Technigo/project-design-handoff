/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

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
const ReviewCarouselWrapper = styled.div`
  height: 232px; /* Maybe add something to width to accomodate for dots */
  width: 415px; 
  border: dotted pink 2px;
`

// const ReviewText = styled.p`
//   color: white;
//   font-family: 'Outfit', sans-serif;
//   font-size: 16px;
//   font-family: 600;
//   line-height: 26px;
// `

// const ReviewerWrapper = styled.div`
//   border: purple dotted 1px;
// `

// const ReviewerImage = styled.img`
//   height: 50px;
//   width: 50px;
//   `

export const Reviews = () => {
  return (
    <Wrapper>
      <Heading>Come join us!</Heading>
      <Description>
      Discover all  the benefits of Power Yoga and become a part of our amazing community!
      </Description>
      <ReviewCarouselWrapper />
    </Wrapper>
  )
}