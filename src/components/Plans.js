import React, { useState } from 'react';
import plans from 'libraries/plans';
import { StyledPlans } from 'styles/Plans.styles';
import { Form } from 'components/Form'

export const Plans = () => {
  const [id, setId] = useState(0)

  const handleClick = (event) => {
    setId(event.target.value)
  }
  return (
    <>
      <StyledPlans>
        <h2 id="plans">Choose your preferred pricing plan:</h2>
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
            <button type="button" value={plan.id} onClick={handleClick}>Choose this plan</button>
          </div>
        ))}
      </StyledPlans>
      <Form id={id} />
    </>

  )
}