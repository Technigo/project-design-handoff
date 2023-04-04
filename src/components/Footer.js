import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h3>Ylva Karlsson</h3>
        <p>
          <a href="https://github.com/person1">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/ylvakarlsson87">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:ylva_87@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;