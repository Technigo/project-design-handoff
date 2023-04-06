import React from 'react';
import {
  HeroContainer,
  HeroMainText,
  ButtonsContainer
} from './Hero/Hero.style';
import { StartButton } from './StartButton';

export const Hero = () => {
  return (
    <HeroContainer>
      {/* <div className="main-content-container"> */}
      <HeroMainText>
        <p>YOUR</p>
        <p>WORKOUT</p>
        <p>YOUR</p>
        <p>TIME</p>
        <p>TOGETHER</p>
      </HeroMainText>
      <p> Find the activity that suits you and buddy.
              No matter the amount of time you have
              to spare, we have you covered.
              Get started at your personal level.
      </p>
      <ButtonsContainer>
        <StartButton cta>Get started</StartButton>
        <StartButton outlined>Default</StartButton>
      </ButtonsContainer>
    </HeroContainer>
  )
}