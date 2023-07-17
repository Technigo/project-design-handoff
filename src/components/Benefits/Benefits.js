import React from 'react';
import benefits from 'libraries/benefits';
import { StyledBenefits, BenefitsWrapper, EachBenefit } from 'components/Benefits/Benefits.styles';

export const Benefits = () => {
  return (
    <StyledBenefits>
      <h2>Ready to prioritze your well-being?</h2>
      <BenefitsWrapper>
        {benefits.map((item) => (
          <EachBenefit key={item.id}>
            <img src={`/assets/${item.image}`} alt="icon" />
            <p>{item.body}</p>
          </EachBenefit>
        ))}
      </BenefitsWrapper>
    </StyledBenefits>
  )
}