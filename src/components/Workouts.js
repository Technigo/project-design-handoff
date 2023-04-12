/* eslint-disable import/named */
import React from 'react';
import { TagLine, H5 } from 'style/Texts';
import { FlexColumnCenter } from 'style/Flex';
import { CardText, CardTextSmall, CardVideo } from './Cards';

export const Workout = () => {
  return (
    <FlexColumnCenter>
      <TagLine color="#222322">Workout</TagLine>
      <H5 color="#222322">One 5 min workout is better than none.</H5>
      <CardVideo
        color="#DCBAF9"
        imgSrc="https://images.unsplash.com/photo-1623200216581-969d9479cf7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        headline="5 min warm up"
        text="For at home or the gym"
        button="View more" />
      <CardText
        color="#EFEFEF"
        headline="Healthy made easy"
        text="Choose a workout or try out any of our weekly challenges. All our exercises range between 5 to 30 min. Each exercise is accompanied by a detailed written description and video to help you understand and perfect each move. One 5 min workout is better than none." />
      <CardTextSmall
        color="#DCD2F1"
        headline="AB workouts"
        text="For at home or the gym" />
      <CardTextSmall
        color="#CAD7BA"
        headline="Cardio workouts"
        text="And so much more..." />
    </FlexColumnCenter>
  )
}