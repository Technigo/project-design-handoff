// /////////////// IMPORT //////////////////////// //
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */

import React from 'react';
import './NavBar.css';

// /////////////// COMPONENT //////////////////////// //

export const NavBar = () => {
  return (
    <section className="top-nav">
      <div className="logo-picture">
        <img src="./Pictures/Frame39.svg" alt="logo" />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="menu">
        <li>GIFT CARDS</li>
        <li>JOIN US</li>
      </ul>
    </section>
  )
}