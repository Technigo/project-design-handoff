import React from 'react';
import Slider from 'react-slick';
import './Coaches.css';

const Coaches = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="coaches-container">
      <h2>Get to know our coaches</h2>
      <div className="slider-coach">
        <Slider {...settings}>
          <div className="cards-coach">
            <img className="coach-image1" src={`${process.env.PUBLIC_URL}/img/Coach1.png`} alt="Coach1" />
          </div>

          <div className="cards-coach">
            <img className="coach-image2" src={`${process.env.PUBLIC_URL}/img/Coach2.png`} alt="Coach2" />
          </div>

          <div className="cards-coach">
            <img className="coach-image3" src={`${process.env.PUBLIC_URL}/img/Coach3.png`} alt="Coach3" />
          </div>

          <div className="cards-coach">
            <img className="coach-image4" src={`${process.env.PUBLIC_URL}/img/Coach4.png`} alt="Coach4" />
          </div>

          <div className="cards-coach">
            <img className="coach-image5" src={`${process.env.PUBLIC_URL}/img/Coach5.png`} alt="Coach5" />
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default Coaches;
