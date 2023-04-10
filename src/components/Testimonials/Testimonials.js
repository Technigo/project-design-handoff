/* eslint-disable max-len */
import React from 'react';
import './Testimonials.css'

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>What other parents say about the <br /> fit parents program</h1>
      <div className="testimonials-columns">
        <div className="testimonials-column">
          <img src="/images/Test1.png" alt="motivation 1" />
          <p>“I feel stable with my <br />training – even in tough times.”<br /><strong>Simon Owl</strong></p>
        </div>
        <div className="testimonials-column">
          <img src="/images/Test2.png" alt="motivation 2" />
          <p>“It took me some time but I <br /> feel very happy about my fitnes level now.” <br /><strong>Belema Hedgehog</strong></p>
        </div>
        <div className="testimonials-column">
          <img src="/images/Test3.png" alt="motivation 3" />
          <p>“It was a match from the <br /> very first training!” <br /><strong>Selma Whale</strong></p>
        </div>
      </div>
      <div className="button-container-testimonials">
        <button type="submit">Start trial</button>
      </div>
    </div>
  );
}