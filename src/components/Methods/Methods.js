import React from 'react';
import './Methods.css'

export const Methods = () => {
  return (
    <div className="methods-container">
      <div className="method">
        <img src="/path/to/image1.png" alt="yoga" />
        <p>Method 1 description</p>
      </div>
      <div className="method">
        <img src="/path/to/image2.png" alt="fitness" />
        <p>Method 2 description</p>
      </div>
      <div className="method">
        <img src="/path/to/image3.png" alt="pilates" />
        <p>Method 3 description</p>
      </div>
      <div className="method">
        <img src="/path/to/image4.png" alt="running" />
        <p>Method 4 description</p>
      </div>
    </div>
  );
}