import React from 'react';
import Logo from './images/VectorLogo.svg'
import Mobile from './Mobile';
import Navigation from './Navigation';
import './css/header.css'
import Hamburger from './css/hamburger.module.css'

export const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="Logo" className="logo" />
      <div>
        <nav className={Hamburger.NavBar}>
          <Mobile />
          <Navigation />
        </nav>
      </div>
    </div>
  );
}

