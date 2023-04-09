/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { GreenYellowHeader, SectionHeadlines } from './SectionHeadlines';
import { TextOnGreen, Highlight } from './Header.styled';

const BenefitsContainer = styled.div`
width: 90%;
height: 100%;
background: #045661;
border: 3px solid black;
padding: 1rem;
background-color: #045661;
margin-left: auto;
margin-right: auto;
border-radius: rem;


// Tablet (between 1024px and 1440px)
@media(min-width: 1024px) {
    display: flex;
    align-items: baseline;

}

// Desktop (1440px and larger) 
@media(min-width: 1441px) {

}
`;

const ExampleWrapper = styled.div`
border: 2px solid whithe;
margin: 2rem;
max-width: 90%;
`
const BenefitSection = () => {
  return (
    <>
      <GreenYellowHeader>Benefits</GreenYellowHeader>
      <BenefitsContainer>
        <TextOnGreen>All our programs includes <Highlight>exercises to increase your endurance and agility as well as strengthening your neck muscles, core and lower body</Highlight>, all to prevent injuries and optimise your skating, blocking, juking and overall playing skills</TextOnGreen>
        <ExampleWrapper>
          <SectionHeadlines>EXAMPLES OF EXERCISES</SectionHeadlines><TextOnGreen><span> * </span> <strong>High Intensity Interval Training (HIIT)<br /><br /> <span> * </span> Mobility training </strong>such as yoga movements for stretching and stability <br /><br /><span> * </span><strong>Recommendations</strong> on gym classes and exercises involving gym equipment</TextOnGreen>
        </ExampleWrapper>
      </BenefitsContainer>

    </>
  )
}

export default BenefitSection;
