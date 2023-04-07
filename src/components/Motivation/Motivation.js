import React from 'react';
import './Motivation.css'

export const Motivation = () => {
  return (
    <div className="motivation">
      <h1>How we get you in shape:</h1>
      <div className="motivation-columns">
        <div className="motivation-column">
          <img src="/images/ave-calvar-opxOfzge2Tg-unsplash 1.png" alt="motivation 1" />
          <h2>Keep at it - even on the worse days</h2>
          <p>Read more about our sciene-backed hacks</p>
        </div>
        <div className="motivation-column">
          <img src="/images/omid-armin-89poi2aVXX0-unsplash 1.png" alt="motivation 2" />
          <h2>Do it when ever  where ever you want</h2>
          <p>With our science-proofed hacks you will still not stay behind</p>
        </div>
        <div className="motivation-column">
          <img src="/images/group2.png" alt="motivation 3" />
          <h2>Push it but with caution</h2>
          <p>Our experienced team knows everything about Rectus stasis, C-section and co</p>
        </div>
      </div>
      <div className="motivation-bottom">
        <p>Choose your program</p>
        <img src="/images/Read-more.svg" alt="read more" />
      </div>
    </div>
  );
}