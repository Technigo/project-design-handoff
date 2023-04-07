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
      <div className="credits">
        <p>Created by <a href="https://bridgetmailley.com/" target="blank" rel="noreferrer">Bridget Mailley</a>.</p>
        <p>Designed by <a href="https://www.linkedin.com/in/hanna-jonsson-/" target="blank" rel="noreferrer">Hanna Jonsson</a>.</p>
        <p>Images from <a href="https://unsplash.com/" target="blank" rel="noreferrer">Unsplash</a>.</p>
        <p>Video from <a href="https://www.videvo.net" target="blank" rel="noreferrer">videvo.net</a></p>
      </div>
    </StyledFooter>
  )
}