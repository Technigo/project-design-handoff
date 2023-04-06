import React from "react";
import styled from "styled-components";
import { CTA } from "./CTA";

const StyledTrialBox = styled.section`
background: #D0C4B8;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
border-radius: 12px;
width: 85%;
`

const StyledTrialWrapper = styled.div`
margin-left: 24px;
margin-bottom: 32px;
margin-top: 40px;
`

const StyledTrialH1 = styled.h1`
font-weight: 700;
font-size: 32px;
color: #02393F;
`

const StyledBenefits = styled.div`
color: #02393F;
margin-top: 24px;
width: 228px;
`

const StyledTrialP = styled.p`
color: #02393F;
font-size: 10px;
margin-top: 0;
`

const StyledBenefitsP = styled.p`
font-weight: 400;
font-size: 13px;
padding: 16px;
border-bottom: 0.3px solid #02393F;
`

export const Trial = () => {
  return (
    <StyledTrialBox>
      <StyledTrialWrapper>
        <StyledTrialH1>7-day trial $0.00</StyledTrialH1>
        <StyledTrialP>Trial automatically upgrades to a monthly subscription after 7 days</StyledTrialP>
        <StyledBenefits>
          <StyledBenefitsP>Unlimited recipe options </StyledBenefitsP>
          <StyledBenefitsP>Full access to all yoga classes</StyledBenefitsP>
          <StyledBenefitsP>5% discount in our yoga store</StyledBenefitsP>
          <CTA choose>Choose this plan</CTA>
        </StyledBenefits>
      </StyledTrialWrapper>
    </StyledTrialBox>
  )
}