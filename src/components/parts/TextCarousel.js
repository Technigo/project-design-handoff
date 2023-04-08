import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export const TextCaousel = () => {
  return (
    <Swiper
      className="swiper-container"
      id="swiper"
      slidesPerView={1.5}
      // slidesPerColumn={2}
      // slidesPerColumnFill="row"
      spaceBetween={30}>
      <SwiperSlide className="slide">Slide 1</SwiperSlide>
      <SwiperSlide className="slide">Slide 2</SwiperSlide>
      <SwiperSlide className="slide">Slide 3</SwiperSlide>
      <SwiperSlide className="slide">Slide 4</SwiperSlide>
    </Swiper>
  );
}
