// /////////////// IMPORT //////////////////////// //

import React from 'react';
import { StartButton } from './Components/StartButton/StartButton';
import './Hero.css';

// /////////////// COMPONENT //////////////////////// //

export const Hero = () => {
  return (
    <div className="main-content-container">
      <div className="main-text">
        <h1>YOUR WORKOUT YOUR TIME TOGETHER</h1>
        <p> Find the activity that suits you and buddy.
            No matter the amount of time you have
            to spare, we have you covered.
            Get started at your personal level.
        </p>
      </div>
      <StartButton cta />
    </div>
  )
}