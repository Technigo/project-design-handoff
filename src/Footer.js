import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  width: 55px;
  height: 55px;
`

const SocialMediaIcons = styled.img`
width: 32px;
  height: 32px;
`

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-roots-container">
        <Logo className="roots-logo" src="/icons/footer-vector.png" />
        <h1>Radiant roots</h1>
      </div>
      <div className="footer-links-container">
        <ul>
          <li>Affiliate links</li>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="icons-container">
        <SocialMediaIcons src="/icons/instagram.png" />
        <SocialMediaIcons src="/icons/socialicon.png" />
        <SocialMediaIcons src="/icons/twitter.png" />
      </div>
    </div>
  )
}

export default Footer;