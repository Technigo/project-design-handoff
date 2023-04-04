/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import Yoga1 from '../images/yoga-1.jpg';
import Yoga2 from '../images/yoga-2.jpg';
import Yoga3 from '../images/yoga-3.jpg';

const items = [
  { image: Yoga1, header: 'Image 1' },
  { image: Yoga2, header: 'Image 2' },
  { image: Yoga3, header: 'Image 3' }
];

const ImageSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Header = styled.h2`
  font-size: 1.5rem;
  color: #000000;
  font-weight: 700;
  line-height: 42px;
`;

const ArrowButton = styled.button`
background-color: transparent;
border: none;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
svg {
  width: 24px;
  height: 24px;
}
`;

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <ImageSliderContainer>
      <ArrowButton onClick={handlePrevClick}>
        <svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1591 0.942322L16.1644 3.94761L6.40254 13.7308L16.1644 23.514L13.1591 26.5192L0.370642 13.7308L13.1591 0.942322Z" fill="black" />
        </svg>
      </ArrowButton>
      <SliderItemContainer>
        <Header>{items[currentIndex].header}</Header>
        <Image src={items[currentIndex].image} alt="carousel item" />
      </SliderItemContainer>
      <ArrowButton onClick={handleNextClick}>
        <svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.84086 0.942322L0.835571 3.94761L10.5974 13.7308L0.835571 23.514L3.84086 26.5192L16.6293 13.7308L3.84086 0.942322Z" fill="black" />
        </svg>
      </ArrowButton>
    </ImageSliderContainer>
  );
};
