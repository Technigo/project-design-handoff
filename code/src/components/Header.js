import React, { useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import menuicon from '../images/menu.svg';
import searchicon from '../images/searchglass.svg';
import './Header.css';

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const isDesktop = screenSize >= 1025;

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isDesktop && (
        <div className="Header">
          <img className="logo-img" src={logo} alt="Gracious moments logo" />
          <div className="icons">
            <img src={menuicon} alt="menu" className="menu" />
            <img src={searchicon} alt="search" className="search" />
          </div>
        </div>
      )}

      {isDesktop && (
        <div className="Header">
          <img className="logo-img" src={logo} alt="Gracious moments logo" />
          <div className="menu-text">
            <p>Classes</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <p className="search-text">Search</p>
        </div>
      )}
    </>
  );
};

export default Header;