import React from 'react';
import '../footer.css';
import logo from '../images/logo.png';
import facebookIcon from '../images/facebook.png';
import twitterIcon from '../images/twitter-sign.png';
import instagramIcon from '../images/instagram.png';
import youtubeIcon from '../images/youtube.png';
import pinterestIcon from '../images/pinterest.png';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#D7CBFF' }}>
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <p className="logo-text">FOR A HEALTHIER AND FITTER PLANET</p>
        </div>
        <div className="links-container">
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Coaches</a></li>
            <li><a href="#">Club</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
        <div className="social-icons-container">
          <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
          <a href="#"><img src={pinterestIcon} alt="Pinterest" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
