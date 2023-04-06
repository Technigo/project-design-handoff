import React from 'react';
import Heroimg from '../../assets/images/Hero.png';
import Introduction from './Introduction.js';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="Background">
        <div className="block-color" />
        <div className="hero-img" style={{ backgroundImage: `url(${Heroimg})` }} />
      </div>
      <Introduction />
    </>
  );
};

export default Hero;

/*
import Heroimg from "/assets/Hero.png";

<div className="hero">
<img src={Heroimg} alt="woman doing aerial silk" />
</div>

const Hero = () => {
  return (
    <>
      <div className="Background">
        <div className="block-color" />
        <div className="hero-img" />
      </div>
      <Introduction />
    </>
  );
};

export default Hero;
*/
