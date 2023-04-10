import React from 'react';
import {
  SignUpSection,
  SignUpWrapper,
  SignUpImg,
  SignUpContentDiv,
  SignUplogo,
  SignUpP,
  SignUpForm,
  NameInputDiv,
  SignUpInput,
  SignUpButton
} from './SignUp.styled';
import signUp from '../../assets/sign-up.png';

export const SignUp = () => {
  return (
    <SignUpSection className="signup">
      <SignUpWrapper>
        <SignUpImg
          src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="woman running up stairs" />
        <SignUpContentDiv>
          <SignUplogo src={signUp} alt="Logo that says sign up" />
          <SignUpP>
            As a member you get access to all of our workouts and can make reservations to our
            workout session.
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
  );
};
