/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { H5, BodyText } from 'style/Texts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const SliderStyle = styled.div`
//         display: flex;
//         flex-direction: row;
//         overflow-x: scroll;
//         overflow-y: hidden;
// `
const SliderDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-items: flex-start;
        width: 80%;
        margin-left: 16px;
`

export const SliderWrapper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <SliderDiv>
            <H5>Milestones</H5>
            <BodyText>Don’t have any personal goals yet?
            Challenge yourself by completing our pre-made
             milestones that definitley will keep you motivated
            </BodyText>
          </SliderDiv>
        </div>
        <div>
          <SliderDiv>
            <H5>Stats</H5>
            <BodyText>View your general stats and keep track of your achievments
            </BodyText>
          </SliderDiv>
        </div>
        <div>
          <SliderDiv>
            <H5>Schedule</H5>
            <BodyText>Schedule and monitor all your workouts in
            the calender and set up a personal reminder to keep you going
            </BodyText>
          </SliderDiv>
        </div>
        <div>
          <SliderDiv>
            <H5>Personal</H5>
            <BodyText>Track any personal fitness activities you
             accomplish by adding them you your calender
            </BodyText>
          </SliderDiv>
        </div>
      </Slider>
    </div>
  );
}
