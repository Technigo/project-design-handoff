import React, { useState, useRef } from 'react';
import { CarouselData } from './carouselData';
import './css/Carousel.css'
import arrowRight from './images/slider/arrowRight.svg'
import arrowLeft from './images/slider/arrowLeft.svg'

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const { length } = slides;
  const sliderRef = useRef(null);
  const touchStartXRef = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
  }

  const handleTouchMove = (event) => {
    const touchEndX = event.touches[0].clientX;
    const touchDeltaX = touchEndX - touchStartXRef.current;

    if (touchDeltaX > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      <button className="leftBtn" type="button" onClick={prevSlide}>
        <img src={arrowLeft} className="arrowLeft" alt="arrow Left" />
      </button>
      <section
        className="slider"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
        <img key={current} src={CarouselData[current].image} alt="rings" className="image" />
      </section>
      <button className="rightBtn" type="button" onClick={nextSlide}>
        <img src={arrowRight} className="arrowRight" alt="arrow right" />
      </button>
    </div>
  );
};

export default Carousel;
