/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { SmallText } from './Hero';
import { ReviewSlider } from './ReviewSlider.js';

const ReviewWrapper = styled.div`
  background-color: #66A1AE;
  display: flex;
  flex-direction: column; 
  align-items: center;
  height: 100%;
  width: 100%;
  flex-basis: 50%;
  flex: 1;

`;

const ReviewHeader = styled.h1`
font-size: 1.5rem;
font-weight: 700;
text-align: center;
padding-top: 8px;
padding-bottom: 16px;

`

export const Reviews = () => {
  return (
    <ReviewWrapper>
      <ReviewHeader>Come join us!</ReviewHeader>
      <SmallText w310 fw500>
      Discover all the benefits of Power Yoga and become part of our amazing community!
      </SmallText>
      <ReviewSlider />
    </ReviewWrapper>
  )
}

