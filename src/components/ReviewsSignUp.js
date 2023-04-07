import React from 'react';
import styled from 'styled-components';
import { Reviews } from './Reviews';
import { SignUp } from './SignUp';

const ReviewSignUpWrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    display: flex; 
    flex-direction: row;
    height: auto;
  }
`;

export const ReviewSignUp = () => {
  return (
    <ReviewSignUpWrapper>
      <Reviews />
      <SignUp />
    </ReviewSignUpWrapper>
  )
}