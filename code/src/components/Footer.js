import React from 'react';
import styled from 'styled-components';
import { Newsletter } from './Newsletter';
import { Contact } from './Contact';

const StyledFooter = styled.section`
  background-color: var(--primary-color-3);
`;

const FooterLogo = styled.img`
  width: 180px;
  height: 77px;
  margin: 105px 0 52px 0;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogo
        src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
        alt="Logo for Cross Park" />
      <Newsletter />
      <Contact />
    </StyledFooter>
  )
}