/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { ReviewSlider } from './ReviewSlider.js';

const ReviewWrapper = styled.div`
  background-color: #66A1AE;
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 100%;
  gap: 20px;
  padding-top: 45px;

@media (min-width: 1024px) {
  width: 50%;

}`

const ReviewHeader = styled.h1`
font-size: 1.5rem;
font-weight: 700;
text-align: center;
padding-top: 8px;
padding-bottom: 8px;

@media (min-width: 1024px) {
  font-size: 2.5rem;

}

`
export const ReviewParagraph = styled.p`
font-size: 1rem; 
color: white;
max-width: 60%;
text-align: center;
font-weight: 500;
word-wrap: break-word;

@media (min-width: 1024px) {
  font-size: 1.5rem;
  padding-bottom: 25%;
}

`

export const Reviews = () => {
  return (
    <ReviewWrapper>
      <ReviewHeader>Come join us!</ReviewHeader>
      <ReviewParagraph fw500>
      Discover all the benefits of Power Yoga and become part of our amazing community!
      </ReviewParagraph>
      <ReviewSlider />
    </ReviewWrapper>
  )
}

