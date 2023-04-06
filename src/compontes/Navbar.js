import React from 'react';

const Navbar = () => {
  return (
    <nav className="top-nav">
      <h1>FITEASY</h1>
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
      <button type="button">🍔</button>
    </nav>
  );
};

export default Navbar;
