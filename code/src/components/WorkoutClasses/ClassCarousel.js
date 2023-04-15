import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ClassCard } from './ClassCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 0
  },
  tablet: {
    breakpoint: { max: 1023, min: 668 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 667, min: 0 },
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

  @media (min-width: 1024px) {
    display: none;
  }
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
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customButtonGroup={<CustomButtonGroup />}
      arrows={false}
      partialVisible>
      <ClassCard
        imgSrc="https://images.pexels.com/photos/4379000/pexels-photo-4379000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imgAlt="couple working out outside"
        title="MODERATE"
        description="Classes that everyone can participate in regardless of age, shape or athletic ability."
        shadow />
      <ClassCard
        imgSrc="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        imgAlt="group of people working out outside"
        title="INTENSE"
        description="Vigorous exercises that pushes your body to the max."
        shadow />
      <ClassCard
        imgSrc="https://images.pexels.com/photos/4853091/pexels-photo-4853091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imgAlt="couple working out outside"
        title="HIIT"
        description="Intense interval exercises."
        shadow />
      <ClassCard
        imgSrc="https://images.pexels.com/photos/8497646/pexels-photo-8497646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imgAlt="two people running outside"
        title="CARDIO"
        description="Focuses on different cardio exercises such as jogging, running stairs, jump rope, uphill sprints and more."
        shadow />
    </Carousel>

  );
};