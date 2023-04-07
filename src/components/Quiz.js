import React from 'react';
import './Quiz.css';
import PrimaryButtonLarge from './PrimaryButtonLarge.js';

const Quiz = () => {
  return (
    <div className="quizWrapper">
      <h2 className="quizTitle">Find Your Barre</h2>
      <p className="quizIntro">Take Our Quiz to see which Class that Fits You!</p>
      <PrimaryButtonLarge className="primaryButtonLarge" buttonText="Barre Quiz" />
    </div>

  )
}

export default Quiz;