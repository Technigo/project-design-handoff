import React from "react";
import styled from 'styled-components'
import { NutritionSlider } from "./NutritionSlider";

const StyledNutrSection = styled.section`
background-color: #D0C4B8;
padding-top: 2rem;
padding-bottom: 4.5rem;
`

const StyledNutrWrapper = styled.div`
width: 88%;
margin: auto;
`

const StyledH2 = styled.h2`
font-weight: 700;
color: #02393F;
font-size: 25px;
line-height: 160%;
`

const StyledP = styled.p`
font-size: 16px;
line-height: 150%;
color: #02393F;
`

const Nutrition = () => {
  return <StyledNutrSection>
    <StyledNutrWrapper>
      <StyledH2>Your Personalized Nutrition Plan</StyledH2>
      <StyledP>Receive a personalized nutrition plan that aligns with your dietary preferences, health concerns or fitness objectives. 
      The plan promotes a well-balanced and nourishing diet, and includes access to healthy recipes, inspiration and meal plans 
      to support you on your wellness journey.</StyledP>
    </StyledNutrWrapper>
    <NutritionSlider />
    
  </StyledNutrSection>;
};

export default Nutrition;
