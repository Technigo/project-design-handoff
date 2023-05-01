import React from 'react';
import styled from 'styled-components';
import Endurancephoto from '../Images/Endurancephoto.png';
import Agilityphoto from '../Images/Agilityphoto.png';
import Strengthphoto from '../Images/strengthphoto.png';
import Prehabphoto from '../Images/Prehabphoto.png';

export const BenefitsSection = () => {
  return (
    <Container>
      <Title>Benefits of fit2Derby</Title>
      <BenefitContainer>
        <CardText>All our programs includes
          <Evidenziato> exercises to increase your endurance and
            agility as well as strengthening
            your neck muscles, core and lower body
          </Evidenziato>,
             all to prevent injuries and optimise your skating,
            blocking, juking and overall playing skills
        </CardText>
        <FlexContainer>
          <SectionTitle>Examples of exercises</SectionTitle>
          <UL>
            <ListItem><Evidenziato>High Intensity Interval Training </Evidenziato>(HIIT)</ListItem>
            <ListItem>
              <Evidenziato>
                Mobility training
              </Evidenziato>
                such as yoga movements for stretching and stability
            </ListItem>
            <ListItem>
              <Evidenziato>Recommendations
              </Evidenziato>
                on gym classes and exercises involving gym equipment
            </ListItem>
          </UL>
        </FlexContainer>
      </BenefitContainer>
      <CardsFlexContainer>
        <CardContainerLeft>
          <CardImageContainerLeft>
            <CardImageLeft src={Endurancephoto} />
          </CardImageContainerLeft>
          <CardTextContainerLeft>
            <CardTitle>Endurance</CardTitle>
            <CardTextTwo>Endurance training is essential for roller derby players
            as it builds stamina for long games,
            aids in faster recovery,
            reduces fatigue-related injuries and ensures
            a high level of performance throughout the game
            </CardTextTwo>
          </CardTextContainerLeft>
        </CardContainerLeft>
        <CardContainerRight>
          <CardImageContainerRight>
            <CardImageRight src={Agilityphoto} />
          </CardImageContainerRight>
          <CardTextContainerRight>
            <CardTitle>Agility</CardTitle>
            <CardTextTwo>Agility training is crucial for roller derby athletes.
            It improves speed, balance, coordination, and reaction time on skates.
            It reduces the risk of injury and prepares players for the demands of the sport
            </CardTextTwo>
          </CardTextContainerRight>
        </CardContainerRight>
        <CardContainerLeft>
          <CardImageContainerLeft>
            <CardImageLeft src={Strengthphoto} />
          </CardImageContainerLeft>
          <CardTextContainerLeft>
            <CardTitle>Strength</CardTitle>
            <CardTextTwo>Strength training is equally crucial, as it
            improves muscle strength, balance, stability, and resilience.
            It helps players hit harder, block better, and prevent injuries.
            It is essential for becoming a stronger, more agile athlete
            </CardTextTwo>
          </CardTextContainerLeft>
        </CardContainerLeft>
        <CardContainerRight>
          <CardImageContainerRight>
            <CardImageRight src={Prehabphoto} />
          </CardImageContainerRight>
          <CardTextContainerRight>
            <CardTitle>Prehab</CardTitle>
            <CardTextTwo>Often overlooked as it focuses on smaller muscles and sometimes
            “boring” exercises, but crucial to avoid common injuries such as concussions,
            twisted knees, broken ankles,
            dislocated shoulders and torn ligaments
            </CardTextTwo>
          </CardTextContainerRight>
        </CardContainerRight>
      </CardsFlexContainer>
    </Container>
  )
}

export const Container = styled.div`
box-sizing: border-box;
margin-top: 0;
padding-top: 0;
height: 100%;
min-height:100vh;
width: 100%;
max-width:100%;
display:flex;
flex-direction:column;
justify-content: flex-start;
position:relative;
align-items:center;
background-color: EDFDFF;
gap:20px;
z-index:0;
align-self: center;

@media (min-width: 1600px) {
    
}
`

export const Title = styled.h1`
padding-top: 0;
margin-top: 0;
right: 20%;
font-family: 'Permanent Marker';
border-radius: 0px 0px 100px 13px;
border-bottom: 5px solid #004852;
width: 90%;
background:#096B78;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: #FFE600;
font-size: 1.5em;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 7px;
box-shadow:0px 4px 4px 0px #00000040;
z-index: 1;
max-width:400px;
position:relative;
`

export const BenefitContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
height:max-content;
gap:20px;
box-sizing: border-box;
border-radius:8px;
background:#004852;
padding:20px;
max-width:300px;
position:absolute;
top:53%;
left:50%;

transform:translate(-50%, -50%);
p, div{
    width:100%;
    box-sizing:border-box;
}
`
export const CardsFlexContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items:center;
justify-content:center;
gap: 20px 520px;
padding: 20px 0px;
box-sizing: border-box;
`

export const CardText = styled.p`
font-weight: 300;
font-size:1.25em;
color:#F7FEFF;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
padding:5px 10px;
border-radius: 23px 23px 0px 23px;
line-height: 113.5%;
`

export const CardTextTwo = styled.p`
font-weight: 500;
font-size:1em;
color:black;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
padding:5px 10px;
border-radius: 23px 23px 0px 23px;
z-index:4;
line-height: 113.5%;
`

export const Evidenziato = styled.span`
color:#FFE600;
font-weight:500;
`

export const FlexContainer = styled.div`
box-sizing: border-box;
height:100%;
width:100%;
max-width:100%;
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
align-items:center;
padding:0px 8px 8px 8px;
gap:20px;
z-index:0;
align-self:center;
`

export const SectionTitle = styled.h1`
font-family: 'Permanent Marker';
font-size: 40px;
border-radius: 0px 0px 100px 13px;
border-bottom:5px solid #004852;
width:90%;
background: #096B78;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: #FFE600;
font-size: 1.5em;
padding: 7px 10px;
box-shadow:0px 4px 4px 0px #00000040;
max-width:440px;
position:relative;
top: auto;
`

export const UL = styled.ul`
color:#F7FEFF;
text-align:center;
`
export const ListItem = styled.li`
padding-top:0;
padding-bottom: 0;
font-weight: 200;
font-size: 1em;
list-style-type: circle;
display: list-item;
  `

export const CardContainerRight = styled.div`
position:relative;
display:flex;
min-width:0;
width: 434px;
justify-content:center;
align-self:flex-end;
background-color: #096B78;
border-radius:13px 2px 2px 13px;
padding: 0px 24px 0px 24px;
`;

export const CardContainerLeft = styled.div`
position:relative;
display:flex;
min-width:0;
width: 434px;
justify-content:center;
align-self:flex-start;
background-color: #096B78;
border-radius:2px 13px 13px 2px;
padding: 0px 24px 0px 24px;
`;

export const CardImageContainerRight = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-self:flex-end;
align-items:flex-end;
height: 256px;
width: 223px;

`
export const CardImageContainerLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-self:flex-start;
align-items:flex-start;
height: 256px;
width: 223px;
`

export const CardImageRight = styled.img`
height: 102%;
width: 102%;
left: 0px;
top: -6px;
border-radius:8px 0px 0px 8px;
box-shadow: 0px 4px 4px 0px #00000040;
background: linear-gradient(270.15deg, #EDFDFF 0.31%, rgba(237, 253, 255, 0.858911) 23.89%, rgba(237, 253, 255, 0) 58.6%), url(e2.png);
border-right:8px solid #FFE600;
`

export const CardImageLeft = styled.img`
height: 102%;
width: 102%;
left: 0px;
top: -6px;
border-radius:0px 8px 8px 0px;
box-shadow: 0px 4px 4px 0px #00000040;
background: linear-gradient(270.15deg, #EDFDFF 0.31%, rgba(237, 253, 255, 0.858911) 23.89%, rgba(237, 253, 255, 0) 58.6%), url(e2.png);
border-left:8px solid #FFE600;
`

export const CardTextContainerRight = styled.div`
position:absolute;
align-self:flex-start;
height: 218px;
top: 18px;
box-sizing:border-box;
background: #EDFDFF;
border-radius:2px 13px 13px 2px;
box-shadow: 0px 4px 4px 0px #00000040;
display:flex;
flex-direction:column;
align-items:flex-start;
text-align:left;
right:auto;
left:-100px;
width: 350px;
`

export const CardTextContainerLeft = styled.div`
position:absolute;
align-self:flex-end;
height: 218px;
top: 18px;
box-sizing:border-box;
background: #EDFDFF;
border-radius:13px 2px 2px 13px;
box-shadow: 0px 4px 4px 0px #00000040;
display:flex;
flex-direction:column;
align-items:flex-end;
text-align:right;
right:-100px;
left:auto;
width: 350px;
`
export const CardTitle = styled.h2`
color: #002A30;
font-family: 'Permanent Marker';
font-weight: 400;
font-size: 1.2em;
padding:10px;
`