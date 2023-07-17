import React, { useState } from 'react';
import recipes from 'libraries/recipes';
import { StyledNutrition, RecipeSection, RecipeCard, RecipeInfo, RecipeTitle } from 'components/Nutrition/Nutrition.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export const Nutrition = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchPosition, setTouchPosition] = useState(null)

  const prev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? recipes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const next = () => {
    const isLastSlide = currentIndex === 3;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const handleTouchStart = (event) => {
    const touchDown = event.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (event) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return
    }

    const currentTouch = event.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next()
    }

    if (diff < -5) {
      prev()
    }

    setTouchPosition(null)
  }

  return (
    <StyledNutrition>
      <h2>Your Personalized Nutrition Plan</h2>
      <p>Receive a personalized nutrition plan that aligns with your dietary preferences,
        health concerns or fitness objectives. The plan promotes a well-balanced and nourishing diet
        , and includes access to healthy recipes, inspiration and meal plans to support you on your
        wellness journey.
      </p>
      <RecipeSection onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <FontAwesomeIcon icon={faArrowCircleLeft} type="button" className="left-arrow" onClick={prev} />
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <RecipeInfo>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <p>{recipe.time}</p>
            </RecipeInfo>
            <img src={`/assets/${recipe.image}`} alt={`${recipe.title}`} />
          </RecipeCard>
        ))}
        <FontAwesomeIcon icon={faArrowCircleRight} type="button" className="right-arrow" onClick={next} />
      </RecipeSection>
    </StyledNutrition>
  )
}