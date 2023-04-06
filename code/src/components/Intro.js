import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const IntroSection = styled.section`
  padding: 0;
`;

const IntroImg = styled.img`
    width: 100%;
    height: 50vh;
    transform: scaleX(-1);
`;

const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 16px;
  margin-bottom: 140px;
  margin-top: 24px;
`;

const IntroH3 = styled.h3`
  font-size: 3rem;
  font-weight: 800;
`;

const IntroH4 = styled.h4`
  font-size: 1rem;
  font-weight: 800;
`;

const IntroP = styled.p`
    font-size: 1.125rem;
    line-height: 22px;
`;

export const Intro = () => {
  return (
    <IntroSection className="intro">
      <IntroImg src={`${process.env.PUBLIC_URL}/assets/pexels-yaroslav-shuraev-8692129 1.png`} alt="4 people high fiving each other" />
      <IntroDiv>
        <h2>OUR GOAL IS TO PROMOTE</h2>
        <IntroH3>THE JOY OF EXERCISE</IntroH3>
        <IntroH4>Teamwork. Bodyweight. Fresh air</IntroH4>
        <IntroP>CrossPark is currently located in Stockholm, Göteborg and Malmö.
              We offer outdoor training sessions where nature and
              your body are the only tools needed.
              With our fun, simple and effective exercises we
              train strength, fitness, balance and agility.
        </IntroP>
        <Button mainCta>Read more</Button>
      </IntroDiv>
    </IntroSection>
  )
}