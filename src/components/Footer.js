/* eslint-disable */

import React from 'react';
import '../css/Footer.css';

import LogoSmallonLightBackground from '../assets/Logo Small on Light Background.svg';
import FacebookIcon from '../assets/Facebook.svg'
import InstagramIcon from '../assets/InstagramIcon.svg'
import TikTokIcon from '../assets/TikTokIcon.svg'

const Footer = () => {
  return (
    <div className="footerContainer">
      <img className="logoFooter" src={LogoSmallonLightBackground} alt="Logo for Raise Studio" />
      <p>Vallgatan 6</p>
      <p>223 61, Lund</p>
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
        <p className="followUs">Follow Us</p>
      </div>
      <div className="iconsContainer">
        <img className="facebook" src={FacebookIcon} alt="Facebook" />
        <img className="instagram" src={InstagramIcon} alt="Instagram" />
        <img className="tikTok" src={TikTokIcon} alt="TikTok" />
      </div>
    </div>
  )
}

export default Footer;