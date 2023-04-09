import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { TopLogo } from './Global';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';
import youtubeIcon from '../assets/youtube.svg';
import pinterestIcon from '../assets/pinterest.svg';

const FooterContainer = styled.div`
    background-color: #03092E;
    width: 360px;
    height: 410px;
    margin-top: -20px;
    color: #E3F7FC;
`;

const FooterText = styled.p`
  color: #E3F7FC;
`;

const LinksContainer = styled.ul`
  color: #E3F7FC;
`

const SocialIconsContainer = styled.a`
  color: #E3F7FC;
`

const Footer = () => {
  return (
    <FooterContainer>
      <TopLogo src={logo} alt="Logo" />
      <FooterText text="FOR A HEALTHIER AND FITTER PLANET" />
      <LinksContainer>
        <li><a href="#">About us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Coaches</a></li>
        <li><a href="#">Club</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Shop</a></li>
      </LinksContainer>
      <SocialIconsContainer>
        <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
        <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
        <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
        <a href="#"><img src={pinterestIcon} alt="Pinterest" /></a>
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;