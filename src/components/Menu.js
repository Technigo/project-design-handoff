import React from 'react';
import './menu.css';
import Logo from './Logo';

const Menu = () => {
  return (
    <nav className="top-nav">
      <Logo />
      <input id="menu-toggle" type="checkbox" />
      {/* eslint-disable-next-line */}
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
        {/* eslint-disable-next-line */}
        </label>
      <ul className="menu">
        <li><a href="url">Classes</a></li>
        <li><a href="url">Membership</a></li>
        <li><a href="url">About us</a></li>
        <li><a href="url">Contact</a></li>
        <li><a href="url">More</a></li>
      </ul>
    </nav>

  );
};

export default Menu;
