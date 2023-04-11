import React from 'react';
import { Button } from 'components/Button';
import {
  IntroSection,
  IntroContentDiv,
  IntroImg,
  IntroDiv,
  IntroH2,
  IntroH3,
  IntroH4,
  IntroP
} from './Intro.styled';

export const Intro = () => {
  return (
    <IntroSection className="intro">
      <IntroContentDiv>
        <IntroImg
          src="https://images.pexels.com/photos/8692129/pexels-photo-8692129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="4 people high fiving" />
        <IntroDiv>
          <IntroH2>OUR GOAL IS TO PROMOTE</IntroH2>
          <IntroH3>THE JOY OF EXERCISE</IntroH3>
          <IntroH4>Teamwork. Bodyweight. Fresh air</IntroH4>
          <IntroP>
            CrossPark is currently located in Stockholm, Göteborg and Malmö. We offer outdoor
            training sessions where nature and your body are the only tools needed. With our fun,
            simple and effective exercises we train strength, fitness, balance and agility.
          </IntroP>
          <Button mainCta>Read more</Button>
        </IntroDiv>
      </IntroContentDiv>
    </IntroSection>
  );
};
