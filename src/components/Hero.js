import React from 'react';
import styled from 'styled-components';
import { Button } from './Styles/Button';

export const Hero = () => {
  return (
    <HeroSection>
      <Title>Up your game with fit2Derby!</Title>
      <Titletwo>Looking to put the Power in power jam?
        Land that apex? Brace for days? With fit2Derby’s
      <Evidenziato> customised online off skate programs for roller derby players, </Evidenziato>
        a full time jam will feel like a breeze!
      </Titletwo>
      <ParagraphContainer>
        <Paragraph> <Evidenziato> Sign up as an individual </Evidenziato> if you are looking
            to improve your skills on your own.
        </Paragraph>
        <Paragraph> Or, <Evidenziato> sign up as a team </Evidenziato>
           to access our <Evidenziato> Multiplayer Platform </Evidenziato>
to track your own as well as your team’s progress.
        </Paragraph>
      </ParagraphContainer>
      <ButtonContainer>
        <Button>Individual sign-up</Button>
        <Button>Join with your team</Button>
      </ButtonContainer>
    </HeroSection>
  )
}

export const HeroSection = styled.section`
position:relative;
display: flex;
flex-direction:column;
justify-content: flex-start;
align-items:flex-start;
`;

export const Title = styled.h1`
padding: 0;
margin: 0;
width:75%;
font-family: 'Permanent Marker', cursive;
color:#ffffff;
font-size: 5.6em;
font-weight: bold;
`;

export const Titletwo = styled.h2`
width: 80%;
font-size: 3vh;
font-weight: 300;
color:#ffffff;
display:inline-block;
box-sizing: border-box;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);
flex-direction: column;
max-width: 55%;
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction:row;
justify-content: flex-start;
align-items:center;
width:100%;
margin: 0;
`;

export const ParagraphContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
max-width: 55%;
`;

export const Evidenziato = styled.span`
color:#FFE600;
font-weight:500;
`
export const Paragraph = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color:#F7FEFF;
max-width:90%;
font-size:2.9vh;
line-height: 1.2em;
font-weight: 300;
display:inline-block;
box-sizing: border-box;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);
`;
