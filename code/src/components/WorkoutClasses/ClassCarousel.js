import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ClassCard } from './ClassCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 3,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 767, min: 570 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 569, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};

const YellowRoundButton = styled.button`
  background-color: var(--primary-color-2);
  border: none;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const ButtonGroupContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  margin-right: 2px;
`;

const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const CustomButtonGroup = ({ next }) => {
  return (
    <ButtonGroupContainer>
      <YellowRoundButton onClick={() => next()}>
        <ArrowIcon
          src={`${process.env.PUBLIC_URL}/assets/arrow-icon.png`}
          alt="Arrow icon" />
      </YellowRoundButton>
    </ButtonGroupContainer>
  );
};

export const ClassCarousel = (props) => {
  return (
    <Carousel
      className="carousel"
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr
      infinite
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customButtonGroup={<CustomButtonGroup />}
      arrows={false}
      partialVisible>
      <ClassCard
        imgSrc={`${process.env.PUBLIC_URL}/assets/pexels-karolina-grabowska-4379000 1.png`}
        imgAlt="couple working out outside"
        title="MODERATE"
        description="Classes that everyone can participate in regardless of age, shape or athletic ability."
        shadow />
      <ClassCard
        imgSrc={`${process.env.PUBLIC_URL}/assets/running-black-white.png`}
        imgAlt="couple working out outside"
        title="INTENSE"
        description="Vigorous exercises that pushes your body to the max."
        shadow />
      <ClassCard
        imgSrc={`${process.env.PUBLIC_URL}/assets/running-black-white.png`}
        imgAlt="couple working out outside"
        title="HIIT"
        description="Intense interval exercises."
        shadow />
      <ClassCard
        imgSrc={`${process.env.PUBLIC_URL}/assets/running-black-white.png`}
        imgAlt="couple working out outside"
        title="CARDIO"
        description="Focuses on different cardio exercises such as jogging, running stairs, jump rope, uphill sprints and more."
        shadow />
    </Carousel>

  );
};