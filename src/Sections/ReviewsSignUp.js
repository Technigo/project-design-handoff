import React from 'react';
import styled from 'styled-components';
import { Reviews } from './Reviews';
import { SignupForm } from './SignupForm';

export const ReviewsSignUp = () => {
  return (
    <DesktopRowSection>
      <Reviews />
      <SignupForm />
    </DesktopRowSection>
  );
}

const DesktopRowSection = styled.section`
display: flex;
flex-direction: column;

@media (min-width: 1024px) {
    flex-direction: row;
}`
