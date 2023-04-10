import React from 'react';
import '../css/Methods.css';

export const Methods = () => {
  return (
    <div className="methods-container">
      <h3>Read more about our methods</h3>
      <div className="thumb-nails">
        <div className="thumb">
          <img src="/assets/yoga.png" alt="yoga icon" />
          <p>Yoga</p>
        </div>
        <div className="thumb">
          <img src="/assets/strength.png" alt="fitness icon" />
          <p>Fitness</p>
        </div>
        <div className="thumb">
          <img src="/assets/pilates.png" alt="pilates icon" />
          <p>Pilates</p>
        </div>
        <div className="thumb">
          <img src="/assets/running.png" alt="running icon" />
          <p>Running</p>
        </div>
      </div>
    </div>
  )
}
