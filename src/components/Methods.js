import React from 'react';

export const Methods = () => {
  return (
    <div className="methods-section">
      <h2>Read more about our methods</h2>
      <div className="method-container">
        <div className="method">
          <img alt="yoga" src="./assets/yoga.png" />
          <p> Yoga </p>
        </div>
        <div className="method">
          <img alt="fitness" src="./assets/fitness.png" />
          <p> Fitness </p>
        </div>
        <div className="method">
          <img alt="pilates" src="./assets/pilates.png" />
          <p> Pilates </p>
        </div>
        <div className="method">
          <img alt="running" src="./assets/running.png" />
          <p> Running </p>
        </div>
      </div>
    </div>
  )
}