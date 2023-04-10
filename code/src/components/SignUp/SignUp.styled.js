import styled from 'styled-components';
import { Button } from '../Button';

export const SignUpSection = styled.section`
  padding-top: 133px;
  padding-bottom: 100px;

  @media (min-width: 668px) {
    padding: 0;
  }
  @media (min-width: 1024px) {
    height: 100vh;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    justify-content: center;
  }

  button {
    align-self: flex-start;
  }
`;

export const SignUpWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    gap: 112px;
  }
`;

export const SignUpContentDiv = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 0 60px 0 0;
  }
`;

export const SignUpImg = styled.img`
  @media (max-width: 667px) {
    display: none;
  }

  @media (min-width: 668px) {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center 83%;
    margin-bottom: 123px;
    padding: 0;
  }

  @media (min-width: 1024px) {
    width: 500px;
    height: 450px;
    margin-bottom: 0;
  }
`;

export const SignUplogo = styled.img`
  @media (min-width: 668px) {
    display: flex;
    align-self: center;
    padding: 0 144px;
  }

  @media (min-width: 1024px) {
    align-self: flex-start;
    padding: 0;
  }
`;

export const SignUpP = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--neutralBlack);
  margin: 32px 0;

  @media (min-width: 668px) {
    padding: 0 144px;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  @media (min-width: 668px) {
    padding: 0 144px 100px 144px;
  }

  @media (min-width: 1024px) {
    padding: 0px;
    margin: 0;
  }
`;

export const NameInputDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;

  @media (min-width: 668px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const SignUpInput = styled.input`
  padding: 10px;
  width: 100%;
  border: solid 1px var(--neutralBlack);
  box-sizing: border-box;
  &::placeholder {
    color: var(--neutral-dark);
  }
  &:focus {
    outline: none;
    border: none;
    border-bottom: black solid 1px;
  }
`;

export const SignUpButton = styled(Button)`
  @media (max-width: 667px) {
    &::before {
      content: 'Continue to sign up!';
    }
  }

  @media (min-width: 668px) {
    padding: 12px 30px;
    &::before {
      content: 'Continue';
    }
  }
`;
