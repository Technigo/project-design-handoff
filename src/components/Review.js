import React from 'react'
import styled from 'styled-components'
import ReviewImg from '../images/image-review.jpg'
import Quotation from '../images/quotation.svg'
import { ReviewText } from './Typography'

const ReviewSection = styled.section`
  min-height: 50vh;
@media (min-width: 667px) {
  background-color: #F5F5F5;
}
`
const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9.7% 1.6%;
  gap: 40px;

  @media (min-width: 667px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: center;
  }
`
const ReviewImage = styled.img`
border-radius: 50%;
width: 79%;

@media (min-width: 667px) {
  width: 55%;
}

@media (min-width: 1024px) {
  width: 21.7%;
}
`

export const Review = () => {
  return (
    <ReviewSection>
      <ReviewDiv>
        <ReviewText><img src={Quotation} alt="big pink quotation mark" /> To workout together
          with CrossPark gives me so much energy in my everyday life
        </ReviewText>
        <ReviewImage src={ReviewImg} />
      </ReviewDiv>
    </ReviewSection>
  )
}