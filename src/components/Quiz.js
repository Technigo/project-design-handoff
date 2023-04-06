import React from 'react';
import './Quiz.css';

const Quiz = () => {
  return (
    <div className="quizWrapper">
      <h2 className="quizTitle">Find Your Barre</h2>
      <p className="quizIntro">Take Our Quiz to see which Class that Fits You!</p>
      <button type="button" className="barreQuizButton">Barre Quiz</button>
    </div>

  )
}

export default Quiz;