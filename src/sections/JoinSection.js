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
`

const JoinSection = () => {
  return (

    <div className="join-text-container">
      <StyledText>Join our full-body workout inspired
by Ballet, Pilates, and Yoga.
      </StyledText>
      <Button text="Join us!" />
    </div>
  );
}

export default JoinSection;