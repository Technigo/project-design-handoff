/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PowerYoga60 from './images/poweryoga60.png'
import PowerYoga75 from './images/poweryoga75.png'
import YogaStrong from './images/yogastrong.png'

/* Array with class info */
const classes = [
  { image: PowerYoga60, title: 'Power Yoga 60' },
  { image: PowerYoga75, title: 'Power Yoga 75' },
  { image: YogaStrong, title: 'Yoga Strong' }
]

const ClassSliderWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 685px) {
    display: none;
  }
  /* Container with desktop-class shows all 3 images*/
  ${(screen) => screen.desktop && css`
    display: none;
    @media (min-width: 685px) {
    display: flex;
    width: fit-content;
  }
  `}
  `

const SliderItem = styled.div`
`

const ClassImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 8px 12px auto 12px;
  cursor: pointer;
`

const Title = styled.h3`
  color: black;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 42px;
  text-align: center;

`

const ArrowBtn = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ClassSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  /* Functions that - somehow - takes care of increasing/decreasing index number */
  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? classes.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === classes.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    /* First ClassSliderWrapper for small screens */
    /* Second ClassSliderWrapper for desktop (doesn't actually slide) */
    <>
      <ClassSliderWrapper>
        <ArrowBtn onClick={handlePrevClick}>
          <svg width="17" height="25" viewBox="0 0 17 27" fill="none" transform="scale(-1,1)" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.84086 0.942322L0.835571 3.94761L10.5974 13.7308L0.835571 23.514L3.84086 26.5192L16.6293 13.7308L3.84086 0.942322Z" fill="black" />
          </svg>
        </ArrowBtn>
        <SliderItem>
          <Title>{classes[currentIndex].title}</Title>
          <ClassImage src={classes[currentIndex].image} alt="yoga class" />
        </SliderItem>
        <ArrowBtn onClick={handleNextClick}>
          <svg width="17" height="25" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.84086 0.942322L0.835571 3.94761L10.5974 13.7308L0.835571 23.514L3.84086 26.5192L16.6293 13.7308L3.84086 0.942322Z" fill="black" />
          </svg>
        </ArrowBtn>
      </ClassSliderWrapper>
      <ClassSliderWrapper desktop>
        <SliderItem>
          <Title>{classes[0].title}</Title>
          <ClassImage src={classes[0].image} alt="yoga class" />
        </SliderItem>
        <SliderItem>
          <Title>{classes[1].title}</Title>
          <ClassImage src={classes[1].image} alt="yoga class" />
        </SliderItem>
        <SliderItem>
          <Title>{classes[2].title}</Title>
          <ClassImage src={classes[2].image} alt="yoga class" />
        </SliderItem>
      </ClassSliderWrapper>
    </>
  )
}