import React, { useState, useEffect } from 'react';
import logo from '../assets/logos/Vector.png';
import menuicon from '../assets/icons/Menu.png';
import searchicon from '../assets/icons/Search.png';
import './Header.css';

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const isDesktop = screenSize >= 1025;
  console.log('screenSize', screenSize)
  console.log('isDesktop', isDesktop)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isDesktop && (
        <div className="Header">
          <img src={logo} alt="Gracious moments logo" />
          <div className="icons">
            <img src={menuicon} alt="menu" className="menu" />
            <img src={searchicon} alt="search" className="search" />
          </div>
        </div>
      )}

      {isDesktop && (
        <div className="Header">
          <img src={logo} alt="Gracious moments logo" />
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

/*
import React, { useState, useEffect } from 'react';
import logo from '../assets/logos/Vector.png';
import menuicon from '../assets/icons/Menu.png';
import searchicon from '../assets/icons/Search.png';
import './Header.css';

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const isDesktop = screenSize >= 1025;
  console.log('screenSize', screenSize)
  console.log('isDesktop', isDesktop)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="Header">
      <img src={logo} alt="Gracious moments logo" />

      {!isDesktop && (
        <div className="icons">
          <img src={menuicon} alt="menu" className="menu" />
          <img src={searchicon} alt="search" className="search" />
        </div>
      )}

      {isDesktop && (
        <div className="navbar-text">
          <div className="menu-text">
            <h3>Classes</h3>
            <h3>About</h3>
            <h3>Contact</h3>
          </div>
          <h2 className="search-text">Search</h2>
        </div>
      )}
    </div>
  );
};

export default Header;

*/