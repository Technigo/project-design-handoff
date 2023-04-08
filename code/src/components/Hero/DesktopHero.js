import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Button } from '../Button/Button';
import { StyledDesktopHero } from './DesktopHero.styled';
import BgVideo from '../images/hero-video.mp4';

export const DesktopHero = () => {
  return (
    <StyledDesktopHero>
      <div className="hero">
        <Navbar />
        <video autoPlay muted loop id="hero-video">
          <source src={BgVideo} type="video/mp4" />
        </video>
        <div className="hero-text">
          Outdoor <br /> Workout
        </div>
        <div className="hero-btn">
          <Button>Join us today!</Button>
        </div>
      </div>
    </StyledDesktopHero>
  );
};
