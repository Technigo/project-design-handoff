// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './TheBenefits.css';
import checkmark from './Vector26.svg';

// /////////////// COMPONENT //////////////////////// //

export const TheBenefits = () => {
  return (
    <div className="thebenefits-box">
      <div className="benefit-list1">
        <h2>BUILD HEALTHY HABITS</h2>
        <h2 className="thebenefit-title-bold">FOR YOU AND YOUR DOG</h2>
        <div className="check-text">
          <img className="checkmark" src={checkmark} alt="checkmark" />
          <p>Work your mind, body, have fun and develop amazing skills together. </p>
        </div>
        <div className="check-text">
          <img className="checkmark" src={checkmark} alt="checkmark" />
          <p>Get the most out of your time together every day.</p>
        </div>
        <div className="check-text">
          <img className="checkmark" src={checkmark} alt="checkmark" />
          <p>Levels from beginner to advanced dog owner/puppy to old dog.</p>
        </div>
      </div>
      <div className="benefit-list2">
        <div className="check-text">
          <img className="checkmark" src={checkmark} alt="checkmark" />
          <p>Online workouts and programs.</p>
        </div>
        <div className="check-text">
          <img className="checkmark" src={checkmark} alt="checkmark" />
          <p>Research based training.</p>
        </div>
        <div className="check-text">
          <img className="checkmark" src={checkmark} alt="checkmark" />
          <p>Experienced coaches.</p>
        </div>
      </div>
    </div>
  )
}