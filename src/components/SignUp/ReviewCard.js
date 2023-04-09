import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './review.css';

export const Slider = () => {
  return (
    <div className="review-container">
      <AwesomeSlider organicArrows={false}>
        <div className="review-card">
          <h5>Anyone who thinks of joining a class,
          do it! Its such a great mix of physical
          exercise and a calm break from the everyday life.
          </h5>
          <img src="/img/person1.png" alt="Profilepicture" />
          <p>John B.</p>
        </div>

        <div className="review-card">
          <h5>Just WOW. I have never tried something like
      this before, but this is definetally my new thing!
      Never going back to a normal gym.
          </h5>
          <img src="/img/person2.png" alt="Profilepicture" />
          <p>Anna M.
          </p>
        </div>

        <div className="review-card">
          <h5>
        10/10 recommend! Everyone should go to the
        Santulan studio and try out power yoga at
        least once in their lives.
          </h5>
          <img src="/img/person3.png" alt="Profilepicture" />
          <p>Moa F.
          </p>
        </div>
      </AwesomeSlider>
    </div>
  );
}