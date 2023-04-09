/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
//  import ReactSimplyCarousel from 'react-simply-carousel'
import User1 from './images/review1.png'
import User2 from './images/review2.png'
import User3 from './images/review3.png'

/* Array with review-data */
const reviews = [
  {
    id: 1,
    name: 'John B.',
    image: User1,
    review: 'Anyone who thinks of joining a class, do it! Its such a great mix of physical exercise and a calm break from the everyday life.'
  },
  {
    id: 2,
    name: 'Anna M.',
    image: User2,
    review: 'Just WOW. I have never tried something like this before, but this is definetally my new thing! Never going back to a normal gym.'
  },
  {
    id: 3,
    name: 'Moa F.',
    image: User3,
    review: '10/10 recommend! Everyone should go to the Santulan studio and try out power yoga at least once in their lives.'
  }
]

/* Placeholder/styling for review-carousel */
/* Either get carousel to work, do a placeholder for hand-in */

const OuterWrapper = styled.div`
  height: 260px;
  border: 1px dotted pink;
  width: 95%;
  max-width: 451px;
`

const ReviewWrapper = styled.div`
  width: 100%;
  height: 232px;
  background-color: #4796A8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const ReviewCarousel = () => {
  return (
    <OuterWrapper>
      <ReviewWrapper>
        <ReviewText>{reviews[1].review}</ReviewText>
        <ReviewerWrapper>
          <ReviewerImage src={reviews[1].image} />
          <ReviewerName>{reviews[1].name}</ReviewerName>
        </ReviewerWrapper>
      </ReviewWrapper>
    </OuterWrapper>
  )
}