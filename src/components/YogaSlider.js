/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/free-mode";
import styled from 'styled-components'

export const YogaSlider = () => {
  const SliderContainer = styled.div`
  display: flex;
  `

  const StyledP = styled.p`
  color: #02393F;
  font-size: 13px;
  overflow: hidden;
  `
  const StyledDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
  overflow: hidden;
  width: 220px;
  `

  const StyledVideo = styled.video`
  object-fit: cover;
  width: 226px;
  height: 189px;
  object-position: center;
  border-radius: 12px;
  `

  const StyledVideoContainer = styled.div`
  position: relative;
  display: block;
  `

  return (
    <SliderContainer>
      <Swiper
        initialSlide="3"
        spaceBetween={12}
        slidesPerView={1.5}
        freeMode
        loop

        modules={[FreeMode]}
        className="YogaSwiper">
        <SwiperSlide>
          <StyledVideoContainer>
            <StyledDescriptionWrapper>
              <StyledP>Yinyoga to calm down</StyledP>
              <StyledP>15 min</StyledP>
            </StyledDescriptionWrapper>
            <StyledVideo controls src="video/video.mp4" poster="img/videoposter.png"/>
          </StyledVideoContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledVideoContainer>
            <StyledDescriptionWrapper>
              <StyledP>Yinyoga to calm down</StyledP>
              <StyledP>15 min</StyledP>
            </StyledDescriptionWrapper>
            <StyledVideo src="video/video.mp4" poster="img/videoposter.png"/>
          </StyledVideoContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledVideoContainer>
            <StyledDescriptionWrapper>
              <StyledP>Yinyoga to calm down</StyledP>
              <StyledP>15 min</StyledP>
            </StyledDescriptionWrapper>
            <StyledVideo src="video/video.mp4" poster="img/videoposter.png"/>
          </StyledVideoContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledVideoContainer>
            <StyledDescriptionWrapper>
              <StyledP>Yinyoga to calm down</StyledP>
              <StyledP>15 min</StyledP>
            </StyledDescriptionWrapper>
            <StyledVideo src="video/video.mp4" poster="img/videoposter.png"/>
          </StyledVideoContainer>
        </SwiperSlide>
        
      </Swiper>
    </SliderContainer>
  );
};