// /////////////// IMPORT //////////////////////// //
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */

import React from 'react';
import './NavBar.css';

// /////////////// COMPONENT //////////////////////// //

// This is a simple component that represents a navigation bar.
// It contains a logo, a menu button, and a menu with two items.
// There is also an input element with the menu-toggle.
// The menu div displays the things in the menu.

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