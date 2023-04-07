/* eslint-disable max-len */
// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './SpeakToTheGoals.css'
import { StartButton } from 'Components/StartButton/StartButton';
import { Grid } from 'Components/Grid/Grid';
import { BoldBigItalic, SmallNarrowItalic } from 'Components/HowToAchive/HowToAchive';
import Slider from 'Components/Slider/Slider';

// /////////////// COMPONENT //////////////////////// //

export const SpeakToTheGoals = () => {
  return (
    <div className="speak-to-the-goals-container">
      <div className="title-button-container">
        <div className="speak-to-the-goals-title">
          <SmallNarrowItalic>FIND ACTIVITIES</SmallNarrowItalic>
          <BoldBigItalic>YOUR STYLE</BoldBigItalic>
        </div>
        <div className="get-started-button-title">
          <StartButton>Get started</StartButton>
        </div>
      </div>
      <div className="slider">
        <Slider />
      </div>
      <div className="grid">
        <Grid />
      </div>
      <div className="workout-text-tablet"><SmallNarrowItalic>WORKOUTS RANGE FROM</SmallNarrowItalic><BoldBigItalic>5-45 MIN</BoldBigItalic></div>
      <div className="workout-text">
        <p>WORKOUTS</p>
        <p>RANGE FROM</p>
        <p>5-45 MIN</p>
      </div>
      <div className="speak-to-the-goals-button-container">
        <StartButton ctalong>Get started</StartButton>
      </div>
    </div>
  )
}