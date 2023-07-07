/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { BrownSection } from '../Components/BrownSection';
import { PurpleTitle, Paragraph } from '../Components/Fonts';

const TextDiv = styled.div`
width: 600px;
margin: auto;`

export const SantulanInfo = () => {
  return (
    <BrownSection>
      <TextDiv>
        <PurpleTitle>Santulan Power Yoga Studio</PurpleTitle>
        <Paragraph purple>
           Put simply, Yoga transformed our lives and we want to share that magic with you.
           We created Santulan to empower your journey to personal growth and well-being.
           Our classes weave ancient yogic philosophy into 21st century life, and everyone's
           welcome, from absolute beginners to advanced practitioners. We passionately believe
           that Power Yoga is for everyone, and no matter your age or flexibility, our expert
           teachers will ensure you leave each class stronger in mind and body.
        </Paragraph>
      </TextDiv>
    </BrownSection>
  )
}