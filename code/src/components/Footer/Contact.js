import React from 'react';
import {
  StyledContact,
  FollowUsDiv,
  FollowUsP,
  FollowUsIconsDiv,
  FollowUsIcons,
  ContactInfoDiv,
  ContactH4,
  ContactH5,
  ContactP
} from './Footer.styled';
import facebookIcon from '../../assets/facebook-icon.png';
import instaIcon from '../../assets/insta-icon.png';
import { Newsletter } from './Newsletter';

export const Contact = () => {
  return (
    <StyledContact>
      <FollowUsDiv>
        <FollowUsP>Follow us</FollowUsP>
        <FollowUsIconsDiv>
          <FollowUsIcons src={facebookIcon} alt="facebook icon" />
          <FollowUsIcons src={instaIcon} alt="instagram icon" />
        </FollowUsIconsDiv>
      </FollowUsDiv>
      <Newsletter />
      <ContactInfoDiv>
        <ContactH4>Contact</ContactH4>
        <ContactH5>MAIL</ContactH5>
        <ContactP>info@crosspark.com</ContactP>
        <ContactH5>PHONE NUMBER</ContactH5>
        <ContactP>+46 70-5800921</ContactP>
      </ContactInfoDiv>
    </StyledContact>
  );
};
