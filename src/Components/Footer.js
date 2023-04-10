import React from 'react';
import styled from 'styled-components';
import GreenBottom from '../images/GreenBottom.png'
import Facebook from '../images/Facebook.png'
import Instagram from '../images/Instagram.png'
import LinkedIn from '../images/Linkedin.png'

const FooterWrapper = styled.div`
background-color: #EBEBEB;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`

const ImgContainer = styled.div`
  width: 100%;
`

const FooterImg = styled.div`
height: 400px;
background-image: url(${GreenBottom});
background-size: cover; 
background-repeat: no-repeat;
background-position: center;
position: relative;
`

const IconsSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 17px;
  margin-bottom: -6rem;
  position: absolute;
`

const FacebookLogo = styled.img`
  max-width: 100%;
  
  &:hover {
    cursor: pointer;
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

const SubscribeText = styled.h5`
  font-weight: 600;
  font-size: 12px;
  padding: 0;
  margin-bottom: -12rem;
  color: #FFFFFF;
  position: absolute;
  @media (min-width: 744px) {
    font-size: 16px;
}
@media (min-width: 1000px) {
    font-size: 22px;
}
`;

const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -20rem;
  position: absolute;
`

const EmailInput = styled.input`
  font-weight: 500;
  font-size: 9px;
  line-height: 9px;
  height:30px;
  border: none;
  width: 50vw;
  @media (min-width: 744px) {
    font-size: 11px;
    font-weight: 600;
    color: #025323;
    width: 28vw;
}
`

const SubscribeButton = styled.button`
  background-color: lightgrey;
  color: #65775A;
  font-size: 9px;
  font-weight: 500;
  line-height: 9px;
  border: none;
  cursor: pointer;
  height:32px;
  
  @media (min-width: 744px) {
    font-size: 11px;
    font-weight: 600;
    color: #025323;
    width: 9vw;
}
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <ImgContainer>
        <FooterImg />
      </ImgContainer>
      <IconsSection>
        <FacebookLogo src={Facebook} alt="Facebook Logo" />
        <InstagramLogo src={Instagram} alt="Instagram Logo" />
        <LinkedInLogo src={LinkedIn} alt="LinkedIn Logo" />
      </IconsSection>
      <SubscribeText>
        <h5>Subscribe to get latest updates</h5>
      </SubscribeText>
      <EmailInputWrapper>
        <EmailInput
          type="email"
          placeholder="Your email address"
          required />
        <SubscribeButton
          type="submit">
              Subscribe
        </SubscribeButton>
      </EmailInputWrapper>
    </FooterWrapper>
  );
};