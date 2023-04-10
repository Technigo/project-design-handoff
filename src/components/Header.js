import React from 'react';
import '../css/Header.css';

export const Header = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <img src="/assets/Logo.svg" alt="Logo" />
      </div>
      <div className="navbar-links">
        <img src="/assets/Dads.svg" alt="Dads logo" />
        <img src="/assets/Moms.svg" alt="Moms logo" />
        <img src="/assets/MomsDads.svg" alt="Moms and dads logo" />
        <img src="/assets/Food.svg" alt="Food logo" />
      </div>
      <div className="hamburger-right">
        <img src="/assets/hamburger.svg" alt="Hamburger menu" />
      </div>
    </nav>
  );
}