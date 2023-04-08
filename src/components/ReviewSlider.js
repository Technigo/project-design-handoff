/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import YogaGirlImg from '../images/yoga-girl.jpg'
import YogaGuyImg from '../images/yoga-guy.jpg'
import YogaGirl2Img from '../images/yoga-girl-2.jpg'

const SliderContainer = styled.div`
    max-width: 100vw;
    width: 60%;
    height: 100%;
    overflow: hidden;


  .slick-dots li {
    margin-right: -5px; /* Increase or decrease the value to adjust the space between dots */
  }

  .slick-dots {
  position: relative;
  width: 100%;
  bottom: 0;
  margin: 0;
  padding: 0;
}

.slick-dots li {
  display: inline-block;
  margin: 0 5px;
}

@media (max-width: 767px) {
  .slick-dots {
    bottom: -20px;
  }
  
  .slick-dots li {
    margin: 0 2px;
  }
}

 .slick-dots li button:before {
   color: white;
 }

 @media (min-width: 668px){
  width: 50%;
 }

@media (min-width: 1024px) {
  width: 45%;
}

`;

export const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const reviews = [
    {
      id: 1,
      image: YogaGuyImg,
      name: 'John B.',
      text: 'Anyone who thinks of joining a class, do it! Its such a great mix of physical exercise and a calm break from the everyday life.'
    },
    {
      id: 2,
      image: YogaGirlImg,
      name: 'Anna M.',
      text: 'Just WOW. I have never tried something like this before, but this is definetally my new thing! Never going back to a normal gym.'
    },
    {
      id: 3,
      image: YogaGirl2Img,
      name: 'Moa F',
      text: '10/10 recommend! Everyone should go to the Santulan studio and try out power yoga at least once in their lives.'
    }
  ]

  const ReviewImg = styled.img`
  width: 50px;
  height: 50px;`

  const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4796A8;
  border-radius: 20px;
  `
  const ReviewId = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 5%;
  `
  const ReviewText = styled.p`
  font-size: 1rem; 
  color: white;
  text-align: center;
  font-weight: 500;
  word-wrap: break-word;
  line-height: 26px;
  padding: 5%;
`
  const IDText = styled.p`
 font-size: 1rem; 
  color: white;
  text-align: center;
  font-weight: 500;
  word-wrap: break-word;
  line-height: 26px;
  `

  return (
    <SliderContainer>
      <Slider {...settings} className="slider">
        {reviews.map((review) => (
          <ReviewDiv key={review.id}>
            <ReviewText>{review.text}</ReviewText>
            <ReviewId>
              <ReviewImg src={review.image} alt={review.name} />
              <IDText>{review.name}</IDText>
            </ReviewId>
          </ReviewDiv>
        ))}
      </Slider>
    </SliderContainer>
  );
};