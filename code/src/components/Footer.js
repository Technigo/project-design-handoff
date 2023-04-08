/* eslint-disable max-len */
import React from 'react';
import './Footer.css';
import TwitterIcon from './NamedIcons/Twitter';
import FacebookIcon from './NamedIcons/Facebook';
import InstagramIcon from './NamedIcons/Instagram';
import YoutubeIcon from './NamedIcons/Youtube';
import PinterestIcon from './NamedIcons/Pinterest';

const FooterPage = () => {
  return (
    <div className="footer-page-outer-wrapper">

      <div className="logo-wrapper">
        <img className="logo" src="../assets/Logo.svg" alt="Self Health Logo" id="footer-logo" />
        <h3>FOR A HEALTHEIR AND FITTER PLANET</h3>
      </div>

      <div className="About-us-wrapper">
        <h2>About Us</h2>
        <ul>
          <li>
            <a className="footer-menu-item" href="#services">Services</a>
          </li>
          <li>
            <a className="footer-menu-item" href="#coaches">Coaches</a>
          </li>
          <li>
            <a className="footer-menu-item" href="#club">Club</a>
          </li>
          <li>
            <a className="footer-menu-item" href="#FAQs">FAQs</a>
          </li>
          <li>
            <a className="footer-menu-item" href="#shop">Shop</a>
          </li>
        </ul>
      </div>

      <div className="contact-us-footer">
        <h2>Email: hello@selfhealth.com</h2>
        <h2>Phone: +46(08)562 888 00 </h2>
      </div>

      <div className="icons-wrapper">
        <FacebookIcon className="icon" />
        <TwitterIcon className="icon" />
        <InstagramIcon className="icon" />
        <YoutubeIcon className="icon" />
        <PinterestIcon className="icon" />
      </div>

      <div className="policy-links-container">
        <ul>
          <li>
            <a className="policy-links" href="#privacypolicy">Privacy Policy</a>
          </li>
          <li>
            <a className="policy-links" href="#terms">Terms of Service</a>
          </li>
          <li>
            <a className="policy-links" href="#code">Code of Conduct</a>
          </li>
          <li>
            <a className="policy-links" href="#refund">Refund Policy</a>
          </li>
        </ul>
      </div>

      <div>
        <hr className="white-line" />
        <a className="copyright" href="#copyright">Copyright 2023 SelfHEALth, All rights Reserved</a>
      </div>

    </div>

  )
}

export default FooterPage;