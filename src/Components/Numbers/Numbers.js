// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './Numbers.css';

// /////////////// COMPONENT //////////////////////// //

export const Numbers = () => {
  return (
    <div className="master-number">
      <div className="numbers-container">
        <div className="blue-box-container">
          <div className="blue-box">
            <img src="./Pictures/Component 1.svg" alt="Numbers" />
          </div>
          <div className="blue-box">
            <img src="./Pictures/Component 2.svg" alt="Numbers" />
          </div>
          <div className="blue-box">
            <img src="./Pictures/Component 3.svg" alt="Numbers" />
          </div>
        </div>
        <div className="big-box">
          <img src="./Pictures/review.svg" alt="review" />
        </div>
      </div>
    </div>
  )
}