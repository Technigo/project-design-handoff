import React from 'react';
// import './Hero.css';
import { StartButton } from 'components/StartButton';
import { Flex } from 'styles/Flex.styled';
import {
  HeroContainer,
  HeroTextContainer,
  HeroMainText,
  ButtonsContainer,
  PlayButtonContainer
} from './Hero.style';
import { ReactComponent as PlayButton } from '../../assets/images/play-button.svg';

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <Flex>
          <HeroMainText>
            <h1>YOUR<br />
            WORKOUT<br />
            YOUR<br />
            TIME<br />
            TOGETHER
            </h1>
          </HeroMainText>
        </Flex>
        <p> Find the activity that suits you and buddy.
              No matter the amount of time you have
              to spare, we have you covered.
              Get started at your personal level.
        </p>
        <ButtonsContainer>
          <StartButton cta>Get started</StartButton>
          <StartButton outlined>Default</StartButton>
        </ButtonsContainer>
      </HeroTextContainer>
      <PlayButtonContainer>
        <PlayButton />
      </PlayButtonContainer>
    </HeroContainer>
  )
}