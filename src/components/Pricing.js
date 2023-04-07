import React from 'react';
import styled from 'styled-components';
import { Trial } from './Trial';
import { AnnualCard } from './AnnualCard';

const StyledSection = styled.section`
background: #D69A2A;
padding-bottom: 2.5rem;
padding-top: 1.5rem;
`
const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
`
const StyledH1 = styled.h1`
margin: 1.5rem;
color: #F4E4D7;
font-weight: 700;
font-size: 25px;
line-height: 160%;
`

const Pricing = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <StyledH1 id="pricing">Choose your preferred pricing plan:</StyledH1>
        <Trial />
        <AnnualCard />
        <Trial />
      </StyledWrapper>
    </StyledSection>

  )
}

export default Pricing