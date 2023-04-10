import React from 'react';
import logo from '../icons/logo.png';
import hamburger from '../icons/hamburger-menu.png';
import './Header.css';
import { Button } from './Button';

export const Header = () => {
  return (
    <div className="header-background">
      <div className="header-navbar">
        <img src={logo} alt="logo" />
        <img src={hamburger} alt="hamburger" />
      </div>
      <div className="header-content">
        <h1 className="header-title">The health revolution begins with you</h1>
        <h2 className="header-subtitle">Access 100+ yoga classes and receive a personalized nutrition plan - for holistic health anytime, anywhere.  Achieve optimal health and balance through our comprehensive wellness program.</h2>
        <Button>Start your 7-day free trial</Button>
      </div>
    </div>
  );
};