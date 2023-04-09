/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { CardText, CardTitle } from '../styledComponents/Texts'
import { CardsFlexContainer } from '../styledComponents/Containers'
import { CardContainer, CardImageContainer, CardImage, CardTextContainer } from './CardsCSS'
import Endurancephoto from '../../images/Endurancephoto.png'
import Agilityphoto from '../../images/Agilityphoto.png'
import strengthphoto from '../../images/strengthphoto.png'
import Prehabphoto from '../../images/Prehabphoto.png'

export const Cards = () => {
  return (
    <CardsFlexContainer>
      <CardContainer>
        <CardImageContainer>
          {/* <BackgroundColor background="#004852" width="100%" height="40%" /> */}
          <CardImage src={Endurancephoto} />
        </CardImageContainer>
        <CardTextContainer>
          <CardTitle>Endurance</CardTitle>
          <CardText>Endurance training is essential for roller derby players
            as it builds stamina for long games,
            aids in faster recovery,
            reduces fatigue-related injuries and ensures
            a high level of performance throughout the game
          </CardText>
        </CardTextContainer>
      </CardContainer>
      <CardContainer reversed>
        <CardImageContainer reversed>
          <CardImage reversed src={Agilityphoto} />
        </CardImageContainer>
        <CardTextContainer reversed>
          <CardTitle>Agility</CardTitle>
          <CardText>Agility training is crucial for roller derby athletes.
            It improves speed, balance, coordination, and reaction time on skates.
            It reduces the risk of injury and prepares players for the demands of the sport
          </CardText>
        </CardTextContainer>
      </CardContainer>
      <CardContainer>
        <CardImageContainer>
          <CardImage src={strengthphoto} />
        </CardImageContainer>
        <CardTextContainer>
          <CardTitle>Strength</CardTitle>
          <CardText>Strength training is equally crucial, as it
            improves muscle strength, balance, stability, and resilience.
            It helps players hit harder, block better, and prevent injuries.
            It's essential for becoming a stronger, more agile athlete
          </CardText>
        </CardTextContainer>
      </CardContainer>
      <CardContainer reversed>
        <CardImageContainer reversed>
          <CardImage reversed src={Prehabphoto} />
        </CardImageContainer>
        <CardTextContainer reversed>
          <CardTitle>Prehab</CardTitle>
          <CardText>Often overlooked as it focuses on smaller muscles and sometimes
            “boring” exercises, but crucial to avoid common injuries such as concussions,
            twisted knees, broken ankles,
            dislocated shoulders and torn ligaments
          </CardText>
        </CardTextContainer>
      </CardContainer>
    </CardsFlexContainer>
  )
}
