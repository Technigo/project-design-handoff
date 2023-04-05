import React from 'react';
import { StyledTrialBtn } from './TrialBtn';

export const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonial-title"> What others say about the fit parents program </h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <img alt="parent" src="../assets/Parent1.png" />
          <h3>“I feel stable with my training, even in tough times.”</h3>
          <p>Simon Owl</p>
        </div>
        <div className="testimonial-card">
          <img alt="parent" src="../assets/Parent2.png" />
          <h3>“It took me some time, but I feel very happy about my fitness level now.”</h3>
          <p> Belema Hedgehog </p>
        </div>
        <div className="testimonial-card">
          <img alt="parent" src="assets/Parent3.png" />
          <h3>“It was a match from the very first training!”</h3>
          <p> Selma Whale</p>
        </div>
      </div>
      <StyledTrialBtn> Start trial</StyledTrialBtn>
    </div>
  )
}