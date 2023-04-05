import React from 'react';
import plans from 'libraries/plans';

export const Plans = () => {
  return (
    <>
      <h2>Choose your preferred pricing plan:</h2>
      {plans.map((plan) => (
        <div key={plan.id}>
          <h3>{plan.title}</h3>
          <p>{plan.price}</p>
          <p>{plan.payment}</p>
          <p>{plan.subtitle}</p>
          <p>{plan.recipes}</p>
          <p>{plan.yoga}</p>
          <p>{plan.discount}</p>
          <button type="button">Choose this plan</button>
        </div>
      ))}
    </>
  )
}