import React, { useState, useEffect } from 'react';
import button from '../assets/icons/Buttons.png'
import logoSmall from '../assets/logos/EASYFITmobile.png'
import logoMedium from '../assets/logos/EASYFITdesktop.png'
import menuIcon from '../assets/icons/navigation.png'
import './Hero.css'

const Hero = () => {
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
          {isMobile && (<img src={logoSmall} alt="Easyfit logo" />)}
          {!isMobile && (<img src={logoMedium} alt="Easyfit logo" />)}
          <div className="icons">
            <img src={menuIcon} alt="menu" className="menu" />
            <img src={button} alt="search" className="search" />
          </div>
        </div>
      )}

      {isDesktop && (
        <div className="Header">
          <img src={logoMedium} alt="Easyfit logo" />
          <div className="menu-text">
            <p>Classes</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <p className="search-text">Search</p>
        </div>
      )}
    </>
  )
}

export default Hero;