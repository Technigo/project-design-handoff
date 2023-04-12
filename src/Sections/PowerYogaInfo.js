/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { BrownSection } from '../Components/BrownSection';
import { YellowTitle, WhiteParagraph } from '../Components/Fonts';

const TextDiv = styled.div`
width: 500px;
margin: auto;`

export const PowerYogaInfo = () => {
  return (
    <BrownSection>
      <TextDiv>
        <YellowTitle>What is Power Yoga?</YellowTitle>
        <WhiteParagraph>
        Power yoga is a fast-paced style of yoga that's focused on
        building strength and endurance. Whilst practising this form of yoga,
        you will feel the tension and toxins leaving your body and your posture
        and back pain getting better.
        </WhiteParagraph>
      </TextDiv>
    </BrownSection>
  )
}