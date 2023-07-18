import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <section className="footerWrapper">
      <div className="companyInfo">
        <img className="logoFooter" src="./images/logo/LogoSmlLgt.svg" alt="Logo for Raise Studio" />
        <p>Vallgatan 6</p>
        <p>223 61, Lund</p>
      </div>
      <div className="company">
        <h5>Company</h5>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Our Studio</p>
        <p>FAQs</p>
      </div>
      <div className="classes">
        <h5>Classes</h5>
        <p>Pricing</p>
        <p>Schedule</p>
        <p>Instructors</p>
        <p>About Barre</p>
      </div>
      <div className="iconWrapper">
        <p className="followUs">Follow Us</p>
        <div className="smIcons">
          <img className="sm-icon" src="./images/icons_social/_Facebook.svg" alt="Facebook logo" />
          <img className="sm-icon" src="./images/icons_social/_Instagram.svg" alt="Instagram logo" />
          <img className="sm-icon" src="./images/icons_social/_Tiktok.svg" alt="TikTok logo" />
        </div>
      </div>
    </section>
  );
}