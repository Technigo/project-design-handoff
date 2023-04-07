import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const SignUpSection = styled.section`
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

const SignUpWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    gap: 112px;
  }
`;

const SignUpContentDiv = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 0 60px 0 0;
  }
`;

const SignUpImg = styled.img`
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

const SignUplogo = styled.img`
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

const SignUpP = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--neutral-dark);
  margin: 32px 0;

  @media (min-width: 668px) {
    padding: 0 144px;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const SignUpForm = styled.form`
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

const NameInputDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 668px) {
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

  &:focus {
    outline: none;
    border: none;
    border-bottom: black solid 1px;
  }
`;

const SignUpButton = styled(Button)`
  @media (max-width: 667px) {
    &::before {
      content: "Continue to sign up!";
    }
  }

  @media (min-width: 668px) {
    padding: 12px 30px;
    &::before {
      content: "Continue";
    }
  }
`;

export const SignUp = () => {
  return (
    <SignUpSection className="signup">
      <SignUpWrapper>
        <SignUpImg src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="woman running up stairs" />
        <SignUpContentDiv>
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
        </SignUpContentDiv>
      </SignUpWrapper>
    </SignUpSection>
  )
}