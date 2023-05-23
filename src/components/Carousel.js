import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000
  };

  return (
    <CarouselWrapper>
      <h1>Our Classes</h1>
      <Slider {...settings}>
        <div>
          <h3>Power yoga 60</h3>
          <img src="/images/carousel1.png" alt="person doing yoga" />
        </div>
        <div>
          <h3>Power yoga 75</h3>
          <img src="/images/carousel2.png" alt="person doing yoga" />
        </div>
        <div>
          <h3>Yoga Strong</h3>
          <img src="/images/carousel3.png" alt="person doing yoga" />
        </div>
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;

const CarouselWrapper = styled.div`

`