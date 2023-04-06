/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import acrobatics from '../assets/carousel/carousel-acrobatics.svg';
import cheerleading from '../assets/carousel/carousel-cheerleading.svg';
import trampoline from '../assets/carousel/carousel-trampoline.svg';
import aerialCircus from '../assets/carousel/carousel-aerial.svg';
import tumble from '../assets/carousel/carousel-tumble.svg';
import parkour from '../assets/carousel/carousel-parkour.svg';
import learnMoreBtn from '../assets/carousel/button-learnMore.svg'

const SingleSlideWrapper = styled.div`
  display:flex;
  flex-direction:column;
`

const Button = styled.img`
cursor: pointer;
position: ${(props) => props.position}; 
width: ${(props) => props.width};
left: ${(props) => props.left};
top: ${(props) => props.top};
`;

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Carousel transitionTime="1000" infiniteLoop showThumbs={false}>
          <SingleSlideWrapper>
            <img src={acrobatics} alt="" />
            <Button src={learnMoreBtn} />
            <p className="legend">My Photo 1</p>
          </SingleSlideWrapper>
          <SingleSlideWrapper>
            <img src={cheerleading} alt="" />
            <Button src={learnMoreBtn} />
            <p className="legend">My Photo 2</p>
          </SingleSlideWrapper>
          <SingleSlideWrapper>
            <img src={trampoline} alt="" />
            <Button src={learnMoreBtn} />
            <p className="legend">My Photo 3</p>
          </SingleSlideWrapper>
          <SingleSlideWrapper>
            <img src={aerialCircus} alt="" />
            <Button src={learnMoreBtn} />
            <p className="legend">My Photo 4</p>
          </SingleSlideWrapper>
          <SingleSlideWrapper>
            <img src={tumble} alt="" />
            <Button src={learnMoreBtn} />
            <p className="legend">My Photo 5</p>
          </SingleSlideWrapper>
          <SingleSlideWrapper>
            <img src={parkour} alt="" />
            <Button src={learnMoreBtn} />
            <p className="legend">My Photo 5</p>
          </SingleSlideWrapper>
        </Carousel>
      </div>
    )
  }
}
export default Gallery