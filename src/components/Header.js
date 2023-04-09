import React from 'react';
import './Header.css'
import PrimaryButtonSmall from './PrimaryButtonSmall.js';

import LogoSmallOnLightBackground from '../assets/LogoSmallOnLightBackground.svg';
import LogoLargeOnLightBackground from '../assets/LogoLargeOnLightBackground.svg';

const Header = ({ screenSize }) => {
  const logoUrl = screenSize < 667 ? LogoSmallOnLightBackground : LogoLargeOnLightBackground;
  console.log('Logo', screenSize)

  return (
    <div className="headerWrapper">
      <img className="logo" src={logoUrl} alt="Logo for Raise Studio" />
      <div className="navBar">
        <div className="navBarDesktop">
          <button type="button" className="desktopNavButton">Classes</button>
          <button type="button" className="desktopNavButton">Pricing</button>
          <button type="button" className="desktopNavButton">About Us</button>
          <button type="button" className="desktopNavButton">Our Studio</button>
        </div>
        <button type="button" className="signInButton">Sign In</button>
        <PrimaryButtonSmall className="primaryButtonSmall" buttonText="Sign Up!" />
        <img className="hamburgerMenu" src="../images/HamburgerMenu.svg" alt="Menu icon - click to expand navigation menu" />
      </div>
    </div>
  )
}

export default Header;

/* <img src={`${process.env.PUBLIC_URL}/logoLargeOnLightBackground.svg`} alt="Logo" /> */