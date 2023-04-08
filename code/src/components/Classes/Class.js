import React from 'react';

import './Class.css';

const Class = ({ screenSize, img, level, description }) => {
  console.log(screenSize);
  console.log(level)
  console.log(description)
  return (
    <div className="class-card">
      <div className="class-img">
        <img src={img} alt="" />
      </div>
      <div className="class-text">
        <h2>{level}</h2>
        <p>{description}</p>
        <button className="textbutton" type="button">See more</button>
      </div>
    </div>
  );
};

export default Class;
