import React from 'react';
import reviews from 'libraries/reviews';
import { StyledReviews, ReviewWrapper, EachReview, ReviewBody, ReviewBy } from 'components/Reviews/Reviews.styles';
import { Header2 } from 'styles/Global';

export const Reviews = () => {
  return (
    <StyledReviews>
      <Header2 headerColor="#F4E4D7">What our yogis say:</Header2>
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