import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";

import { PricingCardsMobile } from "./PricingCardsMobile";
import { PriceSlider } from "./PriceSlider";

const StyledSection = styled.section`
  background: #d69a2a;
  padding-bottom: 2.5rem;
  padding-top: 1.5rem;
`;
const StyledH1 = styled.h1`
  margin: 1.5rem;
  color: #f4e4d7;
  font-weight: 700;
  font-size: 25px;
  line-height: 160%;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 40px;
  }
`;

const Pricing = () => {
  const isMobile = useMediaQuery("(max-width: 850px)"); // Hook to check screen size.
  return (
    <StyledSection>
      <StyledH1 id="pricing">Choose your preferred pricing plan:</StyledH1>
      {
        isMobile ? <PricingCardsMobile /> : <PriceSlider />
        // Rendering the slider or array of cards, depending on screen size.
        // I've not gotten conditional rendering to work on resize of screen, only on first render of site.
        // Instead I have installed an npm package to solve this. Might not be the best solution.
      }
    </StyledSection>
  );
};

export default Pricing;
