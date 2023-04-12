import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Headline3, BodyText } from 'components/styles/Text'
// Import Swiper styles

import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

export const TextCarousel = () => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={20}
      // eslint-disable-next-line react/jsx-boolean-value
      loop={true}
      className="swiper-container">
      <SwiperSlide
        width={287}
        className="slide">
        <Headline3 workoutsh3>
          Milestones
        </Headline3>
        <BodyText>
          Don&apos;t have any personal goals yet?
          Challenge yourself by completing our pre-made
          milestones that definitley will keep you motivated
        </BodyText>
      </SwiperSlide>
      <SwiperSlide width={287} className="slide">
        <Headline3 workoutsh3>
          Stats
        </Headline3>
        <BodyText>
          View your general stats and keep track of your achievments
        </BodyText>
      </SwiperSlide>
      <SwiperSlide width={287} className="slide">
        <Headline3 workoutsh3>
          Schedule
        </Headline3>
        <BodyText>
          Schedule and monitor all your workouts in the calender
          and set up a personal reminder to keep you going
        </BodyText>
      </SwiperSlide>
      <SwiperSlide width={287} className="slide">
        <Headline3 workoutsh3>
          Personal
        </Headline3>
        <BodyText>
          Track any personal fitness activities you
          accomplish by adding them you your calender
        </BodyText>
      </SwiperSlide>
    </Swiper>
  );
}
