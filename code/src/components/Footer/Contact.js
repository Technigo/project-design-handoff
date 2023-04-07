import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    gap: 85px;
  }
`;

const FollowUsDiv = styled.div`
  display: none;

  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const FollowUsP = styled.p`
  @media (min-width: 668px) {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 29px;
  }

  @media (min-width: 1024px) {
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 19px;
  }
`;

const FollowUsIconsDiv = styled.div`
  display: none;

  @media (min-width: 668px) {
    display: flex;
    gap: 3px;
  }
`;

const FollowUsIcons = styled.img`
  @media (min-width: 668px) {
    width: 77px;
    height: 77px;
  }
`;

const ContactInfoDiv = styled.div`
  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContactH4 = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  line-height: 19px;
  margin: 52px 0 10px 0;
  text-transform: uppercase;

  @media (min-width: 668px) {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 29px;
    text-transform: none;
    margin: 0 0 24px 0;
  }

  @media (min-width: 1024px) {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 19px;
  }
`;

const ContactH5 = styled.h5`
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 24px;
`;

const ContactP = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const Contact = () => {
  return (
    <StyledContact>
      <FollowUsDiv>
        <FollowUsP>Follow us</FollowUsP>
        <FollowUsIconsDiv>
          <FollowUsIcons
            src={`${process.env.PUBLIC_URL}/assets/facebook-icon.png`}
            alt="facebook icon" />
          <FollowUsIcons
            src={`${process.env.PUBLIC_URL}/assets/instagram-icon.png`}
            alt="instagram icon" />
        </FollowUsIconsDiv>
      </FollowUsDiv>
      <ContactInfoDiv>
        <ContactH4>Contact</ContactH4>
        <ContactH5>MAIL</ContactH5>
        <ContactP>info@crosspark.com</ContactP>
        <ContactH5>PHONE NUMBER</ContactH5>
        <ContactP>+46 70-5800921</ContactP>
      </ContactInfoDiv>
    </StyledContact>
  )
};