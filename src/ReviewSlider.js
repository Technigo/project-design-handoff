import React, { useState } from 'react';
import styled from 'styled-components';
import ReactSimplyCarousel from 'react-simply-carousel';

import Johan from './images/christian-buehner-DItYlc26zVI-unsplash.jpg'
import Emelie from './images/freestocks-9UVmlIb0wJU-unsplash.jpg'
import Ewa from './images/sk-jeEedhJXoR0-unsplash.jpg'

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
              display: 'flex, flex-wrap: no-wrap, flex-flow: no-wrap',
              gap: '5px'
            }
          ]}
          speed={400}
          easing="linear">
          {/* here you can also pass any other element attributes.
         Also, you can use your custom components as slides */}
          <ReviewContainer>

            <img src={Johan} alt="johan" style={{ width: 125, height: 125, borderRadius: 200, objectFit: 'cover' }} />
            <NameReview>
            Johan
            </NameReview>
            <Review> Meditation helps me to handle stressful situations in everyday life</Review>

          </ReviewContainer>
          <ReviewContainer>

            <img src={Emelie} alt="johan" style={{ width: 125, height: 125, borderRadius: 200, objectFit: 'cover' }} />
            <NameReview>
            Emelie
            </NameReview>
            <Review> Meditation helps me to handle stressful situations in everyday life</Review>

          </ReviewContainer>
          <ReviewContainer>

            <img src={Ewa} alt="johan" style={{ width: 125, height: 125, borderRadius: '50%', objectFit: 'cover' }} />
            <NameReview>
              Ewa
            </NameReview>
            <Review> Meditation helps me to handle stressful situations in everyday life</Review>

          </ReviewContainer>
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
flex-wrap: no-wrap;
align-items: center;
justify-self: space-evenly;
`

export const ReviewContainer = styled.div`
display: flex;
margin: 5px;
flex: nowrap;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background: #F4F4F4;
box-shadow: 0px 0px 14.5722px rgba(203, 203, 203, 0.25);
border-radius: 21.2852px;
width: 286px;
`

export const NameReview = styled.h3`
display: flex;
font-size: 20px;
text-align: center;
display: flex;
flex-direction: column;
`
export const Review = styled.p`
display: flex;
font-size: 14px;
text-align: center;
display: flex;
flex-direction: column;
`

