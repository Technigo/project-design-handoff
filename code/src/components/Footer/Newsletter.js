import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

const StyledNewsletter = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsH2 = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const NewsH3 = styled.h3`
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 10px;
`;

const NewsP = styled.p`
  font-size: 1rem;
  font-weight: 800;
  line-height: 19px;
`;

const NewsInput = styled.input`
  font-size: 1rem;
  line-height: 19px;
  padding: 10px 0 10px 10px;
  margin: 32px 0;
  max-width: 450px;

  &::placeholder {
      color: var(--neutral-dark);
    }
`;

const SendButton = styled(Button)`
  @media (max-width: 667px) {
    &::before {
      content: "Sign up!";
    }
  }

  @media (min-width: 668px) {
    padding: 12px 30px;
    width: 30%;
    margin-bottom: 74px;

    &::before {
      content: "Send";
    }
  }
`;

export const Newsletter = () => {
  return (
    <StyledNewsletter>
      <NewsH2>STAY IN TOUCH</NewsH2>
      <NewsH3>JOIN OUR NEWSLETTER</NewsH3>
      <NewsP>Subscribe to our newsletter to receive the latest news.</NewsP>
      <NewsInput type="email" placeholder="YOUR E-MAIL" />
      <SendButton footerCta />
    </StyledNewsletter>
  )
};