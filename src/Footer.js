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
    <>
      <Logo src="/icons/footer-vector.png" />
      <h>Radiant roots</h>
      <li>Affiliate links</li>
      <li>FAQ</li>
      <li>Terms & Conditions</li>
      <li>Contact</li>
      <SocialMediaIcons src="/icons/instagram.png" />
      <SocialMediaIcons src="/icons/socialicon.png" />
      <SocialMediaIcons src="/icons/twitter.png" />
    </>
  )
}

export default Footer;