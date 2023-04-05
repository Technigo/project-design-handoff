// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './SpeakToTheGoals.css'
import { StartButton } from 'Components/StartButton/StartButton';

// /////////////// COMPONENT //////////////////////// //

export const SpeakToTheGoals = () => {
  return (
    <div className="speak-to-the-goals-container">
      <h1>FIND ACTIVITIES</h1>
      <h1>YOUR STYLE</h1>
      <div className="speak-to-the-goals-button-container">
        <StartButton cta>Get started</StartButton>
      </div>
    </div>
  )
}