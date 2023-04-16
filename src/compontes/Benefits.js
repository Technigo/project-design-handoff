/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const cards = [
  {
    id: 1,
    titleText: 'Apartment friendly workouts',
    bodyText:
      'No matter where you are or the size of you space, we got a class for you.'
  },
  {
    id: 2,
    titleText: 'Structured workout programs',
    bodyText:
      'We’ve got different programs for all levels & result to suit everyone.'
  },
  {
    id: 3,
    titleText: 'Designed to keep you focused',
    bodyText: 'Track your activity & earn badges for completing workouts.'
  },
  {
    id: 4,
    titleText: 'Healthy recipies & more',
    bodyText: 'Search among our recipies & get inspired for a healthy inside.'
  }
];

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="title-container">
        <h3>BENEFITS</h3>
        <h2>Healthy doesn’t have to be hard. We make it easy</h2>
      </div>
      <div className="card-container">
        {cards.map((card, key) => (
          <div key={key} className="card">
            <div className="card-text">
              <h2>{card.titleText}</h2>
              <p>{card.bodyText}</p>
            </div>
          </div>
        ))}
      </div>
      <button type="button">Download App</button>
    </div>
  );
};

export default Benefits;
