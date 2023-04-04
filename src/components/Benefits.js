/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PrimaryBtn } from 'styling/Button';
import { Tagline, Headline5, Headline4, Body } from '../styling/Text';

export const Card = ({ imgSrc, headlineTitle, bodyText }) => {
  return (
    <div className="cardWrapper" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(${imgSrc})` }}>
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
        imgSrc="../images/anastasia-hisel-oP3BODek8Fc-unsplash.jpg"
        headlineTitle="Apartment friendly workouts"
        bodyText="No matter where you are or the size of your space, we got a class for you." />
      <Card
        imgSrc="../images/jonathan-borba-1cM5f-uhB34-unsplash.jpg"
        headlineTitle="Structured workout programs"
        bodyText="We've got different programs for all levels & result to suit everyone." />
      <Card
        imgSrc="../images/madison-lavern-4gcqRf3-f2I-unsplash.jpg"
        headlineTitle="Designed to keep you focused"
        bodyText="Track your activity & earn badges for completing workouts." />
      <Card
        imgSrc="../images/brooke-lark-nBtmglfY0HU-unsplash.jpg"
        headlineTitle="Healthy recipies & more"
        bodyText="Search among our recipies & get inspired for a healthy inside." />
      <PrimaryBtn className="benefitsBtn">Download app</PrimaryBtn>
    </section>
  )
};

export default Benefits;