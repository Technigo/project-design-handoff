// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './HowToAchive.css';
import { StartButton } from 'Components/StartButton/StartButton';
import phonepicture from './image116.svg';

// /////////////// COMPONENT //////////////////////// //

export const HowToAchive = () => {
  return (
    <div className="how-to-achive-container">
      <h1>WORKOUT WHERE</h1>
      <h1>YOU ARE</h1>
      <div className="how-to-achive-picture">
        <img className="phone-picture" src={phonepicture} alt="phonepicture" />
      </div>
      <h2>
        SCHEDULE WORKOUTS
        GET REMINDERS
        TRACK YOUR PROGRESS
        BE SPONTANEOUS
        SAVE YOUR FAVOURITES
        CELEBRATE YOUR GOALS
      </h2>
      <StartButton outlined>Download App</StartButton>
    </div>
  )
}