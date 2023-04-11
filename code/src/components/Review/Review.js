import React from 'react';
import {
  ReviewSection,
  ReviewContentWrapper,
  ReviewH2,
  Quotation,
  ReviewImg
} from './Review.styled';
import reviewImg from '../../assets/review-image.png';
import quotationmark from '../../assets/quotation.png';

export const Review = () => {
  return (
    <ReviewSection className="review">
      <ReviewContentWrapper>
        <ReviewH2>
          <Quotation src={quotationmark} alt="quotation mark" />
          To workout together with CrossPark gives me so much energy in my everyday life
        </ReviewH2>
        <ReviewImg src={reviewImg} alt="Person laughing" />
      </ReviewContentWrapper>
    </ReviewSection>
  );
};
