
import React from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/free-mode";
import styled from 'styled-components'
import { TestimonialCard } from "./TestimonialCard";
import { testimonialArray } from "./TestimonialList";

export const TestimonialSlider = () => {
  const SliderContainer = styled.div`
  display: flex;

  @media(min-width: 1025px) {
    max-width: 1180px;
    margin: auto;
  }
  `
  return (
    <SliderContainer>
      <Swiper
        initialSlide="2"
        spaceBetween={16}
        slidesPerView={1.5}
        freeMode
        loop
        breakpoints={{
          700: {
            slidesPerView: 2.5,
          },
          1025: {
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode]}
        className="TestimonialSwiper">
        {testimonialArray.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard
              text={testimonial.text}
              img={testimonial.img}
              alt={testimonial.alt}
              name={testimonial.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};