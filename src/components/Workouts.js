/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { SecondaryBtn } from 'styling/Button';
import { Tagline, Headline5, Headline1, Headline4, Body } from '../styling/Text';

export const SmallCard = ({ color, headlineTitle, bodyText }) => {
  return (
    <div className="smallCard" style={{ backgroundColor: `${color}` }}>
      <Headline4>{headlineTitle}</Headline4>
      <Body>{bodyText}</Body>
    </div>
  )
};

const Workouts = () => {
  return (
    <section className="sectionWorkouts">
      <div className="introWorkouts">
        <Tagline>Workouts</Tagline>
        <Headline5>One 5 min workout is better than none.</Headline5>
      </div>
      <div className="videoCard" style={{ backgroundImage: 'linear-gradient(5deg, #DCBAF9 10%, rgba(255, 255, 255, 0) 40%), url("../images/stretch.jpg")' }}>
        <img className="playIcon" alt="icon" src="../images/playbutton.png" />
        <div className="textBtnWrapper">
          <div>
            <Headline4>5 min warm up</Headline4>
            <Body>For at home or the gym</Body>
          </div>
          <SecondaryBtn>View more</SecondaryBtn>
        </div>
      </div>
      <div className="mediumCard" style={{ backgroundColor: '#EFEFEF' }}>
        <Headline1>Healthy made easy</Headline1>
        <Body>
            Choose a workout or try out any of our weekly challenges.
            All our exercises range between 5 to 30 min.
            Each exercise is accompanied by a detailed written description and
            video to help you understand and perfect each move.
            One 5 min workout is better than none.
        </Body>
      </div>
      <div className="smallCardWrapper">
        <SmallCard
          color="#DCD2F1"
          headlineTitle="AB workouts"
          bodyText="For at home or the gym" />
        <SmallCard
          color="#CAD7BA"
          headlineTitle="Cardio workouts"
          bodyText="And so much more..." />
      </div>
    </section>
  )
};

export default Workouts;