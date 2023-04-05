import React from 'react';
import '../index.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Services</a></li>
        <li><a href="#">Coaches</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Club</a></li>
      </ul>
      <div className="navbar-hamburger-menu">
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
    </nav>
  );
};

