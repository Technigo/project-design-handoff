import React from 'react';
import reviews from 'libraries/reviews';
import { StyledReviews, ReviewWrapper, EachReview, ReviewBody, ReviewBy } from 'components/Reviews/Reviews.styles';

export const Reviews = () => {
  return (
    <StyledReviews>
      <h2>What our yogis say:</h2>
      <ReviewWrapper>
        {reviews.map((review) => (
          <EachReview key={review.id}>
            <img src={`/assets/${review.image}`} alt={`lady ${review.action}`} />
            <ReviewBody>{review.body}</ReviewBody>
            <ReviewBy>-{review.author}, {review.location}</ReviewBy>
          </EachReview>
        ))}
      </ReviewWrapper>
    </StyledReviews>
  )
}