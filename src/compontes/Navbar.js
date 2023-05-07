import React from 'react';

import MenuIcon from '../assets/images/menu.svg';

const Navbar = () => {
  return (
    <nav className="top-nav">
      <h1 className="top-nav-heading">FITEASY</h1>
      <ul>
        <li>
          <a href="#">Benefits</a>
        </li>
        <li>
          <a href="#">Workouts</a>
        </li>
        <li>
          <a href="#">Activity</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
      </ul>
      <button type="button">Download app</button>

      <img src={MenuIcon} alt="menu-button" />
    </nav>
  );
};

export default Navbar;
