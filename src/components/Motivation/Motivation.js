import React from 'react';
import './Motivation.css'

export const Motivation = () => {
  return (
    <div className="motivation">
      <h1>How we get you in shape:</h1>
      <div className="motivation-columns">
        <div className="motivation-column">
          <img src="/images/ave-calvar-opxOfzge2Tg-unsplash 1.png" alt="motivation 1" />
          <p>Here is some text below the first image.</p>
        </div>
        <div className="motivation-column">
          <img src="/images/omid-armin-89poi2aVXX0-unsplash 1.png" alt="motivation 2" />
          <p>Here is some text below the second image.</p>
        </div>
        <div className="motivation-column">
          <img src="/images/group2.png" alt="motivation 3" />
          <p>Here is some text below the third image.</p>
        </div>
      </div>
    </div>
  );
}