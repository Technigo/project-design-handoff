/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
display: flex;
flex-direction: column;
margin: 32px 0;

h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  color: #210440;
}
`
const StyledContainer = styled.div`
display: flex;
flex-direction: column;
padding: 0 16px;`

const StyledText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
text-align: center;
hanging-punctuation: first last;
color: #252525;
`

const StyledSmallerText = styled(StyledText)`
font-size: 14px;
`

const SocialProofSection = () => {
  return (
    <StyledSection>
      <h1>Why Students Love<br />
    Our Barre Classes
      </h1>
      <StyledContainer>
        <StyledText>
        “The Instructors are amazing, the atmosphere is supportive, and the workouts are challenging yet fun!”
        </StyledText>
        <StyledSmallerText>-Robyn Andersson, <i>Barre Basic Student</i></StyledSmallerText>
        <StyledText>
        “I can feel the muscles working and getting stronger. I always feel energized at the end of the class”
        </StyledText>
        <StyledSmallerText>-Paula Ray, <i>Barre Strong Student</i></StyledSmallerText>
      </StyledContainer>
    </StyledSection>
  );
}

export default SocialProofSection;