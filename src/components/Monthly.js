import React from "react";
import styled from "styled-components";
import { CTA } from "./CTA";

const StyledMonthlyBox = styled.section`
background-color: ${props => props.selected ? "#D0C4B8" : "#F4E4D7"};
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
border-radius: 12px;
width: ${props => props.selected ? "288px" : "338px"};

@media(min-width: 768px) and (max-width: 1024px) {
  width: 304px;   
}

@media(min-width: 1024px) {
    width: 316px;
  }
`

const StyledMonthlyWrapper = styled.div`
margin-left: 24px;
margin-bottom: 32px;
margin-top: 2.5rem;

@media(min-width: 768px) and (max-width: 1024px) {
  margin-bottom: 40px;
  margin-top: 40px;
}
`

const StyledMonthlylH1 = styled.h1`
font-weight: 700;
font-size: ${props => props.selected ? "32px": "50px"};
margin: 0;
`

const StyledSpan = styled.span`
display: block;
margin-top: 1.5rem;
`

const StyledBenefits = styled.div`
color: #02393F;
margin-top: 24px;
width: 228px;
width: ${props => props.selected ?  "228px" : "292px"};
`

const StyledSmallPrint = styled.p`
font-weight: 700;
color: #02393F;
font-size: 10px;
margin-top: 0;
`

const StyledBenefitsP = styled.p`
  font-weight: ${props => props.selected ? "400px" : "700px"};
  font-size: 13px;
  padding: 16px;
  border-bottom: 0.3px solid #02393F;
`
export const Monthly = () => {
  return (
    <StyledMonthlyBox>
      <StyledMonthlyWrapper>
        <StyledMonthlylH1>7-day trial <StyledSpan>$0.00</StyledSpan></StyledMonthlylH1>
        <StyledSmallPrint>Trial automatically upgrades to a monthly subscription after 7 days</StyledSmallPrint>
        <StyledBenefits>
          <StyledBenefitsP>Unlimited recipe options </StyledBenefitsP>
          <StyledBenefitsP>Full access to all yoga classes</StyledBenefitsP>
          <StyledBenefitsP>5% discount in our yoga store</StyledBenefitsP>
          <CTA choose>Choose this plan</CTA>
        </StyledBenefits>
      </StyledMonthlyWrapper>
    </StyledMonthlyBox>
  )
}