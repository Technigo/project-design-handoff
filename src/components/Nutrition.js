import React from 'react';
import './Nutrition.css';
import cake from '../img/cake.png';
import poke from '../img/poke.png';
import pizza from '../img/pizza.png';

export const Nutrition = () => {
  return (
    <div className="nutrition-background">
      <div className="nutrition-text">
        <h1 className="nutrition-bigtext">Your Personalized Nutrition Plan</h1>
        <p className="nutrition-paragraph">Receive a personalized nutrition plan that aligns with your dietary preferences, health concerns or fitness objectives. The plan promotes a well-balanced and nourishing diet, and includes access to healthy recipes, inspiration and meal plans to support you on your wellness journey.</p>
      </div>
      <div className="recipe-carousel">
        <div className="recipe-card">
          <div className="nutrition-carousel">
            <div className="nutrition-carousel-text">
              <h3 className="nutrition-carousel-bigtext">Buddhabowl</h3>
              <p className="nutrition-carousel-time">15 min</p>
            </div>
            <div className="nutrition-image">
              <img src={poke} alt="cake" />
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
              <img src={cake} alt="cake" />
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
              <img src={pizza} alt="cake" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}