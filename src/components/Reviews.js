import React from 'react';
import reviews from 'libraries/reviews';

export const Reviews = () => {
  return (
    <>
      <h2>What our yogis say:</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <img src={`/assets/${review.image}`} alt={`lady ${review.action}`} />
          <p>{review.body}</p>
          <p>{review.author}, {review.location}</p>
        </div>
      ))}

    </>
  )
}