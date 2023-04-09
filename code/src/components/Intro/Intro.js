import React from 'react';
import { StyledIntro } from './Intro.styled';
import introImg from '../images/intro-image.jpg';

export const Intro = () => {
  return (
    <StyledIntro>
      <div className="intro-wrapper">
        <img src={introImg} alt="intro img" />
        <div className="intro-text">
          <h3>OUR GOAL IS TO PROMOTE</h3>
          <h1>THE JOY OF EXERCISE</h1>
          <h2>Teamwork. Bodyweight. Fresh air</h2>
          <p>
            CrossPark is currently located in Stockholm, Göteborg and Malmö. We offer outdoor
            training sessions where nature and your body are the only tools needed. With our fun,
            simple and effective exercises we train strength, fitness, balance and agility.{' '}
          </p>
          <button type="button">Read more</button>
        </div>
      </div>
    </StyledIntro>
  );
};
