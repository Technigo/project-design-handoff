import React from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import { Button } from './Button';
import './Hero.css';

export const Hero = () => {
  return (
    <div className="hero-background">
      <div className="hero-logo">
        <img src={logo} alt="logo" />
        <img src={menu} alt="logo" />
      </div>
      <div className="hero-text">
        <h1>The health revolution begins with you</h1>
        <h2>
          Access 100+ yoga classes and receive a personalized nutrition plan -
          for holistic health anytime, anywhere. Achieve optimal health and
          balance through our comprehensive wellness program.
        </h2>
        <Button>Start your 7-day FREE trial</Button>
      </div>
    </div>
  );
};
