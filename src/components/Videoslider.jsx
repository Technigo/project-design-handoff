import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Nutrition.css';
import videoimg from '../img/video-standard.png'

export const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    arrows: true,
    className: 'nutrition-slick-carousel'
  };

  return (
    <Slider {...settings}>
      <div className="recipe-card">
        <div className="nutrition-carousel">
          <div className="nutrition-carousel-text">
            <h3 className="nutrition-carousel-bigtext">Buddhabowl</h3>
            <p className="nutrition-carousel-time">15 min</p>
          </div>
          <div className="nutrition-image">
            <img src={videoimg} alt="video" className="nutrition-carousel-image" />
          </div>
        </div>
      </div>
      <div className="recipe-card">
        <div className="nutrition-carousel">
          <div className="nutrition-carousel-text">
            <h3 className="nutrition-carousel-bigtext">Healthy and vibrant strawberry cake</h3>
            <p className="nutrition-carousel-time">55 min</p>
          </div>
          <div className="nutrition-image">
            <img src={videoimg} alt="video" className="nutrition-carousel-image" />
          </div>
        </div>
      </div>
      <div className="recipe-card">
        <div className="nutrition-carousel">
          <div className="nutrition-carousel-text">
            <h3 className="nutrition-carousel-bigtext">Vegan cauliflower pizza</h3>
            <p className="nutrition-carousel-time">55 min</p>
          </div>
          <div className="nutrition-image">
            <img src={videoimg} alt="video" className="nutrition-carousel-image" />
          </div>
        </div>
      </div>
    </Slider>
  )
}