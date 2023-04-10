import React from 'react';
import './Methods.css'

export const Methods = () => {
  return (
    <div className="methods-container">
      <div className="methods-header">
        <h1>Read more about our methods</h1>
      </div>
      <div className="methods-images">
        <div className="method">
          <img src="/images/yoga.svg" alt="yoga" />
          <p>Yoga</p>
        </div>
        <div className="method">
          <img src="/images/fitness.svg" alt="fitness" />
          <p>Fitness</p>
        </div>
        <div className="method">
          <img src="/images/pilates.svg" alt="pilates" />
          <p>Pilates</p>
        </div>
        <div className="method">
          <img src="/images/running.svg" alt="running" />
          <p>Running</p>
        </div>
      </div>
    </div>
  );
}