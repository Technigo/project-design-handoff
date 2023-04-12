import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <img className="logo" src={`${process.env.PUBLIC_URL}/img/Logo .png`} alt="logo" />
      </div>
      <div>
        <h4>FOR A HEALTHIER AND FITTER PLANET</h4>
      </div>

      <div className="aboutus-column">
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Coaches</li>
          <li>Club</li>
          <li>FAQs</li>
          <li>Shop</li>
        </ul>
      </div>

      <div className="icons-column">

        <div className="contactus">
          <div> Contact Us </div>
          <div> Email: hello@selfhealth.com  </div>
          <div> Phone: +46 (08) 562 888 00  </div>
        </div>

        <div className="socials">
          <img className="social1" src={`${process.env.PUBLIC_URL}/img/Facebook.png`} alt="social" />
          <img className="social" src={`${process.env.PUBLIC_URL}/img/Twitter.png`} alt="social" />
          <img className="social" src={`${process.env.PUBLIC_URL}/img/Instagram.png`} alt="social" />
          <img className="social" src={`${process.env.PUBLIC_URL}/img/Youtube.png`} alt="social" />
          <img className="social4" src={`${process.env.PUBLIC_URL}/img/Pinterest.png`} alt="social" />
        </div>

        <div className="policy-list">
          <ul>
            <li>Privacy Policy </li>
            <li> Terms of Service  </li>
            <li> Code of Conduct </li>
            <li> Refund Policy</li>
          </ul>
        </div>

      </div>

      <div className="copyrigth">
        <p5>Copyright 2023 SelfHEALth, All rights Reserved </p5>
      </div>

    </div>
  );
};

export default Footer;
