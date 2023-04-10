import React from 'react';
import styled from 'styled-components';
import 'react-awesome-slider/dist/styles.css';
import { YellowTitle } from '../Components/Fonts';
import { ClassesSlider } from '../Components/ClassesSlider';
import DownArrow from '../Assets/Icons/DownArrow.svg';

const ClassesDiv = styled.div`
height: 370px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
`

export const Classes = () => {
  return (
    <ClassesDiv>
      <YellowTitle>Our Classes &nbsp;<img src={DownArrow} alt="down arrow icon" /></YellowTitle>
      <ClassesSlider />
    </ClassesDiv>
  )
}