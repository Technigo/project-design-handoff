// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './SpeakToTheGoals.css'
import { StartButton } from 'Components/StartButton/StartButton';
import { SliderApp } from 'Components/Slider/Slider';

// /////////////// COMPONENT //////////////////////// //

const images = [
  {
    id: 1,
    url: 'https://example.com/image1.jpg',
    alt: 'Example image 1'
  },
  {
    id: 2,
    url: 'https://example.com/image2.jpg',
    alt: 'Example image 2'
  },
  {
    id: 3,
    url: 'https://example.com/image3.jpg',
    alt: 'Example image 3'
  }
];

export const SpeakToTheGoals = () => {
  return (
    <div className="speak-to-the-goals-container">
      <h1>FIND ACTIVITIES</h1>
      <h1>YOUR STYLE</h1>
      <div>
        <h1>My Image Carousel</h1>
        <SliderApp images={images} />
      </div>
      <p>
        WORKOUTS
        RANGE FROM
        5-45 MIN
      </p>
      <div className="speak-to-the-goals-button-container">
        <StartButton ctalong>Get started</StartButton>
      </div>
    </div>
  )
}
