/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import YogaGirlImg from '../images/yoga-girl.jpg'
import YogaGuyImg from '../images/yoga-guy.jpg'
import YogaGirl2Img from '../images/yoga-girl-2.jpg'
import { SmallText } from './Hero';

const SliderContainer = styled.div`
  padding-top: 24px;
  width:320px;
  height: 232px;

  .slick-dots li {
    margin-right: -5px; /* Increase or decrease the value to adjust the space between dots */
  }
 .slick-dots li button:before {
   color: white;
 }

`;

export const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const reviews = [
    {
      id: 1,
      image: YogaGuyImg,
      name: 'John B.',
      text: 'Anyone who thinks of joining a class, do it! Its such a great mix of physical exercise and a calm break from the everyday life.'
    },
    {
      id: 2,
      image: YogaGirlImg,
      name: 'Anna M.',
      text: 'Just WOW. I have never tried something like this before, but this is definetally my new thing! Never going back to a normal gym.'
    },
    {
      id: 3,
      image: YogaGirl2Img,
      name: 'Moa F',
      text: '10/10 recommend! Everyone should go to the Santulan studio and try out power yoga at least once in their lives.'
    }
  ]

  const ReviewImg = styled.img`
  width: 50px;
  height: 50px;`

  const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4796A8;
  border-radius: 20px;
  height: 210px;
  `
  const ReviewId = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 20px 20px 20px 20px;
  `

  return (
    <SliderContainer>
      <Slider {...settings} className="slider">
        {reviews.map((review) => (
          <ReviewDiv key={review.id}>
            <SmallText p20 fw500 h78>{review.text}</SmallText>
            <ReviewId>
              <ReviewImg src={review.image} alt={review.name} />
              <SmallText fw500>{review.name}</SmallText>
            </ReviewId>
          </ReviewDiv>
        ))}
      </Slider>
    </SliderContainer>
  );
};