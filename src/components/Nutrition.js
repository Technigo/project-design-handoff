import React from 'react';
import recipes from 'libraries/recipes';

export const Nutrition = () => {
  return (
    <>
      <h2>Your Personalized Nutrition Plan</h2>
      <p>Receive a personalized nutrition plan that aligns with your dietary preferences,
        health concerns or fitness objectives. The plan promotes a well-balanced and nourishing diet
        , and includes access to healthy recipes, inspiration and meal plans to support you on your
        wellness journey.
      </p>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <div>
            <p>{recipe.title}</p>
            <p>{recipe.time}</p>
          </div>
          <img src={`/assets/${recipe.image}`} alt={`${recipe.title}`} />
        </div>
      ))}
    </>
  )
}