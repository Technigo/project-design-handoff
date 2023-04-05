import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Videoslider.css';
import videoimg from '../img/video-standard.png'

export const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={4}>
      <Slider>
        <Slide index={0}>
          <div className="video-card">
            <div className="video-card-text">
              <h3 className="video-title">Yinyoga to calm down</h3>
              <p className="video-duration">15 min</p>
            </div>
            <div className="video-card-image">
              <img src={videoimg} alt="video" />
            </div>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="video-card">
            <div className="video-card-text">
              <h3 className="video-title">Yinyoga to calm down</h3>
              <p className="video-duration">15 min</p>
            </div>
            <div className="video-card-image">
              <img src={videoimg} alt="video" />
            </div>
          </div>
        </Slide>
        <Slide index={2}>
          <div className="video-card">
            <div className="video-card-text">
              <h3 className="video-title">Yinyoga to calm down</h3>
              <p className="video-duration">15 min</p>
            </div>
            <div className="video-card-image">
              <img src={videoimg} alt="video" />
            </div>
          </div>
        </Slide>
        <Slide index={3}>
          <div className="video-card">
            <div className="video-card-text">
              <h3 className="video-title">Yinyoga to calm down</h3>
              <p className="video-duration">15 min</p>
            </div>
            <div className="video-card-image">
              <img src={videoimg} alt="video" />
            </div>
          </div>
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};