import React from 'react';

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo-and-title">
          <img alt="logo" className="logo" src="./assets/Union.svg" />
          <h1>fit parent</h1>
        </div>
        <div className="nav-links">
          <img alt="nav-img" className="nav-img" src="./assets/Dads.svg" />
          <img alt="nav-img" className="nav-img" src="./assets/Moms.svg" />
          <img alt="nav-img" className="nav-img" src="./assets/Moms & Dads.svg" />
          <img alt="nav-img" className="nav-img" src="./assets/Food.svg" />
        </div>
        <div className="hamburger">
          <img alt="hamburger-menu" className="hamburger-menu" src="./assets/Hamburger.svg" />
        </div>
      </div>
    </nav>
  )
}