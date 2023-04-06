import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

const ContactH4 = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  line-height: 19px;
  margin: 52px 0 10px 0;
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
      <ContactH4>CONTACT</ContactH4>
      <ContactH5>MAIL</ContactH5>
      <ContactP>info@crosspark.com</ContactP>
      <ContactH5>PHONE NUMBER</ContactH5>
      <ContactP>+46 70-5800921</ContactP>
    </StyledContact>
  )
};