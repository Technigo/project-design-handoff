import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const IntroSection = styled.section`
  padding: 0;

  @media (min-width: 668px) {
    height: 100vh;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

const IntroContentDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1040px;
    margin: 200px 0;
  }
`;

const IntroImg = styled.img`
  width: 100%;
  height: 50vh;
  transform: scaleX(-1);
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 500px;
    height: 450px;
  }
`;

const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 16px;
  margin-bottom: 140px;
  margin-top: 24px;

  @media (min-width: 668px) {
    margin-bottom: 109px;
    align-items: flex-start;
    padding-left: 24px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 65px;
    justify-content: center;
  }

  button {
      align-self: flex-start;
    }
`;

const IntroH2 = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

const IntroH3 = styled.h3`
  font-size: 3rem;
  font-weight: 800;

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const IntroH4 = styled.h4`
  font-size: 1rem;
  font-weight: 800;
`;

const IntroP = styled.p`
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 22px;

  @media (min-width: 668px) {
    width: 55%;
  }

  @media (min-width: 1024px) {
    line-height: 19px;
    width: 100%;
  }
`;

export const Intro = () => {
  return (
    <IntroSection className="intro">
      <IntroContentDiv>
        <IntroImg src="https://images.pexels.com/photos/8692129/pexels-photo-8692129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="4 people high fiving each other" />
        <IntroDiv>
          <IntroH2>OUR GOAL IS TO PROMOTE</IntroH2>
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
      </IntroContentDiv>
    </IntroSection>
  )
}