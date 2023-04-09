import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { StyledHero } from './Hero.styled';
import BgVideo from '../images/hero-video.mp4';
import MobileImg from '../images/hero-image.jpg';

export const Hero = () => {
  return (
    <StyledHero>
      <div className="hero">
        <Navbar />
        <video autoPlay muted loop id="hero-video">
          <source src={BgVideo} type="video/mp4" />
        </video>
        <img id="hero-image" src={MobileImg} alt="mobile" />
        <div className="hero-text">
          Outdoor <br /> Workout
        </div>
        <button type="button" className="hero-btn">
          Join us today!
        </button>
      </div>
    </StyledHero>
  );
};
