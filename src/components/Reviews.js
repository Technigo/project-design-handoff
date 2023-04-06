import React from 'react';
import reviews from 'libraries/reviews';
import { StyledReviews } from 'styles/Reviews.styles';

export const Reviews = () => {
  return (
    <StyledReviews>
      <h2>What our yogis say:</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <img src={`/assets/${review.image}`} alt={`lady ${review.action}`} />
          <p className="review-body">{review.body}</p>
          <p className="review-by">-{review.author}, {review.location}</p>
        </div>
      ))}

    </StyledReviews>
  )
}