import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const StyledSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
background: #210440;
padding-bottom: 32px;`

const StyledTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  color: #F2FDFF;
`

const StyledSmallerTitle = styled.h2`
font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  
  display: flex;
  align-items: flex-end;
  text-align: center;
  
  color: #F2FDFF;



`

const QuizSection = () => {
  return (
    <StyledSection>
      <StyledTitle>Find Your Barre</StyledTitle>
      <StyledSmallerTitle>Take Our Quiz to see which<br />
Class that Fits You!
      </StyledSmallerTitle>
      <Button text="Barre Quiz" />
    </StyledSection>
  );
}

export default QuizSection;