/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import food from '../images/food.png';
import namaste from '../images/namaste.png';
import outside from '../images/outside.png';
import './Testimonials.css';

export const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonial-section">
        <h1 className="yogis-say">What our yogis say:</h1>
        <div className="testimonial-wrapper">
          <div className="firsttestimonial">
            <img
              src={namaste}
              alt="girl meditating with dog"
              className="img-testimonials"
            />
            <q className="first-p">
              This program has really helped me to be more grounded in the
              present moment. I used to envy my dog, who always would finds joy
              in the little things and be very present with what is. He truly is
              my meditation master!
            </q>
            <figcaption className="caption">&mdash; Laura, Vienna</figcaption>
          </div>
          <div className="secondtestimonial">
            <img
              src={food}
              alt="girl eating tasty food"
              className="img-testimonials"
            />
            <q className="second-p">
              I used to have a very troubled relationship with food... I would
              constantly crave something sweet and I have NEVER enjoyed cooking.
              I tried out this program because it combines nutrition with
              mindfulness. The meal plan is catered/personalized to your own
              lifestyle and habits, and I was...
            </q>
            <figcaption className="caption">&mdash; Kim, Norway</figcaption>
          </div>
          <div className="thirdtestimonial">
            <img
              src={outside}
              alt="girl doing yoga outside"
              className="img-testimonials"
            />
            <q className="third-p">
              Being able to be mindful of my body movements for 20 minutes was
              something I never thought I’d be able to do. Now my favorite
              Saturday activity is doing yoga in my garden - even early in the
              morning!
            </q>
            <figcaption className="caption">&mdash; Matilda, Poland</figcaption>
          </div>
        </div>
      </div>
    </div>
  );
};
