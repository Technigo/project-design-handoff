import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <header>
      <section className="top-nav">
        <div id="logo"><img src="./logo.svg" alt="logo" /> </div>
        <div className="photo_and_text">
          <div className="big-text">GO beyond the limits</div>
          <img className="hero-image" src="./acro_hero.jpg" alt="Acrobatic" height="100%" />
        </div>
        <input id="menu-toggle" type="checkbox" />
        {/* eslint-disable-next-line */}
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
        </label>
        <ul className="menu">
          <li><a href="url">Classes</a></li>
          <li><a href="url">Membership</a></li>
          <li><a href="url">About us</a></li>
          <li><a href="url">Contact</a></li>
          <li><a href="url">More</a></li>
        </ul>

      </section>
    </header>
  );
};

export default Menu