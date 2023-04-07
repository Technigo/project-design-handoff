import React from 'react';
import styled from 'styled-components';
import { Reviews } from './Reviews';
import { SignUp } from './SignUp';

const ReviewSignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;


  @media (min-width: 1024px) {
    flex-direction: row-reverse;

  }
`;

export const ReviewSignUp = () => {
  return (
    <ReviewSignUpWrapper>
      <SignUp />
      <Reviews />
    </ReviewSignUpWrapper>
  )
}