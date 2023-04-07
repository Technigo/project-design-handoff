import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const SignUpSection = styled.section`
  padding: 133px 16px;

  @media (min-width: 570px) {
    padding: 0;
  }

  button {
      align-self: flex-start;
    }
`;

const SignUpImg = styled.img`
  @media (max-width: 569px) {
    display: none;
  }

  @media (min-width: 570px) {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    object-position: center 83%;
    margin-bottom: 123px;
    padding: 0;
  }
`;

const SignUplogo = styled.img`
  @media (min-width: 570px) {
    display: flex;
    align-self: center;
    padding: 0 144px;
  }
`;

const SignUpP = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--neutral-dark);
  margin: 32px 0;

  @media (min-width: 570px) {
    padding: 0 144px;
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  @media (min-width: 570px) {
    padding: 0 144px 100px 144px;
  }
`;

const NameInputDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 570px) {
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  }
`;

const SignUpInput = styled.input`
  padding: 10px;
  width: 100%;
  border: solid 1px var(--neutral-dark);
  box-sizing: border-box;

  &::placeholder {
      color: var(--neutral-dark);
    }
`;

const SignUpButton = styled(Button)`
  @media (max-width: 569px) {
    &::before {
      content: "Continue to sign up!";
    }
  }

  @media (min-width: 570px) {
    padding: 12px 30px;
    &::before {
      content: "Continue";
    }
  }
`;

export const SignUp = () => {
  return (
    <SignUpSection className="signup">
      <SignUpImg src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="woman running up stairs" />
      <SignUplogo
        src={`${process.env.PUBLIC_URL}/assets/sign-up-logo.png`}
        alt="Logo that says sign up" />
      <SignUpP>As a member you get access to all of our workouts
    and can make reservations to our workout session.
      </SignUpP>
      <SignUpForm>
        <NameInputDiv>
          <SignUpInput type="text" placeholder="FIRST NAME" />
          <SignUpInput type="text" placeholder="LAST NAME" />
        </NameInputDiv>
        <SignUpInput type="email" placeholder="E-MAIL" />
        <SignUpInput type="password" placeholder="PASSWORD" />
        <SignUpInput type="password" placeholder="CONFIRM PASSWORD" />
        <SignUpButton mainCta />
      </SignUpForm>
    </SignUpSection>
  )
}