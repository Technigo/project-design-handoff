/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
// import Slider from 'react-slick';
import { CustomerCard } from './Cards';
import cardImage from '../assets/card-image.svg';

export const FlexCard = styled.div`
  display: flex;
  background-color: #D7CBFF;
  gap: 30px;
`;

// const settings = {
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };

export const Main = () => {
  return (
    // <Slider {...settings}>
    <FlexCard>
      <CustomerCard
        title="Fill the simple form"
        text="Fill the primary questionnaire and we will contact you to know more about your health condition, fitness background and your special needs. The information is valuable to find your best matched coach!"
        customerImage={cardImage} />
      <CustomerCard
        title="Fill the simple form"
        text="Fill the primary questionnaire and we will contact you to know more about your health condition, fitness background and your special needs. The information is valuable to find your best matched coach!"
        customerImage={cardImage} />
      <CustomerCard
        title="Fill the simple form"
        text="Fill the primary questionnaire and we will contact you to know more about your health condition, fitness background and your special needs. The information is valuable to find your best matched coach!"
        customerImage={cardImage} />
    </FlexCard>
    // </Slider>
  )
}