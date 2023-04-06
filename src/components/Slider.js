/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { H5, BodyText } from 'style/Texts';

const SliderStyle = styled.div`
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;
`
const SliderText = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        width: 100%;
`

export const SliderWrapper = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true
  };
  return (
    <SliderStyle>
      <Slider {...settings}>
        <SliderText>
          <H5>Milestones</H5>
          <BodyText>Don’t have any personal goals yet? Challenge
            yourself by completing our pre-made milestones that definitley will keep
            you motivated
          </BodyText>
        </SliderText>
        <SliderText>
          <H5>Schedule</H5>
          <BodyText>Schedule and monitor all your workouts
            in the calender and set up a personal reminder to
            keep you going
          </BodyText>
        </SliderText>
        <SliderText>
          <H5>Stats</H5>
          <BodyText>View your general stats
            and keep track of your achievments
          </BodyText>
        </SliderText>
        <SliderText>
          <H5>Personal</H5>
          <BodyText>Track any personal fitness activities
            you accomplish by adding them you your calender
          </BodyText>
        </SliderText>
      </Slider>
    </SliderStyle>
  );
}
