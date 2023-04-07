/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/free-mode";
import styled from 'styled-components'
import videoSrc from '../videos/video.mp4'
import BtnSrc from '../icons/playbtn.svg'

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
  }
  `

const StyledVideoContainer = styled.div`
  position: relative;
  display: block;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 2;

    &:hover:before {
      opacity: 1;
      z-index: 2;
    }
  }
  `
const StyledBtn = styled.img`
  position: absolute;
  top: 50%;
  left: 20%;
  z-index: 3;
  margin: auto;
  `

export const YogaSlider = () => {

  const vidRefs = useRef([]);

  const handleToggleVideo = (index) => {
    const vidRef = vidRefs.current[index];
    if (vidRef.paused) {
      vidRef.play();
    } else {
      vidRef.pause();
    }
  }

  const setVidRef = (ref, index) => {
    vidRefs.current[index] = ref;
  }

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
            <div>
              <StyledBtn src={BtnSrc} onClick={() => handleToggleVideo(0)} alt="play" />
              <StyledVideo ref={(ref) => setVidRef(ref, 0)} src={videoSrc} poster="img/videoposter.png"/>
            </div>
          </StyledVideoContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledVideoContainer>
            <StyledDescriptionWrapper>
              <StyledP>Yinyoga to calm down</StyledP>
              <StyledP>15 min</StyledP>
            </StyledDescriptionWrapper>
            <div>
              <StyledBtn src={BtnSrc} onClick={() => handleToggleVideo(1)} alt="play" />
              <StyledVideo ref={(ref) => setVidRef(ref, 1)} src={videoSrc} poster="img/videoposter.png"/>
            </div>
          </StyledVideoContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledVideoContainer>
            <StyledDescriptionWrapper>
              <StyledP>Yinyoga to calm down</StyledP>
              <StyledP>15 min</StyledP>
            </StyledDescriptionWrapper>
            <StyledBtn src={BtnSrc} onClick={() => handleToggleVideo(2)} alt="play" />
            <StyledVideo ref={(ref) => setVidRef(ref, 2)} src={videoSrc} poster="img/videoposter.png"/>
          </StyledVideoContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledVideoContainer>
            <StyledDescriptionWrapper>
              <StyledP>Yinyoga to calm down</StyledP>
              <StyledP>15 min</StyledP>
            </StyledDescriptionWrapper>
            <StyledBtn src={BtnSrc} onClick={() => handleToggleVideo(2)} alt="play" />
            <StyledVideo ref={(ref) => setVidRef(ref, 2)} src={videoSrc} poster="img/videoposter.png"/>
          </StyledVideoContainer>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
}