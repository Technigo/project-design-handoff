import React from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/free-mode";
import styled from 'styled-components'
import { Trial } from './Trial';
import { AnnualCard } from './AnnualCard';
import { Monthly } from "./Monthly";

export const PriceSlider = () => {

  const SliderContainer = styled.div`
  display: flex;
  max-width: 1180px;
  justify-content: flex-end;
  }
  `
  return (
    <SliderContainer>
      <Swiper
        initialSlide="1"
        spaceBetween={16}
        slidesPerView={2.5}
        freeMode
        loop
        modules={[FreeMode]}
        className="PriceSwiper">
        <SwiperSlide>
          <Trial />
        </SwiperSlide>
        <SwiperSlide>
          <AnnualCard selected />
        </SwiperSlide>
        <SwiperSlide>
          <Monthly />
        </SwiperSlide>
        <SwiperSlide>
          <Trial />
        </SwiperSlide>
        <SwiperSlide>
          <AnnualCard selected />
        </SwiperSlide>
        <SwiperSlide>
          <Monthly />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};
// This slider has 6 cards because Swiper v9 infitite loop has a limitation
// "Amount of slides in loop mode should be at least 2x of slidesPerView value"