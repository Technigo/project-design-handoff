import React from "react";
import styled from "styled-components";
import { CTA } from "./CTA";

const StyledAnnualBox = styled.div`
background-color: ${props => props.selected ? "#F4E4D7" : "#D0C4B8"};
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
border-radius: 12px;
width: ${props => props.selected ? "342px" : "304px"};
margin-top: 35px;
};

@media (min-width: 768px) and (max-width: 1024px) {
  width: ${props => props.selected ? "337px" : "304px"};
  height: ${props => props.selected ? "568px" : "510px"};
}

@media (min-width: 1025px) {
  width: 315px;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
`
const StyledAnnualWrapper = styled.div`
margin-left: 1.5rem;
margin-bottom: 2.5rem;
margin-top: 2.5rem;

@media (min-width: 768px) {
  margin-bottom: 2.5rem;
  margin-top: unset;
}
`

const StyledAnnualH1 = styled.h1`
font-weight: 700;
font-size: ${props => props.selected ? "50px" : "32px"};
margin: 0;

@media (min-width: 768px) {
  padding-top: 2.5rem;
}
`

const StyledSpan = styled.span`
display: block;
margin-top: 1.5rem;
`

const StyledBenefits = styled.div`
color: #02393F;
margin-top: 1.5rem;
width: 228px;
margin-bottom: 2.5rem;

`

const StyledSmallPrint = styled.p`
font-weight: 700;
color: #02393F;
font-size: 10px;
margin-top: 0;

@media (min-width: 1025px) {
  width: 185px;
}
`

const StyledDescription = styled.p`
font-size: 20px;
font-weight: 700;
line-height: 104%;
color: #02393F;
width: 253px;
`

const StyledBenefitsP = styled.p`
font-weight: ${props => props.selected ? "700" : "400"};
font-size: 13px;
padding: 1rem;
border-bottom: 0.3px solid #02393F;
`

export const AnnualCard = ({ selected }) => {
  // Again, making styled components MIGHT have been a bad choice here.
  // I have to pass the selected to everything in order to make the card render correctly.
  return (
    <StyledAnnualBox selected={selected}>
      <StyledAnnualWrapper>
        <StyledAnnualH1 selected={selected}>Annual<StyledSpan>$89.99</StyledSpan></StyledAnnualH1>
        <StyledSmallPrint>Charged every 12 months</StyledSmallPrint>
        <StyledDescription>You save 25% of monthly cost</StyledDescription>
        <StyledBenefits>
          <StyledBenefitsP selected={selected}>Unlimited recipe options </StyledBenefitsP>
          <StyledBenefitsP selected={selected}>Full access to all yoga classes</StyledBenefitsP>
          <StyledBenefitsP selected={selected}>5% discount in our yoga store</StyledBenefitsP>
        </StyledBenefits>
        <CTA chosen>Choose this plan</CTA>
      </StyledAnnualWrapper>
    </StyledAnnualBox>
  )
}