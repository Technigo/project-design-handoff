import React from 'react';
import styled from 'styled-components';

const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--neutral-light);

  @media (min-width: 570px) {
   background-color: var(--primary-color-1);
   flex-direction: column-reverse;
   padding-top: 53px;
   padding-bottom: 53px;
  }
`;

const ReviewH2 = styled.h2`
color: var(--primary-color-4);
  font-weight: 800;
  font-size: 2rem;
  text-align: center;
  padding: 97px 16px 40px 16px;

  @media (min-width: 570px) {
    padding: 0 163px;
    font-size: 2.25rem;
  }
`;

const Quotation = styled.img`
  width: 40px;
  height: 30px;
  margin: 3px;
`;

const ReviewImg = styled.img`
  margin-bottom: 40px;

  @media (min-width: 570px) {
    margin-bottom: 48px;
  }
`;

export const Review = () => {
  return (
    <ReviewSection className="review">
      <ReviewH2>
        <Quotation src={`${process.env.PUBLIC_URL}/assets/Quotation.png`} alt="quotation marks" />
         To workout together with CrossPark gives me so much energy in my everyday life
      </ReviewH2>
      <ReviewImg
        src={`${process.env.PUBLIC_URL}/assets/Image-review.png`}
        alt="Laughing person" />
    </ReviewSection>
  )
}