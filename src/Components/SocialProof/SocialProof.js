// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './SocialProof.css';
import { StartButton } from 'Components/StartButton/StartButton';

// /////////////// COMPONENT //////////////////////// //

export const SocialProof = () => {
  return (
    <div className="socialproof-content-container">
      <div className="main-text">
        <h1>
          CO-CREATED WITH 100+
          WORLD RENOWNED
          HEALTH EXPERTS
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
        <StartButton outlined>Default</StartButton>
      </div>
    </div>
  )
}