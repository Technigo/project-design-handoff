import React from 'react';

export const Review = () => {
  return (
    <section className="review">
      <h2>To workout together with CrossPark gives me so much energy in my everyday life</h2>
      <img
        src={`${process.env.PUBLIC_URL}/assets/Image-review.png`}
        alt="Review from happy person" />
    </section>
  )
}