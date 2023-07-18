import React from 'react';
import benefits from 'libraries/benefits';
import { StyledBenefits, BenefitsWrapper, EachBenefit } from 'components/Benefits/Benefits.styles';
import { Header2 } from 'styles/Global';

export const Benefits = () => {
  return (
    <StyledBenefits>
      <Header2 headerColor="#02393F">Ready to prioritze your well-being?</Header2>
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