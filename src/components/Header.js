import React from 'react';
import '../css/Header.css'

import LogoSmallonLightBackground from '../assets/Logo Small on Light Background.svg';
import HamburgerMenu from '../assets/Hamburger Menu.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="navBar">
        <img className="logo" src={LogoSmallonLightBackground} alt="Raise Studio logo" />
        <div className="menu">
          <img className="hamburgerMenu" src={HamburgerMenu} alt="Menu icon - click to expand navigation menu" />
        </div>
      </div>
    </div>
  )
}

export default Header;