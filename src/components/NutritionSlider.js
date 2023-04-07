
import React from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/free-mode";
import styled from 'styled-components'

export const NutritionSlider = () => {
  const SliderContainer = styled.div`
  display: flex;

  @media (min-width: 768px) {
    width: 768px;
    margin: auto;
  }

  @media (min-width: 1025px) {
    width: 1025px;
    margin: auto;
  }
  `
  const StyledP = styled.h3`
  color: #02393F;
  font-size: 13px;
  overflow: hidden;
  word-break: break-word;
  font-weight: 700;
  `
  const StyledMinute = styled.p`
  color: #02393F;
  font-size: 13px;
  overflow: hidden;
  word-break: break-word;
  `
  const StyledDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
  overflow: hidden;
  width: 220px;
  `

  const StyledImg = styled.img`
  object-fit: cover;
  width: 226px;
  height: 176px;
  object-position: center;
  border-radius: 12px;
  `

  const StyledCardContainer = styled.div`
  position: relative;
  display: block;
  `

  return (
    <SliderContainer>
      <Swiper
        initialSlide="2"
        spaceBetween={8}
        slidesPerView={1.5}
        freeMode
        loop
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          },
          1025: {
            slidesPerView: 4,
          },
        }}
        modules={[FreeMode]}
        className="NutritionSwiper">
        <SwiperSlide>
          <StyledCardContainer>
            <StyledDescriptionWrapper>
              <StyledP>Healthy and vibrant strawberry cake</StyledP>
              <StyledMinute>55 min</StyledMinute>
            </StyledDescriptionWrapper>
            <StyledImg src="img/victoria-shes-UC0HZdUitWY-unsplash.jpg" alt="food" />
          </StyledCardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCardContainer>
            <StyledDescriptionWrapper>
              <StyledP>Buddhabowl</StyledP>
              <StyledMinute>15 min</StyledMinute>
            </StyledDescriptionWrapper>
            <StyledImg src="img/anna-pelzer-IGfIGP5ONV0-unsplash.jpg" alt="food" />
          </StyledCardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCardContainer>
            <StyledDescriptionWrapper>
              <StyledP>Healthy and vibrant strawberry cake</StyledP>
              <StyledMinute>55 min</StyledMinute>
            </StyledDescriptionWrapper>
            <StyledImg src="img/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg" alt="food" />
          </StyledCardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCardContainer>
            <StyledDescriptionWrapper>
              <StyledP>Healthy and vibrant strawberry cake</StyledP>
              <StyledMinute>55 min</StyledMinute>
            </StyledDescriptionWrapper>
            <StyledImg src="img/chad-montano-MqT0asuoIcU-unsplash.jpg" alt="food" />
          </StyledCardContainer>
        </SwiperSlide>
        
      </Swiper>
    </SliderContainer>
  );
};