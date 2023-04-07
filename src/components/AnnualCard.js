import React from "react";
import styled from "styled-components";
import { CTA } from "./CTA";

const StyledAnnualBox = styled.div`
background: #F4E4D7;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
border-radius: 12px;
width: 342px;
`

const StyledAnnualWrapper = styled.div`
margin-left: 24px;
margin-bottom: 32px;
margin-top: 2.5rem;
`

const StyledAnnualH1 = styled.h1`
font-weight: 700;
font-size: 32px;
color: #02393F;
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
`

const StyledSmallPrint = styled.p`
color: #02393F;
font-weight: 700;
font-size: 10px;
margin-top: 0;
`

const StyledDescription = styled.p`
font-size: 20px;
font-weight: 700;
line-height: 104%;
color: #02393F;
width: 253px;
`

const StyledBenefitsP = styled.p`
font-weight: 700;
font-size: 13px;
padding: 16px;
border-bottom: 0.3px solid #02393F;
`

export const AnnualCard = () => {
  return (
    <StyledAnnualBox>
      <StyledAnnualWrapper>
        <StyledAnnualH1>Annual<StyledSpan>$89.99</StyledSpan></StyledAnnualH1>
        <StyledSmallPrint>Charged every 12 months</StyledSmallPrint>
        <StyledDescription>You save 25% of monthly cost</StyledDescription>
        <StyledBenefits>
          <StyledBenefitsP>Unlimited recipe options </StyledBenefitsP>
          <StyledBenefitsP>Full access to all yoga classes</StyledBenefitsP>
          <StyledBenefitsP>5% discount in our yoga store</StyledBenefitsP>
          <CTA chosen>Choose this plan</CTA>
        </StyledBenefits>
      </StyledAnnualWrapper>
    </StyledAnnualBox>
  )
}