// import React, { useState, useEffect } from 'react';
import React from 'react';
import Logo from '../assets/logo/Vector-white-L.png'
import LogoMedium from '../assets/logo/Vector-white-m.png'
import LogoMini from '../assets/logo/Vector-white-mini.png'
import InstagramIcon from '../assets/icons/instaIcon.png'
import FacebookIcon from '../assets/icons/FBicon.png'
import LinkedInIcon from '../assets/icons/LinkedIn-icon.png'
import TwitterIcon from '../assets/icons/twitter-icon.png'
import './Footer.css';

const Footer = ({ screenSize }) => {
  // const [screenSize, setScreenSize] = useState(window.innerWidth);
  const isMobile = screenSize <= 640;
  const isDesktop = screenSize >= 1025;

  return (
    <div className="footer">
      {isMobile && (<img src={LogoMini} alt="" />)}
      {isDesktop && (<img src={Logo} alt="" />)}
      {!isDesktop && !isMobile && (<img src={LogoMedium} alt="" />)}
      <div className="linkfield">
        <p>Classes</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <hr />
      <div className="iconfield">
        <img src={InstagramIcon} alt="" />
        <img src={FacebookIcon} alt="" />
        <img src={LinkedInIcon} alt="" />
        <img src={TwitterIcon} alt="" />
      </div>
    </div>
  );
};

export default Footer;