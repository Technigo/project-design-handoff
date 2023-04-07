import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PersonalisedMeal = () => {
  return (
    <div className="personalised-meal-container">
      <h1>Your Personalized Meal Plan</h1>
      <p>Receive a personalized nutrition plan that aligns with your
        dietary preferences, health concerns or fitness objectives.
        The plan promotes a well-balanced and nourishing diet, and includes
         access to healthy recipes, inspiration and meal plans to support you
          on your wellness journey.
      </p>
      <Carousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        centerMode
        swipeable
        showArrows={false}
        centerSlidePercentage={33}
        showIndicators={false}>
        <div className="meal-card">
          <div className="meal-text-buddha">
            <p>Buddhabowl 15 min</p>
          </div>
          <img src="./images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg" alt="Buddhabowl" />
        </div>
        <div className="meal-card">
          <div className="meal-text">
            <p>Vegan Cauliflower Pizza 30 min
            </p>
          </div>
          <img src="./images/chad-montano-MqT0asuoIcU-unsplash.jpg" alt="Vegan Cauliflower Pizza" />

        </div>
        <div className="meal-card">
          <div className="meal-text">
            <p>Roasted veggies with peanut sauce 55 min
            </p>
          </div>
          <img src="./images/victoria-shes-UC0HZdUitWY-unsplash.jpg" alt="Roasted Veggies with peanut sauce" />
        </div>
        <div className="meal-card">
          <div className="meal-text">
            <p>Healthy and vibrant strawberry cake 55 min
            </p>
          </div>
          <img src="./images/strawberry-cake.jpg" alt="Healthy and vibrant strawberry cake" />
        </div>
      </Carousel>
    </div>
  )
}

export default PersonalisedMeal;