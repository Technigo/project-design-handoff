import React from 'react';
import Navbar from './Navbar';
import appleLogo from '../assets/images/apple-tv-logo.svg';
import rukuLogo from '../assets/images/ruku-logo.svg';
import chromecastLogo from '../assets/images/chromecast-logo.svg';

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="header-content">
        <p className="title">FEEL THE DIFFERENCE</p>
        <h1>Healthy made easy</h1>
        <p>
          Join us now and try out our 5-30 min workouts that will get you
          motivated.
        </p>
        <div className="header-button-container">
          <button type="button" className="download-button">
            Download App
          </button>
          <button type="button" className="create -button">
            Create Account
          </button>
        </div>
        <div className="compatible-container">
          <h3>Compatible with</h3>
          <div className="logo-container">
            <img src={appleLogo} alt="img" />
            <img src={rukuLogo} alt="img" />
            <img src={chromecastLogo} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
