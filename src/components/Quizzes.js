import React from 'react';
import './Quizzes.css';

export const Quizzes = () => {
  return (
    <div className="quiz-container">
      <h5 className="quizheader">Find Your Barre</h5>
      <p>Take Our Quiz to see which Class that Fits You!</p>
      <button className="quizBtn" type="button">Barre Quiz</button>
    </div>
  );
}