// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './HowToAchive.css';
import styled from 'styled-components';
import { StartButton } from 'Components/StartButton/StartButton';

// /////////////// COMPONENT //////////////////////// //

// This component returns a div that contains a title, an image and some styled text.
// It also includes a download button created with the imported StartButton component.

// Here are 2 styled-components:
// BoldBigItalic and SmallNarrowItalic, which are used to create the styled text part.

export const BoldBigItalic = styled.h2`
font-size: 1.8rem;
font-weight: bold;
font-style: italic;
color: white;
`
export const SmallNarrowItalic = styled.h2`
font-size: 1.1rem;
font-weight: narrow;
font-style: italic;
color: white;
`

export const HowToAchive = () => {
  return (
    <div className="how-to-achive-container">
      <div className="title-box">
        <h1 className="title">
          <SmallNarrowItalic>WORKOUT WHERE</SmallNarrowItalic>
          <BoldBigItalic>YOU ARE</BoldBigItalic>
        </h1>
        <div className="title-box-button">
          <StartButton outlinedtablet>Download App</StartButton>
        </div>
      </div>
      <hr className="line" />
      <div className="how-to-achive-picture-text">
        <div className="how-to-achive-picture">
          <img className="phone-picture" src="./Pictures/image116.svg" alt="phonepicture" />
        </div>
        <div className="how-to-achive-text">
          <h2>
            <div className="flex">
              <BoldBigItalic>SCHEDULE</BoldBigItalic>
              <SmallNarrowItalic>WORKOUTS</SmallNarrowItalic>
            </div>
            <div className="flex">
              <SmallNarrowItalic>GET</SmallNarrowItalic>
              <BoldBigItalic>REMINDERS</BoldBigItalic>
            </div>
            <div className="flex">
              <BoldBigItalic>TRACK</BoldBigItalic>
              <SmallNarrowItalic>YOUR PROGRESS</SmallNarrowItalic>
            </div>
            <div className="flex">
              <SmallNarrowItalic>BE</SmallNarrowItalic>
              <BoldBigItalic>SPONTANEOUS</BoldBigItalic>
            </div>
            <div className="flex">
              <BoldBigItalic>SAVE</BoldBigItalic>
              <SmallNarrowItalic>YOUR FAVOURITES</SmallNarrowItalic>
            </div>
            <div className="flex">
              <SmallNarrowItalic>CELEBRATE YOUR</SmallNarrowItalic>
              <BoldBigItalic>GOALS</BoldBigItalic>
            </div>
          </h2>
        </div>
      </div>
      <div className="how-to-achive-buttons">
        <StartButton outlinedlong>Download App</StartButton>
      </div>
    </div>
  )
}