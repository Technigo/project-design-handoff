import React from 'react';
import { Button } from '../button/ButtonCss'
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="intro-box">
      <h1>See New Heights with Aerial Silks</h1>
      <h2>
        Unleash your inner acrobat with our exhilarating full-body workout.
      </h2>
      <Button>Sign up today</Button>
    </div>
  );
};

export default Introduction;