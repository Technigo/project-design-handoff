import React from 'react';
import '../css/Overview.css'

import Pictureframehalfpill from '../assets/Picture frame half pill.png';
import Blob1Mobile from '../assets/Blob 1 Mobile.svg';

const Overview = () => {
  return (
    <div className="overview">
      <div className="overviewContainer">
        <img className="overviewImage" src={Pictureframehalfpill} alt="Ribbons hanging from a barre" />
        <img className="vectorShape" src={Blob1Mobile} alt="Decorative element" />
        <div className="information">
          <h2>Come Sweat It Out at the Barre</h2>
          <p>Our Barre Classes are full-body workouts where we’ll pulse, plié, and sweat our way</p>
          <p>through a series of exercises.</p>
          <span>No dance experience required!</span>
        </div>
      </div>
    </div>
  )
}

export default Overview;