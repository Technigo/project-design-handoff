/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import MeditationIcon from '../assets/MeditationIcon.svg';
import SelfCareIcon from '../assets/SelfCareIcon.svg';
import VolunteeringIcon from '../assets/VolunteeringIcon.svg';
import './Benefits.css';

export const Benefits = () => {
  return (
    <div className="benefit-container">
      <h1 className="h1">Ready to prioritize your well-being?</h1>
      <div className="benefit-cards">
        <div className="self-care-card">
          <img
            src={SelfCareIcon}
            alt="your alt description"
            className="icon"
            style={{ fill: 'yellow' }}
          />
          <h2 className="h2">
            Whether you're looking to reduce stress, improve your flexibility or
            build strength - there's a yoga class for you.
          </h2>
        </div>
        <div className="meditation-card">
          <img
            src={MeditationIcon}
            alt="your alt description"
            className="icon"
          />
          <h2 className="h2">
            No matter where you are or what your schedule looks like, this
            wellness program is here for you
          </h2>
        </div>
        <div className="vol-card">
          <img
            src={VolunteeringIcon}
            alt="your alt description"
            className="icon"
          />
          <h2 className="h2">
            Get a nutrient-rich diet with recipes and meal plans for informed
            nutrition decisions from our experts.
          </h2>
        </div>
      </div>
    </div>
  );
};
