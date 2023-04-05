import React from 'react';
import ReactFlickity from 'react-flickity-component';
import './Slider.css';

export const MySlider = () => {
  const flickityOptions = {
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    lazyLoad: true,
    prevNextButtons: false,
    pageDots: false
  };

  return (
    <ReactFlickity
      className="carousel"
      elementType="div"
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate>
      <div className="carousel-cell"><img src="./Pictures/CardRun.svg" alt="Runner" /></div>
      <div className="carousel-cell"><img src="./Pictures/CardBallGames.svg" alt="Ball" /></div>
      <div className="carousel-cell"><img src="./Pictures/CardSwim.svg" alt="Swim" /></div>
      <div className="carousel-cell"><img src="./Pictures/CardYoga.svg" alt="Yoga" /></div>
      <div className="carousel-cell"><img src="./Pictures/CardActiveWalks.svg" alt="Walks" /></div>
      <div className="carousel-cell"><img src="./Pictures/CardBalance.svg" alt="Balance" /></div>
    </ReactFlickity>
  );
};