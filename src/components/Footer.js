import React from 'react';
import '../index.css';

import logo from '../images/Logo.png'
import icon1 from '../images/Instagram.png'
import icon2 from '../images/Facebook.png'
import icon3 from '../images/LinkedIn.png'
import icon4 from '../images/Twitter.png'

// eslint-disable-next-line max-len
const Footer = ({ footerImage, title, link1, link2, link3, link4, link5, link6, link7, link8, link9, shortText }) => {
  const footerBackground = {
    backgroundImage: `url(${footerImage})`
  };
  return (
    <div className="footer-container" style={footerBackground}>
      <div className="footer-content">
        <div className="footer-col-1">
          <img src={logo} alt="pageLogo" />
          <div className="footer-links1">
            <p>{link1}</p>
            <p>{link2}</p>
          </div>
          <p>{shortText}</p>
          <img src={icon1} alt="instagram" />
          <img src={icon2} alt="facebook" />
          <img src={icon3} alt="linkedin" />
          <img src={icon4} alt="twitter" />
        </div>
        <div className="footer-col-2">
          <h3>{title}</h3>
          <div className="footer-links2">
            <p>{link3}</p>
            <p>{link4}</p>
            <p>{link5}</p>
            <p>{link6}</p>
            <p>{link7}</p>
            <p>{link8}</p>
            <p>{link9}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;