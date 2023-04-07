// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './Hero.css';
import { StartButton } from 'Components/StartButton/StartButton';

// /////////////// COMPONENT //////////////////////// //

// This code displays a hero section with a main text area and two buttons.
// The main text area includes a title, a short paragraph, and an image.
// The two buttons are imported from "StartButton" component, and used with props.

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
        <div className="circle-box">
          <img className="circle" src="./Pictures/Playbutton.svg" alt="circel" />
        </div>
      </div>
      <div className="buttons-container">
        <StartButton cta>Get started</StartButton>
        <StartButton outlined>Default</StartButton>
      </div>
    </div>
  )
}