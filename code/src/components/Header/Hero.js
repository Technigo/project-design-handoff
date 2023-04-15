import React from 'react';
import Heroimg from '../../assets/images/Hero.png';
import Introduction from './Introduction.js';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="Background">
        <div className="block-color" />
        <div
          className="hero-img"
          alt="woman doing aerial silk"
          aria-label="background image of woman doing aerial silk"
          style={{ backgroundImage: `url(${Heroimg})` }} />
      </div>
      <Introduction />
    </>
  );
};

export default Hero;
