/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import jammercard from 'Images/jammercard.png';
import frenesocard from 'Images/frenesocard.png';
import pivotcard from 'Images/pivotcard.png';
import blockercard from 'Images/blockercard.png';

import ProgramDeck from 'Images/ProgramDeck.png'

const PickYourPosition = () => {
  return (
    <section className="position-section">
      <h3 className="position-header">PICK YOUR POSITION</h3>

      <div className="about-box">
        <h4 className="about-header">ABOUT THE PROGRAMS</h4>
        <p>
          <span className="bold">Pick a position to access programs tailored
          to your favoured role on the track.
          </span> Programs vary in focus,
          such as more endurance for jammers and strength for blockers.
          All programs prioritize safety and success on and off the track.
        </p>
      </div>

      <div className="about-text2">
        <p><span className="bold">Referee, NSO or new to the game? </span> Try FRENeSO.
          A well-rounded program to prevent injuries and prepare you for the track's intensity.
        </p>
      </div>

      <div className="deck-header">
        <img src={ProgramDeck} alt="deck of cards" />
        <p className="sub-header">Check out our deck of program cards below!</p>
      </div>

      <span className="cards-span">
        <img src={pivotcard} alt="Pivot" />
        <img src={jammercard} alt="Jammer" />
        <img src={blockercard} alt="Blocker" />
        <img src={frenesocard} alt="Freneso" />
      </span>
    </section>
  )
};

export default PickYourPosition;