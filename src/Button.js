import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
width: 300px;
height: 56px;
  font-size: 16px;
  line-height: 24px;
  weight: 700;
  color: #F5F5F5;
  background-color: #D69A2A;
  font-family: 'Libre Baskerville';
  border-radius: 12px;
  border: none;
`;

const freeTrialButton = () => {
  return (
    <StyledButton type="button">Start your 7-day FREE trial</StyledButton>
  )
}

export default freeTrialButton;