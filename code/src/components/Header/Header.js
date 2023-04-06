/* eslint-disable max-len */
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
  const [isHovering, setIsHovering] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  /*
  const handleSearchSlide = () => {
    if (setIsClicked) {
      setIsClicked(true);
    }
    else {
      setIsClicked(false);
    }
  }
  */

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const iconClass = `searchicon ${!isHovering ? 'hidden' : ''}`;

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
          <div className="searchfield" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button type="button">
              <img src={searchicon} alt="search" className={iconClass} />
              {/* <input className="searchInputBar" type="text" name="" placeholder="Searchbar" /> */}
              <p className="search-text">Search</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

/*
<div className="searchfield" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovering && (<img src={searchicon} alt="search" className="search" />)}
            <p className="search-text">Search</p>
          </div>
          */
