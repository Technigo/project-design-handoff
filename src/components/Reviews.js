import React from 'react';
import reviews from 'libraries/reviews';
import { StyledReviews } from 'styles/Reviews.styles';

export const Reviews = () => {
  return (
    <StyledReviews>
      <h2>What our yogis say:</h2>
      <div className="review-wrapper">
        {reviews.map((review) => (
          <div key={review.id} className="each-review">
            <img src={`/assets/${review.image}`} alt={`lady ${review.action}`} />
            <p className="review-body">{review.body}</p>
            <p className="review-by">-{review.author}, {review.location}</p>
          </div>
        ))}
      </div>
    </StyledReviews>
  )
}