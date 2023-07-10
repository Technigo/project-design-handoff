/* eslint-disable import/no-duplicates */
import React from 'react';
import styled from 'styled-components';
import { SmallBlackTitle } from './Fonts';
import PowerYoga60 from '../Assets/Photos/poweryoga60.png';
import PowerYoga75 from '../Assets/Photos/poweryoga75.png';
import YogaStrong from '../Assets/Photos/yogastrong.png';

export const DesktopClasses = () => {
  const ClassesContainer = styled.div`
    position: relative;
    padding-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    
    @media (max-width: 1023px) {
    display: none;
}`

  const ClassWrapper = styled.div`
display: flex;
flex-direction: column;`

  const ClassesImage = styled.img`
    height: 200px;
    width: 200px;
    padding-top: 10px;`

  return (
    <ClassesContainer>
      <ClassWrapper>
        <SmallBlackTitle>PowerYoga 60</SmallBlackTitle>
        <ClassesImage src={PowerYoga60} />
      </ClassWrapper>
      <ClassWrapper>
        <SmallBlackTitle>PowerYoga 75</SmallBlackTitle>
        <ClassesImage src={PowerYoga75} />
      </ClassWrapper>
      <ClassWrapper>
        <SmallBlackTitle>Yoga Strong</SmallBlackTitle>
        <ClassesImage src={YogaStrong} />
      </ClassWrapper>
    </ClassesContainer>
  )
};

export default DesktopClasses;
