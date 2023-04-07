import React from 'react';
import './Quiz.css';

const Quiz = () => {
  return (
    <div className="quiz-container">
      <h5 className="quizheader">Find Your Barre</h5>
      <p>Take Our Quiz to see which Class that Fits You!</p>
      <button className="quizBtn" type="button">Barre Quiz</button>
    </div>
  )
}

export default Quiz