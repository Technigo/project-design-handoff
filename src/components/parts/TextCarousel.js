import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/swiper.min.css'

// import required modules
import { Pagination, Navigation } from 'swiper';

export const TextCarousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      // eslint-disable-next-line react/jsx-boolean-value
      loop={true}
      pagination={{
        clickable: true
      }}
      // eslint-disable-next-line react/jsx-boolean-value
      navigation
      modules={[Pagination, Navigation]}
      className="swiper-container">
      <SwiperSlide className="slide">Slide 1</SwiperSlide>
      <SwiperSlide className="slide">Slide 2</SwiperSlide>
      <SwiperSlide className="slide">Slide 3</SwiperSlide>
      <SwiperSlide className="slide">Slide 4</SwiperSlide>
      <SwiperSlide className="slide">Slide 5</SwiperSlide>
      <SwiperSlide className="slide">Slide 6</SwiperSlide>
      <SwiperSlide className="slide">Slide 7</SwiperSlide>
      <SwiperSlide className="slide">Slide 8</SwiperSlide>
      <SwiperSlide className="slide">Slide 9</SwiperSlide>
    </Swiper>
  );
}
