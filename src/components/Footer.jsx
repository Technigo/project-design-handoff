import React from 'react';
import './footer.css';
import logo from '../icons/footer-logo.png';
import instagram from '../icons/instagram.png';
import tiktok from '../icons/tiktok.png';
import twitter from '../icons/twitter.png';

export const Footer = () => {
  return (
    <div className="footer-background">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h2 className="radiant-roots-text">Radiant roots</h2>
      </div>
      <ul className="footer-links">
        <li className="footer-link">Affiliate links</li>
        <li className="footer-link">FAQ</li>
        <li className="footer-link">Terms & Conditions</li>
        <li className="footer-link">Contact</li>
      </ul>
      <div className="social-media">
        <img src={instagram} alt="instagram" />
        <img src={tiktok} alt="tiktok" />
        <img src={twitter} alt="twitter" />
      </div>
    </div>
  )
}