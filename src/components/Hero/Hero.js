import React from 'react';
// import './Hero.css';
import { StartButton } from 'components/StartButton';
import {
  HeroContainer,
  HeroMainText,
  ButtonsContainer
} from './Hero.style';

export const Hero = () => {
  return (
    <HeroContainer>
      <>
        <HeroMainText>
          <h1>YOUR<br />
            WORKOUT<br />
            YOUR<br />
            TIME<br />
            TOGETHER
          </h1>
        </HeroMainText>

        <p> Find the activity that suits you and buddy.
              No matter the amount of time you have
              to spare, we have you covered.
              Get started at your personal level.
        </p>
        <ButtonsContainer>
          {/* <div className="buttons-container"> */}
          <StartButton cta>Get started</StartButton>
          <StartButton outlined>Default</StartButton>
        </ButtonsContainer>
      </>
    </HeroContainer>
  )
}