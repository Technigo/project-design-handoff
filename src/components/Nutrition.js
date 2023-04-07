/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import './Nutrition.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cake from '../img/cake.png';
import poke from '../img/poke.png';
import pizza from '../img/pizza.png';

export const Nutrition = () => {
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

  useEffect(() => {
    import('slick-carousel').then(() => {});
  }, []);

  return (
    <div className="nutrition-background">
      <div className="nutrition-text">
        <h1 className="nutrition-bigtext">Your Personalized Nutrition Plan</h1>
        <p className="nutrition-paragraph">Receive a personalized nutrition plan that aligns with your dietary preferences, health concerns or fitness objectives. The plan promotes a well-balanced and nourishing diet, and includes access to healthy recipes, inspiration and meal plans to support you on your wellness journey.</p>
      </div>
      <Slider {...settings}>
        <div className="recipe-card">
          <div className="nutrition-carousel">
            <div className="nutrition-carousel-text">
              <h3 className="nutrition-carousel-bigtext">Buddhabowl</h3>
              <p className="nutrition-carousel-time">15 min</p>
            </div>
            <div className="nutrition-image">
              <img src={poke} alt="poke" className="nutrition-carousel-image" />
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
              <img src={cake} alt="cake" className="nutrition-carousel-image" />
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
              <img src={pizza} alt="pizza" className="nutrition-carousel-image" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}
