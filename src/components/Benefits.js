import React from 'react';
import benefits from 'libraries/benefits';
import { StyledBenefits } from 'styles/Benefits.styles';

export const Benefits = () => {
  return (
    <StyledBenefits>
      <h2>Ready to prioritze your well-being?</h2>
      <div className="benefits-wrapper">
        {benefits.map((item) => (
          <div key={item.id} className="each-benefit">
            <img src={`/assets/${item.image}`} alt="icon" />
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </StyledBenefits>
  )
}