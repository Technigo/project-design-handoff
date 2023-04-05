import React from 'react';
import styled from 'styled-components';

const ReviewWrapper = styled.div`
background-color: #66A1AE;
display: flex;
flex-direction: column; 
height: 431px;
`

const ReviewHeader = styled.h1`
font-size: 1.5rem;
font-weight: 700;
text-align: center;

`

export const Reviews = () => {
  return (
    <ReviewWrapper>
      <ReviewHeader>Come join us!</ReviewHeader>
    </ReviewWrapper>
  )
}

