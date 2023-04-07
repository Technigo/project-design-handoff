/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import './PageTwo.css';
import ChecklistIcon from './NamedIcons/ChecklistIcon';
import TwoHeadsIcon from './NamedIcons/TwoHeadsIcon';
import StretchingPersonIcon from './NamedIcons/StretchingPersonIcon';

const PageTwo = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="page-two-container">
      <h2>Take easy steps to your desired lifestyle</h2>
      <div className="slide">
        <Slider {...settings}>
          <div className="pt-cards">
            <ChecklistIcon style={{ marginTop: '10px' }} />
            <h3>Fill the simple form</h3>
            <p>
            Fill the primary questionnaire and we will contact you to know more
            about your health condition, fitness background and your special
            needs. The information is valuable to find your best matched coach!
            </p>
          </div>
          <div className="pt-cards">
            <TwoHeadsIcon />
            <h3>Get matched with a certified coach</h3>
            <p>
            You then try our free 1-1 service to meet a coach who matched with
            your preferences and requirements
            </p>
          </div>
          <div className="pt-cards">
            <StretchingPersonIcon />
            <h3>Enjoy your journey</h3>
            <p>
            Your personal coach design a training plan and diet tailored to your
            individual needs, push, motivate and support you to make your life
            happier and healthier
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PageTwo;