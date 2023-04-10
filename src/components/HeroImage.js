import React from 'react';
import './hero-image.css';

const HeroImage = () => {
  return (
    <div className="hero-container">
      <div className="big-text">Go beyond the limits</div>
      <img className="hero-image" src="./acro_hero.jpg" alt="Acrobatic" height="100%" />
    </div>
  );
};

export default HeroImage;