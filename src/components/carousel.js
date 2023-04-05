import React, { useState } from 'react';
import { CarouselData } from './carouselData';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const { length } = slides;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <button className="left-arrow" type="button" onClick={prevSlide}>Prev</button>
      <button className="right-arrow" type="button" onClick={nextSlide}>Next</button>
      {CarouselData.map((item, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index.id}>
            {index === current && (
              <img key={index.id} src={item.image} alt="rings" />
            )}
          </div>
        )
      })}
    </section>
  );
};

export default Carousel;

