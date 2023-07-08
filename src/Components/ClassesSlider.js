import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallBlackTitle } from './Fonts';
import PowerYoga60 from '../Assets/Photos/poweryoga60.png';
import PowerYoga75 from '../Assets/Photos/poweryoga75.png';
import YogaStrong from '../Assets/Photos/yogastrong.png';
import RightArrow from '../Assets/Icons/RightArrow.svg';

const ClassesInfo = [
  { title: 'Power Yoga 60', image: PowerYoga60 },
  { title: 'Power Yoga 75', image: PowerYoga75 },
  { title: 'Yoga Strong', image: YogaStrong }
]

const SliderContainer = styled.div`
position: relative;
padding-top: 16px;
display: flex;
align-items: center;
justify-content: center;

@media (min-width: 1023px) {
    display: none;
}`

const ClassesInfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;`

const ClassesImage = styled.img`
height: 200px;
width: 200px;
padding-top: 10px;`

const Arrow = styled.button`
border: none;
background-color: transparent;
position: absolute;
right: -20%;
transform: translateY(50%);
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

:hover {
 opacity: 60%;
}
`

export const ClassesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === ClassesInfo.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <SliderContainer>
      <ClassesInfoContainer>
        <SmallBlackTitle>{ClassesInfo[currentIndex].title}</SmallBlackTitle>
        <ClassesImage src={ClassesInfo[currentIndex].image} />
      </ClassesInfoContainer>
      <Arrow onClick={handleNextClick}><img src={RightArrow} alt="next class button" /></Arrow>
    </SliderContainer>
  )
};