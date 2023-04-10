/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import enduranceImg from '../Assets/Endurancephoto.jpg'
import strengthImg from '../Assets/Strengthphoto.jpg'
import agilityImg from '../Assets/Agilityphoto.jpg'
import prehabImg from '../Assets/Prehabphoto.jpg'

const CardContainer = styled.div`
border-top-right-radius: 31px;
border-bottom-right-radius: 31px;
padding: 1rem;
min-width: 50%;
height: 100%;
    background: rgb(9, 107, 120);

    padding: 1rem;
    margin-left: 0;
    margin-right: 2rem;
    display: flex;

    justify-content: flex-start;
    position: relative;
    margin-top: 1rem;
    flex-direction: row-reverse;
  
   


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
padding-left: 1rem;
    border: 2px solid white;
    margin: ${(props) => (props.revert ? '2rem 39% 2rem 2rem' : '2rem -5% 2rem 2rem')};
    max-width: 90%;
    background-color: rgb(237, 253, 255);
    border-radius: 10px;
    top: 50%;
    right: -8px;
    position: relative;
    z-index: 3;
    padding-right: 5rem;
    padding-top: 1rem;


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
const ImgWrapper = styled.div`
display: flex;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.revert ? '137px' : '0px')};
  transform: translateY(-50%);

`;

const CardImg = styled.img`
display: flex;
margin-left: 4rem;
width: 200px;
margin-top: 10px;
margin-bottom: 10px;

`;

const BenefitCards = () => {
  return (
    <>
      <CardContainer>
        <TextRightWrapper>
          <CardHeader>ENDURANCE</CardHeader>
          <CardText>Endurance training is essential for roller derby players as it builds stamina for long games, aids in faster recovery, reduces fatigue-related injuries and ensures a high level of performance throughout the game </CardText>
        </TextRightWrapper>
        <ImgWrapper>
          <CardImg src={enduranceImg} alt="Roller Derby in action" />
        </ImgWrapper>
      </CardContainer>

      <CardContainer>
        <TextRightWrapper revert>
          <CardHeader>AGILITY</CardHeader>
          <CardText>Agility training is crucial for roller derby athletes. It improves speed, balance, coordination, and reaction time on skates. It reduces the risk of injury and prepares players for the demands of the sport </CardText>
        </TextRightWrapper>
        <ImgWrapper revert>
          <CardImg src={agilityImg} alt="Roller Derby in action" />
        </ImgWrapper>
      </CardContainer>

      <CardContainer>
        <ImgWrapper>
          <CardImg src={strengthImg} alt="Jammer" />
        </ImgWrapper>
        <TextRightWrapper>
          <CardHeader>STRENGTH</CardHeader>
          <CardText>Strength training is equally crucial, as it improves muscle strength, balance, stability, and resilience. It helps players hit harder, block better, and prevent injuries. It's essential for becoming a stronger, more agile athlete </CardText>
        </TextRightWrapper>
      </CardContainer>
      <CardContainer>
        <TextRightWrapper revert>
          <CardHeader>PREHAB</CardHeader>
          <CardText>Often overlooked as it focuses on smaller muscles and sometimes “boring” exercises, but crucial to avoid common injuries such as concussions, twisted knees, broken ankles, dislocated shoulders and torn ligaments  </CardText>
        </TextRightWrapper>
        <ImgWrapper revert>
          <CardImg src={prehabImg} alt="Roller Derby in action" />
        </ImgWrapper>
      </CardContainer>
    </>
  )
}

export default BenefitCards;
