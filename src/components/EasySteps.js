import React from 'react';
import Slider from 'react-slick';
import './EasySteps.css';

const EasySteps = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="easy-steps-container">
      <h2>Take easy steps to your desired lifestyle</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="cards">
            <img src={`${process.env.PUBLIC_URL}/img/icon1.png`} alt="icon1" />
            <h3>Fill the simple form</h3>
            <p1>
            Fill the primary questionnaire and we will contact you to know more
            about your health condition, fitness background and your special
            needs. The information is valuable to find your best matched coach!
            </p1>
          </div>
          <div className="cards">
            <img src={`${process.env.PUBLIC_URL}/img/icon2.png`} alt="icon2" />
            <h3>Get matched with a certified coach</h3>
            <p1>
            You then try our free 1-1 service to meet a coach who matched with
            your preferences and requirements
            </p1>
          </div>
          <div className="cards">
            <img src={`${process.env.PUBLIC_URL}/img/icon3.png`} alt="icon3" />
            <h3>Enjoy your journey</h3>
            <p1>
            Your personal coach design a training plan and diet tailored to your
            individual needs, push, motivate and support you to make your life
            happier and healthier
            </p1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default EasySteps;
