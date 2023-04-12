import React from 'react';
import styled from 'styled-components';
import { WhiteParagraph } from '../Components/Fonts';
import Instagram from '../Assets/Icons/Tablet/Instagram.svg';
import Facebook from '../Assets/Icons/Tablet/Facebook.svg';
import LinkedIn from '../Assets/Icons/Tablet/LinkedIn.svg';
import Twitter from '../Assets/Icons/Tablet/Twitter.svg';
import DesktopInstagram from '../Assets/Icons/DesktopInstagram.svg';
import DesktopFacebook from '../Assets/Icons/DesktopFacebook.svg';
import DesktopLinkedIn from '../Assets/Icons/DesktopLinkedIn.svg';
import DesktopTwitter from '../Assets/Icons/DesktopTwitter.svg';
import Logo from '../Assets/Icons/Logo.svg';
import Logoandname from '../Assets/Icons/Logoandname.svg';

const FooterSection = styled.section`
background-color: #2E160E;
margin: auto;
height: 180px;
text-align: center;

@media (min-width: 688px) {
    height: 240px;
}

@media (min-width: 1024px) {
    height: 320px;
}
`

const LogoDiv = styled.div`
padding-top: 24px;

@media (max-width: 687px) {
    display: none;
}

@media (min-width: 1024px) {
    display: none;
}
`

const DesktopLogoDiv = styled.div`
padding-top: 24px;

@media (max-width: 1023px) {
    display: none;
}
`

const FooterNav = styled.div`
padding-top: 55px;
display: flex;
justify-content: space-between;
padding-left: 31px;
padding-right: 31px;

@media (min-width: 688px) {
    padding-top: 35px;
    width: 400px;
    margin: auto;
}

@media (min-width: 1024px) {
    width: 400px;
    margin: auto;
}
`

const FooterLine = styled.div`
height: 24px;
width: 334px;
border-bottom: 1px solid white;
margin: auto;
margin-bottom: 30px;

@media (min-width: 688px) {
    width: 582px;
}
`

const SoMeIcons = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #2E160E;
width: 400px;
margin: auto;

@media (min-width: 688px) {
    display: none;
}
`

const DesktopSoMeIcons = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #2E160E;
width: 400px;
margin: auto;

@media (max-width: 688px) {
    display: none;
}
`

export const Footer = () => {
  return (
    <FooterSection>
      <LogoDiv>
        <img src={Logo} alt="Santulan Yoga Logo" />
      </LogoDiv>
      <DesktopLogoDiv>
        <img src={Logoandname} alt="Santulan Yoga Logo and name" />
      </DesktopLogoDiv>
      <FooterNav>
        <WhiteParagraph>Classes</WhiteParagraph>
        <WhiteParagraph>About</WhiteParagraph>
        <WhiteParagraph>Contact</WhiteParagraph>
      </FooterNav>
      <FooterLine />
      <SoMeIcons>
        <img src={Instagram} alt="Instagram" />
        <img src={Facebook} alt="Facebook" />
        <img src={LinkedIn} alt="LinkedIn" />
        <img src={Twitter} alt="Twitter" />
      </SoMeIcons>
      <DesktopSoMeIcons>
        <img src={DesktopInstagram} alt="Instagram" />
        <img src={DesktopFacebook} alt="Facebook" />
        <img src={DesktopLinkedIn} alt="LinkedIn" />
        <img src={DesktopTwitter} alt="Twitter" />
      </DesktopSoMeIcons>
    </FooterSection>
  )
}