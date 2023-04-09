import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";

const StyledFooterLogoWrapper = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
const StyledFooterWrapper = styled.div`
padding-left: 24px;
padding-top: 32px;
padding-bottom: 32px;

@media(min-width: 768px) {
  max-width: 509px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 0.5rem;
}
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

@media(min-width: 768px) {
width: 509px;
display: flex;
gap: 2.75rem;
}
`
const StyledHR = styled.hr`
width: 480px;
border: 1px solid #D0C4B8;
`

const StyledSoMeLinks = styled.div`
display: flex;
gap: 3rem;
`
const SoMeIcon = styled.img`
width: 32px;
`

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 767px)'); // Hook to check screen size.
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
        {isMobile ?  null : <StyledHR />
        // Rendering the little line under the link depending on if its mobile
        // or not.
        }
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
