import React, { useState } from 'react';
import styled from 'styled-components';
import ReactSimplyCarousel from 'react-simply-carousel';

import Johan from './images/christian-buehner-DItYlc26zVI-unsplash.jpg'
import Emelie from './images/freestocks-9UVmlIb0wJU-unsplash.jpg'
import Ewa from './images/sk-jeEedhJXoR0-unsplash.jpg'

const reviews = [
  {
    id: 1,
    name: 'Johan',
    image: Johan,
    review: 'Meditation helps me to handle stressful situations in everyday life'
  },
  {
    id: 2,
    name: 'Emelie',
    image: Emelie,
    review: 'Meditation helps me to handle stressful situations in everyday life'
  },
  {
    id: 3,
    name: 'Ewa',
    image: Ewa,
    review: 'Meditation helps me to handle stressful situations in everyday life'
  }
];

export const ImageSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <ReviewSection>
      <ReviewHeader>What Our Yogis Say About Us</ReviewHeader>
      <CarouselContainer>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
          // here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'white',
              border: '1px solid #025323',
              borderRadius: '50%',
              color: '#025323',
              cursor: 'pointer',
              fontSize: '20px',
              height: 35,
              lineHeight: 1,
              textAlign: 'center',
              width: 35
            },
            children: <span>{'>'}</span>
          }}
          backwardBtnProps={{
          // here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'white',
              border: '1px solid #025323',
              borderRadius: '50%',
              color: '#025323',
              cursor: 'pointer',
              fontSize: '20px',
              height: 35,
              lineHeight: 1,
              textAlign: 'center',
              width: 35
            },
            children: <span>{'<'}</span>
          }}
          responsiveProps={[
            {
              itemsToShow: 3,
              itemsToScroll: 1,
              minWidth: 768,
              disableNavIfAllVisible: false,
              hideNavIfAllVisible: false,
              width: '100%',
              centerMode: true,
              justifyItems: 'space-evenly',
              display: 'flex',
              flexWrap: 'nowrap',
              gap: '20px',
              paddingRight: '20px'
            }
          ]}
          speed={400}
          easing="linear">
          {/* here you can also pass any other element attributes.
         Also, you can use your custom components as slides */}
          {reviews.map((slider) => (
            <ReviewContainer key={slider.id}>
              <img src={slider.image} alt={slider.name} />
              <h2>{slider.name}</h2>
              <p>{slider.review}</p>
            </ReviewContainer>
          ))}
        </ReactSimplyCarousel>
      </CarouselContainer>
    </ReviewSection>
  );
}

export const ReviewSection = styled.section`
display: flex;
flex-direction: column;

background: #EBEBEB;

`

export const ReviewHeader = styled.h1`

font-weight: 600;
font-size: 28px;
text-align: center;
color: #025323;
`

export const CarouselContainer = styled.div`
display: flex;
flex-wrap: wrap;
overflow: hidden;
`

const ReviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;
  align-self: space-evenly;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  img {
    width: 125px;
    height: 125px;
    border-radius: 50%;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }
`;