import React from "react";
import styled from "styled-components";
import { CTA } from "./CTA";

const StyledMonthlyBox = styled.section`
background-color: ${props => props.selected ? "#F4E4D7" : "#D0C4B8"};
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
border-radius: 12px;
width: ${props => props.selected ? "342px" : "304px"};
margin-top: 35px;
};

@media(min-width: 1025px) {
  width: 316px;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
`
const StyledMonthlyWrapper = styled.div`
margin-left: 1.5rem;
margin-bottom: 2.5rem;
margin-top: 2.5rem;

@media(min-width: 768px) {
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
}
`

const StyledMonthlylH1 = styled.h1`
font-weight: 700;
font-size: ${props => props.selected ? "50px" : "32px"};
margin: 0;
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

@media (min-width: 768px) {
  width: 185px;
}
`
const StyledBenefitsP = styled.p`
  font-weight: ${props => props.selected ? "400px" : "700px"};
  font-size: 13px;
  padding: 1rem;
  border-bottom: 0.3px solid #02393F;
`
export const Monthly = () => {
  return (
    <StyledMonthlyBox>
      <StyledMonthlyWrapper>
        <StyledMonthlylH1>Monthly <StyledSpan>$9.99</StyledSpan></StyledMonthlylH1>
        <StyledSmallPrint>Full flexibility. Cancel anytime</StyledSmallPrint>
        <StyledBenefits>
          <StyledBenefitsP>20 new recipes a month</StyledBenefitsP>
          <StyledBenefitsP>Full access to all yoga classes</StyledBenefitsP>
          <StyledBenefitsP>5% discount in our yoga store</StyledBenefitsP>
        </StyledBenefits>
        <CTA choose>Choose this plan</CTA>
      </StyledMonthlyWrapper>
    </StyledMonthlyBox>
  )
}