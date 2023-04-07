import React from 'react';
import SingleLogoABlue from '../../assets/SingleLogoABlue.svg'
import { TopWrapper, LogoLeftTop, Description, LogoRightTop } from './BookClassPageCSS';

export const TopDescription = () => {
  return (
    <TopWrapper>
      <LogoLeftTop src={`${SingleLogoABlue}`} />
      <Description>
            Physical activity is vital for the body. Learn how to master
            unique skills where you&apos;ll develop strength,
            confidence and you&apos;ll defy yourself.
      </Description>
      <LogoRightTop src={`${SingleLogoABlue}`} />
    </TopWrapper>
  )
}