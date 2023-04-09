/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
width: 80%;
height: 100%;
background: #096B78;
border: 3px solid black;
padding: 1rem;
margin-left: auto;
margin-right: auto;
border-radius: rem;

// Tablet 
@media(min-width: 1024px) {
    display: flex;
    align-items: baseline;

}

// Desktop (1440px and larger) 
@media(min-width: 1441px) {

}
`;

const TextRightWrapper = styled.div`
border: 2px solid white;
margin: 2rem;
max-width: 90%;
`
const CardHeader = styled.h3`
font-family: 'Permanent Marker';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 113.5%;

`;

const CardText = styled.p`
width: 167px;
height: 176px;
font-family: 'Calibri';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 113.5%;
letter-spacing: -0.022em;
color: #002A30;

`
const BenefitCards = () => {
  return (
    <CardContainer>
      <TextRightWrapper><CardHeader>ENDURANCE</CardHeader><CardText>Endurance training is essential for roller derby players as it builds stamina for long games, aids in faster recovery, reduces fatigue-related injuries and ensures a high level of performance throughout the game </CardText></TextRightWrapper>
    </CardContainer>
  )
}

export default BenefitCards;
