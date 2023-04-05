import React, { useState, useEffect } from 'react';
import logo from '../../assets/logos/Vector.png';
import logoMedium from '../../assets/logos/Vector-medium.png';
// import logoSmall from '../assets/logos/Vector-small.png';
import logoMini from '../../assets/logos/Vector-mini.png';
import menuicon from '../../assets/icons/Menu.png';
import searchicon from '../../assets/icons/Search.png';
import './Header.css';

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const isMobile = screenSize <= 640;
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
          {isMobile && (<img src={logoMini} alt="Gracious moments logo" />)}
          {!isMobile && (<img src={logoMedium} alt="Gracious moments logo" />)}
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
