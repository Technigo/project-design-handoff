import React from 'react';
import styled from 'styled-components';

const StyledPricePlanButton = styled.button`
width: 212px;
height: 40px;
  font-size: 16px;
  line-height: 24px;
  weight: 700;
  color: #02393F;
  background-color: #D69A2A;
  font-family: 'Libre Baskerville';
  border-radius: 12px;
  border: 1px solid #02393F;
  box-shadow: none;
`;

const PricePlanButton = () => {
  return (
    <StyledPricePlanButton type="button">Choose this plan</StyledPricePlanButton>
  )
}

export default PricePlanButton;