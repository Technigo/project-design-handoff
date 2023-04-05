import React from 'react';
import styled from 'styled-components';
import ourClassesBtn from '../assets/button-our-classes.svg';

const OurClassesButton = styled.img`
position: relative;
width: 165px;
height: 37.24px;
`;

export const Classes = () => {
  return (
    <OurClassesButton src={`${ourClassesBtn}`} />
  )
}