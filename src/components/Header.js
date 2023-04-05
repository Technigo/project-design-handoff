import React from 'react';

export const Header = () => {
  return (
    <section className="header">
      <img className="header-img" src="./images/joelvalve-eWAK-rslNn0-unsplash 2.jpg" alt="header" />
      <img className="header-logo" src="./icons/vectorwhite.svg" alt="logo" />
      <img className="header-menu" src="./icons/burger-menu.svg" alt="burger menu" />
      <div className="header-text">
        <h1>GO</h1>
        <h4>BEYOND</h4>
        <h3>THE</h3>
        <h2>LIMITS</h2>
      </div>
      <a href="mailto:acrogym@sportsorg.se">
        <img className="header-btn" src="./icons/header-btn.png" alt="button" />
      </a>
    </section>
  )
}