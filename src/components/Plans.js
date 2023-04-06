import React from 'react';
import plans from 'libraries/plans';
import { StyledPlans } from 'styles/Plans.styles';

export const Plans = () => {
  return (
    <StyledPlans>
      <h2>Choose your preferred pricing plan:</h2>
      {plans.map((plan) => (
        <div key={plan.id} className="plan-card">
          <h3>{plan.title}</h3>
          <p className="price">{plan.price}</p>
          <p className="payment">{plan.payment}</p>
          <p className="subtitle">{plan.subtitle}</p>
          <div className="plan-details">
            <p>{plan.recipes}</p>
            <p>{plan.yoga}</p>
            <p>{plan.discount}</p>
          </div>
          <button type="button">Choose this plan</button>
        </div>
      ))}
    </StyledPlans>
  )
}