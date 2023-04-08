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
        <p>We are on a mission to improve quality of life for humans by sticking to the healthier and more active habits by online support and services.</p>
      </div>

      <div className="About-us">
        <h2>About Us</h2>

        <a className="footer-menu-item" href="#services">Services</a>

        <a className="footer-menu-item" href="#coaches">Coaches</a>

        <a className="footer-menu-item" href="#club">Club</a>

        <a className="footer-menu-item" href="#FAQs">FAQs</a>

        <a className="footer-menu-item" href="#shop">Shop</a>

      </div>

      <div className="footer-page-inner-wrapper">
        <div className="contact-us-footer">
          <h2>Contact Us</h2>
          <h2>Email: hello@selfhealth.com</h2>
          <h2>Phone: +46(08)562 888 00 </h2>
        </div>

        <div className="icons-wrapper">
          <FacebookIcon style={{ display: 'flex', height: '2rem', fill: 'white', marginRight: '10px', marginTop: '5px' }} />
          <TwitterIcon style={{ height: '2rem', color: 'white', marginRight: '10px', marginTop: '5px' }} />
          <InstagramIcon style={{ height: '2rem', color: 'white', marginRight: '10px', marginTop: '5px' }} />
          <YoutubeIcon style={{ height: '2rem', color: 'white', marginRight: '10px', marginTop: '5px' }} />
          <PinterestIcon style={{ height: '2rem', color: 'white', marginRight: '10px', marginTop: '5px' }} />
        </div>

        <div className="policy-links-container">
          <a className="policy-links" href="#privacypolicy">Privacy Policy</a>
          <a className="policy-links" href="#terms">Terms of Service</a>
          <a className="policy-links" href="#code">Code of Conduct</a>
          <a className="policy-links" href="#refund">Refund Policy</a>
        </div>
      </div>
      <div>
        <hr className="white-line" />
        <a className="copyright" href="#copyright">Copyright 2023 SelfHEALth, All rights Reserved</a>
      </div>

    </div>

  )
}

export default FooterPage;