import React from 'react';
import './Footer.css';

import LogoSmallOnLightBackground from '../assets/LogoSmallOnLightBackground.svg';
import LogoLargeOnLightBackground from '../assets/LogoLargeOnLightBackground.svg';

const Footer = ({ screenSize }) => {
  const logoUrl = screenSize < 667 ? LogoSmallOnLightBackground : LogoLargeOnLightBackground;
  console.log('Logo for footer', screenSize)

  return (
    <div className="footerWrapper">
      <div className="companyInfo">
        <img className="logoFooter" src={logoUrl} alt="Logo for Raise Studio" />
        <p>Vallgatan 6</p>
        <p>223 61, Lund</p>
      </div>
      <div className="company">
        <h4>Company</h4>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Our Studio</p>
        <p>FAQs</p>
      </div>
      <div className="classes">
        <h4>Classes</h4>
        <p>Pricing</p>
        <p>Schedule</p>
        <p>Instructors</p>
        <p>About Barre</p>
      </div>
      <div className="iconWrapper">
        <p className="followUs">Follow Us</p>
        <img className="facebook" src="../images/Facebook.svg" alt="Facebook" />
        <img className="instagram" src="../images/Instagram.svg" alt="Instagram" />
        <img className="tikTok" src="../images/TikTok.svg" alt="TikTok" />
      </div>
    </div>
  )
}

export default Footer;