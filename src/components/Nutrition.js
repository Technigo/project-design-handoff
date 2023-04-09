import React from "react";
import styled from 'styled-components'
import { useMediaQuery } from "@react-hook/media-query";
import { NutritionSlider } from "./NutritionSlider";

const StyledNutrSection = styled.section`
background-color: #D0C4B8;
padding-top: 2rem;
padding-bottom: 4.5rem;
`

const StyledNutrWrapper = styled.div`
width: 88%;
margin: auto;

@media(min-width: 768px) and (max-width: 1024px) {
  margin-left: 2rem;
  margin-bottom: 3rem;
  width: 615px;
  }

  @media(min-width: 1025px) {
    margin-left: 6.7rem;
    margin-bottom: 2.75rem;
    width: 691px;
  }
`

const StyledH2 = styled.h2`
font-weight: 700;
color: #02393F;
font-size: 25px;
line-height: 160%;

@media(min-width: 768px) {
  font-size: 40px;
}
`

const StyledP = styled.p`
font-size: 16px;
line-height: 150%;
color: #02393F;

@media(min-width: 768px) {
  font-size: 20px;
}
`

const Nutrition = () => {
  const isMobile = useMediaQuery('(max-width: 767px)'); // Hook to check screen size.

  return <StyledNutrSection>
    <StyledNutrWrapper>
      <StyledH2>
        {isMobile ? 'Your Personalized Nutrition Plan' : 'Your Personalized Meal Plan'
        // Rendering the different titles depending on screen size. I think this could be done with
        // props and a title component, but I've not gotten it to work on resize of screen,
        // only on first render of site. 
        // Instead I have installed an npm package to solve this. Might not be the best solution.
        } 
      </StyledH2> 
      <StyledP>Receive a personalized nutrition plan that aligns with your dietary preferences, health concerns or fitness objectives. 
      The plan promotes a well-balanced and nourishing diet, and includes access to healthy recipes, inspiration and meal plans 
      to support you on your wellness journey.</StyledP>
    </StyledNutrWrapper>
    <NutritionSlider />
  </StyledNutrSection>;
};

export default Nutrition;
