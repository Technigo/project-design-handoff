import React from 'react';
import '../css/Selection.css';

import PliewithwheightsbyYulissatagle from '../assets/Plie with wheights by Yulissatagle.png';

const Selection = () => {
  return (
    <div className="allClasses">
      <div className="classBarreBasic">
        <img className="barreBasicImage" src={PliewithwheightsbyYulissatagle} alt="Barre Basic class" />
        <h2>Barre Basic</h2>
        <p>Our Beginner’s Class will give you a solid foundation on your...</p>
        <button type="button" className="readMoreBtn">Read More</button>
      </div>
    </div>
  )
}

export default Selection;
