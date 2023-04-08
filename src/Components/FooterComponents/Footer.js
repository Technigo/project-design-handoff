import React from 'react';
import Facebook from 'Images/Facebook.svg';
import Instagram from 'Images/Instagram.svg';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-list">
        <ul>
          <h4>This is my footer</h4>
          <li>footer</li>
          <li>footer</li>
          <li>footer</li>
        </ul>
        <ul>
          <h4>This is my footer</h4>
          <li>footer</li>
          <li>footer</li>
          <li>footer</li>
        </ul>
        <ul>
          <h4>This is my footer</h4>
          <li>footer</li>
          <li>footer</li>
          <li>footer</li>
        </ul>

      </div>

      <div className="some-links">
        <img src={Facebook} alt="Facebook-link" />
        <img src={Instagram} alt="Instagram-link" />
      </div>

      <figure>
        <figcaption>Photography by<a href="https://helenaandthesea.com/">HelenaandtheSea.com</a></figcaption>
      </figure>
    </section>
  )
};

export default Footer;