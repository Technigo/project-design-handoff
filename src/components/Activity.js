/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Slider from 'react-slick';
import { Tagline, Headline5, Headline4, Body } from 'styling/Text'
import '../styling/Activity.css'

export const Text = ({ headlineTitle, bodyText }) => {
  return (
    <div className="text">
      <Headline4>{headlineTitle}</Headline4>
      <Body>{bodyText}</Body>
    </div>
  )
}

const Activity = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // set to 4 for desktop and tablet
    slidesToScroll: 4, // set to 4 for desktop and tablet
    variableWidth: true
  };

  return (
    <section className="sectionActivity">
      <div className="introActivity">
        <Tagline>Activity</Tagline>
        <Headline5>Track your activity & celebrate your progress</Headline5>
      </div>
      <img alt="img" className="phoneImg" src="../images/mobileapp.png" />
      <div className="activitySlider">
        <Slider {...settings}>
          <Text
            headlineTitle="Milestones"
            bodyText="Don't have any personal goals yet? Challenge yourself by completing our
          pre-made milestones that definitely will keep you motivated" />
          <Text
            headlineTitle="Schedule"
            bodyText="Schedule and monitor all your workouts in the calender and set up
          a personal reminder to keep you going" />
          <Text
            headlineTitle="Stats"
            bodyText="View your general stats and keep track of your achievments" />
          <Text
            headlineTitle="Personal"
            bodyText="Track any personal fitness activities you accomplish by adding them to your calender" />
        </Slider>
      </div>
    </section>
  )
};

export default Activity;
