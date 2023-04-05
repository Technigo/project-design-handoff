import React from 'react';
import MobileLogo from 'Images/MobileLogo.svg';
import Hamburger from 'Components/Hamburger';

const Navbar = () => {
  return (
    <section className="navbar">
      <img className="header-logo" src={MobileLogo} alt="Fit2Derby-logo" />
      <div className="menu">
        <Hamburger />
        <button type="button" className="login-button">Log in</button>
      </div>
    </section>

  )
};

export default Navbar;

