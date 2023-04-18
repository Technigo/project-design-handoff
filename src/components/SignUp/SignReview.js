import React from 'react';
import styled from 'styled-components';
import { ReviewTemp } from './Review';
import { SignUp } from './SignUp';

const SignReviewDesk = styled.div`
    display: flex;
    flex-direction: column;
    
     @media (min-width: 895px) {
        display: flex;
        flex-direction: row;
    }
`

export const SignReview = () => {
  return (
    <SignReviewDesk>
      <ReviewTemp />
      <SignUp />
    </SignReviewDesk>
  )
}