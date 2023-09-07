/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import LinkedIn from '../assets/LinkedInIcon.png';
import GreenBottom from '../assets/GreenBottom.png';
import Facebook from '../assets/FacebookIcon.png';
import Instagram from '../assets/InstagramIcon.png';

const FooterWrapper = styled.div`
background-color: #EBEBEB;
width: auto;
height: auto;
object-fit: cover;
background-image: url(${GreenBottom});
background-size: 100% 100%; /* Update this line */
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4em;
position: relative;
@media (max-width: 768px) {
  padding: 2em;
}
@media (max-width: 480px) {
  padding: 1em;
}
`;

const IconsSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15.53px;
  padding-top:2em;
  @media (max-width: 768px) {
    margin-top: 2em; 
  }
  @media (max-width: 480px) {
    margin-top: 1em; 
  }
`;

const FacebookLogo = styled.img`
  max-width: 100%;
  
  &:hover path {
   
    opacity: 0.8; 
}
`;

const InstagramLogo = styled.img`
  max-width: 100%;
  
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const LinkedInLogo = styled.img`
  max-width: 100%;
  
  &:hover {
    opacity: 0.8;
    cursor: pointer;
}
`;

const SubscribeText = styled.h6`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding: 0;
  margin: 0;
  color: #FFFFFF;
  margin-top: 1em;
`;

const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const EmailInput = styled.input`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 7.83486px;
  line-height: 9px;
  height:18px;
  border: none;
`;

const SubscribeButton = styled.button`
  font-family: 'Libre Franklin';
  font-style: normal;
  background-color: #grey;
  color: #65775A;
  font-size: 7.83486px;
  font-weight: 500;
  line-height: 9px;
  border: none;
  cursor: pointer;
  height:20px;
`;

const GreenBottomOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <GreenBottomOverlay />
      <IconsSection>
        <FacebookLogo src={Facebook} alt="Facebook Logo" />
        <InstagramLogo src={Instagram} alt="Instagram Logo" />
        <LinkedInLogo src={LinkedIn} alt="LinkedIn Logo" />
      </IconsSection>
      <SubscribeText>
        Subscribe to get the latest updates
      </SubscribeText>
      <EmailInputWrapper>
        <EmailInput
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your email adress"
          required />
        <SubscribeButton
          type="submit">
              Subscribe
        </SubscribeButton>
      </EmailInputWrapper>
    </FooterWrapper>
  );
};