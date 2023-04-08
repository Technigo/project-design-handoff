import React from 'react';
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="/images/navbar-logo.png" alt="Logo" />
        <p><u>Impressum</u></p>
        <p><u>Datenschutz</u></p>
        <p>Follow us</p>
        <div className="footer-logos">
          <img src="/images/instagram.png" alt="instagram logo" />
          <img src="/images/facebook.png" alt="facebook logo" />
          <img src="/images/linkedin.png" alt="linkedin logo" />
          <img src="/images/twitter.png" alt="twitter logo" />
        </div>
      </div>
      <div className="footer-programs">
        <h3>Programs</h3>
        <p>Active in pregnancy</p>
        <p>Getting fit for the child</p>
        <p>Postnatal recovery</p>
        <p>Stay strong but soft</p>
        <p>Start running (again)</p>
        <p>Run better</p>
        <p>In shape nutrition-plan</p>
      </div>
    </div>
  );
}