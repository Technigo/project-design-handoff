/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClassCard from './ClassCard.js';
import BeginnerImg from '../../assets/images/Beginner.png';
import IntermediateImg from '../../assets/images/Intermediate.png';
import ExpertImg from '../../assets/images/Expert.png';

import './Classes.css';
import './Class.css';
import './Carousel.css';

const beginnerdescription = 'Beginner classes for aerial silks teach you the foundational moves and techniques, and is led by experienced instructors to guide you. No prior experience is necessary.';
const intermediatedescription = 'Intermediate classes build on foundational moves and introduce complex techniques, led by experienced instructors. They improve strength, flexibility, and coordination.';
const expertdescription = 'Expert classes are for the experienced aerialists, which offer a challenging workout with advanced techniques. Led by skilled instructors to help guide you to refine your skills.';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 0
  },
  tablet: {
    breakpoint: { max: 1023, min: 641 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};

const CustomDot = ({ onClick, active }) => {
  return (
    <button
      type="button"
      className={active ? 'custom-dot-active' : 'custom-dot-inactive'}
      onClick={onClick} />
  );
};

const ClassCarousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={30000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass="dot-list"
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      customTransition="transform 800ms ease"
      transitionDuration={1000}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      customDot={<CustomDot />}
      sliderClass=""
      slidesToSlide={1}
      swipeable>
      <ClassCard
        level="Beginner"
        img={BeginnerImg}
        description={beginnerdescription} />
      <ClassCard
        level="Intermediate"
        img={IntermediateImg}
        description={intermediatedescription} />
      <ClassCard
        level="Expert"
        img={ExpertImg}
        description={expertdescription} />
    </Carousel>
  );
};

export default ClassCarousel;
