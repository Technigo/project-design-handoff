import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button';

const StyledText = styled.p`
font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  color: #252525;
`

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const JoinSection = () => {
  return (

    <StyledContainer>
      <StyledText>Join our full-body workout inspired
by Ballet, Pilates, and Yoga.
      </StyledText>
      <Button text="Join us!" />
    </StyledContainer>
  );
}

export default JoinSection;