import React from 'react';
import { Tagline, Headline5, Headline4, Body } from 'styling/Text';

export const TextCard = ({ headlineTitle, bodyText }) => {
  return (
    <div className="textCard">
      <Headline4>{headlineTitle}</Headline4>
      <Body>{bodyText}</Body>
    </div>
  )
};

const Activity = () => {
  return (
    <section className="sectionActivity">
      <div className="introActivity">
        <Tagline>Activity</Tagline>
        <Headline5>Track your activity & celebrate your progress</Headline5>
      </div>
      <img alt="img" className="phoneImg" src="../images/mobile-white.png" />
      <div className="scrollWrapper">
        <TextCard
          headlineTitle="Milestones"
          bodyText="Don't have any personal goals yet? Challenge yourself by completing our
          pre-made milestones that definitely will keep you motivated" />
        <TextCard
          headlineTitle="Schedule"
          bodyText="Schedule and monitor all your workouts in the calender and set up
          a personal reminder to keep you going" />
        <TextCard
          headlineTitle="Stats"
          bodyText="View your general stats and keep track of your achievments" />
        <TextCard
          headlineTitle="Personal"
          bodyText="Track any personal fitness activities you accomplish by adding them to your calender" />
      </div>
    </section>
  )
};

export default Activity;