import React from 'react';
import './NavigationBar.css'

export const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-logo">
          <img src="/images/navbar-logo.png" alt="Logo" />
        </div>
        <div className="navbar-images">
          <img src="/images/dads.png" alt="dads logo" />
          <img src="/images/moms.png" alt="moms logo" />
          <img src="/images/moms-dads.png" alt="moms and dads logo" />
          <img src="/images/food.png" alt="food logo" />
        </div>
        <div className="navbar-logo-right">
          <img src="/images/hamburger.png" alt="Hamburger menu" />
        </div>
      </div>
    </nav>
  );
}