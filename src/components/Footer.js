import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { StyledFooter } from 'styles/Footer.styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo-section">
        <div className="lotus-logo">
          <img src="/assets/beige-hexagon.svg" alt="hexgon" className="hexagon" />
          <img src="/assets/teal-lotus.svg" alt="lotus logo" className="lotus" />
        </div>
        <p className="radiant-roots">Radiant Roots</p>
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