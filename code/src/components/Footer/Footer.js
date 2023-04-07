import React from 'react';
import styled from 'styled-components';
import { Newsletter } from './Newsletter';
import { Contact } from './Contact';

const StyledFooter = styled.section`
  background-color: var(--primary-color-3);

  @media (min-width: 668px) {
    align-items: center;
    padding: 0 114px;
  }
`;

const FooterInfoDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    gap: 85px;
  }
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
      <FooterInfoDiv>
        <Newsletter />
        <Contact />
      </FooterInfoDiv>
    </StyledFooter>
  )
}