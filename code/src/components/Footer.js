import React from 'react'
import LogoMobile from '../images/Vector (1).svg'
import LogoTablet from '../images/Vector (2).svg'
import LogoDesktop from '../images/Vector (3).svg'
import Twitter from '../images/twitter.svg'
import Linkedin from '../images/linkedin.svg'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'

import './Footer.css';

const Footer = ({ screenSize }) => {
  const isMobile = screenSize <= 640;
  const isDesktop = screenSize >= 1025;
  return (
    <div className="footer-container">
      {isMobile && (<img src={LogoMobile} alt="" />)}
      {isDesktop && (<img src={LogoDesktop} alt="" />)}
      {!isDesktop && !isMobile && (<img src={LogoTablet} alt="" />)}
      <div className="linkfield">
        <p>Classes</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <hr />
      <div className="icons">
        <img src={Instagram} alt="Instagram icon" />
        <img src={Facebook} alt="Facebook icon" />
        <img src={Linkedin} alt="Linkedin icon" />
        <img src={Twitter} alt="Twitter icon" />
      </div>
    </div>
  );
}

export default Footer;