import React from 'react';
import styled from 'styled-components';
import { ImageSlider } from './ImageSlider';

const YellowText = styled.h2`
font-size: 1.5rem;
font-weight: 500;
color: #FF9F0A;
display:flex;
align-items: center;
gap: 5px; 
`
const ClassesWrapper = styled.div`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
gap: 16px; 
height: 538px;
padding-top:16px; 
`

export const Classes = () => {
  return (
    <ClassesWrapper>
      <YellowText>Our classes
        <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.25 2.65427L16.1938 0.598022L9.5 7.27719L2.80625 0.598022L0.75 2.65427L9.5 11.4043L18.25 2.65427Z" fill="#FF9F0A" />
        </svg>
      </YellowText>
      <ImageSlider />
    </ClassesWrapper>
  )
}