import React from 'react';

import './Class.css';

const Class = ({ img, level, description }) => {
  return (
    <div className="class-card">
      <div className="class-img">
        <img src={img} alt="woman doing aerial silk" />
      </div>
      <div className="class-text">
        <h2>{level}</h2>
        <p>{description}</p>
        <button className="textbutton" type="button" aria-label="button to read more about the class">See more</button>
      </div>
    </div>
  );
};

export default Class;
