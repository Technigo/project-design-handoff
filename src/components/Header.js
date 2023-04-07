/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setHidden(true);
    setMenuVisible(true);
  }

  const handleClose = () => {
    setHidden(false);
    setMenuVisible(false);
  }
  return (
    <section className="header">
      <img className="header-img" src="./images/joelvalve-eWAK-rslNn0-unsplash 2.jpg" alt="header" />
      <img className="header-logo" src="./icons/vectorwhite.svg" alt="logo" />
      <nav>
        {hidden ? null : <button
          type="button"
          className="burger-btn"
          onClick={handleClick} />}
        {menuVisible ? (<div className="menu">
          <ul>
            <li>Classes</li>
            <li className="green-bullet">Membership</li>
            <li>About us</li>
            <li className="green-bullet">Contact</li>
            <li>More</li>
          </ul>
          <button
            type="button"
            className="close-btn"
            onClick={handleClose} />
        </div>) : null}
      </nav>
      <div className="header-text">
        <h1>GO</h1>
        <h4>BEYOND</h4>
        <h3>THE</h3>
        <h2>LIMITS</h2>
      </div>
      <a href="mailto:acrogym@sportsorg.se">
        <img className="header-btn" src="./icons/header-btn.png" alt="button" />
      </a>
      <p>Physical activity is vital for the body. Learn how to master unique skills where you’ll develop strength, confidence and you'll defy yourself.</p>
    </section>
  )
}