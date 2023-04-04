import React from 'react';
import styled from 'styled-components';

const YellowText = styled.h2`
font-size: 1.5rem;
font-weight: 500;
color: #FF9F0A;
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
      <YellowText>Our classes</YellowText>
    </ClassesWrapper>
  )
}