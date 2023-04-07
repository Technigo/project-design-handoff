/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <div className="navbar-menu__hamburger" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
        <ul className={`navbar-menu__list ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#">Services</a></li>
          <li><a href="#">Coaches</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
