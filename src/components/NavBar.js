import React from 'react';

import logoImage1 from '../assets/logo-small-light-background.svg'
import hamburgerImage from '../assets/hamburger-menu.svg'

const NavBar = () => {
  return (
    <section className="navbar-container">
      <img src={logoImage1} alt="logo" className="nav-logo" />
      <img src={hamburgerImage} alt="hamburger menu" className="hamburger-menu" />
    </section>
  );
}

export default NavBar;