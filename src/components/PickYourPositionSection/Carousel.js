/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import { CardDeck } from './CardDeck'
import { PositionImage, PositionImageContainer } from './PositionsCSS';
import DesktopcardsPivot from '../../images/DesktopcardsPivot.png'
import DesktopcardsJammer from '../../images/DesktopcardsJammer.png'
import DesktopcardsBlocker from '../../images/DesktopcardsBlocker.png'
import DesktopcardsFreneso from '../../images/DesktopcardsFreneso.png'

export const Carousel = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    swipe: true,
    useKeyboardArrows: true,
    infiniteLoop: true
  };
  return (
    <Slider {...settings} style={{ width: '375px', background: '#19737F' }}>
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