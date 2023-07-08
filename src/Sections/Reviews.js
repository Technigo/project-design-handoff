import React, { useState } from 'react';
import styled from 'styled-components';
import { Paragraph, ReviewParagraph, ReviewName } from '../Components/Fonts';
import ReviewPerson1 from '../Assets/Photos/reviewprofilepic1.png';
import ReviewPerson2 from '../Assets/Photos/reviewprofilepic2.png';
import ReviewPerson3 from '../Assets/Photos/reviewprofilepic3.png';
import RightArrow from '../Assets/Icons/RightArrow.svg';

const AllReviews = [
  { name: 'John B.',
    image: ReviewPerson1,
    review: 'Anyone who thinks of joining a class, do it! Its such a great mix of physical exercise and a calm break from everyday life.' },
  { name: 'Anna M.',
    image: ReviewPerson2,
    review: 'Just WOW. I have never tried something like this before, but this is definitely my new thing! Never going back to a normal gym.' },
  { name: 'Moa F.',
    image: ReviewPerson3,
    review: '10/10 recommend! Everyone should go to the Santulan studio and try out power yoga at least once in their lives.' }
]

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
}`

const ReviewAndArrow = styled.div`
display: flex;`

const SingleReviewDiv = styled.div`
margin-top: 24px;
display: flex;
text-align: left;
flex-direction: column;
width: 290px;
height: 232px;
background: #B3A1CC;
border-radius: 20px;
padding-top: 35px;
padding-left: 25px;
padding-right: 25px;

@media (min-width: 688px) {
  margin-top: 150px;
  width: 415px;
  padding-right: 35px;
  padding-left: 35px;
}

@media (min-width: 1024px) {
  margin-top: 150px;
  width: 415px;
  padding-right: 35px;
  }`

const ReviewTextDiv = styled.div`
display: flex;
flex-direction: column;`

const ReviewerInfo = styled.div`
width: 140px;
display: flex;
gap: 16px;
padding-top: 44px;

img {
  width: 50px;
  height: 50px;
}`

const Arrow = styled.button`
border: none;
position: absolute;
background: transparent;
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 140px;
padding-left: 350px;
cursor: pointer;

:hover {
 opacity: 60%;
}

@media (min-width: 688px) {
  margin-top: 265px;
  margin-left: 155px;
}
`

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === AllReviews.length - 1 ? 0 : currentIndex + 1);
  };
  return (
    <ReviewSection>
      <ReviewsTitle>Come join us!</ReviewsTitle>
      <WhiteTextDiv>
        <Paragraph purple>
        Discover all  the benefits of Power Yoga and
        become a part of our amazing community!
        </Paragraph>
      </WhiteTextDiv>
      <ReviewAndArrow>
        <SingleReviewDiv>
          <ReviewTextDiv>
            <ReviewParagraph>
              {AllReviews[currentIndex].review}
            </ReviewParagraph>
            <ReviewerInfo>
              <img src={AllReviews[currentIndex].image} alt="Male reviewer" />
              <ReviewName>{AllReviews[currentIndex].name}</ReviewName>
            </ReviewerInfo>
          </ReviewTextDiv>
        </SingleReviewDiv>
        <Arrow onClick={handleNextClick}><img src={RightArrow} alt="next class button" /></Arrow>
      </ReviewAndArrow>
    </ReviewSection>
  )
}