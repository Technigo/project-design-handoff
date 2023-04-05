import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const SignUpSection = styled.section`
  padding: 132px 16px;
`;

const SignUpP = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--neutral-dark);
  margin: 32px 0;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
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

export const SignUp = () => {
  return (
    <SignUpSection className="signup">
      <img
        src={`${process.env.PUBLIC_URL}/assets/sign-up-logo.png`}
        alt="Logo that says sign up" />
      <SignUpP>As a member you get access to all of our workouts
    and can make reservations to our workout session.
      </SignUpP>
      <SignUpForm>
        <SignUpInput type="text" placeholder="FIRST NAME" />
        <SignUpInput type="text" placeholder="LAST NAME" />
        <SignUpInput type="email" placeholder="E-MAIL" />
        <SignUpInput type="password" placeholder="PASSWORD" />
        <SignUpInput type="password" placeholder="CONFIRM PASSWORD" />
        <Button mainCta>Continue to sign up!</Button>
      </SignUpForm>
    </SignUpSection>
  )
}