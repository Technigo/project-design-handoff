import React from 'react';

const ExerciseCards = ({ exercise, text, photo, alt }) => {
  return (
    <div>
      <img src={photo} alt={alt} />
      <h3>{exercise}</h3>
      <p>{text}</p>
    </div>
  )
};

export default ExerciseCards;