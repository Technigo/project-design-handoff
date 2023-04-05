import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { CarouselData } from './carouselData';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onclick= {prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onclick= {nextSlide} />
      {CarouselData.map((item, index) => {
        return <img key={index.id} src={item.image} alt="rings" />;
      })}
    </section>
  );
};

export default Carousel;
