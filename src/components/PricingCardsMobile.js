import React, { useState } from 'react';
import styled from 'styled-components';
import { Trial } from './Trial';
import { AnnualCard } from './AnnualCard';
import { Monthly } from "./Monthly";

const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;

@media (min-width: 1025px) {
  align-items: flex-end;
}
`

export const PricingCardsMobile = () => {
  const [selectedCard, setSelectedCard] = useState('annual')
  return (

    <StyledWrapper>
      <Trial selected={selectedCard === 'trial'} onClick={() => setSelectedCard('trial')} />
      <AnnualCard selected={selectedCard === 'annual'} onClick={() => setSelectedCard('annual')} />
      <Monthly selected={selectedCard === 'monthly'} onClick={() => setSelectedCard('monthly')} />
    </StyledWrapper>
    
  )
}
    
