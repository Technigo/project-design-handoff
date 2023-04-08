/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { ClassSlider } from './ClassSlider'

const ClassesWrapper = styled.div`
padding-top: 24px;
padding-bottom: 18px;
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 545px) {
  padding-top: 36px;
  padding-bottom: 27px;
}
@media (min-width: 685px) {
  padding-top: 27px;
  padding-bottom: 55px;
} 
`

const Heading = styled.h2`
  color: #FF9F0A;
  font-family: 'Outfit';
  font-size: 24px;
  font-weight: 500;
  line-height: 27px;
  margin-bottom: 18px;
@media (min-width: 545px) {
  margin-bottom: 37px;
}
@media (min-width: 685px) {
  margin-bottom: 28px;
} 
`

const Arrow = styled.img`
  padding-left: 7px;
`

/* Placeholder/potential wrapper for carousel */
const ClassCarouselWrapper = styled.div`
border: pink dotted 5px;
height: 240px;
width: 80%;
color: black;
`

export const Classes = () => {
  return (
    <ClassesWrapper>
      <Heading>Our Classes <Arrow src="./images/icons/arrow.svg" /></Heading>
      <ClassCarouselWrapper>
        <ClassSlider />
      </ClassCarouselWrapper>
    </ClassesWrapper>
  )
}