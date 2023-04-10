/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import yogabaw from '../img/yoga-blacknwhite.png';
import baweating from '../img/blacknwhite-eating.png';
import bawoutdoor from '../img/blacknwhite-outdoor.png';
import './Testimonials.css';

export const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <h1 className="bigt-text">What our yogis say:</h1>
      <div className="testimonials-cards">
        <div className="testimonial-card">
          <div className="img-container">
            <img src={yogabaw} alt="selfcare" />
          </div>
          <div className="text-container">
            <h3 className="testimonial-text">“This program has really helped me to be more grounded in the present moment. I used to envy my dog, who always would finds joy in the little things and be very present with what is. He truly is my meditation master!”</h3>
            <p className="cit">-Laura, Vienna </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="img-container">
            <img src={baweating} alt="selfcare" />
          </div>
          <div className="text-container">
            <h3 className="testimonial-text">“I used to have a very troubled relationship with food... I would constantly crave something sweet and I have NEVER enjoyed cooking. I tried out this program because it combines nutrition with   mindfulness. The meal plan is catered/personalized to your own lifestyle and habits, and I was surprised how easy (and tasty) the recipes are. I feel so much more energized, focused and I no longer eat sweets all the time!”</h3>
            <p className="cit">-Laura, Vienna </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="img-container">
            <img src={bawoutdoor} alt="selfcare" />
          </div>
          <div className="text-container">
            <h3 className="testimonial-text">Being able to be mindful of my body movements for 20 minutes was something I never thought I’d be able to do. Now my favorite Saturday activity is doing yoga in my garden - even early in the morning! </h3>
            <p className="cit">-Laura, Vienna </p>
          </div>
        </div>
      </div>
    </div>
  )
}