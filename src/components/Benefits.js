import React from 'react';
import { TagLine, H5 } from 'style/Texts';
import { FlexColumn, FlexColumnNoPosition } from 'style/Flex';
import { Card } from './Cards';

export const Benefits = () => {
  return (
    <>
      <TagLine color="#222322">Benefits</TagLine>
      <H5 color="#222322">Healthy doen’t have to be hard. We make it easy.</H5>
      <Card
        color="#DCBAF9"
        imgSrc="https://images.unsplash.com/photo-1623199077542-eea6f4e324e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        headline="Apartment friendly workouts"
        text="No matter where you are or the size of you space, we got a class for you." />
      <Card
        color="#F4DDAB"
        imgSrc="https://images.unsplash.com/photo-1675910516800-42d3a6517de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        headline="Structured workout programs"
        text="We’ve got different programs for all levels & result to suit everyone." />
    </>
  )
}