// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './SpeakToTheGoals.css'
import { StartButton } from 'Components/StartButton/StartButton';
import { BoldBigItalic, SmallNarrowItalic } from 'Components/HowToAchive/HowToAchive';
import Slider from 'Components/Slider/Slider';

// /////////////// COMPONENT //////////////////////// //

export const SpeakToTheGoals = () => {
  return (
    <div className="speak-to-the-goals-container">
      <div className="speak-to-the-goals-title">
        <SmallNarrowItalic>FIND ACTIVITIES</SmallNarrowItalic>
        <BoldBigItalic>YOUR STYLE</BoldBigItalic>
      </div>
      <Slider />
      <p>WORKOUTS</p>
      <p>RANGE FROM</p>
      <p>5-45 MIN</p>
      <div className="speak-to-the-goals-button-container">
        <StartButton ctalong>Get started</StartButton>
      </div>
    </div>
  )
}
