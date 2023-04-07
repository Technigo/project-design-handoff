import React from 'react';

import './Class.css';

const ClassCard = ({ img, level, description }) => {
  console.log(level)
  console.log(description)
  return (
    <div className="class-card-carousel">
      <img src={img} alt="" />
      <div className="class-text">
        <h2>{level}</h2>
        <p>{description}</p>
        <button className="textbutton" type="button">See more</button>
      </div>
    </div>
  );
};

export default ClassCard;
