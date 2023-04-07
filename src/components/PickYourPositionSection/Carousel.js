/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { PositionImage, PositionImageContainer } from './Positions';
import DesktopcardsPivot from '../../images/DesktopcardsPivot.png'
import DesktopcardsJammer from '../../images/DesktopcardsJammer.png'
import DesktopcardsBlocker from '../../images/DesktopcardsBlocker.png'
import DesktopcardsFreneso from '../../images/DesktopcardsFreneso.png'

export const Carousel = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    swipe: true
  };
  return (
    <Slider {...settings} style={{ width: '100vw', background: '#19737F' }}>
      <PositionImageContainer>
        <PositionImage src={DesktopcardsPivot} />
      </PositionImageContainer>
      <PositionImageContainer>
        <PositionImage src={DesktopcardsJammer} />
      </PositionImageContainer>
      <PositionImageContainer>
        <PositionImage src={DesktopcardsBlocker} />
      </PositionImageContainer>
      <PositionImageContainer>
        <PositionImage src={DesktopcardsFreneso} />
      </PositionImageContainer>
    </Slider>
  );
}