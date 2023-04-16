import React from 'react';

import logoImage1 from '../assets/logo-small-light-background.svg'

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="wrapper-one">
        <img src={logoImage1} alt="logo" className="footer-logo" />
        <p className="footer-text">Vallgatan 6</p>
        <p className="footer-text">223 61, Lund</p>
      </div>
      <div className="wrapper-two">
        <h3 className="footer-title">Company</h3>
        <p className="footer-text">About us</p>
        <p className="footer-text">Contact us</p>
        <p className="footer-text">FAQs</p>
      </div>
      <div className="wrapper-three">
        <h3 className="footer-title">Classes</h3>
        <p className="footer-text">Pricing</p>
        <p className="footer-text">Schedule</p>
        <p className="footer-text">Instructors</p>
        <p className="footer-text">About Barre</p>
      </div>
    </section>
  );
}

export default Footer;
