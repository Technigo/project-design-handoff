import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="logo">
        <img className="logo" src="./images/logo/LogoSmlLgt.svg" alt="logo" />
        <p>Vallgatan 6</p>
        <p>223 61, Lund</p>
      </div>
      <div className="company-info">
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
      <div className="Socials">
        <p className="follow">Follow Us</p>
        <img className="sm-icon" src="./images/icons_social/_Facebook.svg" alt="Facebook logo" />
        <img className="sm-icon" src="./images/icons_social/_Instagram.svg" alt="Instagram logo" />
        <img className="sm-icon" src="./images/icons_social/_Tiktok.svg" alt="TikTok logo" />
      </div>
    </section>
  )
}

export default Footer