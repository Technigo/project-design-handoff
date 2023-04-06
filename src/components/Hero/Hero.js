import React from 'react';
// import './Hero.css';
import { StartButton } from 'components/StartButton';

export const Hero = () => {
  return (
    <div className="main-content-container">
      <div className="main-text">
        <h1>YOUR<br />
            WORKOUT<br />
            YOUR<br />
            TIME<br />
            TOGETHER
        </h1>
        <p> Find the activity that suits you and buddy.
              No matter the amount of time you have
              to spare, we have you covered.
              Get started at your personal level.
        </p>
      </div>
      <div className="buttons-container">
        <StartButton cta>Get started</StartButton>
        <StartButton outlined>Default</StartButton>
      </div>
    </div>
  )
}