import React from 'react';
import '../index.css';

const Hero = ({ title, subtitle, buttonText, onClick, heroImage }) => {
  const heroBackground = {
    backgroundImage: `url(${heroImage})`
  };
  return (
    <div className="hero-container" style={heroBackground}>
      <div className="hero-content">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <button type="button" onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Hero;