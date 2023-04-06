/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PrimaryBtn } from 'styling/Button';
import { Tagline, Headline5, Headline4, Body } from '../styling/Text';
import '../styling/Benefits.css';

export const Card = ({ color, imgSrc, headlineTitle, bodyText }) => {
  return (
    <div className="cardWrapper" style={{ backgroundImage: `linear-gradient(17deg, ${color} 16%, rgba(255, 255, 255, 0) 54%), url(${imgSrc})` }}>
      <Headline4>{headlineTitle}</Headline4>
      <Body>{bodyText}</Body>
    </div>
  )
};

const Benefits = () => {
  return (
    <section className="sectionBenefits">
      <div className="introBenefits">
        <Tagline>Benefits</Tagline>
        <Headline5>Healthy doesn't have to be hard. We make it easy.</Headline5>
      </div>
      <Card
        color="#DCBAF9"
        imgSrc="../images/swanposition.jpg"
        headlineTitle="Apartment friendly workouts"
        bodyText="No matter where you are or the size of your space, we got a class for you." />
      <Card
        color="#F4DDAB"
        imgSrc="../images/lunge.jpg"
        headlineTitle="Structured workout programs"
        bodyText="We've got different programs for all levels & result to suit everyone." />
      <Card
        color="#ABD1F4"
        imgSrc="../images/breath.jpg"
        headlineTitle="Designed to keep you focused"
        bodyText="Track your activity & earn badges for completing workouts." />
      <Card
        color="#CAD7BA"
        imgSrc="../images/breakfast.jpg"
        headlineTitle="Healthy recipies & more"
        bodyText="Search among our recipies & get inspired for a healthy inside." />
      <PrimaryBtn className="benefitsBtn">Download app</PrimaryBtn>
    </section>
  )
};

export default Benefits;