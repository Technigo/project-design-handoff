import React from 'react';
import Logo from './images/VectorLogo.svg'
import Mobile from './Mobile';
import Navigation from './Navigation';
import './css/header.css'
import Classes from './css/classes.module.css'

export const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="Logo" className="logo" />
      <div>
        <nav className={Classes.NavBar}>
          <Mobile />
          <Navigation />
        </nav>
      </div>
    </div>
  );
}

