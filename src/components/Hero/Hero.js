import React from 'react';
import { Wrapper } from 'styles/Wrapper.style';
import Navbar from 'components/Navbar/Navbar';
import { StartButton } from 'components/StartButton';
import {
  HeroContainer,
  HeroTextContainer,
  HeroMainText,
  ButtonsContainer,
  PlayButtonContainer,
  Text
} from './Hero.style';
import { ReactComponent as PlayButton } from '../../assets/images/play-button.svg';

export const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <Wrapper bigWrapper>
        <HeroTextContainer>
          <HeroMainText>
            <h1>YOUR<br />
            WORKOUT<br />
            YOUR<br />
            TIME<br />
            TOGETHER
            </h1>
          </HeroMainText>
          <Text> Find the activity that suits you and buddy.
              No matter the amount of time you have
              to spare, we have you covered.
              Get started at your personal level.
          </Text>
          <ButtonsContainer>
            <StartButton primary>Get started</StartButton>
            <StartButton>Default</StartButton>
          </ButtonsContainer>
        </HeroTextContainer>
      </Wrapper>
      <PlayButtonContainer>
        <PlayButton />
      </PlayButtonContainer>
    </HeroContainer>
  )
}