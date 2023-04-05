import React from 'react';
import benefits from 'libraries/benefits';
import { StyledBenefits } from 'styles/Benefits.styles';

export const Benefits = () => {
  return (
    <StyledBenefits>
      <h2>Ready to prioritze your well-being?</h2>
      {benefits.map((item) => (
        <div key={item.id}>
          <img src={`/assets/${item.image}`} alt="icon" />
          <p>{item.body}</p>
        </div>
      ))}

    </StyledBenefits>
  )
}