import React from 'react';

import './Class.css';

const ClassCard = ({ img, level, description }) => {
  console.log(level)
  console.log(description)
  return (
    <div className="class-card-carousel">
      <img src={img} alt="" />
      <div className="class-text-carousel">
        <h3 className="h3-carousel">{level}</h3>
        <p className="p-carousel">{description}</p>
        <button className="textbutton" type="button">See more</button>
      </div>
    </div>
  );
};

export default ClassCard;
