import React from 'react';
import styled from 'styled-components';
import { Paragraph, ReviewParagraph, ReviewName } from '../Components/Fonts';
import ReviewMan from '../Assets/Photos/reviewprofilepic1.png';

const ReviewSection = styled.section`
margin: auto;
display: flex;
background-color: #8c78af;
align-items: center;
flex-direction: column;
text-align: center;
padding-top: 25px;
padding-bottom: 25px;
width: 100%;

@media (min-width: 688px) {
    padding-top: 30px;
}

@media (min-width: 1024px) {
    padding-top: 60px;
    height: 728px;
    width: 50%;
}`

const ReviewsTitle = styled.h1`
font-size: 24px;
font-weight: bold;
color: #312661;

@media (min-width: 1024px) {
    font-size: 40px;
}`

const WhiteTextDiv = styled.div`
display: flex;
flex-direction: column;
width: 310px;
padding-top: 16px;

@media (min-width: 688px) {
    width: 378px;
}

@media (min-width: 1024px) {
}`

const SingleReviewDiv = styled.div`
margin-top: 24px;
display: flex;
text-align: left;
flex-direction: column;
width: 415px;
height: 232px;
background: #B3A1CC;
border-radius: 20px;
padding-top: 35px;
padding-left: 35px;

@media (min-width: 1024px) {
  margin-top: 150px;
  }`

const ReviewTextDiv = styled.div`
width: 341px;`

const ReviewerInfo = styled.div`
width: 140px;
display: flex;
gap: 16px;
padding-top: 44px;

img {
  width: 50px;
  height: 50px;
}`

export const Reviews = () => {
  return (
    <ReviewSection>
      <ReviewsTitle>Come join us!</ReviewsTitle>
      <WhiteTextDiv>
        <Paragraph purple>
        Discover all  the benefits of Power Yoga and
        become a part of our amazing community!
        </Paragraph>
      </WhiteTextDiv>
      <SingleReviewDiv>
        <ReviewTextDiv>
          <ReviewParagraph>
            Anyone who thinks of joining a class, do it!
            Its such a great mix of physical exercise and a calm break
            from everyday life.
          </ReviewParagraph>
          <ReviewerInfo>
            <img src={ReviewMan} alt="Male reviewer" />
            <ReviewName> John B.</ReviewName>
          </ReviewerInfo>
        </ReviewTextDiv>
      </SingleReviewDiv>
    </ReviewSection>
  )
}