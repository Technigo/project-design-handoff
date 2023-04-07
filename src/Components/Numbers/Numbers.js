// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './Numbers.css';

// /////////////// COMPONENT //////////////////////// //

// This component returns a page with 4 pictures.

export const Numbers = () => {
  return (
    <div className="master-number">
      <div className="numbers-container">
        <div className="blue-box-container">
          <div className="blue-box">
            <img src="./Pictures/Component1.svg" alt="Numbers" />
          </div>
          <div className="blue-box">
            <img src="./Pictures/Component2.svg" alt="Numbers" />
          </div>
          <div className="blue-box">
            <img src="./Pictures/Component3.svg" alt="Numbers" />
          </div>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="big-box">
          <img src="./Pictures/review.svg" alt="review" />
        </div>
      </div>
    </div>
  )
}