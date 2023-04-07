/* eslint-disable react/no-unescaped-entities */
import React from 'react'

// import { Highlight } from 'components/styledComponents/Highlight';
import { SectionTitle, CardText, CardSubTitle } from '../styledComponents/Texts'
import { FlexContainer } from '../styledComponents/Containers'
// import { Carousel } from './Carousel'
// import ProgramDeck from '../../images/ProgramDeck.png'
// import { PositionImage, PositionImageContainer } from './Positions';
// import DesktopcardsPivot from '../../images/DesktopcardsPivot.png'
// import DesktopcardsJammer from '../../images/DesktopcardsJammer.png'
// import DesktopcardsBlocker from '../../images/DesktopcardsBlocker.png'

export const QuestionSection = () => {
  return (
    <FlexContainer
      background="#045661"
      gap="20px"
      maxWidth="500px">
      <SectionTitle>
       Question corner
      </SectionTitle>
      <FlexContainer background="#EDFDFF" border="5.28px solid #FFE600" borderRadius="13px">
        <SectionTitle>Frequently asked questions</SectionTitle>
        <FlexContainer>
          <CardSubTitle>Can I do a program aimed at another
            position than my current one?
          </CardSubTitle>
          <CardText>Yes of course!
            It’s up to you which program you want to follow,
            and you are free to change to a different one whenever you want.
          </CardText>
        </FlexContainer>
        <FlexContainer>
          <CardSubTitle>What target areas are included in each program?
          </CardSubTitle>
          <CardText>All programs include agility, endurance,
            strength, and prehab training, but in different
            proportions depending on the specific needs of each position.
          </CardText>
        </FlexContainer>
        <FlexContainer>
          <CardSubTitle>What is prehab training?
          </CardSubTitle>
          <CardText>Prehab training is a proactive approach
            to injury prevention that focuses on strengthening and
            conditioning specific muscles and joints to reduce the risk of injury.
          </CardText>
        </FlexContainer>
        <FlexContainer>
          <CardSubTitle>Is this program suitable for beginners?
          </CardSubTitle>
          <CardText>Yes, the program includes a specific program
            for referees/new players that is designed for
            beginners who are new to roller derby and want to improve their fitness and skills.
          </CardText>
        </FlexContainer>
        <FlexContainer>
          <CardSubTitle>Do I need any special equipment for this program?
          </CardSubTitle>
          <CardText>While some exercises may require equipment
            such as resistance bands or dumbbells,
            many exercises can be done with just bodyweight.
            Any equipment needed will be clearly outlined in the program.
          </CardText>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer background="#EDFDFF">
        <SectionTitle>Got questions? Curious?</SectionTitle>

      </FlexContainer>
    </FlexContainer>
  )
}