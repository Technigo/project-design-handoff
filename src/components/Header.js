import React from 'react';
import LogoSmallOnLightBackground from '../assets/LogoSmallOnLightBackground.svg';
import LogoLargeOnLightBackground from '../assets/LogoLargeOnLightBackground.svg';

const Header = () => {

  return (
    <div className="header">
      <div className="navBar">
        <img className="logo" src={logoUrl} alt="Raise Studio logo" />
        <div className="menu">
          <span>Classes</span>
          <span>Pricing</span>
          <span>About us</span>
          <span>Our studio</span>
          <button type="button" className="signInBtn">Sign in</button>
          <button type="button" className="signUpBtn">Sign up!</button>
          <img className="hamburgerMenu" src="../assets/HamburgerMenu.svg" alt="Menu icon - click to expand navigation menu" />
        </div>
      </div>
    </div>
  )
}

export default Header;