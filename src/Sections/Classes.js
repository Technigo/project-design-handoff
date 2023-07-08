import React from 'react';
import styled from 'styled-components';
import 'react-awesome-slider/dist/styles.css';
import { PurpleTitle } from '../Components/Fonts';
import { ClassesSlider } from '../Components/ClassesSlider';
import { DesktopClasses } from '../Components/DesktopClasses';
import DownArrow from '../Assets/Icons/DownArrow.svg';

const ClassesDiv = styled.div`
height: 450px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
`

export const Classes = () => {
  return (
    <ClassesDiv>
      <PurpleTitle><b>Our Classes</b> &nbsp;<img src={DownArrow} alt="down arrow icon" /></PurpleTitle>
      <DesktopClasses />
      <ClassesSlider />
    </ClassesDiv>
  )
}