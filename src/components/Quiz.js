import React from 'react';

import '../css/Quiz.css';

const Quiz = () => {
  return (
    <div className="quizContainer">
      <h2 className="quizTitle">Find Your Barre</h2>
      <p className="quizIntro">Take Our Quiz to see which Class that Fits You!</p>
      <button type="button" className="quizBtn">Barre Quiz</button>
    </div>
  )
}

export default Quiz;
