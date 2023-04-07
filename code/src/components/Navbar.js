import React, { useState } from 'react';
import '../index.css'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      toggleMenu();
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
        <li><a href="#">Services</a></li>
        <li><a href="#">Coaches</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Club</a></li>
      </ul>
      <div
        className="navbar-hamburger-menu"
        role="button"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        tabIndex="0">
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
    </nav>
  );
};

