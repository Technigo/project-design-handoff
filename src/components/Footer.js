import React from 'react';
import '../index.css';

// eslint-disable-next-line max-len
const Footer = ({ footerImage, logo, title, link1, link2, link3, link4, link5, link6, link7, link8, link9, shortText, icon1, icon2, icon3, icon4 }) => {
  const footerBackground = {
    backgroundImage: `url(${footerImage})`
  };
  return (
    <div className="footer-container" style={footerBackground}>
      <div className="footer-content">
        <div className="footer-col-1">
          <img src={logo} alt="pageLogo" />
          <p>{link1}</p>
          <p>{link2}</p>
          <p>{shortText}</p>
          <img src={icon1} alt="instagram" />
          <img src={icon2} alt="facebook" />
          <img src={icon3} alt="linkedin" />
          <img src={icon4} alt="twitter" />
        </div>
        <div className="footer-col-2">
          <h3>{title}</h3>
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
  );
};

export default Footer;