/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { Tagline, Headline5, Headline4, Body } from 'styling/Text';
import '../styling/Activity.css';

export const TextCard = ({ headlineTitle, bodyText }) => {
  return (
    <div className="textCard">
      <Headline4>{headlineTitle}</Headline4>
      <Body>{bodyText}</Body>
    </div>
  )
};

export const Bullets = () => {
  return (
    <>
      <div className="TextCards1">
        <TextCard
          headlineTitle="Milestones"
          bodyText="Don't have any personal goals yet? Challenge yourself by completing our
          pre-made milestones that definitely will keep you motivated" />
        <TextCard
          headlineTitle="Stats"
          bodyText="View your general stats and keep track of your achievments" />
      </div>
      <div className="TextCards2">
        <TextCard
          headlineTitle="Schedule"
          bodyText="Schedule and monitor all your workouts in the calender and set up
          a personal reminder to keep you going" />
        <TextCard
          headlineTitle="Personal"
          bodyText="Track any personal fitness activities you accomplish by adding them to your calender" />
      </div>
    </>
  )
};

const Activity = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <section className="sectionActivity">
      <div className="introActivity">
        <Tagline>Activity</Tagline>
        <Headline5>Track your activity & celebrate your progress</Headline5>
      </div>
      <img alt="img" className="phoneImg" src="../images/mobile-white.png" />
      <div className="activitySlider">
        <Slider {...settings}>
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
        </Slider>
      </div>
      <Bullets />
    </section>
  )
};

export default Activity;