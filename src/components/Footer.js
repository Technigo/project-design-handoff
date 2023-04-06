import React from "react";
import styled from "styled-components";

const StyledFooterLogoWrapper = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
const StyledFooterWrapper = styled.div`
padding-left: 24px;
padding-top: 32px;
padding-bottom: 32px;
`

const StyledFooter = styled.footer`
background: #02393F;
`

const LogoFooter = styled.img`
width: 64px;
`
const FooterName = styled.h2`
font-family: 'Abril Fatface', cursive;
font-size: 20px;
color: #D0C4B8;
`
const AffiliateLinks = styled.ul`
list-style-type: none;
color: #D0C4B8;
font-size: 16px;
line-height: 200%;
padding: 0;
`
const StyledSoMeLinks = styled.div`
display: flex;
gap: 3rem;
`
const SoMeIcon = styled.img`
width: 32px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <StyledFooterLogoWrapper>
          <LogoFooter src="../icons/footerlogo.svg" alt="" />
          <FooterName>Radiant Roots</FooterName>
        </StyledFooterLogoWrapper> 
        <AffiliateLinks>
          <li>Affiliate links</li>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Contact</li>
        </AffiliateLinks>
        <StyledSoMeLinks>
          <SoMeIcon src="../icons/instagram.svg" alt="Instagram link"/>
          <SoMeIcon src="../icons/tiktok.svg" alt="Tiktok link"/>
          <SoMeIcon src="../icons/twitter.svg" alt="Twitter link"/>
        </StyledSoMeLinks>
      </StyledFooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
