import React from 'react';
import { Navbar } from './Navbar/Navbar';
import BgVideo from '../images/hero-video.mp4';

export const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <video autoPlay muted loop id="hero-video">
        <source src={BgVideo} type="video/mp4" />
      </video>
    </div>
  );
};
