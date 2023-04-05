import React from 'react';

import Logo from './images/Vector.svg'

import './css/header.css'

export const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className="active" href="#about">About</a></li>
        </ul>
      </div>
    </div>
  );
}

// A header section with a logotype and navigation