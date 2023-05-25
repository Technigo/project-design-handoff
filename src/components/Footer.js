import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h3>Made by: Ylva Karlsson, student at Technigo 2023</h3>
        <div className="icon-container">
          <a href="https://github.com/person1">
            <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
          </a>
          <a href="https://www.linkedin.com/ylvakarlsson87">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
          </a>
          <a href="mailto:ylva_87@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
          </a>
        </div>
        <h4>Design by Cecilia Lestrell, UX-design student at Technigo 2023</h4>
      </div>
    </footer>
  );
};

export default Footer;