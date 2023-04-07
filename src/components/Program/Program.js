import React from 'react';
import './Program.css'

export const Program = () => {
  return (
    <div className="program">
      <h1>Find your program</h1>
      <div className="program-images">
        <div className="program-image">
          <img src="/images/Frame1.png" alt="program-1" />
          <p>Active in Pregnancy</p>
        </div>
        <div className="program-image">
          <img src="/images/Frame2.png" alt="program-2" />
          <p>Getting fit for your child</p>
        </div>
        <div className="program-image">
          <img src="/images/Frame3.png" alt="program-3" />
          <p>Postnatal recovery</p>
        </div>
        <div className="program-image">
          <img src="/images/Frame4.png" alt="program-4" />
          <p>Stay strong but soft</p>
        </div>
        <div className="program-image">
          <img src="/images/Frame5.png" alt="program-5" />
          <p>Busy but fit</p>
        </div>
        <div className="program-image">
          <img src="/images/Frame6.png" alt="program-6" />
          <p>Start running, again</p>
        </div>
      </div>
      <div className="program-button">
        <button type="submit">Load more</button>
      </div>
    </div>
  );
}