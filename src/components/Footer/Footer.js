import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { StyledFooter, LogoSection, LotusLogo, Hexagon, Lotus, RadiantRoots, LinksSection, IconSection, CreditsSection } from 'components/Footer/Footer.styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <LogoSection>
        <LotusLogo>
          <Hexagon src="/assets/beige-hexagon.svg" alt="hexgon" />
          <Lotus src="/assets/teal-lotus.svg" alt="lotus logo" />
        </LotusLogo>
        <RadiantRoots>Radiant Roots</RadiantRoots>
      </LogoSection>
      <LinksSection>
        <p>Affiliate Links</p>
        <p>FAQ</p>
        <p>Terms & Conditions</p>
        <p>Contact</p>
      </LinksSection>
      <IconSection>
        <FontAwesomeIcon icon={faInstagram} className="icon" />
        <FontAwesomeIcon icon={faTiktok} className="icon" />
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </IconSection>
      <CreditsSection>
        <p>Created by <a href="https://bridgetmailley.com/" target="blank" rel="noreferrer">Bridget Mailley</a>.</p>
        <p>Designed by <a href="https://www.linkedin.com/in/hanna-jonsson-/" target="blank" rel="noreferrer">Hanna Jonsson</a>.</p>
        <p>Images from <a href="https://unsplash.com/" target="blank" rel="noreferrer">Unsplash</a>.</p>
        <p>Video from <a href="https://www.videvo.net" target="blank" rel="noreferrer">videvo.net</a></p>
      </CreditsSection>
    </StyledFooter>
  )
}