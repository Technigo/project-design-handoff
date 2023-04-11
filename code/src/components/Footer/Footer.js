import React from 'react';

import { Contact } from './Contact';
import { StyledFooter, FooterInfoDiv, FooterLogo } from './Footer.styled';
import logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogo src={logo} alt="Logo for Cross Park" />
      <FooterInfoDiv>
        <Contact />
      </FooterInfoDiv>
    </StyledFooter>
  );
};
