import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="navWrapper">
      <img className="logo" src="./images/logo/LogoSmlLgt.svg" alt="Logo for Raise Studio" />
      <div className="navBar">
        <div className="navBarDesktop">
          <button type="button" className="desktopNavButton">Classes</button>
          <button type="button" className="desktopNavButton">Pricing</button>
          <button type="button" className="desktopNavButton">About Us</button>
          <button type="button" className="desktopNavButton">Our Studio</button>
        </div>
        <button className="signInBtn" type="button">Sign In</button>
        <button className="signUpBtn" type="button">Sign Up!</button>
        <div className="hamburger">
          <img className="hamburgerMenu" src="./images/icons_other/hamburger_menu.svg" alt="menu icon, click to expand menu" />
        </div>
      </div>
    </div>
  )
}