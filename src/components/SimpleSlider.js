import React from 'react';
import Slider from 'react-slick';
import './simple-slider.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 319,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      {/* eslint-disable-next-line */}
      <Slider {...settings}>
        <div>
          <img src="/images/1.jpeg" alt="1" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="/images/2.jpeg" alt="2" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="/images/3.jpeg" alt="3" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="/images/4.jpeg" alt="4" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="/images/5.jpeg" alt="5" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="/images/6.jpeg" alt="6" style={{ width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;