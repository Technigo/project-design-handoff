import React from 'react';
import Facebook from 'Images/Facebook.svg';
import Instagram from 'Images/Instagram.svg';

const Footer = () => {
  return (
    <section className="footer-section">

      <div className="footer-div">

        <div className="footer-list">
          <ul>
            <p className="bold">This is my footer</p>
            <li>footer</li>
            <li>footer</li>
            <li>footer</li>
          </ul>
          <ul>
            <p className="bold">This is my footer</p>
            <li>footer</li>
            <li>footer</li>
            <li>footer</li>
          </ul>
          <ul>
            <p className="bold">This is my footer</p>
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
          <figcaption>Photography by <a href="https://helenaandthesea.com/">HelenaandtheSea.com</a></figcaption>
        </figure>

      </div>

    </section>
  )
};

export default Footer;