import React from "react";
import styled from "styled-components";
import { CTA } from "./CTA";

const StyledDiv = styled.div`
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 144px;
`
// Exporting the entire component that is reused, div and all.
// Sending onClick with it so the button keeps functionality
export const CTADiv = ({ onClick }) => {
  return (
    <StyledDiv>
      <CTA onClick={onClick}><a href="#pricing">Start your 7-day FREE trial</a></CTA>
    </StyledDiv>
  )
}

export default CTADiv