import React from "react";
import styled from "styled-components";
import { CTA } from "./CTA";

const StyledTrialBox = styled.section`
background-color: ${props => props.selected ? "#D0C4B8" : "#F4E4D7"};
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
border-radius: 12px;
width: ${props => props.selected ? "288px" : "338px"};
margin-top: ${props => props.small ? "0px" : "35px"
// This margin-top is not scientifically tested, just eyeballed
};

@media(min-width: 768px) and (max-width: 1024px) {
  width: 304px;   
}

@media(min-width: 1024px) {
  width: 316px;
}
`

// Note about the margins on tablet: I've chosen to not do shorthand
// because it's harder to read
const StyledTrialWrapper = styled.div`
margin-left: 1.5rem;
margin-bottom: 2.5rem;
margin-top: 2.5rem;

@media(min-width: 768px) {
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
}
`

const StyledTrialH1 = styled.h1`
font-weight: 700;
font-size: ${props => props.selected ? "32px" : "50px"};
font-size: ${props => props.small ? "32px" : "32px"
// This is very bad, I am overriding a rule immedately.
// I want to change font size depending on the small or selected prop,
// but Eslint does not approve of nested ternary expressions.
// There must be a nicer way to do this. It only affects the popup component,
// the rendering of the trial box in tablet mode + above.
// I want the bgcolor and the rest to be as it's in selected, but not the H1 size.
// Well, might come back to this later.
};
margin: 0;
`

const StyledSpan = styled.span`
display: block;
margin-top: 1.5rem;
`

const StyledBenefits = styled.div`
color: #02393F;
margin-top: 1.5rem;
width: ${props => props.selected ?  "292px" : "228px"};

`

const StyledSmallPrint = styled.p`
font-weight: 700;
color: #02393F;
font-size: 10px;
margin-top: 0;
`

const StyledBenefitsP = styled.p`
font-weight: ${props => props.selected ? "400" : "700"};
font-size: 13px;
padding: 1rem;
border-bottom: 0.3px solid #02393F;
`
export const Trial = ({ small }) => {
  return (
    <StyledTrialBox>
      <StyledTrialWrapper>
        <StyledTrialH1>7-day trial <StyledSpan>$0.00</StyledSpan></StyledTrialH1>
        <StyledSmallPrint>Trial automatically upgrades to a monthly subscription after 7 days</StyledSmallPrint>
        <StyledBenefits>
          <StyledBenefitsP>Unlimited recipe options </StyledBenefitsP>
          <StyledBenefitsP>Full access to all yoga classes</StyledBenefitsP>
          <StyledBenefitsP>5% discount in our yoga store</StyledBenefitsP>
          {small ? null : <CTA choose>Choose this plan</CTA>
          // This is rendering the CTA when it's not set to small
          // (small is used on the popup component, tablet and above)
          }
        </StyledBenefits>
      </StyledTrialWrapper>
    </StyledTrialBox>
  )
}