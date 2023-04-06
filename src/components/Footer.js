import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { StyledFooter } from 'styles/Footer.styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo-section">
        <img src="/assets/lotus.svg" alt="lotus logo" />
        <p>Radiant Roots</p>
      </div>
      <div className="links-section">
        <p>Affiliate Links</p>
        <p>FAQ</p>
        <p>Terms & Conditions</p>
        <p>Contact</p>
      </div>
      <div className="icon-section">
        <FontAwesomeIcon icon={faInstagram} className="icon" />
        <FontAwesomeIcon icon={faTiktok} className="icon" />
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </div>
    </StyledFooter>
  )
}