/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import './carouselStyling.css';
import acrobatics from '../assets/carousel/carousel-acrobatics.svg';
import cheerleading from '../assets/carousel/carousel-cheerleading.svg';
import trampoline from '../assets/carousel/carousel-trampoline.svg';
import aerialCircus from '../assets/carousel/carousel-aerial.svg';
import tumble from '../assets/carousel/carousel-tumble.svg';
import parkour from '../assets/carousel/carousel-parkour.svg';
import learnMoreBtn from '../assets/carousel/button-learnMore.svg';
import arrow from '../assets/logo/logo-A-blue.png';

export const SingleSlideWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:100vw;
`

export const ButtonLearn = styled.img`
  cursor: pointer;
  width: 148.46px;
  height: 40.49px;
  margin-top:-45px;
`;

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          transitionTime="350"
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(clickHandler, hasPrev) => hasPrev && (
            <button className="prev" onClick={clickHandler} style={{ background: 'none', border: 'none' }}>
              <img
                style={{ height: '30px', width: '30px', transform: 'rotate(-90deg)' }}
                src={arrow} />
            </button>
          )}
          renderArrowNext={(clickHandler, hasNext) => hasNext && (
            <button className="next" onClick={clickHandler} style={{ background: 'none', border: 'none' }}>
              <img
                style={{ height: '30px', width: '30px', transform: 'rotate(90deg)' }}
                src={arrow} />
            </button>
          )}>

          <SingleSlideWrapper>
            <img src={acrobatics} alt="" />
            <ButtonLearn src={learnMoreBtn} />
            <p>Acrobatics</p>
          </SingleSlideWrapper>

          <SingleSlideWrapper>
            <img src={cheerleading} alt="" />
            <ButtonLearn src={learnMoreBtn} />
            <p>Cheerleading</p>
          </SingleSlideWrapper>

          <SingleSlideWrapper>
            <img src={trampoline} alt="" />
            <ButtonLearn src={learnMoreBtn} />
            <p>Trampoline</p>
          </SingleSlideWrapper>

          <SingleSlideWrapper>
            <img src={aerialCircus} alt="" />
            <ButtonLearn src={learnMoreBtn} />
            <p>Aerial Circus</p>
          </SingleSlideWrapper>

          <SingleSlideWrapper>
            <img src={tumble} alt="" />
            <ButtonLearn src={learnMoreBtn} />
            <p>Tumble</p>
          </SingleSlideWrapper>

          <SingleSlideWrapper>
            <img src={parkour} alt="" />
            <ButtonLearn src={learnMoreBtn} />
            <p>Parkour</p>
          </SingleSlideWrapper>
        </Carousel>
      </div>
    )
  }
}
export default Gallery