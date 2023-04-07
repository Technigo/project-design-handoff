import React from 'react';

const cards = [
  {
    id: 1,
    imgSrc: '../assets/images/swanposition.jpg',
    titleText: 'Apartment friendly workouts',
    bodyText:
      'No matter where you are or the size of you space, we got a class for you.'
  },
  {
    id: 2,
    imgSrc: '',
    titleText: 'Structured workout programs',
    bodyText:
      'We’ve got different programs for all levels & result to suit everyone.'
  },
  {
    id: 3,
    imgSrc: '',
    titleText: 'Designed to keep you focused',
    bodyText: 'Track your activity & earn badges for completing workouts.'
  },
  {
    id: 4,
    imgSrc: '',
    titleText: 'Healthy recipies & more',
    bodyText: 'Search among our recipies & get inspired for a healthy inside.'
  }
];

const Benefits = () => {
  return (
    <div className="benefits">
      <div>
        <h3>BENEFITS</h3>
        <h2>Healthy doesn’t have to be hard. We make it easy</h2>
      </div>
      <div className="card-container">
        {cards.map((card) => (
          <div key={cards.id} className="card">
            <img alt={card.titleText} src={card.imgSrc} />
            <h2>{card.titleText}</h2>
            <p>{card.bodyText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
