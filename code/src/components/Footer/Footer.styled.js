import styled from 'styled-components';
import { Button } from '../Button';

// FOOTER

export const StyledFooter = styled.section`
  background-color: var(--primaryBlue);

  @media (min-width: 668px) {
    align-items: center;
    padding: 0 114px;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterInfoDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    gap: 50px;
  }
`;

export const FooterLogo = styled.img`
  width: 180px;
  height: 77px;
  margin: 50px 0 50px 0;
`;

// NEWSLETTER

export const StyledNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

export const NewsH2 = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;

  @media (min-width: 668px) {
    font-size: 1rem;
    line-height: 19px;
    margin: 0 0 24px 0;
  }
`;

export const NewsH3 = styled.h3`
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const NewsP = styled.p`
  font-size: 1rem;
  font-weight: 800;
  line-height: 19px;
`;

export const NewsInput = styled.input`
  font-size: 1rem;
  line-height: 19px;
  padding: 10px 0 10px 10px;
  margin: 32px 0;
  max-width: 450px;
  &::placeholder {
    color: var(--neutral-dark);
  }
`;

export const SendButton = styled(Button)`
  @media (max-width: 667px) {
    &::before {
      content: 'Sign up!';
    }
  }

  @media (min-width: 668px) {
    padding: 12px 30px;
    width: 30%;
    margin-bottom: 74px;
    cursor: pointer;

    &::before {
      content: 'Send';
    }
  }
`;

// CONTACT

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    gap: 50px;
    flex-direction: row;
  }
`;

export const FollowUsDiv = styled.div`
  display: none;

  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const FollowUsP = styled.p`
  text-transform: uppercase;

  @media (min-width: 668px) {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 29px;
    text-transform: none;
  }

  @media (min-width: 1024px) {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 19px;
  }
`;

export const FollowUsIconsDiv = styled.div`
  display: none;

  @media (min-width: 668px) {
    display: flex;
    gap: 5px;
  }
`;

export const FollowUsIcons = styled.img`
  @media (min-width: 668px) {
    width: 77px;
    height: 77px;
    cursor: pointer;
  }
`;

export const ContactInfoDiv = styled.div`
  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContactH4 = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  line-height: 19px;
  margin: 52px 0 10px 0;
  text-transform: uppercase;

  @media (min-width: 668px) {
    font-size: 1.2rem;
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

export const ContactH5 = styled.h5`
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 24px;
`;

export const ContactP = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
`;
