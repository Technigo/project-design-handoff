// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './SocialProof.css';
import styled from 'styled-components';
import { StartButton } from 'Components/StartButton/StartButton';

// /////////////// COMPONENT //////////////////////// //

// This component returns a page with styled text
// First we create the 2 different styles of the text with styled-components.

const BoldBigItalic = styled.h1`
font-size: 1.8rem;
font-weight: bold;
font-style: italic;
color: #95A6B5;
padding-bottom: 15px;
`
const SmallNarrowItalic = styled.h2`
font-size: 1.1rem;
font-weight: narrow;
font-style: italic;
color: #95A6B5;
`

export const SocialProof = () => {
  return (
    <div className="socialproof-content-container">
      <div className="social-main-text">
        <h1>
          <SmallNarrowItalic>CO-CREATED WITH 100+</SmallNarrowItalic>
          <BoldBigItalic>WORLD RENOWNED
          HEALTH EXPERTS
          </BoldBigItalic>
        </h1>
        <p>
          Our concept and workouts have been developed to
          fit you and your dog by some of the worlds most
          experienced trainers, physiotherapists, and health experts,
          specialists both in dogs and human. We stay close to research
          and contribute in several ways.
        </p>
      </div>
      <div className="buttons-container">
        <StartButton outlinedlongFindOut>Find out more</StartButton>
      </div>
    </div>
  )
}