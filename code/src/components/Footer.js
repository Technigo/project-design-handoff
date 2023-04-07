// import React, { useState, useEffect } from 'react';
import React from 'react';
import logo from '../assets/logos/Vector_white.png';
import logoMedium from '../assets/logos/Vector_white_medium.png';
import logoSmall from '../assets/logos/Vector_white_small.png';
import facebookicon from '../assets/icons/Facebook-svg.png';
import linkedinicon from '../assets/icons/LinkedIn-svg.png';
import instagramicon from '../assets/icons/Instagram-svg.png';
import twittericon from '../assets/icons/Twitter-svg.png';
import './Footer.css';

const Footer = ({ screenSize }) => {
  // const [screenSize, setScreenSize] = useState(window.innerWidth);
  const isMobile = screenSize <= 640;
  const isDesktop = screenSize >= 1025;

  /*
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  */

  return (
    <div className="Footer">
      {isMobile && (<img src={logoSmall} alt="" />)}
      {isDesktop && (<img src={logo} alt="" />)}
      {!isDesktop && !isMobile && (<img src={logoMedium} alt="" />)}
      <div className="linkfield">
        <p>Classes</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <hr />
      <div className="iconfield">
        <img src={instagramicon} alt="" />
        <img src={facebookicon} alt="" />
        <img src={linkedinicon} alt="" />
        <img src={twittericon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
