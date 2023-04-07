import React from 'react'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

import { Headline2, BodyText } from 'components/styles/Text'
import { TextContainer } from 'components/styles/Section'
// register Swiper custom elements
register();

export const TextCaousel = () => {
  return (
    <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true" height="171px" overflow="hidden">
      <swiper-slide style={{ width: '287px', height: '171px' }}>
        <TextContainer flexcolumn>
          <Headline2>
            Milestones
          </Headline2>
          <BodyText>
            Don&apos;t have any personal goals yet?
            Challenge yourself by completing our pre-made
            milestones that definitley will keep you motivated
          </BodyText>
        </TextContainer>
      </swiper-slide>
      <swiper-slide style={{ width: '287px', height: '171px' }}>
        <TextContainer flexcolumn>
          <Headline2>
            Stats
          </Headline2>
          <BodyText>
            View your general stats and keep track of your achievments
          </BodyText>
        </TextContainer>
      </swiper-slide>
      <swiper-slide style={{ width: '287px', height: '171px' }}>
        <TextContainer flexcolumn>
          <Headline2>
            Schedule
          </Headline2>
          <BodyText>
            Schedule and monitor all your workouts in the calender
            and set up a personal reminder to keep you going
          </BodyText>
        </TextContainer>
      </swiper-slide>
      <swiper-slide style={{ width: '287px', height: '171px' }}>
        <TextContainer flexcolumn>
          <Headline2>
            Personal
          </Headline2>
          <BodyText>
            Track any personal fitness activities you
            accomplish by adding them you your calender
          </BodyText>
        </TextContainer>
      </swiper-slide>
      ....
    </swiper-container>
  )
}