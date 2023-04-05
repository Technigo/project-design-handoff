import React from 'react';
import { TagLine, H5 } from 'style/Texts';
import { Button } from 'style/ButtonsStyle';
import { Card } from './Cards';

export const Benefits = () => {
  return (
    <>
      <TagLine color="#222322">Benefits</TagLine>
      <H5 color="#222322">Healthy doen’t have to be hard. We make it easy.</H5>
      <Card
        color="#DCBAF9"
        imgSrc="./images/swanposition.jpg"
        headline="Apartment friendly workouts"
        text="No matter where you are or the size of you space, we got a class for you." />
      <Card
        color="#F4DDAB"
        imgSrc="./images/lunge.jpg"
        headline="Structured workout programs"
        text="We’ve got different programs for all levels & result to suit everyone." />
      <Card
        color="#ABD1F4"
        imgSrc="./images/breath.jpg"
        headline="Designed to keep you focused"
        text="Track your activity & earn badges for completing workouts." />
      <Card
        color="#CAD7BA"
        imgSrc="./images/breakfast.jpg"
        headline="Healthy recipies & more "
        text="Search among our recipies & get inspired for a healthy inside." />
      <Button bg="#DCD2F1" color="#222322">Download app</Button>
    </>
  )
}