import React from 'react';

export const Hero = () => {
  return (
    <div className="main-content-container">
      <div className="main-text">
        <p>YOUR</p>
        <p>WORKOUT</p>
        <p>YOUR</p>
        <p>TIME</p>
        <p>TOGETHER</p>
        <p> Find the activity that suits you and buddy.
              No matter the amount of time you have
              to spare, we have you covered.
              Get started at your personal level.
        </p>
      </div>
      <div className="buttons-container">
        <StartButton cta>Get started</StartButton>
        <StartButton outlined>Default</StartButton>
      </div>
    </div>
  )
}