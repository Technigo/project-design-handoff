import React from 'react';
// import Heroimg from "/assets/Hero.png";
import Introduction from './Introduction.js';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero-img" />
      <div className="block-color" />
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
*/
